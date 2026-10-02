# -*- coding: utf-8 -*-
"""Indices do INEP para a avaliacao presencial (Enade 2017).

Cada questao da presencial e a questao (n + 8) da prova de 2017 de Ciencia da
Computacao (Bacharelado), na mesma ordem. Isso foi conferido pagina a pagina
contra a prova original.

GABARITO_INEP
  Letra do gabarito definitivo do INEP na prova de 5 alternativas. Como no
  docx do professor as questoes tem 4 alternativas, as letras nao se
  correspondem; CASAMENTO diz qual letra do docx e a mesma alternativa.
  Fonte: Gabarito Definitivo das Questoes de Multipla Escolha, Ciencia da
  Computacao - Bacharelado, Enade 2017 (INEP); e extrato dos microdados
  (DS_VT_GAB_OCE_FIN = ACECBCDEADEDXCAEXXBDEBEBDAE).

ACERTO
  Percentual nacional de acerto (coluna "Brasil") do Relatorio de Curso do
  Enade 2017, transcrito pela UFSM e publicado no repositorio
  renan-cunha/KDD-Enade-Computing (data/raw_data/classificacao_charao.csv).
  NAO foi conferido contra o Relatorio Sintese de Area: o download.inep.gov.br
  estava bloqueado na sessao em que este arquivo foi escrito. Os valores de
  2021 vieram do Relatorio Sintese; estes vem do Relatorio de Curso, e podem
  divergir em decimais.

DESCONSIDERADAS
  Questoes 21, 25 e 26 da prova (13, 17 e 18 da presencial): marcadas com X
  nos microdados e sem percentual no relatorio. Ficaram fora do calculo da
  nota nacional. O gabarito definitivo nao as anula.

A classificacao de dificuldade nao veio da fonte: e calculada com as faixas
que o INEP usa no Relatorio Sintese (as mesmas que classificam os indices de
2021 em indices_inep.py).
"""

FONTE = ('MEC/Inep — Enade 2017, Ciência da Computação (Bacharelado): '
         'percentual de acerto Brasil do Relatório de Curso.')

#            prova: (questao INEP, gabarito INEP, letra correspondente no docx)
CASAMENTO = {
    1: (9, 'A', 'a'), 2: (10, 'C', 'c'), 3: (11, 'E', 'd'),
    4: (12, 'C', 'b'), 5: (13, 'B', 'b'), 6: (14, 'C', 'c'),
    7: (15, 'D', 'c'), 8: (16, 'E', 'd'), 9: (17, 'A', 'a'),
    10: (18, 'D', 'c'), 11: (19, 'E', 'd'), 12: (20, 'D', 'd'),
    13: (21, 'A', 'a'), 14: (22, 'C', 'b'), 15: (23, 'A', 'a'),
    16: (24, 'E', 'd'), 17: (25, 'C', 'c'), 18: (26, 'E', 'd'),
    19: (27, 'B', 'b'), 20: (28, 'D', 'd'), 21: (29, 'E', 'd'),
    22: (30, 'B', 'a'), 23: (31, 'E', 'd'), 24: (32, 'B', 'b'),
    25: (33, 'D', 'd'), 26: (34, 'A', 'a'), 27: (35, 'E', 'd'),
}

# questao da prova INEP -> percentual nacional de acerto
ACERTO = {
    9: 38.1, 10: 19.2, 11: 50.4, 12: 47.4, 13: 56.4, 14: 39.9, 15: 25.9,
    16: 66.0, 17: 79.7, 18: 38.1, 19: 58.9, 20: 60.9, 22: 52.5, 23: 18.6,
    24: 31.4, 27: 34.8, 28: 62.7, 29: 25.9, 30: 39.8, 31: 33.3, 32: 37.7,
    33: 28.9, 34: 20.5, 35: 31.0,
}
DESCONSIDERADAS = {21, 25, 26}

# Microdados: gabarito final das questoes 9 a 35, X = desconsiderada.
_MICRODADOS = 'ACECBCDEADEDXCAEXXBDEBEBDAE'


def classe(pct):
    """Faixas do INEP para o indice de facilidade, aplicadas ao indice com
    duas casas decimais (60,9% -> 0,61 -> Facil), como no relatorio."""
    f = round(pct / 100.0, 2)
    if f >= 0.86:
        return 'Muito fácil'
    if f >= 0.61:
        return 'Fácil'
    if f >= 0.41:
        return 'Médio'
    if f >= 0.16:
        return 'Difícil'
    return 'Muito difícil'


def indice(prova):
    """Dificuldade nacional da questao da presencial, ou None."""
    q = CASAMENTO[prova][0]
    if q in DESCONSIDERADAS:
        return None
    pct = ACERTO[q]
    return {'acerto_nacional': round(pct), 'classe': classe(pct),
            'descartada_ponto_bisserial': False, 'fonte': FONTE,
            'questao_inep': q, 'edicao': 2017}


# --- conferencias internas
assert sorted(CASAMENTO) == list(range(1, 28))
assert all(CASAMENTO[p][0] == p + 8 for p in CASAMENTO)
assert set(ACERTO) | DESCONSIDERADAS == set(range(9, 36))
assert not set(ACERTO) & DESCONSIDERADAS
for _p, (_q, _letra, _docx) in CASAMENTO.items():
    _m = _MICRODADOS[_q - 9]
    assert _m == ('X' if _q in DESCONSIDERADAS else _letra), (_p, _m, _letra)
# faixas conferidas contra os indices oficiais de 2021
assert [classe(v) for v in (40, 41, 64, 14, 15, 17, 61, 60, 60.9, 39.9)] == [
    'Difícil', 'Médio', 'Fácil', 'Muito difícil', 'Muito difícil',
    'Difícil', 'Fácil', 'Médio', 'Fácil', 'Difícil']
# o rotulo exibido (percentual arredondado) nunca contradiz a faixa
for _v in ACERTO.values():
    assert classe(_v) == classe(round(_v)), _v
