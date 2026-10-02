# -*- coding: utf-8 -*-
"""Descricoes textuais das figuras da avaliacao presencial.

Mesma regra de figuras_alt.py: a legenda descreve APENAS o que esta desenhado,
nunca o que se conclui. Quem ve a imagem e quem le a legenda recebem a mesma
informacao. Nada de "portanto", "trata-se de" ou de resultados que o aluno
teria de deduzir. O ferramentas/auditar_vazamento.py confere isso a cada build.

As figuras das alternativas da questao 1 (p01_fig2 a p01_fig5) sao as proprias
alternativas: descreve-las e acessibilidade, nao vazamento, porque o aluno ve
todas elas antes de responder.
"""

ALT = {
    'p01_fig1.png':
        'Árvore AVL. Raiz 13. Filho esquerdo de 13: 10; filho direito: 15. '
        'Filhos de 10: 5 à esquerda e 11 à direita. 15 tem apenas o filho '
        'direito 16. Filhos de 5: 4 à esquerda e 8 à direita.',
    'p01_fig2.png':
        'Árvore com raiz 13. Filho esquerdo de 13: 5; filho direito: 15. '
        'Filhos de 5: 4 à esquerda e 10 à direita. 4 tem apenas o filho '
        'esquerdo 3. Filhos de 10: 8 à esquerda e 11 à direita. 15 tem '
        'apenas o filho direito 16.',
    'p01_fig3.png':
        'Árvore com raiz 13. Filho esquerdo de 13: 10; filho direito: 15. '
        'Filhos de 10: 5 à esquerda e 11 à direita. Filhos de 5: 4 à '
        'esquerda e 8 à direita. 4 tem apenas o filho esquerdo 3. 15 tem '
        'apenas o filho direito 16.',
    'p01_fig4.png':
        'Árvore com raiz 10. Filho esquerdo de 10: 5; filho direito: 13. '
        'Filhos de 5: 4 à esquerda e 11 à direita. 4 tem apenas o filho '
        'esquerdo 3. 11 tem apenas o filho esquerdo 8. Filhos de 13: 15 à '
        'esquerda e 16 à direita.',
    'p01_fig5.png':
        'Árvore com raiz 10. Filho esquerdo de 10: 5; filho direito: 13. '
        'Filhos de 5: 4 à esquerda e 8 à direita. 4 tem apenas o filho '
        'esquerdo 3. Filhos de 13: 11 à esquerda e 15 à direita. 15 tem '
        'apenas o filho direito 16.',

    'p04_fig1.png':
        'Esquema de uma memória de acesso aleatório. À esquerda, a coluna '
        '"Endereço" numera as células de 0, 1, 2, 3 até 2^N − 1. Ao centro, a '
        '"Memória" é uma pilha de células horizontais; a primeira está '
        'dividida em bits, com uma seta indicando "1 bit", e uma chave sob a '
        'pilha marca a "Largura da memória". À direita, o "Registrador de '
        'endereços da memória", de "N bits", tem uma seta apontando para a '
        'memória; abaixo, o "Registrador de dados da memória" tem setas nos '
        'dois sentidos entre ele e a memória.',

    'p05_fig1.png':
        'À esquerda, diagrama de tempo com três sinais digitais, Ta, Tb e Tc, '
        'em oito intervalos marcados t1 a t8. Ta: baixo em t1; alto em t2 e '
        't3; baixo em t4 e t5; alto em t6; baixo em t7; alto em t8. Tb: alto '
        'em t1; baixo em t2 e t3; alto em t4; baixo em t5; alto em t6; baixo '
        'em t7; alto em t8. Tc: alto em t1; baixo em t2; alto em t3; baixo em '
        't4; alto em t5 e t6; baixo em t7 e t8. À direita, circuito com duas '
        'portas AND e uma porta OR. A primeira AND recebe Ta e Tb; a segunda '
        'AND recebe Tb e Tc (Tb se ramifica para as duas). As saídas das duas '
        'AND entram na porta OR, cuja saída é S.',

    'p06_fig1.png':
        'Quatro relações binárias. R1 = {(a, b) : a, b ∈ ℕ e a = b}. '
        'R2 = {(a, b) : a, b ∈ ℕ e a ≤ b}. R3 = {(a, b) : a, b ∈ ℕ e '
        'a = b − 1}. R4 = {(a, b) : a, b ∈ ℕ e a + b é um número par}.',

    'p10_fig1.png':
        'Código em C da função ordena, com as linhas numeradas de 01 a 15.',

    'p11_fig1.png':
        'Diagrama entidade-relacionamento com quatro tabelas. Partido: '
        'idPartido INTEGER NOT NULL [PK], siglaPartido VARCHAR(45) NOT NULL, '
        'descricaoPartido VARCHAR(45) NOT NULL. Deputado: idPartido INTEGER '
        'NOT NULL [PK], idPartido INTEGER NOT NULL [FK], nomeDeputado '
        'VARCHAR(60) NOT NULL. Participacao: idSecao INTEGER NOT NULL [PFK], '
        'idDeputado INTEGER NOT NULL [PFK]. Secao: idSecao INTEGER NOT NULL '
        '[PK], dataSecao DATE NOT NULL, horaSecao TIME NOT NULL, decisao '
        'VARCHAR(2000) NOT NULL. Linhas de relacionamento ligam Partido a '
        'Deputado, Deputado a Participacao e Participacao a Secao.',

    'p13_fig1.png':
        'Três proposições lógicas. P1 = (E ∧ R) ↔ A. P2 = E → (R ↔ A). '
        'P3 = E → ((A → R) ∨ ¬R).',

    'p14_fig1.png':
        'Código Java do método troco, que recebe um valor inteiro em '
        'centavos e devolve um vetor de cinco posições.',

    'p16_fig1.png':
        'Grafo não direcionado e ponderado com dez vértices; quatro têm nome '
        '(i, w, j e k) e seis não têm. Partindo de i há três rotas até j. '
        'Rota de cima: i liga-se a um vértice sem nome com peso 4, que se '
        'liga a outro vértice sem nome com peso 2, que se liga a j com peso '
        '1. Rota do meio: i liga-se a um vértice sem nome com peso 2; desse '
        'vértice saem duas arestas, uma de peso 1 para outro vértice sem nome '
        '(que se liga a j com peso 2) e outra de peso 2 para w (que se liga a '
        'j com peso 1). Rota de baixo: i liga-se a um vértice sem nome com '
        'peso 1, que se liga a outro vértice sem nome com peso 15, que se '
        'liga a j com peso 1. Por fim, j liga-se a k com peso 2.',

    'p17_fig1.png':
        'Código em C da função recursiva fib.',

    'p18_fig1.png':
        'Imagem de ressonância magnética, em tons de cinza, de um corte '
        'lateral da cabeça humana, mostrando o cérebro, o cerebelo e a coluna '
        'cervical. Toda a imagem, inclusive o fundo preto, está salpicada de '
        'pontos brancos e pretos isolados.',

    'p19_fig1.png':
        'Duas renderizações em vermelho da mesma cabeça humana. À esquerda, '
        'a superfície aparece formada por faces planas, com cada polígono '
        'visível em um tom uniforme. À direita, a superfície é lisa, com '
        'transições suaves de tom e pontos de brilho. Legenda: Disponível '
        'em: <https://www.cs.cmu.edu>. Acesso em: 17 jul 2017.',

    'p22_fig1.png':
        'Regras de produção da gramática G: X → aZbXY | c; Y → dX | ε; '
        'Z → e.',
    'p22_fig2.png':
        'Tabela LL(1) com linhas X, Y e Z e colunas a, b, c, d, e e $. Linha '
        'X: em a, X → aZbXY; em c, X → c. Linha Y: em d, duas produções, '
        'Y → dX e Y → ε; em $, Y → ε. Linha Z: em e, Z → e. As demais '
        'células estão vazias.',

    'p23_fig1.png':
        'Programa em C com duas threads que compartilham as variáveis x e y.',

    'p24_fig1.png':
        'Desenho com dois quadrados lado a lado, "Ambiente A" e "Ambiente '
        'B". No Ambiente A há um aspirador de pó e um monte de sujeira. No '
        'Ambiente B há apenas um monte de sujeira.',

    'p25_fig1.png':
        'Código em C da função recursiva F, com as linhas numeradas de 1 a 8.',

    'p26_fig1.png':
        'Tabela com as colunas Numero, Titulo, Zona, Seção, UF, NomeEleitor, '
        'FoneEleitor, Sigla, NomePartido, NumCand e NomeCand. Linha 1: '
        'Numero 1, Titulo 11111111111, Zona 40, Seção 999, UF DF, '
        'NomeEleitor Pessoa1, FoneEleitor com dois valores (11111-1111 e '
        '22222-2222), Sigla P1, NomePartido Partido1, NumCand 99, NomeCand '
        'Candidato1. Linha 2: Numero 2, Titulo 22222222222, Zona 22, Seção '
        '888, UF RR, NomeEleitor Pessoa2, FoneEleitor com dois valores '
        '(33333-3333 e 44444-4444), Sigla P2, NomePartido Partido2, NumCand '
        '88, NomeCand Candidato2.',

    'p27_fig1.png':
        'Tabela com os passos das threads T1 e T2, lado a lado. T1: aloca '
        'E1; calcula a média M1 dos valores de E1; aloca E2; calcula a média '
        'M2 dos valores de E2; calcula M3 = M1 + M2; soma M3 em todos os '
        'valores de E2; libera E1; libera E2. T2: aloca E2; calcula a soma '
        'S1 de todos os valores de E2; aloca E1; calcula a soma S2 de todos '
        'os valores de E1; calcula S3 = |S1 − S2|; subtrai S2 de todos os '
        'valores de E1; libera E2; libera E1.',
}
