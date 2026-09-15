# -*- coding: utf-8 -*-
"""Executa os dois algoritmos que so existem como imagem nas questoes 12 e 24.

Nao ha compilador C nesta maquina, entao o codigo da questao 12 foi portado
1:1 de codigos/q12_busca.c, replicando a divisao inteira do C (truncamento
para zero, que difere de // do Python quando o numerador e negativo).
"""


def cdiv(a, b):
    """Divisao inteira com truncamento para zero, como em C."""
    return int(a / b)


# ---------------------------------------------------------------- questao 12
TAM = 10


def funcao1(vetor, v):                      # busca linear
    for i in range(TAM):
        if vetor[i] == v:
            return i
    return -1


def funcao2(vetor, v, i, f):                # busca binaria recursiva
    m = cdiv(i + f, 2)
    if v == vetor[m]:
        return m
    if i >= f:
        return -1
    if v > vetor[m]:
        return funcao2(vetor, v, m + 1, f)
    return funcao2(vetor, v, i, m - 1)


def q12():
    vetor = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    return '%d - %d' % (funcao1(vetor, 15), funcao2(vetor, 15, 0, TAM - 1))


# ---------------------------------------------------------------- questao 24
# Transcricao de figuras/q24_fig1.png. Quicksort com particao de Lomuto e
# pivot = A[hi] (ultimo elemento). Contadores instrumentados para medir
# comparacoes e profundidade de recursao.

class Quick:
    def __init__(self):
        self.comparacoes = 0
        self.prof_max = 0

    def particao(self, A, lo, hi):
        pivot = A[hi]
        i = lo
        for j in range(lo, hi + 1):         # "repita para j := lo ate hi"
            self.comparacoes += 1
            if A[j] < pivot:
                A[i], A[j] = A[j], A[i]
                i += 1
        A[i], A[hi] = A[hi], A[i]
        return i

    def ordena(self, A, lo, hi, prof=1):
        self.prof_max = max(self.prof_max, prof)
        if lo < hi:
            p = self.particao(A, lo, hi)
            self.ordena(A, lo, p - 1, prof + 1)
            self.ordena(A, p + 1, hi, prof + 1)
        return A


def q24_ordena(v):
    q = Quick()
    saida = q.ordena(list(v), 0, len(v) - 1)
    return saida, q.comparacoes, q.prof_max


def q24_estabilidade():
    """Ordena pares (chave, marca) por chave; se a ordem das marcas iguais
    mudar, o algoritmo nao e estavel."""
    class Par:
        def __init__(self, k, m):
            self.k, self.m = k, m

        def __lt__(self, o):
            return self.k < o.k

        def __repr__(self):
            return '%d%s' % (self.k, self.m)

    entrada = [Par(2, 'a'), Par(1, 'x'), Par(2, 'b'), Par(1, 'y'), Par(2, 'c')]
    q = Quick()
    saida = q.ordena(list(entrada), 0, len(entrada) - 1)
    marcas = [p.m for p in saida if p.k == 2]
    return entrada, saida, marcas == ['a', 'b', 'c']


if __name__ == '__main__':
    print('QUESTAO 12 - saida da linha 24:', q12())
    print()
    print('QUESTAO 24 - quicksort (Lomuto, pivot = ultimo elemento)')
    for nome, v in [('aleatorio', [33, 7, 91, 4, 58, 12, 70, 25, 3, 88]),
                    ('ja ordenado', list(range(1, 11))),
                    ('ordem inversa', list(range(10, 0, -1))),
                    ('todos iguais', [5] * 10)]:
        s, comp, prof = q24_ordena(v)
        ok = 'OK' if s == sorted(v) else 'FALHOU'
        print('  %-14s %s ordenou=%s comparacoes=%3d profundidade=%2d'
              % (nome, s, ok, comp, prof))
    ent, sai, estavel = q24_estabilidade()
    print()
    print('  teste de estabilidade')
    print('    entrada:', ent)
    print('    saida:  ', sai)
    print('    estavel:', estavel)
