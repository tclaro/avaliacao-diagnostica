# -*- coding: utf-8 -*-
"""Procura resposta vazada no material que o aluno vê ANTES de responder.

Motivo de existir: as legendas das figuras e os blocos de código são escritos
à mão e ficam visíveis junto do enunciado. Foi exatamente por ali que as
questões 8 e 24 entregaram a resposta — a legenda da 8 terminava dizendo qual
era a expressão booleana, e o bloco de código da 24 trazia as notas de
verificação com "afirmação I é verdadeira".

O que conta como material pré-resposta:
  - descricao_alt de cada figura (vira <figcaption>)
  - o conteúdo do arquivo de código (vira <pre>)
  - o enunciado, o comando e os itens — mas esses vêm do docx e não são
    reescritos por nós, então servem de controle.

Uso:  python ferramentas/auditar_vazamento.py
Sai com código 1 se achar vazamento.
"""
import io
import json
import os
import re
import sys
import unicodedata
from difflib import SequenceMatcher

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Frases que entregam veredito ou resultado. Nenhuma delas tem motivo para
# aparecer num texto que só descreve o que está na figura.
SUSPEITAS = [
    r'afirma[çc][ãa]o\s+[IVX]+\s+[ée]\s+(verdadeira|falsa)',
    r'(item|afirmativa)\s+[IVX]+\s+[ée]\s+(verdadeira|falsa)',
    r'a\s+(express[ãa]o|resposta|alternativa)\s+(resultante\s+)?[ée]\b',
    r'a\s+resposta\s+(correta\s+)?[ée]',
    r'\bgabarito\b',
    r'portanto\s+[ée]\s+ele\s+que\s+recebe',
    r'[ée]\s+o\s+que\s+a\s+quest[ãa]o\s+exige',
    r'verificad[oa]\s+por\s+execu[çc][ãa]o',
    r'sua\s+execu[çc][ãa]o\s+imprime',
    r'\bNÃO\s+[ée]\s+est[áa]vel\b',
]


def norm(s):
    s = unicodedata.normalize('NFKD', s.lower())
    s = ''.join(c for c in s if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9]+', ' ', s).strip()


def parecido(a, b):
    return SequenceMatcher(None, norm(a), norm(b)).ratio()


def trechos_pre_resposta(q):
    """(rotulo, texto) de tudo que o aluno lê antes de responder."""
    saida = []
    for f in q['figuras']:
        if f.get('descricao_alt'):
            saida.append(('legenda de ' + os.path.basename(f['arquivo']),
                          f['descricao_alt']))
    c = q.get('codigo')
    if c:
        caminho = os.path.join(RAIZ, c['arquivo'])
        if os.path.exists(caminho):
            saida.append(('bloco de código ' + c['arquivo'],
                          io.open(caminho, encoding='utf-8').read()))
        if c.get('legenda'):
            saida.append(('legenda do código', c['legenda']))
    return saida


FONTES = [('online', 'dados/questoes.json'),
          ('presencial', 'dados/presencial/questoes.json')]


def main():
    questoes = []
    for nome, fonte in FONTES:
        doc = json.load(io.open(os.path.join(RAIZ, fonte), encoding='utf-8'))
        questoes += [(nome, q) for q in doc['questoes']]
    achados = []

    for avaliacao, q in questoes:
        correta = [a['texto'] for a in q['alternativas']
                   if a['letra'] == q['gabarito']]
        correta = correta[0] if correta else ''

        for rotulo, texto in trechos_pre_resposta(q):
            for padrao in SUSPEITAS:
                m = re.search(padrao, texto, re.I)
                if m:
                    achados.append((avaliacao, q['prova'], rotulo,
                                    'frase de veredito', m.group(0)))

            # a alternativa correta reproduzida quase literalmente
            if len(correta) > 12:
                for frase in re.split(r'(?<=[.;])\s+', texto):
                    if len(frase) < 12:
                        continue
                    r = parecido(correta, frase)
                    if r > 0.72:
                        achados.append((avaliacao, q['prova'], rotulo,
                                        'repete a alternativa %s (%.0f%%)'
                                        % (q['gabarito'], r * 100),
                                        frase.strip()[:90]))

    if not achados:
        print('Nenhum vazamento encontrado no material pré-resposta.')
        return 0

    print('VAZAMENTO no material que o aluno vê antes de responder:\n')
    for avaliacao, prova, onde, tipo, trecho in achados:
        print('  %s prova %-2d | %-34s | %s' % (avaliacao, prova, onde, tipo))
        print('           %s' % trecho.strip()[:100])
    print('\ntotal: %d' % len(achados))
    return 1


if __name__ == '__main__':
    sys.exit(main())
