# -*- coding: utf-8 -*-
"""Consolida no questoes.json: conferencia INEP, descricoes de figura,
transcricoes de codigo e as 30 resolucoes comentadas."""
import io
import json
import sys

sys.path.insert(0, sys.argv[1])
from resolucoes import R            # noqa: E402
from figuras_alt import ALT         # noqa: E402
from temas import TEMAS             # noqa: E402
from indices_inep import INDICES, FONTE as FONTE_INEP  # noqa: E402

# Conferencia contra a chave definitiva do INEP (Enade 2021, Ciencia da
# Computacao, bacharelado). O docx do professor tem 4 alternativas e a prova
# original tem 5, entao a conferencia foi feita casando o TEXTO das
# alternativas, nao a letra. Ver ferramentas/conferir_inep.py.
# 24 questoes casadas automaticamente + prova 6 conferida a mao (a alternativa
# C ficou deslocada na extracao de texto do PDF) + 2 anuladas pelo INEP.
INEP = {
    1: 'E', 2: 'B', 3: 'D', 4: 'B', 5: 'E', 6: 'C', 7: 'C', 8: 'B', 9: 'C',
    10: 'E', 11: 'D', 12: 'A', 13: 'E', 14: 'A', 15: 'C', 16: 'E', 17: 'B',
    18: 'A', 19: 'D', 20: 'B', 21: 'ANULADA', 22: 'E', 23: 'E', 24: 'A',
    25: 'ANULADA', 26: 'C', 27: 'D',
}
CONFERIDA_A_MAO = {6}

CODIGOS = {
    12: {'linguagem': 'c', 'arquivo': 'codigos/q12_busca.c',
         'legenda': 'Observe o código abaixo escrito na linguagem C.',
         'numeracao_de_linha': True,
         'saida_verificada': '7 - 7',
         'nota': 'O enunciado cita a linha 24 explicitamente, entao a '
                 'numeracao precisa ser preservada na renderizacao.'},
    24: {'linguagem': 'pseudocodigo',
         'arquivo': 'codigos/q24_quicksort.txt',
         'numeracao_de_linha': False,
         'saida_verificada': 'ordena corretamente; profundidade de recursao '
                             'igual a n para vetor ja ordenado; nao e estavel',
         'nota': 'Transcrito da figura q24_fig1.png e executado em '
                 'ferramentas/algos.py.'},
}


def main(sp, proj):
    caminho = proj + '/dados/questoes.json'
    doc = json.load(io.open(caminho, encoding='utf-8'))
    faltando = []

    for q in doc['questoes']:
        p = q['prova']

        # ---- tema com acentuacao correta para exibicao
        if p in TEMAS:
            q['tema'] = TEMAS[p]

        # ---- gabarito conferido contra o INEP
        if p in INEP:
            oficial = INEP[p]
            q['gabarito_inep'] = oficial
            q['anulada_inep'] = (oficial == 'ANULADA')
            q['gabarito_conferido_inep'] = True
            q['conferencia_inep'] = (
                'conferida a mao (alternativa deslocada na extracao do PDF)'
                if p in CONFERIDA_A_MAO else
                'casamento automatico do texto das alternativas')
        else:
            q['gabarito_inep'] = None
            q['anulada_inep'] = False
            q['gabarito_conferido_inep'] = None
            q['conferencia_inep'] = ('questao autoral do professor - nao ha '
                                     'chave do INEP aplicavel')

        # ---- dificuldade nacional do INEP
        # Substitui na tela o percentual de acerto da turma, que nao pode ser
        # exibido por estar contaminado (secao 5 do HANDOFF). Este e dado
        # nacional, de todos os concluintes do pais.
        idx = INDICES.get(q['docx']) if isinstance(q['docx'], int) else None
        q['dificuldade_inep'] = {
            'acerto_nacional': round(idx['facilidade'] * 100),
            'classe': idx['classe'],
            'descartada_ponto_bisserial': idx['descartada'],
            'fonte': FONTE_INEP,
        } if idx else None

        # ---- o professor validou a extracao dos itens nesta sessao
        q['itens_conferidos'] = True
        q['itens_conferidos_por'] = ('professor, apos revisao da extracao via '
                                     'document.xml')

        # ---- descricoes das figuras
        for f in q['figuras']:
            nome = f['arquivo'].split('/')[-1]
            f['descricao_alt'] = ALT.get(nome)
            if not f['descricao_alt']:
                faltando.append('alt de ' + nome)

        # ---- codigo
        if p in CODIGOS:
            q['codigo'] = CODIGOS[p]

        # ---- resolucao
        r = R.get(p)
        if not r:
            faltando.append('resolucao da prova %d' % p)
            continue
        rotulos = [i['rotulo'] for i in q['itens']]
        for rot in rotulos:
            if rot not in r['itens']:
                faltando.append('veredito do item %s da prova %d' % (rot, p))
        letras = [a['letra'] for a in q['alternativas']
                  if a['letra'] != q['gabarito']]
        for L in letras:
            if L not in r['distratores']:
                faltando.append('distrator %s da prova %d' % (L, p))
        q['resolucao'] = {
            'escrita': True,
            'veredito_por_item': r['itens'],
            'por_que_a_correta_esta_certa': r['correta'],
            'por_que_cada_distrator_cai': r['distratores'],
            'conceito_chave': r['conceito'],
            'pegadinha': r['pegadinha'],
            'referencia': r['referencia'],
        }
        for extra in ('verificado', 'aviso_anulada', 'nota_professor'):
            if extra in r:
                q['resolucao'][extra] = r[extra]

        # ---- preenche o veredito de cada item na propria lista
        for item in q['itens']:
            txt = r['itens'].get(item['rotulo'], '')
            if txt.startswith('VERDADEIRA'):
                item['veredito'] = True
            elif txt.startswith('FALSA'):
                item['veredito'] = False

    doc['_meta']['fase'] = '2 - resolucoes escritas e gabaritos conferidos'
    doc['_meta']['conferencia_inep'] = (
        'Gabaritos conferidos contra o gabarito definitivo do Enade 2021 '
        '(Ciencia da Computacao, bacharelado, INEP). A prova original tem 5 '
        'alternativas e o docx do professor tem 4, entao a conferencia casou '
        'o TEXTO das alternativas, nao a letra. 25 das 27 questoes do Enade '
        'confirmadas; as questoes 29 e 33 do docx (provas 21 e 25) foram '
        'ANULADAS pelo INEP e nao tem resposta oficial. As 3 complementares '
        'sao autorais e nao tem chave do INEP.')
    doc['_meta']['pendencias'] = [
        'Confirmar no LMS a configuracao das provas 1, 2 e 3, cadastradas '
        'como "Resposta Multipla" em vez de "Multipla Escolha".',
        'Confirmar no LMS a inconsistencia de pontuacao da prova 10 '
        '(o gabarito em si esta confirmado contra o INEP).',
        'Decidir se as provas 21 e 25, anuladas pelo INEP, permanecem no '
        'simulado ou saem da contagem.',
    ]
    json.dump(doc, io.open(caminho, 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)

    escritas = sum(1 for q in doc['questoes'] if q['resolucao']['escrita'])
    print('questoes:', len(doc['questoes']))
    print('resolucoes escritas:', escritas)
    print('figuras com descricao:',
          sum(1 for q in doc['questoes'] for f in q['figuras']
              if f['descricao_alt']))
    print('anuladas pelo INEP:',
          [q['prova'] for q in doc['questoes'] if q['anulada_inep']])
    print('pendencias de conteudo:', faltando or 'nenhuma')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
