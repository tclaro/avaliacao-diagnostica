# -*- coding: utf-8 -*-
"""Reune as resolucoes das 30 questoes.

O conteudo esta dividido em dois modulos apenas por tamanho de arquivo:
resolucoes_a.py cobre as questoes 1 a 15 e resolucoes_b.py, as questoes
16 a 30.
"""
from resolucoes_a import RA
from resolucoes_b import RB

R = {}
R.update(RA)
R.update(RB)

assert sorted(R) == list(range(1, 31)), 'faltam ou sobram questoes em R'
