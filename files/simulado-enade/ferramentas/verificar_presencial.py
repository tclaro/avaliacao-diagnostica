# -*- coding: utf-8 -*-
"""Verifica por execucao as questoes calculaveis da avaliacao presencial.

Cada funcao reproduz o que a questao pede e confere o resultado contra o
gabarito. Os resultados alimentam o campo 'verificado' das resolucoes, que so
aparece DEPOIS da resposta (HANDOFF 5.6): nada daqui pode ir para legenda de
figura ou bloco de codigo.

Uso:  python ferramentas/verificar_presencial.py
"""
import heapq
import itertools
import sys

FALHAS = []


def confere(prova, condicao, descricao):
    print('%s  prova %2d  %s' % ('ok   ' if condicao else 'FALHA', prova,
                                 descricao))
    if not condicao:
        FALHAS.append((prova, descricao))


# ---------------------------------------------------------------- prova 1
def avl_inserir(no, v):
    """Arvore como (valor, esq, dir). Retorna a nova raiz balanceada."""
    if no is None:
        return (v, None, None)
    val, e, d = no
    if v < val:
        no = (val, avl_inserir(e, v), d)
    else:
        no = (val, e, avl_inserir(d, v))
    return balancear(no)


def altura(no):
    return 0 if no is None else 1 + max(altura(no[1]), altura(no[2]))


def rot_dir(no):
    val, (ve, ee, de), d = no
    return (ve, ee, (val, de, d))


def rot_esq(no):
    val, e, (vd, ed, dd) = no
    return (vd, (val, e, ed), dd)


def balancear(no):
    val, e, d = no
    fb = altura(e) - altura(d)
    if fb > 1:
        if altura(e[1]) < altura(e[2]):
            no = (val, rot_esq(e), d)
        return rot_dir(no)
    if fb < -1:
        if altura(d[2]) < altura(d[1]):
            no = (val, e, rot_dir(d))
        return rot_esq(no)
    return no


def T(v, e=None, d=None):
    return (v, e, d)


def prova_1():
    original = T(13, T(10, T(5, T(4), T(8)), T(11)), T(15, None, T(16)))
    resultado = avl_inserir(original, 3)
    alternativas = {
        'a': T(13, T(5, T(4, T(3)), T(10, T(8), T(11))), T(15, None, T(16))),
        'b': T(13, T(10, T(5, T(4, T(3)), T(8)), T(11)), T(15, None, T(16))),
        'c': T(10, T(5, T(4, T(3)), T(11, T(8))), T(13, T(15), T(16))),
        'd': T(10, T(5, T(4, T(3)), T(8)), T(13, T(11), T(15, None, T(16)))),
    }
    certas = [L for L, a in alternativas.items() if a == resultado]
    confere(1, certas == ['a'], 'AVL apos inserir 3 coincide so com a '
            'alternativa a (rotacao simples a direita no no 10)')


# ---------------------------------------------------------------- prova 4
def prova_4():
    confere(4, 2 ** 8 == 256, 'endereco de 8 bits enderecam 256 celulas')
    confere(4, (2024).bit_length() == 11 and 2 ** 8 - 1 < 2024,
            '2024 precisa de 11 bits: nao cabe numa celula de 8 bits')


# ---------------------------------------------------------------- prova 5
def prova_5():
    # niveis lidos do diagrama de tempo, intervalo t1..t8
    ta = [0, 1, 1, 0, 0, 1, 0, 1]
    tb = [1, 0, 0, 1, 0, 1, 0, 1]
    tc = [1, 0, 1, 0, 1, 1, 0, 0]
    s = [(a & b) | (b & c) for a, b, c in zip(ta, tb, tc)]
    acionado = ['t%d' % (i + 1) for i, v in enumerate(s) if v]
    confere(5, acionado == ['t1', 't6', 't8'],
            'S = Ta.Tb + Tb.Tc acionado em %s (alternativa b)' % acionado)


# ---------------------------------------------------------------- prova 6
def prova_6():
    A = range(0, 12)
    rel = {
        'R1': lambda a, b: a == b,
        'R2': lambda a, b: a <= b,
        'R3': lambda a, b: a == b - 1,
        'R4': lambda a, b: (a + b) % 2 == 0,
    }

    def equivalencia(r):
        refl = all(r(a, a) for a in A)
        sim = all(r(b, a) for a in A for b in A if r(a, b))
        trans = all(r(a, c) for a in A for b in A for c in A
                    if r(a, b) and r(b, c))
        return refl and sim and trans

    eq = [n for n, r in rel.items() if equivalencia(r)]
    confere(6, eq == ['R1', 'R4'], 'relacoes de equivalencia: %s' % eq)


# --------------------------------------------------------------- prova 10
def ordena(v, cond_while, atrib_10, inicio_j=-1):
    """Simula o algoritmo da questao com as variacoes das alternativas.
    Retorna None se acessar indice invalido (v[-1] em C e indefinido)."""
    v = list(v)
    n = len(v)
    for i in range(1, n):
        chave = v[i]
        j = i + inicio_j
        while j >= 0 and cond_while(v[j], chave):
            alvo = j + atrib_10
            if alvo < 0 or alvo >= n:
                return None
            v[alvo] = v[j]
            j -= 1
        if j + 1 >= n:
            return None
        v[j + 1] = chave
    return v


def prova_10():
    import random
    random.seed(10)
    casos = [random.sample(range(100), 8) for _ in range(200)]
    original = all(ordena(c, lambda x, k: x < k, -1) == sorted(c)
                   for c in casos)
    corrigido = all(ordena(c, lambda x, k: x > k, +1) == sorted(c)
                    for c in casos)
    so_08 = all(ordena(c, lambda x, k: x > k, -1) == sorted(c) for c in casos)
    so_10 = all(ordena(c, lambda x, k: x < k, +1) == sorted(c) for c in casos)
    confere(10, not original, 'o algoritmo original nao ordena')
    confere(10, corrigido, 'com a linha 08 (v[j] > chave) e a 10 '
            '(v[j+1] = v[j]) corrigidas, ordena: alternativa c')
    confere(10, not so_08 and not so_10,
            'corrigir so uma das duas linhas nao basta')


# --------------------------------------------------------------- prova 13
def prova_13():
    imp = lambda p, q: (not p) or q            # noqa: E731
    bic = lambda p, q: p == q                  # noqa: E731
    p3 = [imp(e, imp(a, r) or not r)
          for e, r, a in itertools.product([0, 1], repeat=3)]
    confere(13, all(p3), 'P3 e uma tautologia: (A -> R) v ~R e sempre '
            'verdadeiro, entao P3 nao restringe nada')
    # P2: se E, entao R <-> A. "Robo se autonomo, caso contrario nao robo"
    p2_falha = [(e, r, a) for e, r, a in itertools.product([0, 1], repeat=3)
                if not imp(e, bic(r, a))]
    confere(13, p2_falha == [(1, 0, 1), (1, 1, 0)],
            'P2 so e falsa para veiculo eletrico autonomo nao robo e '
            'eletrico robo nao autonomo')


# --------------------------------------------------------------- prova 14
def guloso(valor, moedas=(50, 25, 10, 5, 1)):
    n = 0
    for m in moedas:
        n += valor // m
        valor %= m
    return n


def otimo(valor, moedas=(1, 5, 10, 25, 50)):
    dp = [0] + [float('inf')] * valor
    for v in range(1, valor + 1):
        dp[v] = min(dp[v - m] + 1 for m in moedas if m <= v)
    return dp[valor]


def prova_14():
    confere(14, all(guloso(v) == otimo(v) for v in range(0, 1001)),
            'com moedas 1, 5, 10, 25, 50 o guloso e otimo de 0 a 1000 '
            'centavos (assercao I verdadeira)')
    contra = guloso(30, (25, 10, 1)) > otimo_g(30, (1, 10, 25))
    confere(14, contra, 'com moedas 1, 10 e 25 o guloso falha em 30 '
            '(25+1*5 = 6 moedas contra 10*3 = 3): assercao II falsa')


def otimo_g(valor, moedas):
    dp = [0] + [float('inf')] * valor
    for v in range(1, valor + 1):
        dp[v] = min(dp[v - m] + 1 for m in moedas if m <= v)
    return dp[valor]


# --------------------------------------------------------------- prova 16
ARESTAS_16 = [
    ('i', 'TE', 4), ('TE', 'TD', 2), ('TD', 'j', 1),
    ('i', 'M', 2), ('M', 'S', 1), ('S', 'j', 2),
    ('M', 'w', 2), ('w', 'j', 1), ('j', 'k', 2),
    ('i', 'IE', 1), ('IE', 'ID', 15), ('ID', 'j', 1),
]


def dijkstra(arestas, origem):
    adj = {}
    for a, b, p in arestas:
        adj.setdefault(a, []).append((b, p))
        adj.setdefault(b, []).append((a, p))
    dist = {origem: 0}
    fila = [(0, origem)]
    while fila:
        d, u = heapq.heappop(fila)
        if d > dist[u]:
            continue
        for v, p in adj[u]:
            if d + p < dist.get(v, float('inf')):
                dist[v] = d + p
                heapq.heappush(fila, (d + p, v))
    return dist


def kruskal(arestas, ordem):
    pai = {}

    def raiz(x):
        pai.setdefault(x, x)
        while pai[x] != x:
            x = pai[x]
        return x

    arvore = []
    for a, b, p in sorted(arestas, key=lambda e: (e[2], ordem.index(e))):
        ra, rb = raiz(a), raiz(b)
        if ra != rb:
            pai[ra] = rb
            arvore.append((a, b, p))
    return arvore


def prova_16():
    dist = dijkstra(ARESTAS_16, 'i')
    # todas as ordens de desempate entre arestas de mesmo peso
    pesos2 = [e for e in ARESTAS_16 if e[2] == 2]
    custos = set()
    for perm in itertools.permutations(pesos2):
        ordem = [e for e in ARESTAS_16 if e[2] != 2] + list(perm)
        mst = kruskal(ARESTAS_16, ordem)
        custos.add(dijkstra(mst, 'i')['k'])
    total = sum(p for _, _, p in kruskal(ARESTAS_16, ARESTAS_16))
    confere(16, total == 13, 'custo total da arvore geradora minima: %d'
            % total)
    confere(16, dist['k'] == 7, 'menor tempo de i a k: %d' % dist['k'])
    confere(16, custos == {7}, 'em qualquer desempate, o caminho i-k dentro '
            'da arvore de Kruskal custa 7, o minimo: item II verdadeiro '
            'neste grafo')
    dw = dijkstra(ARESTAS_16, 'w')
    confere(16, dist['w'] + dw['k'] == dist['k'],
            'w esta num caminho minimo i-k, e o trecho w-k custa %d, o minimo'
            % dw['k'])


# --------------------------------------------------------------- prova 17
def prova_17():
    chamadas = {}

    def fib(n, prof):
        chamadas['n'] = chamadas.get('n', 0) + 1
        chamadas['max'] = max(chamadas.get('max', 0), prof)
        if n < 2:
            return 1
        return fib(n - 2, prof + 1) + fib(n - 1, prof + 1)

    serie = []
    for n in (10, 20):
        chamadas.clear()
        fib(n, 1)
        serie.append((n, chamadas['n'], chamadas['max']))
    (n1, c1, p1), (n2, c2, p2) = serie
    confere(17, c2 / c1 > 100, 'chamadas: %d para n=%d e %d para n=%d '
            '(cresce exponencialmente)' % (c1, n1, c2, n2))
    confere(17, p1 == n1 and p2 == n2,
            'profundidade maxima da pilha = n (espaco linear, nao '
            'exponencial)')
    a, b = 1, 1
    for _ in range(2, 30):
        a, b = b, a + b
    confere(17, b == fib_ref(29), 'versao iterativa com duas variaveis '
            'confere: tempo linear, espaco constante')


def fib_ref(n):
    return 1 if n < 2 else fib_ref(n - 2) + fib_ref(n - 1)


# --------------------------------------------------------------- prova 21
def faltas(seq, quadros, politica):
    mem, faltas_ = [], 0
    for p in seq:
        if p in mem:
            if politica == 'LRU':
                mem.remove(p)
                mem.append(p)
            continue
        faltas_ += 1
        if len(mem) == quadros:
            mem.pop(0)
        mem.append(p)
    return faltas_


def prova_21():
    seq = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]
    f, l = faltas(seq, 4, 'FIFO'), faltas(seq, 4, 'LRU')
    confere(21, (f, l) == (10, 8), 'faltas com 4 quadros: FIFO %d, LRU %d '
            '(desempenhos diferentes: assercao I falsa)' % (f, l))
    f3 = faltas(seq, 3, 'FIFO')
    confere(21, f3 == 9, 'FIFO com 3 quadros: %d faltas, menos que com 4 '
            '(anomalia de Belady)' % f3)


# --------------------------------------------------------------- prova 22
def prova_22():
    G = {'X': [['a', 'Z', 'b', 'X', 'Y'], ['c']],
         'Y': [['d', 'X'], []],
         'Z': [['e']]}
    NT = set(G)
    first = {A: set() for A in NT}
    mudou = True
    while mudou:
        mudou = False
        for A, prods in G.items():
            for corpo in prods:
                f = set()
                for s in corpo:
                    fs = first[s] if s in NT else {s}
                    f |= fs - {'ε'}
                    if 'ε' not in fs:
                        break
                else:
                    f.add('ε')
                if not f <= first[A]:
                    first[A] |= f
                    mudou = True
    follow = {A: set() for A in NT}
    follow['X'].add('$')
    mudou = True
    while mudou:
        mudou = False
        for A, prods in G.items():
            for corpo in prods:
                for i, s in enumerate(corpo):
                    if s not in NT:
                        continue
                    f = set()
                    for t in corpo[i + 1:]:
                        ft = first[t] if t in NT else {t}
                        f |= ft - {'ε'}
                        if 'ε' not in ft:
                            break
                    else:
                        f |= follow[A]
                    if not f <= follow[s]:
                        follow[s] |= f
                        mudou = True
    confere(22, first['Y'] == {'d', 'ε'} and follow['Y'] == {'d', '$'},
            'FIRST(Y) = {d, ε} e FOLLOW(Y) = {d, $}: Y -> dX e Y -> ε caem '
            'ambas em (Y, d)')
    # ambiguidade: em aebaebcdc o par dc pode vir do Y interno ou do externo
    def derivacoes(simbolos, cadeia):
        if not simbolos:
            return 1 if not cadeia else 0
        s, resto = simbolos[0], simbolos[1:]
        if s not in NT:
            return derivacoes(resto, cadeia[1:]) if cadeia[:1] == s else 0
        return sum(derivacoes(list(c) + resto, cadeia) for c in G[s]
                   if len(list(c) + resto) <= len(cadeia) + 3)
    cadeia = 'aebaebcdc'
    confere(22, derivacoes(['X'], cadeia) >= 2,
            'a cadeia %s tem %d derivacoes mais a esquerda: G e ambigua'
            % (cadeia, derivacoes(['X'], cadeia)))


# --------------------------------------------------------------- prova 23
def prova_23():
    t1 = [('w', 'x'), ('r', 'y', '1')]
    t2 = [('w', 'y'), ('r', 'x', '2')]
    saidas = set()
    for ordem in set(itertools.permutations([1, 1, 2, 2])):
        mem = {'x': 0, 'y': 0}
        pos = {1: 0, 2: 0}
        impresso = []
        for t in ordem:
            op = (t1 if t == 1 else t2)[pos[t]]
            pos[t] += 1
            if op[0] == 'w':
                mem[op[1]] = 1
            elif mem[op[1]] == 0:
                impresso.append(op[2])
        saidas.add(' '.join(sorted(impresso)) or 'nada')
    confere(23, saidas == {'1', '2', 'nada'},
            'intercalacoes possiveis imprimem %s; nunca os dois'
            % sorted(saidas))


# --------------------------------------------------------------- prova 24
def prova_24():
    estados = list(itertools.product(['A', 'B'], [0, 1], [0, 1]))
    confere(24, len(estados) == 8, 'posicao do agente x sujeira em A x '
            'sujeira em B = 2 x 2^2 = %d estados, nao 4' % len(estados))


# --------------------------------------------------------------- prova 25
def prova_25():
    def F(n, cont):
        if n > 0:
            cont['g'] += n
            cont['f'] += 1
            F(n // 2, cont)

    for n in (1024, 1 << 20):
        cont = {'g': 0, 'f': 0}
        F(n, cont)
        confere(25, cont['g'] < 2 * n,
                'n=%d: G chamada %d vezes (< 2n, logo O(n) e tambem '
                'O(n log n))' % (n, cont['g']))
        confere(25, cont['f'] == n.bit_length(),
                'n=%d: %d execucoes de F com n > 0 (log2 n + 1)'
                % (n, cont['f']))


# --------------------------------------------------------------- prova 27
def prova_27():
    t1 = ['E1', 'E2']
    t2 = ['E2', 'E1']

    def trava(a, b):
        for ordem in set(itertools.permutations([1, 1, 2, 2])):
            dono = {}
            pos = {1: 0, 2: 0}
            bloqueio = False
            for t in ordem:
                seq = a if t == 1 else b
                r = seq[pos[t]]
                if r in dono:
                    bloqueio = True
                    break
                dono[r] = t
                pos[t] += 1
            if bloqueio:
                outro = 2 if t == 1 else 1
                seq_o = a if outro == 1 else b
                if pos[outro] < 2 and seq_o[pos[outro]] in dono \
                        and dono[seq_o[pos[outro]]] == t:
                    return True
        return False

    confere(27, trava(t1, t2), 'T1 pede E1 depois E2 e T2 pede E2 depois E1: '
            'existe intercalacao com espera circular')
    confere(27, not trava(t1, t1), 'pedindo na mesma ordem nas duas threads '
            'nao ha espera circular')


if __name__ == '__main__':
    for nome in sorted((n for n in dir() if n.startswith('prova_')),
                       key=lambda n: int(n.split('_')[1])):
        globals()[nome]()
    print()
    print('falhas:', len(FALHAS))
    sys.exit(1 if FALHAS else 0)
