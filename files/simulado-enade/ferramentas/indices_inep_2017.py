# -*- coding: utf-8 -*-
"""Indices do INEP para a avaliacao presencial (Enade 2017).

Cada questao da presencial e a questao (n + 8) da prova de 2017 de Ciencia da
Computacao (Bacharelado), na mesma ordem. Isso foi conferido pagina a pagina
contra a prova original.

GABARITO_INEP (em CASAMENTO)
  Letra do gabarito definitivo do INEP na prova de 5 alternativas. Como no
  docx do professor as questoes tem 4 alternativas, as letras nao se
  correspondem; CASAMENTO diz qual letra do docx e a mesma alternativa.
  Fonte: Gabarito Definitivo das Questoes de Multipla Escolha, Ciencia da
  Computacao - Bacharelado, Enade 2017 (INEP); e extrato dos microdados
  (DS_VT_GAB_OCE_FIN = ACECBCDEADEDXCAEXXBDEBEBDAE).

INDICES
  Relatorio Sintese de Area, Ciencia da Computacao (Bacharelado/Licenciatura),
  Enade 2017, Tabela 6.11b (Bacharelado), p. 216-217, MEC/Inep/Daes:
  facilidade, classificacao e discriminacao (ponto-bisserial), transcritos.

  As questoes 21, 25 e 26 da prova (13, 17 e 18 da presencial) tem
  discriminacao Fraca (<= 0,19) e foram eliminadas do computo da nota pelo
  criterio ponto-bisserial (p. 217). Elas tem indice de facilidade normal; nos
  microdados aparecem com X.

CONFERENCIA
  Antes do relatorio, os percentuais vinham da coluna "Brasil" do Relatorio de
  Curso, transcrita pela UFSM (repositorio renan-cunha/KDD-Enade-Computing).
  Ela fica aqui so como conferencia cruzada: as 24 questoes que ela traz
  coincidem com o relatorio a menos de meio ponto.
"""

FONTE = ('MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da '
         'Computação (Bacharelado), Tabela 6.11b.')

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


def _q(facilidade, classe, discriminacao):
    return {'facilidade': facilidade, 'classe': classe,
            'discriminacao': discriminacao}


# Tabela 6.11b: questao da prova INEP -> indices
INDICES = {
    9: _q(0.38, 'Difícil', 0.35),  10: _q(0.19, 'Difícil', 0.24),
    11: _q(0.50, 'Médio', 0.42),   12: _q(0.47, 'Médio', 0.24),
    13: _q(0.56, 'Médio', 0.41),   14: _q(0.40, 'Difícil', 0.31),
    15: _q(0.26, 'Difícil', 0.26), 16: _q(0.66, 'Fácil', 0.31),
    17: _q(0.80, 'Fácil', 0.33),   18: _q(0.38, 'Difícil', 0.36),
    19: _q(0.59, 'Médio', 0.30),   20: _q(0.61, 'Fácil', 0.36),
    21: _q(0.18, 'Difícil', 0.11), 22: _q(0.53, 'Médio', 0.35),
    23: _q(0.19, 'Difícil', 0.23), 24: _q(0.31, 'Difícil', 0.28),
    25: _q(0.29, 'Difícil', 0.11), 26: _q(0.25, 'Difícil', 0.16),
    27: _q(0.35, 'Difícil', 0.23), 28: _q(0.63, 'Fácil', 0.34),
    29: _q(0.26, 'Difícil', 0.31), 30: _q(0.40, 'Difícil', 0.32),
    31: _q(0.33, 'Difícil', 0.39), 32: _q(0.38, 'Difícil', 0.20),
    33: _q(0.29, 'Difícil', 0.22), 34: _q(0.20, 'Difícil', 0.27),
    35: _q(0.31, 'Difícil', 0.26),
}

# Eliminadas do computo da nota pelo criterio ponto-bisserial (p. 217).
DESCARTADAS = {21, 25, 26}

# Microdados: gabarito final das questoes 9 a 35, X = descartada.
_MICRODADOS = 'ACECBCDEADEDXCAEXXBDEBEBDAE'

# Conferencia cruzada: coluna "Brasil" do Relatorio de Curso (transcricao
# UFSM). Nao traz as descartadas.
_RELATORIO_DE_CURSO = {
    9: 38.1, 10: 19.2, 11: 50.4, 12: 47.4, 13: 56.4, 14: 39.9, 15: 25.9,
    16: 66.0, 17: 79.7, 18: 38.1, 19: 58.9, 20: 60.9, 22: 52.5, 23: 18.6,
    24: 31.4, 27: 34.8, 28: 62.7, 29: 25.9, 30: 39.8, 31: 33.3, 32: 37.7,
    33: 28.9, 34: 20.5, 35: 31.0,
}


def classe(facilidade):
    """Faixas do INEP para o indice de facilidade (Tabela 1.2 do
    relatorio de 2017), aplicadas ao indice com duas casas decimais."""
    f = round(facilidade, 2)
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
    """Dificuldade nacional da questao da presencial."""
    q = CASAMENTO[prova][0]
    idx = INDICES[q]
    return {'acerto_nacional': int(round(idx['facilidade'] * 100)),
            'classe': idx['classe'],
            'descartada_ponto_bisserial': q in DESCARTADAS,
            'fonte': FONTE, 'questao_inep': q, 'edicao': 2017}


# --- conferencias internas
assert sorted(CASAMENTO) == list(range(1, 28))
assert all(CASAMENTO[p][0] == p + 8 for p in CASAMENTO)
assert sorted(INDICES) == list(range(9, 36))
# a classificacao transcrita bate com as faixas oficiais
for _q_, _i in INDICES.items():
    assert classe(_i['facilidade']) == _i['classe'], _q_
# descartadas = discriminacao Fraca (<= 0,19), e sao as marcadas com X
assert DESCARTADAS == {q for q, i in INDICES.items()
                       if i['discriminacao'] <= 0.19}
for _p, (_q_, _letra, _docx) in CASAMENTO.items():
    _m = _MICRODADOS[_q_ - 9]
    assert _m == ('X' if _q_ in DESCARTADAS else _letra), (_p, _m, _letra)
# a transcricao do Relatorio de Curso confere com o Relatorio Sintese
assert set(_RELATORIO_DE_CURSO) == set(INDICES) - DESCARTADAS
for _q_, _v in _RELATORIO_DE_CURSO.items():
    assert abs(_v - INDICES[_q_]['facilidade'] * 100) <= 0.5, _q_
# o percentual exibido e o indice x 100 sem perda (0,53 -> 53, nunca 52)
for _i in INDICES.values():
    assert abs(int(round(_i['facilidade'] * 100)) -
               _i['facilidade'] * 100) < 1e-6
