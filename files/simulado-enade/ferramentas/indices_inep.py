# -*- coding: utf-8 -*-
"""Índices oficiais de item do INEP, por questão do docx (Enade 2021).

Fonte: Relatório Síntese de Área — Ciência da Computação (Bacharelado),
Tabelas 6.11b e 6.12b, MEC/Inep/Daes. São dados NACIONAIS, calculados sobre
todos os concluintes do país. Ao contrário da estatística do LMS da turma, não
estão contaminados por uso de IA — por isso podem ser exibidos no site.

  facilidade    proporção nacional de acertos, de 0 a 1. Quanto menor, mais
                difícil. É o número que o site mostra como "dificuldade".
  classe        a faixa em que o INEP classificou essa facilidade.
  discriminacao ponto-bisserial. Negativo significa que quem foi melhor na
                prova como um todo acertou MENOS essa questão — assinatura de
                item defeituoso. NÃO é exibido: é medida técnica, e um número
                negativo sem contexto confunde mais do que informa.
  descartada    True quando o INEP eliminou a questão do cômputo da nota
                nacional pelo critério Ponto-Bisserial.
"""


def _q(facilidade, classe, discriminacao, descartada=False):
    return {'facilidade': facilidade, 'classe': classe,
            'discriminacao': discriminacao, 'descartada': descartada}


# numero da questao no docx -> indices. None = anulada pelo INEP.
INDICES = {
    9:  _q(0.41, 'Médio', 0.24),
    10: _q(0.40, 'Difícil', 0.40),
    11: _q(0.64, 'Fácil', 0.47),
    12: _q(0.14, 'Muito difícil', 0.04, descartada=True),
    13: _q(0.20, 'Difícil', -0.04, descartada=True),
    14: _q(0.25, 'Difícil', 0.26),
    15: _q(0.51, 'Médio', 0.29),
    16: _q(0.63, 'Fácil', 0.37),
    17: _q(0.12, 'Muito difícil', -0.01, descartada=True),
    18: _q(0.42, 'Médio', 0.31),
    19: _q(0.38, 'Difícil', 0.26),
    20: _q(0.35, 'Difícil', 0.53),
    21: _q(0.10, 'Muito difícil', -0.08, descartada=True),
    22: _q(0.53, 'Médio', 0.38),
    23: _q(0.45, 'Médio', 0.28),
    24: _q(0.28, 'Difícil', 0.33),
    25: _q(0.19, 'Difícil', -0.05, descartada=True),
    26: _q(0.15, 'Muito difícil', 0.23),
    27: _q(0.51, 'Médio', 0.45),
    28: _q(0.34, 'Difícil', 0.34),
    29: None,   # ANULADA pela Comissao Assessora de Area
    30: _q(0.45, 'Médio', 0.37),
    31: _q(0.23, 'Difícil', 0.37),
    32: _q(0.17, 'Difícil', 0.02, descartada=True),
    33: None,   # ANULADA pela Comissao Assessora de Area
    34: _q(0.23, 'Difícil', 0.20),
    35: _q(0.51, 'Médio', 0.48),
}

FONTE = ('MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da '
         'Computação (Bacharelado), Tabelas 6.11b e 6.12b.')

# Conferencia: as descartadas listadas na p. 303 do relatorio.
_ESPERADAS = {12, 13, 17, 21, 25, 32}
_MARCADAS = {n for n, v in INDICES.items() if v and v['descartada']}
assert _MARCADAS == _ESPERADAS, 'descartadas divergem do relatório: %s' % (
    _MARCADAS ^ _ESPERADAS)
