# -*- coding: utf-8 -*-
"""Resolucoes comentadas da avaliacao presencial, questoes 15 a 27.

Formato descrito em resolucoes_presencial_a.py.
"""

RB = {}

RB[15] = {
    'itens': {
        'I': 'VERDADEIRA. Pelos exemplos, a cadeia pertence a L quando cada '
             '"(" é fechado por um ")", ou seja, quando os parênteses abertos '
             'têm fechamento correspondente. Reconhecer isso exige contar '
             'quantos "(" ainda estão abertos, e esse número não tem limite. '
             'Pelo lema do bombeamento, a linguagem não é regular: tomando '
             'uma cadeia com p "(" seguidos de p ")", bombear um trecho só '
             'de "(" deixa parênteses sem fechamento.',
        'II': 'VERDADEIRA, e justifica a I. Um autômato finito tem um número '
              'fixo de estados e nenhuma memória além do estado atual, então '
              'só consegue distinguir uma quantidade limitada de contagens. '
              'Por isso não reconhece linguagens que exigem contagem '
              'ilimitada, e é exatamente o que torna L não regular.',
    },
    'correta': 'As duas são verdadeiras e a II é a razão da I: L não é '
               'regular PORQUE reconhecê-la exige contar sem limite, e '
               'autômatos finitos não contam sem limite. Um autômato com '
               'pilha conta, e L é livre de contexto.',
    'distratores': {
        'b': 'Diz que a II não justifica a I. Mas a limitação de memória do '
             'autômato finito é justamente o motivo da não regularidade.',
        'c': 'Diz que a II é falsa. Ela é a caracterização clássica do '
             'limite dos autômatos finitos.',
        'd': 'Diz que a I é falsa, ou seja, que L seria regular. Isso exigiria '
             'um autômato finito que contasse parênteses sem limite.',
    },
    'conceito': 'Linguagens regulares são as reconhecidas por autômatos '
                'finitos, que só têm memória finita. O exemplo canônico de '
                'linguagem não regular é aⁿbⁿ, e parênteses balanceados são '
                'a mesma ideia. Para isso é preciso pilha: linguagens livres '
                'de contexto.',
    'pegadinha': 'A definição de L no enunciado é informal ("para cada '
                 'ocorrência de ( existe uma ocorrência de )"). Os exemplos '
                 'é que deixam claro o que se quer: o fechamento de cada '
                 'parêntese aberto.',
    'referencia': 'SIPSER, M. Introdução à teoria da computação. 2. ed. São '
                  'Paulo: Cengage Learning, 2007.',
}

RB[16] = {
    'itens': {
        'I': 'VERDADEIRA. Todos os pesos são positivos, e essa é a condição '
             'para o Dijkstra funcionar. A partir de i, ele encontra o menor '
             'tempo até cada uma das outras cidades.',
        'II': 'VERDADEIRA neste grafo. A árvore geradora mínima tem custo '
              'total 13 e, qualquer que seja a ordem de desempate entre as '
              'arestas de peso 2, o caminho de i a k dentro dela custa 7, que '
              'é o menor tempo possível de i até k. Ela passa pela rota do '
              'meio (2 + 1 + 2 + 2 ou 2 + 2 + 1 + 2). Atenção: isso é '
              'propriedade DESTE grafo, e não do Kruskal. Em geral a árvore '
              'geradora mínima não preserva caminhos mínimos.',
        'III': 'VERDADEIRA. É a subestrutura ótima dos caminhos mínimos: se '
               'houvesse um caminho mais curto de w até k, bastaria trocá-lo '
               'no caminho i → k e obter um caminho de i a k mais curto que o '
               'mínimo, o que é absurdo. É essa propriedade que justifica o '
               'Dijkstra e o Bellman-Ford.',
    },
    'correta': 'As três afirmações são verdadeiras, e o gabarito oficial do '
               'INEP (questão 24 do Enade 2017) também é "I, II e III". A '
               'que exige mais cuidado é a II: ela é verdadeira por causa '
               'dos pesos deste grafo, e é preciso fazer a conta para '
               'confirmar.',
    'distratores': {
        'a': 'Deixa de fora a III, que é a propriedade fundamental dos '
             'caminhos mínimos, e a II.',
        'b': 'Deixa de fora a II. É a resposta de quem lembra que "a árvore '
             'geradora mínima não preserva caminhos mínimos" e não confere '
             'neste grafo. Aqui, o caminho de i a k na árvore custa 7, o '
             'mínimo.',
        'c': 'Deixa de fora a I. Com pesos positivos, o Dijkstra encontra os '
             'menores caminhos a partir da origem.',
    },
    'conceito': 'Árvore geradora mínima e árvore de caminhos mínimos são '
                'objetos diferentes: a primeira minimiza a soma de TODAS as '
                'arestas; a segunda, a distância de uma origem a cada vértice. '
                'Às vezes coincidem num caminho específico, como aqui, mas '
                'não há garantia.',
    'pegadinha': 'Responder pela regra geral sem olhar o grafo. A afirmação '
                 'II é sobre "esse grafo", e nele ela vale. A regra geral é '
                 'verdadeira (a árvore geradora mínima não garante caminhos '
                 'mínimos), mas não decide o caso concreto.',
    'referencia': 'CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. '
                  'Rio de Janeiro: Elsevier, 2012.',
    'verificado': 'Dijkstra e Kruskal executados no grafo da figura, testando '
                  'todas as ordens de desempate entre as arestas de peso 2: '
                  'menor tempo de i a k = 7, e o caminho i-k na árvore '
                  'geradora mínima custa 7 em todos os casos.',
}

RB[17] = {
    'itens': {
        'I': 'VERDADEIRA. Cada chamada com n ≥ 2 faz duas chamadas, e o '
             'número total cresce como a própria sequência de Fibonacci, '
             'Θ(φⁿ) com φ ≈ 1,618. É exponencial em n.',
        'II': 'FALSA. O espaço de uma função recursiva é a profundidade '
              'máxima da pilha, e não o total de chamadas. As chamadas não '
              'ficam todas abertas ao mesmo tempo: a cadeia mais longa é n, '
              'n − 1, n − 2, …, 1. O espaço é Θ(n), linear.',
        'III': 'VERDADEIRA. Basta guardar os dois últimos termos e avançar '
               'num laço: n iterações (tempo linear) com duas variáveis '
               '(espaço constante).',
    },
    'correta': 'I e III são verdadeiras: a versão recursiva ingênua é '
               'exponencial no tempo, e a iterativa resolve o mesmo problema '
               'em tempo linear e espaço constante.',
    'distratores': {
        'a': 'Deixa de fora a III. A versão iterativa com duas variáveis é '
             'linear no tempo e constante no espaço.',
        'b': 'Marca só a II, que é falsa: o espaço é a altura da pilha, Θ(n).',
        'd': 'Inclui a II e deixa de fora a I, que é a mais conhecida das '
             'três.',
    },
    'conceito': 'Na recursão, o tempo é o tamanho da árvore de chamadas e o '
                'espaço é a altura dela. A de fib tem cerca de φⁿ nós, mas '
                'altura n.',
    'pegadinha': 'Achar que, se o tempo é exponencial, o espaço também é. A '
                 'pilha guarda só o caminho atual da raiz até a folha, e não '
                 'a árvore inteira.',
    'referencia': 'CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. '
                  'Rio de Janeiro: Elsevier, 2012.',
    'verificado': 'Executado: 177 chamadas para n = 10 e 21 891 para n = 20, '
                  'com profundidade máxima da pilha igual a n.',
}

RB[18] = {
    'itens': {},
    'correta': 'O ruído sal e pimenta são pixels isolados com valores '
               'extremos (preto ou branco). O filtro da mediana troca cada '
               'pixel pela mediana da vizinhança. Um valor extremo isolado '
               'nunca é a mediana, então some, e numa borda a mediana fica '
               'com o valor de um dos lados, sem misturar os dois. Atenua o '
               'ruído e preserva as bordas, exatamente o que se pede.',
    'distratores': {
        'a': 'O filtro da média também atenua o ruído, mas espalha os '
             'valores extremos pela vizinhança e borra as bordas, porque '
             'mistura os dois lados delas.',
        'b': 'O Laplaciano é um filtro de realce: destaca bordas e '
             'variações bruscas. Num pixel de ruído isolado, ele AUMENTA o '
             'contraste em vez de removê-lo.',
        'c': 'O filtro do mínimo (erosão em tons de cinza) remove o "sal", '
             'os pontos brancos, mas espalha a "pimenta", os pontos pretos, e '
             'ainda encolhe as regiões claras.',
    },
    'conceito': 'Filtros lineares (média, gaussiano) suavizam tudo por igual. '
                'Filtros de ordem (mediana, mínimo, máximo) escolhem um valor '
                'da vizinhança ordenada. A mediana é o filtro clássico para '
                'ruído impulsivo, porque descarta os extremos.',
    'pegadinha': 'A média é o primeiro filtro de suavização que se aprende, e '
                 'atenua o ruído. O que a elimina é a segunda exigência: '
                 'preservar as bordas.',
    'referencia': 'GONZALEZ, R. C.; WOODS, R. E. Processamento digital de '
                  'imagens. 3. ed. São Paulo: Pearson, 2010.',
}

RB[19] = {
    'itens': {
        'I': 'VERDADEIRA. No sombreamento constante (flat) cada face tem uma '
             'cor só, e o olho exagera o contraste nas arestas entre faces '
             'vizinhas. É o efeito de bandas de Mach, visível na cabeça da '
             'esquerda.',
        'II': 'FALSA. O modelo de Phong é justamente conhecido por '
              'representar bem as reflexões especulares (os brilhos). Ele '
              'tem um termo especular próprio, controlado por um expoente de '
              'brilho, como se vê nos pontos claros da cabeça da direita.',
        'III': 'VERDADEIRA. Como cada polígono recebe uma cor única, a '
               'superfície aparece facetada, e o resultado não é realista '
               'para superfícies curvas.',
        'IV': 'FALSA. O modelo de Phong não exige luz no infinito. A luz '
              'pode ser pontual e estar a qualquer distância. Supor luz '
              'distante é uma simplificação opcional, que deixa o vetor da '
              'luz constante e barateia o cálculo.',
    },
    'correta': 'I e III são verdadeiras. As duas descrevem os defeitos '
               'visíveis do sombreamento constante: bandas de Mach e '
               'aspecto facetado.',
    'distratores': {
        'a': 'Inclui a II. O ponto forte do Phong é justamente o brilho '
             'especular.',
        'c': 'Inclui a IV. Fonte de luz no infinito é uma simplificação, e '
             'não um requisito do modelo.',
        'd': 'Inclui a II e a IV, que são falsas, e deixa de fora a I.',
    },
    'conceito': 'Três níveis de sombreamento: constante (uma cor por face), '
                'Gouraud (cor calculada nos vértices e interpolada) e Phong '
                '(normal interpolada e iluminação calculada por pixel, com '
                'especular de boa qualidade).',
    'pegadinha': 'A II começa com um elogio verdadeiro ("útil para gerar '
                 'imagens realísticas") e esconde o erro no fim. É preciso '
                 'ler a afirmação até a última palavra.',
    'referencia': 'AZEVEDO, E.; CONCI, A. Computação gráfica: geração de '
                  'imagens. Rio de Janeiro: Campus, 2003.',
}

RB[20] = {
    'itens': {
        'I': 'VERDADEIRA. A sprint é um ciclo curto e fixo ao fim do qual se '
             'entrega um incremento potencialmente utilizável do produto. É '
             'a entrega incremental do manifesto.',
        'II': 'FALSA. Programação em pares é uma prática do Extreme '
              'Programming (XP), e não do Scrum. O Scrum é um framework de '
              'gerenciamento e não prescreve práticas de engenharia.',
        'III': 'VERDADEIRA. O cliente participa por meio do Product Owner, '
               'que prioriza o backlog do produto e negocia com o time o que '
               'entra em cada sprint, na reunião de planejamento.',
    },
    'correta': 'I e III são verdadeiras: sprints realizam a entrega '
               'incremental, e o backlog priorizado pelo Product Owner '
               'realiza o envolvimento do cliente.',
    'distratores': {
        'a': 'Marca só a II, que atribui ao Scrum uma prática do XP.',
        'b': 'Deixa de fora a I. A sprint é o próprio mecanismo de entrega '
             'incremental do Scrum.',
        'c': 'Inclui a II. Programação em pares não faz parte do Scrum.',
    },
    'conceito': 'O Scrum define papéis (Product Owner, Scrum Master, time), '
                'eventos (sprint, planejamento, reunião diária, revisão, '
                'retrospectiva) e artefatos (backlogs e incremento). Práticas '
                'técnicas como programação em pares, TDD e integração '
                'contínua vêm do XP.',
    'pegadinha': 'Misturar métodos ágeis. Como Scrum e XP são usados juntos '
                 'com frequência, as práticas de um acabam atribuídas ao '
                 'outro.',
    'referencia': 'SOMMERVILLE, I. Engenharia de software. 9. ed. São Paulo: '
                  'Pearson, 2011.',
}

RB[21] = {
    'itens': {
        'I': 'FALSA. Simulando com 4 quadros e a sequência '
             '1-2-3-4-1-2-5-1-2-3-4-5: o FIFO tem 10 faltas de página e o '
             'LRU, 8. O desempenho é diferente.',
        'II': 'FALSA. A simulação basta para distinguir os algoritmos, e '
              'mostrou a diferença. Aliás, essa é a sequência clássica da '
              'anomalia de Belady: com 3 quadros o FIFO tem 9 faltas e com 4 '
              'tem 10, mais quadros e mais faltas.',
    },
    'correta': 'As duas asserções são falsas. A conta, feita página a página, '
               'dá 10 faltas no FIFO e 8 no LRU.',
    'distratores': {
        'a': 'Exige as duas verdadeiras. A I cai na primeira conta.',
        'b': 'Diz que a I é verdadeira, ou seja, que FIFO e LRU empatam. '
             'Não empatam: 10 contra 8.',
        'c': 'Diz que a II é verdadeira. Os parâmetros bastaram para mostrar '
             'a diferença.',
    },
    'conceito': 'FIFO substitui a página que está há mais tempo na memória; '
                'LRU, a que está há mais tempo sem uso. O LRU é uma '
                'aproximação do ótimo e não sofre a anomalia de Belady; o '
                'FIFO sofre.',
    'pegadinha': 'Responder sem simular. A questão parece pedir opinião sobre '
                 'os algoritmos, mas a resposta sai de contar as faltas, que '
                 'leva um minuto no papel.',
    'referencia': 'TANENBAUM, A. S. Sistemas operacionais modernos. 3. ed. São '
                  'Paulo: Pearson, 2010.',
    'verificado': 'Simulação executada: FIFO com 4 quadros = 10 faltas; LRU '
                  'com 4 quadros = 8 faltas.',
}

RB[22] = {
    'itens': {},
    'correta': 'As duas produções caem em (Y, d) por motivos diferentes. Y → '
               'dX entra porque começa com d. Y → ε entra porque d está em '
               'FOLLOW(Y): na regra X → aZbXY, o que vem depois de X é Y, que '
               'pode começar com d. Isso é sintoma de ambiguidade, como no '
               '"else pendente": numa cadeia como a e b a e b c d c, o par "d '
               'c" pode ser gerado pelo Y do X interno ou pelo do X externo, '
               'com duas árvores de derivação diferentes. Gramática ambígua '
               'nunca é LL(1), e o conflito é inevitável.',
    'distratores': {
        'b': 'O ε está usado corretamente em Y → ε. A cadeia vazia é '
             'permitida em gramáticas livres de contexto, e a tabela foi '
             'construída certo, como diz o enunciado.',
        'c': 'Produções com um único terminal no corpo (X → c, Z → e) não '
             'causam conflito: cada uma ocupa a célula do próprio terminal.',
        'd': 'Ter várias produções com a mesma cabeça é normal (X tem duas, '
             'Y tem duas). O conflito surge quando os conjuntos de previsão '
             'delas se sobrepõem, e não pelo fato de compartilharem a cabeça.',
    },
    'conceito': 'Na tabela LL(1), A → α vai para (A, t) para cada t em '
                'FIRST(α), e, se α deriva ε, também para cada t em FOLLOW(A). '
                'Duas produções na mesma célula significam que a gramática '
                'não é LL(1). Quando isso vem de ambiguidade, nenhuma '
                'reorganização da tabela resolve.',
    'pegadinha': 'O ε chama a atenção porque é ele que "puxa" o FOLLOW. Mas '
                 'o uso do ε é legítimo; o problema é a gramática permitir '
                 'duas derivações para a mesma cadeia.',
    'referencia': 'AHO, A. V. et al. Compiladores: princípios, técnicas e '
                  'ferramentas. 2. ed. São Paulo: Pearson, 2008.',
    'verificado': 'FIRST e FOLLOW calculados por execução: FIRST(Y) = {d, ε} '
                  'e FOLLOW(Y) = {d, $}. A cadeia aebaebcdc tem 2 derivações '
                  'mais à esquerda.',
}

RB[23] = {
    'itens': {},
    'correta': 'Cada thread escreve na sua variável e depois lê a da outra. '
               'Se t1 roda inteira antes de t2 escrever y, imprime "1" (e t2 '
               'depois vê x = 1, sem imprimir). O simétrico imprime "2". Se as '
               'duas escrevem antes de qualquer uma ler, as duas veem 1 e '
               'ninguém imprime. Para imprimir os dois, t1 teria de ler y = 0 '
               '(t2 ainda não escreveu) e t2 teria de ler x = 0 (t1 ainda não '
               'escreveu); mas cada uma escreve ANTES de ler, então isso é '
               'impossível. Resultado: "1", "2" ou nada, nunca os dois.',
    'distratores': {
        'a': 'Ignora que a ordem de execução das threads não é determinada. '
             '"1" é só um dos resultados possíveis.',
        'b': 'Mesmo erro: assume que t2 sempre perde a corrida.',
        'c': 'Esquece o caso em que as duas escrevem antes de as duas lerem, '
             'e nenhuma imprime.',
    },
    'conceito': 'Com threads concorrentes sem sincronização, o resultado '
                'depende da intercalação. Para analisar, enumeram-se as '
                'ordens possíveis das operações que importam (aqui, duas '
                'escritas e duas leituras), respeitando a ordem dentro de '
                'cada thread.',
    'pegadinha': 'O caso "nenhum valor" é o que a maioria esquece. Uma nota '
                 'para quem quiser ir além: essa análise assume consistência '
                 'sequencial. Em processadores reais, sem barreiras de '
                 'memória, a escrita pode ser reordenada depois da leitura, e '
                 'imprimir "1 2" passa a ser possível. Isso vai além do que a '
                 'questão cobra.',
    'referencia': 'TANENBAUM, A. S. Sistemas operacionais modernos. 3. ed. São '
                  'Paulo: Pearson, 2010.',
    'verificado': 'Todas as intercalações das quatro operações enumeradas por '
                  'execução: as saídas possíveis são "1", "2" e nenhuma.',
}

RB[24] = {
    'itens': {},
    'correta': 'É a definição de Russell e Norvig: o comportamento de um '
               'agente é descrito pela função de agente, que mapeia qualquer '
               'sequência de percepções para uma ação. No aspirador, a '
               'sequência [A, sujo] leva a "limpar", e [A, limpo] a "mover '
               'para B".',
    'distratores': {
        'a': 'O estado tem três componentes: onde está o agente (2 opções) e '
             'se cada um dos dois ambientes está sujo (2 × 2). São 2 × 2² = 8 '
             'estados, e não 2² = 4.',
        'c': 'A sequência de percepções é o histórico do que o agente '
             'PERCEBEU pelos sensores, e não o histórico das ações que ele '
             'tomou.',
        'd': 'A percepção é a entrada que o agente recebe dos sensores num '
             'instante (local e sujeira), e não o resultado das ações dele.',
    },
    'conceito': 'Percepção: o que os sensores informam agora. Sequência de '
                'percepções: tudo o que o agente já percebeu. Função de '
                'agente: o mapeamento da sequência de percepções para a ação. '
                'Programa de agente: a implementação concreta dessa função.',
    'pegadinha': 'As alternativas c e d trocam percepção por ação, o que '
                 'entra pelo sensor pelo que sai pelo atuador. E a a conta só '
                 'a sujeira, esquecendo que a posição do agente também faz '
                 'parte do estado.',
    'referencia': 'RUSSELL, S.; NORVIG, P. Artificial intelligence: a modern '
                  'approach. 3. ed. New Jersey: Pearson, 2009.',
    'verificado': 'Estados enumerados por execução: posição do agente × '
                  'sujeira em A × sujeira em B = 8.',
}

RB[25] = {
    'itens': {
        'I': 'FALSA. A função F faz um laço de n passos e UMA chamada '
             'recursiva com n/2: T(n) = T(n/2) + Θ(n), que dá Θ(n). O '
             'mergesort faz DUAS chamadas com n/2: T(n) = 2T(n/2) + Θ(n), que '
             'dá Θ(n log n). As recorrências são diferentes.',
        'II': 'VERDADEIRA. n cai pela metade a cada chamada até chegar a 0, '
              'então há cerca de log₂ n + 1 chamadas: Θ(log n).',
        'III': 'VERDADEIRA. G é chamada n + n/2 + n/4 + … < 2n vezes, que é '
               'Θ(n). Como O dá um limite SUPERIOR, Θ(n) também é O(n log n). '
               'A afirmação é verdadeira, mas não é o limite mais justo.',
    },
    'correta': 'II e III são verdadeiras. A III exige atenção: o número exato '
               'de chamadas de G é linear, e todo crescimento linear está '
               'contido em O(n log n).',
    'distratores': {
        'a': 'Marca só a I, que confunde uma chamada recursiva com duas.',
        'b': 'Deixa de fora a III. Quem calcula Θ(n) e conclui que '
             '"O(n log n) está errado" esquece que O é só um limite '
             'superior.',
        'c': 'Inclui a I, que é falsa, e deixa de fora a II.',
    },
    'conceito': 'Pelo Teorema Mestre, T(n) = aT(n/b) + f(n): com a = 1, b = 2 '
                'e f(n) = n, cai no caso 3 e dá Θ(n). Com a = 2 (mergesort), '
                'cai no caso 2 e dá Θ(n log n). E O(g) quer dizer "no máximo '
                'da ordem de g", e não "exatamente".',
    'pegadinha': 'Duas armadilhas. Ver "dividir ao meio + laço linear" e '
                 'concluir "é o mergesort" sem contar as chamadas. E tratar '
                 'O como se fosse Θ, descartando a III.',
    'referencia': 'CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. '
                  'Rio de Janeiro: Elsevier, 2012.',
    'verificado': 'Executado para n = 1 024 e n = 2²⁰: G é chamada menos de 2n '
                  'vezes, e F executa log₂ n + 1 vezes com n > 0.',
}

RB[26] = {
    'itens': {
        'I': 'VERDADEIRA. A coluna FoneEleitor guarda dois telefones na mesma '
             'célula: é um atributo multivalorado, que viola a 1FN (valores '
             'atômicos). E, como 2FN e 3FN pressupõem 1FN, a tabela não '
             'atende nenhuma delas.',
        'II': 'FALSA. Separar Partido e Candidato resolve parte das '
              'dependências, mas a tabela que sobra continua com FoneEleitor '
              'multivalorado. Ela não está nem na 1FN, e portanto não atende '
              'a 2FN.',
        'III': 'FALSA. Eleitor fica com FoneEleitor multivalorado, então não '
               'está na 1FN. E Voto mantém NomePartido dependendo de Sigla e '
               'NomeCand dependendo de NumCand, dependências transitivas que '
               'violam a 3FN.',
        'IV': 'FALSA. Numero é único em cada linha, o que faz dele chave: '
              'TODOS os demais atributos dependem funcionalmente dele, '
              'inclusive Sigla, NomePartido, NumCand e NomeCand. Algumas '
              'dessas dependências são transitivas, mas existem.',
    },
    'correta': 'Só a I é verdadeira. Todas as outras esbarram no mesmo ponto: '
               'enquanto FoneEleitor for multivalorado, nenhuma tabela que o '
               'contenha passa da 1FN.',
    'distratores': {
        'b': 'Inclui a III. A tabela Eleitor herda o telefone multivalorado, '
             'e Voto mantém dependências transitivas.',
        'c': 'Inclui a II e a III. Nas duas, o telefone continua '
             'multivalorado.',
        'd': 'Nega a I e inclui a IV. Numero é chave, e todo atributo de uma '
             'tabela depende funcionalmente da chave.',
    },
    'conceito': '1FN: valores atômicos, sem multivalorados nem grupos '
                'repetidos. 2FN: 1FN e nenhum atributo dependendo de parte de '
                'uma chave composta. 3FN: 2FN e nenhuma dependência '
                'transitiva entre atributos não chave. Cada forma pressupõe '
                'a anterior.',
    'pegadinha': 'A II e a III propõem decomposições que parecem boas e '
                 'distraem do defeito mais básico: o telefone duplo na mesma '
                 'célula, que segue lá. Na normalização, comece sempre pela '
                 '1FN.',
    'referencia': 'ELMASRI, R.; NAVATHE, S. B. Sistemas de banco de dados. '
                  '6. ed. São Paulo: Pearson, 2011.',
}

RB[27] = {
    'itens': {},
    'correta': 'T1 aloca E1 e depois E2; T2 aloca E2 e depois E1. Se T1 '
               'pegar E1 e T2 pegar E2 antes de cada uma pedir a segunda, uma '
               'espera pela outra para sempre: espera circular, deadlock. A '
               'prevenção clássica é impor uma ordem global de alocação. Se '
               'as duas pedirem E1 antes de E2, quem pega E1 primeiro sempre '
               'consegue E2, e o ciclo não se forma.',
    'distratores': {
        'a': 'Tirar os cálculos entre as alocações só estreita a janela, sem '
             'fechá-la: entre o primeiro pedido e o segundo a outra thread '
             'ainda pode pegar o recurso. A probabilidade diminui, mas o '
             'deadlock continua possível.',
        'b': 'A consequência de um deadlock não é inócua: as duas threads '
             'param para sempre e o programa trava. Probabilidade baixa não '
             'é correção.',
        'c': 'Os semáforos já estão sendo usados, e são eles que causam o '
             'bloqueio. Semáforo garante exclusão mútua, e não ausência de '
             'deadlock.',
    },
    'conceito': 'Deadlock exige quatro condições simultâneas (Coffman): '
                'exclusão mútua, posse e espera, não preempção e espera '
                'circular. Ordenar a alocação dos recursos elimina a espera '
                'circular, e é a prevenção mais prática.',
    'pegadinha': 'A alternativa a parece técnica e cuidadosa. Mas deadlock é '
                 'questão de possibilidade, e não de probabilidade: reduzir a '
                 'janela de risco não é eliminá-lo.',
    'referencia': 'TANENBAUM, A. S. Sistemas operacionais modernos. 3. ed. São '
                  'Paulo: Pearson, 2010.',
    'verificado': 'Intercalações dos pedidos enumeradas por execução: com '
                  'ordens opostas há espera circular; com a mesma ordem, não.',
}
