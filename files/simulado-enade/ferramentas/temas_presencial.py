# -*- coding: utf-8 -*-
"""Temas da avaliacao presencial (Enade 2017), para exibicao no site.

A area antes do travessao segue a classificacao de conteudo que o INEP
atribuiu a cada questao no relatorio de curso de 2017.
"""

TEMAS = {
    1: 'Estruturas de dados — árvore AVL',
    2: 'Engenharia de Software — padrão Observer',
    3: 'Paradigmas de programação — encapsulamento',
    4: 'Arquitetura — memória de acesso aleatório',
    5: 'Sistemas digitais — circuito e diagrama de tempo',
    6: 'Matemática discreta — relações de equivalência',
    7: 'Redes — ataque homem no meio e ARP spoofing',
    8: 'Ética e segurança — engenharia social',
    9: 'Inteligência Artificial — IA na educação',
    10: 'Algoritmos — ordenação por inserção (C)',
    11: 'Banco de Dados — SQL com junções',
    12: 'Redes — TCP e UDP',
    13: 'Lógica — proposições e conectivos',
    14: 'Programação — algoritmo guloso do troco',
    15: 'Teoria da Computação — linguagens regulares',
    16: 'Grafos — Dijkstra, Kruskal e caminhos mínimos',
    17: 'Teoria da Computação — complexidade de Fibonacci',
    18: 'Processamento de imagens — ruído sal e pimenta',
    19: 'Computação gráfica — modelos de iluminação',
    20: 'Engenharia de Software — Scrum e manifesto ágil',
    21: 'Sistemas Operacionais — substituição de páginas',
    22: 'Compiladores — tabela LL(1)',
    23: 'Sistemas distribuídos — threads e concorrência',
    24: 'Inteligência Artificial — agentes inteligentes',
    25: 'Teoria da Computação — recorrência e complexidade',
    26: 'Banco de Dados — formas normais',
    27: 'Sistemas Operacionais — deadlock com semáforos',
}

assert sorted(TEMAS) == list(range(1, 28))
