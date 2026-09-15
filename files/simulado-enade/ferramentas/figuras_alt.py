# -*- coding: utf-8 -*-
"""Descrições textuais das 17 figuras.

Servem a dois propósitos: acessibilidade (alt text) e substituição da figura
quando ela não carrega.

REGRA, aprendida errando: a legenda descreve APENAS o que está desenhado na
figura, e nunca o que se conclui dela. Um aluno que enxerga a imagem e um que
lê a legenda precisam ter exatamente a mesma informação — nem mais, nem menos.

A versão anterior deste arquivo dizia que a descrição devia ser "completa o
bastante para responder à questão sem ver a imagem". Isso está errado e
entregou a resposta de graça: a legenda da questão 8 terminava informando qual
era a expressão booleana do circuito, que é literalmente a alternativa correta,
e a da 14 concluía qual entidade recebia as chaves estrangeiras. Descrever a
topologia do circuito é acessibilidade; dizer a que expressão ela equivale é
gabarito.

Na dúvida: se a frase começa com "portanto", "trata-se de", "a expressão
resultante é" ou qualquer coisa que um aluno teria de deduzir olhando a figura,
ela não pertence aqui. Vai para a resolução.

O ferramentas/auditar_vazamento.py verifica isso a cada build.
"""

ALT = {
    'q03_fig1.png':
        'Fluxograma do treinamento de uma rede neural profunda. Do topo para '
        'baixo: "Entrada (X)" alimenta a "Camada de Entrada", que leva a '
        'camadas intermediárias (representadas por reticências e por uma '
        '"Camada Intermediária n") e depois à "Camada de Saída", produzindo '
        'as "Saídas Previstas (Y\')". Essas saídas e as "Saídas Reais (Y)" '
        'entram na "Função de Perda", cujo resultado é somado e enviado a um '
        '"Otimizador". O otimizador faz o "Ajuste dos pesos", realimentando '
        'as caixas "Pesos 1", "Pesos" e "Pesos n", que por sua vez alimentam '
        'as respectivas camadas. Fonte: Chollet, Deep Learning with Python, '
        '2017.',

    'q08_fig1.png':
        'Legenda com os símbolos das três portas lógicas básicas: a porta "e" '
        '(AND), desenhada como um retângulo de lado direito arredondado; a '
        'porta "ou" (OR), com entrada côncava e saída em ponta; e a porta '
        '"não" (NOT), um triângulo com um pequeno círculo na saída. O círculo '
        'é o símbolo da negação.',

    'q08_fig2.png':
        'Circuito combinacional com três entradas empilhadas à esquerda: X1 '
        'no topo, X2 no meio e X3 embaixo. X1 atravessa um inversor, '
        'produzindo X1 negado. X2 atravessa outro inversor, produzindo X2 '
        'negado. X2 negado e X3 entram juntos numa porta AND. A saída dessa '
        'porta AND e o X1 negado entram numa porta OR. A saída da porta OR '
        'atravessa um último inversor, que é a saída do circuito.',

    'q09_fig1.png':
        'Diagrama de tempo com duas linhas horizontais, "Processo A" em cima '
        'e "Processo B" embaixo, e o tempo crescendo para a direita, marcado '
        'nos instantes T1, T2, T3 e T4. O processo A ocupa a região crítica '
        '(faixa cinza) de T1 a T3: entra em T1 e sai em T3. O processo B '
        'tenta entrar na região crítica em T2, mas fica bloqueado no '
        'intervalo de T2 a T3, indicado por uma chave rotulada "B bloqueado". '
        'Assim que A sai, em T3, B entra na região crítica e permanece até '
        'T4. O diagrama ilustra que os dois processos nunca ocupam a região '
        'crítica ao mesmo tempo. Fonte: Tanenbaum, Sistemas Operacionais '
        'Modernos, 4. ed., p. 83.',

    'q12_fig1.png':
        'Listagem de código em linguagem C com 26 linhas numeradas. Define '
        'TAM igual a 10; a funcao1, que percorre o vetor do início ao fim '
        'comparando cada posição com o valor procurado (busca linear) e '
        'devolve o índice ou -1; e a funcao2, que calcula o meio do intervalo '
        'e chama a si mesma na metade esquerda ou direita conforme a '
        'comparação (busca binária recursiva). Na linha 23 o vetor é '
        'inicializado ordenado como {1, 3, 5, 7, 9, 11, 13, 15, 17, 19} e a '
        'linha 24 imprime o resultado das duas buscas pelo valor 15.',

    'q13_fig1.png':
        'Duas figuras lado a lado. A figura 1 é uma tabela que associa cada '
        'camada ao dispositivo que nela opera: camada de aplicação, gateway '
        'de aplicação; camada de transporte, gateway de transporte; camada de '
        'rede, roteador; camada de enlace de dados, bridge e switch; camada '
        'física, repetidor e hub. A figura 2 mostra o encapsulamento de um '
        'quadro, com os campos em sequência: cabeçalho de quadro, cabeçalho '
        'de pacote, cabeçalho TCP, dados do usuário e CRC. O trecho do '
        'cabeçalho de pacote até os dados do usuário é identificado como o '
        'pacote fornecido pela camada de rede, e o conjunto inteiro como o '
        'quadro feito pela camada de enlace de dados. Fonte: Tanenbaum e '
        'Wetherall, Redes de Computadores, 5. ed., p. 213 e 214.',

    'q14_fig1.png':
        'Diagrama entidade-relacionamento com três entidades. TIPO_PET tem os '
        'atributos codigo (chave primária, marcada com círculo preenchido) e '
        'descricao. PESSOA tem cpf (chave primária) e nome. PET tem codigo '
        '(chave primária), nome e data_nascimento. TIPO_PET liga-se a PET '
        'pelo relacionamento "pertencer", com cardinalidade (1,1) do lado de '
        'TIPO_PET e (1,n) do lado de PET. PESSOA liga-se a PET pelo '
        'relacionamento "adotar", com cardinalidade (1,1) do lado de PESSOA e '
        '(0,n) do lado de PET.',

    'q15_fig1.png':
        'Exemplo genérico de árvore binária, com letras nos nós. A raiz é J. '
        'A subárvore esquerda de J tem raiz D, cujo filho esquerdo é A. A '
        'subárvore direita de J tem raiz O, com filho esquerdo L e filho '
        'direito R; L, por sua vez, tem filhos K à esquerda e M à direita. '
        'Esta figura é apenas ilustrativa do conceito de árvore binária: a '
        'questão pede a construção de outra árvore, a partir da lista '
        'numérica dada no enunciado. Fonte: Laureano, Estrutura de Dados com '
        'Algoritmos, 2008.',

    'q19_fig1.png':
        'Histograma de 20 000 servidores. O eixo horizontal, rotulado '
        '"Capacidade", vai de cerca de 122 a 234 requisições simultâneas; o '
        'eixo vertical, "Frequência", vai de 0 a 2 000. As barras formam uma '
        'curva simétrica em forma de sino, com o pico próximo de 1 850 '
        'servidores em torno do valor 168 a 171, e caudas que se aproximam de '
        'zero nas duas extremidades. Um quadro no canto superior direito '
        'informa: Média 171 e Desvio Padrão 10. Fonte: openintro.org.',

    'q20_fig1.png':
        'Duas figuras. A figura 1 mostra o pipeline como cinco caixas em '
        'sequência: S1, unidade de busca de instrução; S2, unidade de '
        'decodificação de instrução; S3, unidade de busca de operando; S4, '
        'unidade de execução de instrução; e S5, unidade de gravação. A '
        'figura 2 é um diagrama de ocupação ao longo de nove ciclos de '
        'relógio: cada linha corresponde a um estágio (S1 a S5) e cada coluna '
        'a um ciclo (1 a 9). O estágio S1 processa a instrução 1 no ciclo 1, '
        'a instrução 2 no ciclo 2 e assim por diante; cada estágio seguinte '
        'começa um ciclo depois do anterior, formando uma escada diagonal. A '
        'partir do ciclo 5 os cinco estágios trabalham simultaneamente, cada '
        'um numa instrução diferente. Fonte: Tanenbaum, Organização '
        'Estruturada de Computadores, 5. ed., p. 35.',

    'q21_fig1.png':
        'Exemplo associado à afirmação I. A letra "j" manuscrita, em traço '
        'preto grosso sobre fundo branco, é transformada por uma seta '
        'rotulada "Dilatação" numa versão da mesma letra com traço '
        'visivelmente MAIS FINO, quase apenas o contorno.',

    'q21_fig2.png':
        'Exemplo associado à afirmação II. A letra "j" manuscrita é '
        'transformada por uma seta rotulada "Dilatação" numa versão com traço '
        'visivelmente MAIS GROSSO e mais escuro.',

    'q21_fig3.png':
        'Exemplo associado à afirmação III. A letra "j" manuscrita é '
        'transformada por uma seta rotulada "Erosão" numa versão com traço '
        'MAIS FINO, quase apenas o contorno.',

    'q21_fig4.png':
        'Exemplo associado à afirmação IV. A letra "j" manuscrita é '
        'transformada por uma seta rotulada "Erosão" numa versão com traço '
        'MAIS GROSSO e mais escuro.',

    'q23_fig1.png':
        'Diagrama de estados da máquina de Turing M, com os estados q0 a q7 e '
        'o estado final qf, desenhado com círculo duplo. O estado inicial é '
        'q0. As transições, no formato "leitura/escrita movimento", são: de '
        'q0, lendo 0, escreve B e vai à direita para q1; de q0, lendo 1, '
        'escreve B e vai à direita para q5. Em q1 há um laço próprio que '
        'mantém 0 ou 1 e anda à direita; lendo B, q1 mantém B, anda à '
        'esquerda e vai para q2. De q2, lendo 0, escreve B, anda à esquerda e '
        'vai para q3. De q3, lendo 0 ou 1, mantém o símbolo, anda à esquerda '
        'e vai para q4; lendo B, mantém B, anda à direita e vai para qf. Em '
        'q4 há um laço próprio que mantém 0 ou 1 e anda à esquerda; lendo B, '
        'q4 mantém B, anda à direita e volta para q0. O ramo inferior é '
        'simétrico: em q5 há um laço que mantém 0 ou 1 e anda à direita; '
        'lendo B, q5 mantém B, anda à esquerda e vai para q6. De q6, lendo 1, '
        'escreve B, anda à esquerda e vai para q7. De q7, lendo 0 ou 1, '
        'mantém o símbolo, anda à esquerda e vai para q4; lendo B, mantém B, '
        'anda à direita e vai para qf.',

    'q24_fig1.png':
        'Pseudocódigo de dois algoritmos. O algoritmo "ordena(A, lo, hi)": se '
        'lo for menor que hi, então p recebe particao(A, lo, hi), e em '
        'seguida chama ordena(A, lo, p - 1) e ordena(A, p + 1, hi). O '
        'algoritmo "particao(A, lo, hi)": pivot recebe A[hi]; i recebe lo; '
        'repita para j de lo até hi, e se A[j] for menor que pivot então '
        'troca A[i] com A[j] e incrementa i; ao final troca A[i] com A[hi] e '
        'retorna i.',

    'q26_fig1.png':
        'Dígrafo com pesos e sete vértices rotulados de A a G. Os arcos '
        'orientados, com seus pesos, são: de D para A com peso 5; de D para B '
        'com peso 9; de D para E com peso 5; de D para F com peso 1; de A '
        'para B com peso 2; de B para C com peso 8; de E para B com peso 1; '
        'de E para C com peso 5; de F para E com peso 3; de F para G com peso '
        '1; e de G para E com peso 1. O vértice D, à esquerda, é a origem da '
        'busca.',
}
