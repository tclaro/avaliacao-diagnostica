# -*- coding: utf-8 -*-
"""Confere os gabaritos do docx contra a chave oficial do INEP.

O docx do professor tem 4 alternativas; a prova original tem 5, logo as letras
NAO se correspondem. A conferencia e feita pelo TEXTO: casam-se as 4
alternativas do docx com as 5 da prova original (emparelhamento 1:1 guloso),
descobre-se que letra do INEP corresponde a alternativa apontada como correta
no docx e compara-se com a chave oficial.
"""
import io
import json
import re
import sys
import unicodedata
from difflib import SequenceMatcher

MARCADOR = re.compile(r'QuEStãO (\d\d)')


def norm(s):
    """Normaliza para comparacao, preservando os simbolos que distinguem
    expressoes booleanas (aspas de negacao, parenteses, + e .)."""
    s = s.replace('’', "'").replace('‘', "'")
    s = unicodedata.normalize('NFKD', s.lower())
    s = ''.join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9'()+.]+", ' ', s).strip()


ROMANOS = re.compile(r'^\s*(?:[IVX]+)(?:\s*(?:,|e)\s*[IVX]+)*\s*,?\s*'
                     r'(?:apenas)?\s*\.?\s*$', re.I)


def conjunto_romano(s):
    """Se a alternativa e so uma lista de romanos, devolve o conjunto."""
    if not ROMANOS.match(s):
        return None
    return frozenset(re.findall(r'[IVX]+', s.upper()))


def sim(a, b):
    ca, cb = conjunto_romano(a), conjunto_romano(b)
    if ca is not None and cb is not None:
        return 1.0 if ca == cb else 0.0
    return SequenceMatcher(None, norm(a), norm(b)).ratio()


def parse_prova(caminho):
    t = io.open(caminho, encoding='utf-8').read()
    marcas = list(MARCADOR.finditer(t))
    saida = {}
    for i, m in enumerate(marcas):
        n = int(m.group(1))
        fim = marcas[i + 1].start() if i + 1 < len(marcas) else len(t)
        bloco = re.split(r'QUeSTÃo 01|QUeSTionÁrio', t[m.end():fim])[0]
        alts = list(re.finditer(r'(?:^|\n)([A-E])\s+(?=[A-Za-zÀ-ÿ0-9(])',
                                bloco))
        # mantem apenas a ultima sequencia A,B,C,D,E em ordem
        seq, esperado = [], 'A'
        for a in alts:
            if a.group(1) == esperado:
                seq.append(a)
                esperado = chr(ord(esperado) + 1)
            elif a.group(1) == 'A':
                seq, esperado = [a], 'B'
        d = {}
        for j, a in enumerate(seq):
            fimalt = seq[j + 1].start() if j + 1 < len(seq) else len(bloco)
            txt = re.sub(r'\s+', ' ', bloco[a.end():fimalt]).strip()
            # remove rodape de pagina: "*R02202127* 28 CIÊNCIA DA COMPUTAÇÃO"
            txt = re.sub(r'\*R\d+\*.*$', '', txt)
            txt = re.sub(r'\d*\s*CIÊNCIA DA COMPUTAÇÃO.*$', '', txt)
            txt = re.split(r'\bÁrea livre\b', txt)[0].strip()
            d[a.group(1)] = txt
        if len(d) >= 4:
            saida[n] = d
    return saida


def parse_gabarito(caminho):
    t = io.open(caminho, encoding='utf-8').read()
    return {int(m.group(1)): m.group(2) for m in
            re.finditer(r'QUEST[ÃA]O\s+(\d{1,2})\s+(ANULADA|[A-E])', t)}


def emparelhar(docx_alts, inep_alts):
    """Emparelhamento 1:1 guloso entre alternativas do docx e do INEP."""
    pares = sorted(((sim(d['texto'], t), d['letra'], L)
                    for d in docx_alts for L, t in inep_alts.items()),
                   reverse=True)
    mapa, usadas_d, usadas_i = {}, set(), set()
    for s, ld, li in pares:
        if ld in usadas_d or li in usadas_i:
            continue
        mapa[ld] = (li, s)
        usadas_d.add(ld)
        usadas_i.add(li)
    return mapa


def main(sp, proj):
    prova = parse_prova(sp + '/prova_inep.txt')
    chave = parse_gabarito(sp + '/gabarito_inep.txt')
    qs = json.load(open(proj + '/dados/questoes.json',
                        encoding='utf-8'))['questoes']
    print('prova docx | gab | ->INEP | sim  | pior par | oficial | veredito')
    print('-' * 76)
    res = {}
    for q in qs:
        n = q['docx']
        if not isinstance(n, int):
            continue
        if n not in prova:
            print('%5s %4s | SEM BLOCO NA PROVA ORIGINAL' % (q['prova'], n))
            continue
        mapa = emparelhar(q['alternativas'], prova[n])
        letra, s = mapa[q['gabarito']]
        pior = min(v[1] for v in mapa.values())
        oficial = chave.get(n)
        if oficial == 'ANULADA':
            vered = 'ANULADA PELO INEP'
        elif pior < 0.55:
            vered = 'emparelhamento fraco - conferir a mao'
        elif letra == oficial:
            vered = 'OK'
        else:
            vered = 'DIVERGE'
        print('%5s %4s |  %s  |   %s    | %.2f |   %.2f   |    %s    | %s'
              % (q['prova'], n, q['gabarito'], letra, s, pior,
                 oficial, vered))
        res[q['prova']] = {'docx': n, 'gab_docx': q['gabarito'],
                           'letra_inep': letra, 'oficial_inep': oficial,
                           'sim': round(s, 3), 'pior_par': round(pior, 3),
                           'veredito': vered,
                           'mapa': {k: v[0] for k, v in mapa.items()}}
    json.dump(res, open(sp + '/conferencia_inep.json', 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)
    print()
    from collections import Counter
    print(Counter(v['veredito'] for v in res.values()))


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
