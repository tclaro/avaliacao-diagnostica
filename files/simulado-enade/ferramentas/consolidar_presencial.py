# -*- coding: utf-8 -*-
"""Consolida dados/presencial/questoes.json: conferencia com o INEP,
dificuldade nacional, descricoes de figura, transcricoes de codigo e as 27
resolucoes comentadas.

Uso:  python ferramentas/consolidar_presencial.py
"""
import io
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from resolucoes_presencial_a import RA                     # noqa: E402
from resolucoes_presencial_b import RB                     # noqa: E402
from figuras_alt_presencial import ALT                     # noqa: E402
from temas_presencial import TEMAS                         # noqa: E402
import indices_inep_2017 as INEP                           # noqa: E402

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAMINHO = os.path.join(RAIZ, 'dados', 'presencial', 'questoes.json')

R = {}
R.update(RA)
R.update(RB)
assert sorted(R) == list(range(1, 28)), 'faltam ou sobram resolucoes'

# Codigo que aparece so como imagem: transcrito e renderizado em <pre>.
CODIGOS = {
    10: {'linguagem': 'c', 'arquivo': 'codigos/presencial/p10_ordena.c',
         'numeracao_de_linha': True,
         'nota': 'As alternativas citam as linhas 04, 07, 08, 10 e 13; a '
                 'numeracao da figura foi mantida na transcricao.'},
    14: {'linguagem': 'java', 'arquivo': 'codigos/presencial/p14_troco.java',
         'numeracao_de_linha': False},
    17: {'linguagem': 'c', 'arquivo': 'codigos/presencial/p17_fib.c',
         'numeracao_de_linha': False},
    23: {'linguagem': 'c', 'arquivo': 'codigos/presencial/p23_threads.c',
         'numeracao_de_linha': False},
    25: {'linguagem': 'c', 'arquivo': 'codigos/presencial/p25_recursiva.c',
         'numeracao_de_linha': True,
         'nota': 'O item III cita a linha 4; numeracao da figura mantida.'},
}


def main():
    doc = json.load(io.open(CAMINHO, encoding='utf-8'))
    faltando = []

    for q in doc['questoes']:
        p = q['prova']
        q['tema'] = TEMAS[p]

        # ---- conferencia com o gabarito definitivo do INEP
        questao_inep, letra_inep, letra_docx = INEP.CASAMENTO[p]
        q['questao_inep'] = questao_inep
        q['gabarito_inep'] = letra_inep
        q['anulada_inep'] = False
        q['gabarito_conferido_inep'] = (q['gabarito'] == letra_docx)
        if not q['gabarito_conferido_inep']:
            faltando.append('gabarito da prova %d diverge do INEP '
                            '(docx %s, INEP %s = docx %s)'
                            % (p, q['gabarito'], letra_inep, letra_docx))
        q['conferencia_inep'] = (
            'alternativas do docx casadas a mao com as da prova original '
            '(questao %d do Enade 2017)' % questao_inep)

        # ---- dificuldade nacional
        q['dificuldade_inep'] = INEP.indice(p)
        q['desconsiderada_inep'] = questao_inep in INEP.DESCONSIDERADAS
        if q['desconsiderada_inep']:
            q['motivo_sem_indice'] = 'sem índice: desconsiderada pelo INEP'

        q['itens_conferidos'] = True
        q['itens_conferidos_por'] = ('conferidos contra o PDF do docx e contra '
                                     'a prova original do INEP')

        # ---- figuras do enunciado e das alternativas
        for f in q['figuras']:
            nome = os.path.basename(f['arquivo'])
            f['descricao_alt'] = ALT.get(nome)
            if not f['descricao_alt']:
                faltando.append('alt de ' + nome)
        for b in q['blocos']:
            if b['tipo'] == 'figura':
                b['descricao_alt'] = ALT.get(os.path.basename(b['arquivo']))
        for a in q['alternativas']:
            if a.get('figura'):
                nome = os.path.basename(a['figura']['arquivo'])
                a['figura']['descricao_alt'] = ALT.get(nome)
                if not a['figura']['descricao_alt']:
                    faltando.append('alt de ' + nome)

        if p in CODIGOS:
            q['codigo'] = CODIGOS[p]
            if not os.path.exists(os.path.join(RAIZ, CODIGOS[p]['arquivo'])):
                faltando.append('codigo ausente: ' + CODIGOS[p]['arquivo'])

        # ---- resolucao
        r = R[p]
        for item in q['itens']:
            if item['rotulo'] not in r['itens']:
                faltando.append('veredito do item %s da prova %d'
                                % (item['rotulo'], p))
        sobra = set(r['itens']) - {i['rotulo'] for i in q['itens']}
        if sobra:
            faltando.append('prova %d: vereditos para itens inexistentes %s'
                            % (p, sorted(sobra)))
        erradas = {a['letra'] for a in q['alternativas']} - {q['gabarito']}
        if set(r['distratores']) != erradas:
            faltando.append('prova %d: distratores %s, esperado %s'
                            % (p, sorted(r['distratores']), sorted(erradas)))
        q['resolucao'] = {
            'escrita': True,
            'veredito_por_item': r['itens'],
            'por_que_a_correta_esta_certa': r['correta'],
            'por_que_cada_distrator_cai': r['distratores'],
            'conceito_chave': r['conceito'],
            'pegadinha': r['pegadinha'],
            'referencia': r['referencia'],
        }
        if 'verificado' in r:
            q['resolucao']['verificado'] = r['verificado']
        for item in q['itens']:
            txt = r['itens'].get(item['rotulo'], '')
            if txt.startswith('VERDADEIRA'):
                item['veredito'] = True
            elif txt.startswith('FALSA'):
                item['veredito'] = False
            else:
                faltando.append('prova %d item %s sem VERDADEIRA/FALSA'
                                % (p, item['rotulo']))

    doc['_meta']['fase'] = '2 - resolucoes escritas e gabaritos conferidos'
    doc['_meta']['conferencia_inep'] = (
        'Cada questao N corresponde a questao N + 8 do Enade 2017 (Ciencia da '
        'Computacao, bacharelado), conferido contra a prova original. Os 27 '
        'gabaritos do professor coincidem com o gabarito definitivo do INEP, '
        'casando o texto das alternativas (a prova original tem 5). As '
        'questoes 21, 25 e 26 do INEP (13, 17 e 18 aqui) foram '
        'desconsideradas no calculo da nota nacional e nao tem percentual.')
    doc['_meta']['fonte_dificuldade'] = INEP.FONTE
    json.dump(doc, io.open(CAMINHO, 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)

    print('questoes:', len(doc['questoes']))
    print('resolucoes escritas:',
          sum(1 for q in doc['questoes'] if q['resolucao']['escrita']))
    print('com dificuldade nacional:',
          sum(1 for q in doc['questoes'] if q['dificuldade_inep']))
    print('desconsideradas pelo INEP:',
          [q['prova'] for q in doc['questoes'] if q['desconsiderada_inep']])
    print('pendencias:', faltando or 'nenhuma')
    return 1 if faltando else 0


if __name__ == '__main__':
    sys.exit(main())
