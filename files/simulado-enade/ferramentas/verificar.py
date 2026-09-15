# -*- coding: utf-8 -*-
"""Verifica por execucao as questoes 15 (ABB), 26 (Dijkstra) e 28 (Bayes)."""
import heapq

# ------------------------------------------------- questao 15: arvore binaria
LISTA = [27, 34, 40, 18, 23, 5, 25, 36, 10, 7, -2]


class No:
    def __init__(self, v):
        self.v, self.e, self.d = v, None, None


def inserir(raiz, v):
    if raiz is None:
        return No(v)
    if v < raiz.v:
        raiz.e = inserir(raiz.e, v)
    else:
        raiz.d = inserir(raiz.d, v)
    return raiz


def pre(n): return [] if not n else [n.v] + pre(n.e) + pre(n.d)
def emo(n): return [] if not n else emo(n.e) + [n.v] + emo(n.d)
def pos(n): return [] if not n else pos(n.e) + pos(n.d) + [n.v]
def altura(n): return 0 if not n else 1 + max(altura(n.e), altura(n.d))
def conta(n): return 0 if not n else 1 + conta(n.e) + conta(n.d)


def q15():
    r = None
    for v in LISTA:
        r = inserir(r, v)
    print('QUESTAO 15 - ABB com', LISTA)
    print('  altura (niveis)   :', altura(r))
    print('  esquerda da raiz  :', conta(r.e), 'elementos ->', pre(r.e))
    print('  direita da raiz   :', conta(r.d), 'elementos ->', pre(r.d))
    print('  pre-ordem :', pre(r))
    print('  em-ordem  :', emo(r))
    print('  pos-ordem :', pos(r))
    print('  em-ordem == lista ordenada?', emo(r) == sorted(LISTA))
    print('  alternativa b (dita pre-ordem):',
          [-2, 7, 10, 5, 25, 23, 18, 36, 40, 34, 27] == pre(r))
    print('  alternativa c (dita em-ordem):',
          [-2, 5, 7, 10, 18, 23, 25, 27, 34, 36, 40] == emo(r))
    print('  alternativa d (dita pos-ordem):',
          [27, 18, 5, -2, 10, 7, 23, 25, 34, 40, 36] == pos(r))
    print('  (a sequencia da alternativa d e, na verdade, a pre-ordem?',
          [27, 18, 5, -2, 10, 7, 23, 25, 34, 40, 36] == pre(r), ')')


# ---------------------------------------------------- questao 26: Dijkstra
ARCOS = [('D', 'A', 5), ('D', 'B', 9), ('D', 'E', 5), ('D', 'F', 1),
         ('A', 'B', 2), ('B', 'C', 8), ('E', 'B', 1), ('E', 'C', 5),
         ('F', 'E', 3), ('F', 'G', 1), ('G', 'E', 1)]


def q26(iteracoes=2, origem='D'):
    vs = sorted({v for a in ARCOS for v in a[:2]})
    adj = {v: [] for v in vs}
    for u, v, w in ARCOS:
        adj[u].append((v, w))
    dist = {v: -1 for v in vs}
    dist[origem] = 0
    fila = [(0, origem)]
    fechados = set()
    print('\nQUESTAO 26 - Dijkstra a partir de', origem)
    for it in range(1, iteracoes + 1):
        while fila and fila[0][1] in fechados:
            heapq.heappop(fila)
        if not fila:
            break
        d, u = heapq.heappop(fila)
        fechados.add(u)
        for v, w in adj[u]:
            if dist[v] == -1 or d + w < dist[v]:
                dist[v] = d + w
                heapq.heappush(fila, (dist[v], v))
        print('  apos iteracao %d (retirou %s): %s'
              % (it, u, '  '.join('%s: %d' % (v, dist[v]) for v in vs)))
    return dist


# ------------------------------------------------------- questao 28: Bayes
def q28():
    p_v, tvp, tfp = 0.10, 0.90, 0.05
    p_mais = tvp * p_v + tfp * (1 - p_v)
    post = tvp * p_v / p_mais
    print('\nQUESTAO 28 - Bayes')
    print('  P(alerta)          = %.4f' % p_mais)
    print('  P(vulner | alerta) = %.4f  -> %.1f%%' % (post, post * 100))
    print('  em 1000 classes: %d verdadeiros positivos, %d falsos positivos'
          % (round(1000 * p_v * tvp), round(1000 * (1 - p_v) * tfp)))


if __name__ == '__main__':
    q15()
    d = q26()
    esperado = {'A': 5, 'B': 9, 'C': -1, 'D': 0, 'E': 4, 'F': 1, 'G': 2}
    print('  bate com a alternativa c?', d == esperado)
    q28()
