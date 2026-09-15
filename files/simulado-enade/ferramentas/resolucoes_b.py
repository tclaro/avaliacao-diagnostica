# -*- coding: utf-8 -*-
"""Resoluções comentadas das questões 16 a 30 (Fase 2 do HANDOFF.md).

Mesma estrutura de resolucoes_a.py.
"""

RB = {}

RB[16] = {
    'itens': {
        'I': 'VERDADEIRA. Se cada usuário gera um par de chaves na instalação '
             'e publica a chave pública no servidor, qualquer destinatário '
             'pode buscar a chave pública do remetente e verificar a '
             'assinatura da mensagem. Isso é exatamente autenticação de '
             'origem.',
        'II': 'VERDADEIRA. Um vetor de inicialização variável faz com que a '
              'mesma mensagem, cifrada duas vezes, produza textos cifrados '
              'diferentes. Isso oculta padrões — o problema clássico do modo '
              'ECB — e dificulta ataques de reprodução, em que o atacante '
              'reenvia uma mensagem capturada.',
        'III': 'FALSA. A primeira metade acerta: o AES é mesmo um algoritmo '
               'simétrico. A definição dada em seguida é que está trocada. '
               'Criptografia simétrica usa a MESMA chave para cifrar e '
               'decifrar; "um par de chaves, uma para o remetente e outra '
               'para o destinatário" é a descrição da criptografia '
               'ASSIMÉTRICA.',
        'IV': 'VERDADEIRA. SHA-256 é uma função de hash criptográfico. '
              'Comparar o hash calculado na origem com o calculado no destino '
              'detecta qualquer alteração no conteúdo, e isso é a definição '
              'de verificação de integridade.',
    },
    'correta': 'I, II e IV associam corretamente cada primitiva ao serviço de '
               'segurança que ela presta: par de chaves para autenticidade, '
               'vetor de inicialização variável para confidencialidade '
               'robusta e hash para integridade.',
    'distratores': {
        'a': 'Correta no que afirma, mas incompleta: descarta II, que é '
             'verdadeiro.',
        'b': 'Inclui III, que confunde simétrico com assimétrico, e descarta '
             'I e II.',
        'c': 'Também inclui III e deixa de fora IV.',
    },
    'conceito': 'Cada primitiva criptográfica presta um serviço distinto: '
                'cifragem simétrica (AES) dá confidencialidade com uma chave '
                'única compartilhada; cifragem assimétrica dá par de chaves e '
                'permite autenticidade e não-repúdio; função de hash '
                '(SHA-256) dá integridade. Confundi-las é o erro mais comum '
                'da área.',
    'pegadinha': 'O item III começa com uma afirmação verdadeira — "o uso do '
                 'AES indica criptografia simétrica" — e só erra na definição '
                 'que vem depois do "isto é". Quem valida a primeira metade e '
                 'segue em frente marca c.',
    'referencia': 'WhatsApp. Criptografia de ponta a ponta. Disponível em '
                  'faq.whatsapp.com. Acesso em 05 mai. 2020.',
}

RB[17] = {
    'itens': {
        'I': 'VERDADEIRA. É a descrição exata do SaaS: o usuário consome a '
             'aplicação pronta, sem administrar hardware, sistema operacional '
             'ou a própria aplicação, e atualizar o software é '
             'responsabilidade do provedor.',
        'II': 'FALSA. Elasticidade rápida é a capacidade de provisionar e '
              'liberar RECURSOS COMPUTACIONAIS — CPU, memória, armazenamento '
              '— conforme a demanda varia. O item troca isso por "aumentar ou '
              'diminuir o tempo de disponibilidade dos recursos", que não é '
              'elasticidade nem é algo que se ajuste automaticamente.',
        'III': 'FALSA. Na definição do NIST, a nuvem comunitária é uma '
               'infraestrutura COMPARTILHADA por organizações com '
               'preocupações comuns (missão, segurança, conformidade). O item '
               'inverte, falando em gerenciar os recursos pertencentes a cada '
               'organização participante, o que descreve várias '
               'infraestruturas separadas, e não uma compartilhada.',
        'IV': 'VERDADEIRA. É a descrição exata do IaaS: o usuário não '
              'administra a infraestrutura física da nuvem, mas tem controle '
              'sobre sistema operacional, armazenamento e as aplicações que '
              'implanta.',
    },
    'correta': 'I e IV reproduzem corretamente os dois extremos dos modelos '
               'de serviço do NIST: no SaaS o provedor controla quase tudo; '
               'no IaaS o usuário controla tudo acima da camada física.',
    'distratores': {
        'a': 'Inclui II, que redefine elasticidade como ajuste de tempo de '
             'disponibilidade.',
        'c': 'Junta as duas falsas, II e III.',
        'd': 'Acerta IV mas soma II e III.',
    },
    'conceito': 'O modelo NIST tem três eixos: 5 características essenciais '
                '(entre elas elasticidade rápida e serviço medido), 3 modelos '
                'de serviço (SaaS, PaaS e IaaS, em ordem decrescente de '
                'controle do provedor) e 4 modelos de implantação (privada, '
                'pública, comunitária e híbrida).',
    'pegadinha': 'Os itens II e III não negam os conceitos: eles os '
                 'REDEFINEM com palavras plausíveis. Elasticidade vira tempo '
                 'de disponibilidade; nuvem comunitária vira gestão dos '
                 'recursos de cada participante. Soam técnicos e estão '
                 'errados.',
    'referencia': 'MELL, P.; GRANCE, T. The NIST Definition of Cloud '
                  'Computing. NIST Special Publication 800-145, 2011.',
}

RB[18] = {
    'itens': {
        'I': 'VERDADEIRA. Fragmentos de texto, fragmentos condicionais, '
             'páginas variantes e abordagem baseada em frames são as técnicas '
             'clássicas de adaptação de CONTEÚDO na taxonomia de hipermídia '
             'adaptativa: todas decidem QUE informação mostrar a cada '
             'usuário.',
        'II': 'FALSA. Layouts de página e guias de estilo dizem respeito a '
              'como a informação é APRESENTADA — tipografia, cor, disposição '
              'visual. Não têm relação com navegação, que trata de como o '
              'usuário se desloca entre os pontos do sistema.',
        'III': 'FALSA. Orientação direta, anotação de links, ocultação de '
               'links e ordenação de links são, todas elas, técnicas de '
               'adaptação da NAVEGAÇÃO — são as formas clássicas de suporte à '
               'navegação adaptativa. O item as coloca no nível de '
               'apresentação.',
    },
    'correta': 'Apenas a afirmação I associa corretamente as técnicas ao seu '
               'nível de adaptação.',
    'distratores': {
        'b': 'Fica só com III, que desloca as técnicas de navegação para o '
             'nível de apresentação.',
        'c': 'Acerta I mas soma II, que confunde apresentação com navegação.',
        'd': 'Junta as duas falsas e descarta a única verdadeira.',
    },
    'conceito': 'Os três níveis de adaptação respondem a perguntas '
                'diferentes: CONTEÚDO pergunta o que mostrar; NAVEGAÇÃO '
                'pergunta para onde o usuário pode ir e como os caminhos são '
                'sinalizados; APRESENTAÇÃO pergunta com que aparência '
                'mostrar.',
    'pegadinha': 'Os itens II e III trocam de lugar entre si. Há um atalho '
                 'seguro: toda técnica cujo nome contém "link" — anotação de '
                 'links, ocultação, ordenação — é navegação, porque link é '
                 'justamente o que leva o usuário de um ponto a outro. Isso '
                 'resolve o item III sem depender de memória da taxonomia.',
    'referencia': 'NIENOW, A. L. Interfaces adaptativas no comércio '
                  'eletrônico como facilitadoras da inclusão digital de '
                  'idosos. Revista Tecnologia e Tendências, v. 9, n. 2, '
                  'p. 116-136, 2017.',
}

RB[19] = {
    'itens': {},
    'correta': 'O quadro no canto da figura dá os dois parâmetros: média 171 '
               'e desvio padrão 10. O intervalo [151, 191] é exatamente 171 '
               'menos 20 até 171 mais 20, ou seja, a média mais ou menos DOIS '
               'desvios padrão. Pela regra empírica da distribuição normal, '
               'essa faixa concentra 95,44% dos casos.',
    'distratores': {
        'a': 'O intervalo [141, 201] é a média mais ou menos TRÊS desvios '
             'padrão, que corresponde a 99,73%, e não a 34,13%.',
        'b': 'O intervalo [161, 181] é a média mais ou menos UM desvio '
             'padrão, que corresponde a 68,27%. O valor 34,13% é a metade '
             'disso, e valeria para meia faixa, como [171, 181].',
        'c': 'O intervalo [171, 191] vai da média até dois desvios acima, ou '
             'seja, metade da faixa de 95,44%, o que dá 47,72%, e não '
             '76,68%.',
    },
    'conceito': 'A regra empírica 68-95-99,7: numa distribuição normal, '
                'aproximadamente 68,27% dos valores caem dentro de 1 desvio '
                'padrão da média, 95,44% dentro de 2 e 99,73% dentro de 3. '
                'Cada faixa é simétrica, então metade dela vale metade da '
                'porcentagem.',
    'pegadinha': 'O número 34,13% aparece em duas alternativas justamente '
                 'porque é familiar: é a metade de 68,27%, a área de um '
                 'desvio padrão de um lado só. Ele está correto como '
                 'quantidade, mas casado com o intervalo errado nas duas '
                 'vezes. O caminho seguro é converter o intervalo em '
                 'múltiplos de sigma ANTES de olhar as porcentagens.',
    'referencia': 'Enade 2021, Ciência da Computação, questão 27. Dados de '
                  'openintro.org.',
}

RB[20] = {
    'itens': {
        'I': 'VERDADEIRA. Se a busca falha num ciclo, o estágio S1 não '
             'produz instrução útil e cria uma bolha. Como o pipeline avança '
             'em bloco a cada ciclo de relógio, essa bolha caminha para S2, '
             'S3, S4 e S5 nos quatro ciclos seguintes, até sair pela ponta.',
        'II': 'FALSA. Num pipeline síncrono toda instrução atravessa TODOS os '
              'estágios, na mesma ordem e no mesmo ritmo. Se uma instrução '
              'sem operandos pudesse pular S3 e ir direto para S4, ela '
              'alcançaria a instrução anterior e duas instruções disputariam '
              'o mesmo estágio no mesmo ciclo. Quando um estágio não tem o '
              'que fazer, ele é atravessado sem trabalho útil — mas é '
              'atravessado.',
        'III': 'FALSA. O estágio S1 é a unidade de busca de INSTRUÇÃO; quem '
               'busca operandos é o estágio S3, como o próprio enunciado '
               'descreve. Ter cache de dados separada da cache de instruções '
               'é verdade e é útil, mas a atribuição feita no item está '
               'errada: S1 não busca dados.',
        'IV': 'VERDADEIRA. O branch target buffer guarda o alvo provável dos '
              'desvios já vistos. Com ele, logo após buscar uma instrução de '
              'desvio condicional o processador já pode continuar buscando a '
              'partir do alvo previsto, em vez de esperar a condição ser '
              'resolvida — que é exatamente o que evita as bolhas.',
    },
    'correta': 'I e IV tratam corretamente do mesmo fenômeno por dois '
               'ângulos: como a bolha se propaga e como a previsão de desvio '
               'evita que ela se forme.',
    'distratores': {
        'a': 'Inclui II, que permite instruções pularem estágios e quebrarem '
             'a sincronia do pipeline.',
        'c': 'Inclui III, que atribui a busca de dados ao estágio errado, e '
             'descarta I.',
        'd': 'Junta II e III, as duas falsas, ao verdadeiro I.',
    },
    'conceito': 'O pipeline é síncrono: todos os estágios avançam juntos a '
                'cada ciclo de relógio, e nenhuma instrução ultrapassa outra. '
                'O ganho vem da vazão — uma instrução concluída por ciclo em '
                'regime — e não da latência individual, que continua sendo de '
                '5 ciclos.',
    'pegadinha': 'O item III mistura um fato verdadeiro (arquitetura Harvard, '
                 'com caches separadas) com uma atribuição falsa de função ao '
                 'estágio S1. Reconhecer o fato verdadeiro leva a marcar o '
                 'item inteiro como certo.',
    'referencia': 'TANENBAUM, A. S. Organização Estruturada de Computadores. '
                  '5. ed. São Paulo: Pearson Prentice Hall, 2007, p. 35.',
}

RB[21] = {
    'itens': {
        'I': 'VERDADEIRA pela definição formal. Em morfologia sobre imagens '
             'em tons de cinza, a DILATAÇÃO substitui cada pixel pelo valor '
             'MÁXIMO da vizinhança coberta pelo elemento estruturador B. É '
             'exatamente o que o item enuncia.',
        'II': 'FALSA. Atribui à dilatação o cálculo do mínimo, que é a '
              'operação de erosão.',
        'III': 'FALSA. Atribui à erosão o cálculo do máximo, que é a operação '
               'de dilatação.',
        'IV': 'VERDADEIRA pela definição formal. A EROSÃO substitui cada '
              'pixel pelo valor MÍNIMO da vizinhança coberta por B.',
    },
    'correta': 'Pelas definições de morfologia em tons de cinza, I e IV estão '
               'corretas: dilatação usa o máximo e erosão usa o mínimo. Era '
               'esta a alternativa apontada como correta no material de '
               'origem — mas veja o aviso sobre a anulação.',
    'distratores': {
        'a': 'Junta I (correta) com II, que troca a operação da dilatação.',
        'b': 'Junta as duas afirmações trocadas, II e III.',
        'c': 'Junta III (trocada) com IV (correta).',
    },
    'conceito': 'Em tons de cinza, dilatação é o filtro de MÁXIMO e erosão é '
                'o filtro de MÍNIMO. O efeito visual depende de qual região é '
                'considerada o objeto: se o objeto é a região CLARA (o caso '
                'usual em imagem binária, com objeto igual a 1), a dilatação '
                'engrossa e a erosão afina. Se o objeto é a região ESCURA, '
                'como no "j" desenhado em traço preto sobre fundo branco, o '
                'efeito visual se inverte — o filtro de máximo clareia e '
                'afina o traço, e o de mínimo escurece e engrossa.',
    'pegadinha': 'As figuras da questão mostram o "j" AFINANDO no item '
                 'rotulado "Dilatação" e ENGROSSANDO no item rotulado '
                 '"Erosão", o contrário do que quase todo curso ensina: '
                 '"dilatação engorda, erosão emagrece". Não há erro nas '
                 'figuras, que são coerentes com a definição por máximo e '
                 'mínimo, porque o traço é escuro sobre fundo claro. Mas a '
                 'questão cobra a definição formal e ilustra com um caso em '
                 'que a intuição visual aponta para o lado oposto.',
    'referencia': 'Enade 2021, Ciência da Computação, questão 29 (ANULADA). '
                  'Documentação de operações morfológicas do OpenCV.',
    'aviso_anulada': 'Esta questão foi cancelada pelo INEP: o gabarito '
                     'definitivo do Enade 2021 a registra como ANULADA, e o '
                     'Relatório Síntese de Área confirma que a anulação partiu '
                     'da Comissão Assessora de Área. O motivo não é publicado, '
                     'mas neste caso ele é visível no texto original, e é um '
                     'defeito de redação. Na prova como o INEP a imprimiu, os '
                     'itens II e IV diziam "calculamos o valor MÍNIMO de pixel '
                     'sobreposto por B e substituímos o pixel da imagem [...] '
                     'por esse valor MÁXIMO" — calculam o mínimo e substituem '
                     'pelo máximo, contradizendo a si mesmos em meia frase. '
                     'Isso é fatal para a questão, porque o item IV era '
                     'justamente um dos dois que o gabarito oficial dava como '
                     'verdadeiros (a resposta era "I e IV"): não dá para '
                     'sustentar como verdadeiro um item que se autocontradiz. '
                     'Os itens I e III, que calculam e substituem pelo máximo, '
                     'estavam coerentes. A versão que você respondeu corrigiu '
                     'esse defeito — nela os itens II e IV substituem "por '
                     'esse valor mínimo" — e por isso a questão aqui é '
                     'consistente e a resposta se sustenta. Vale integralmente '
                     'pelo conceito.',
}

RB[22] = {
    'itens': {
        'I': 'VERDADEIRA. O analisador sintático recebe a sequência de tokens '
             'produzida pelo analisador léxico e verifica se ela obedece à '
             'gramática da linguagem, construindo a árvore sintática. É '
             'exatamente "verificar se compõe um programa válido".',
        'II': 'FALSA. A análise léxica depende inteiramente da linguagem. As '
              'palavras reservadas de Java não são as de Pascal, os '
              'delimitadores mudam e as regras de formação de identificadores '
              'e literais mudam. Dizer que o analisador gera "a mesma '
              'classificação para Java, Pascal ou outra linguagem" é negar o '
              'que a análise léxica faz.',
        'III': 'VERDADEIRA. A análise semântica verifica coerência de '
               'significado: compatibilidade de tipos, variável usada sem '
               'declaração, número de argumentos numa chamada. São erros que '
               'passam pela sintaxe mas não fazem sentido.',
        'IV': 'VERDADEIRA. A fase de otimização trabalha sobre o código '
              'intermediário para produzir um código de máquina final mais '
              'rápido ou menor.',
    },
    'correta': 'I, III e IV descrevem corretamente as fases do compilador. '
               'Apenas II erra, ao supor que a análise léxica seja '
               'independente da linguagem.',
    'distratores': {
        'a': 'Correta no que afirma, mas incompleta: descarta III, que é '
             'verdadeiro.',
        'b': 'Inclui II, a única falsa, e descarta I e IV.',
        'd': 'Acerta I e III mas soma II.',
    },
    'conceito': 'A cadeia de fases do compilador: a análise LÉXICA quebra o '
                'texto em tokens, a SINTÁTICA verifica se os tokens formam '
                'uma estrutura válida pela gramática, a SEMÂNTICA verifica se '
                'a estrutura faz sentido, e só então vêm geração e otimização '
                'de código. Cada fase consome a saída da anterior.',
    'pegadinha': 'O item II descreve corretamente o que a análise léxica faz '
                 '("identificar cada símbolo que tenha significado para a '
                 'linguagem") e só erra na oração final, que universaliza a '
                 'classificação entre linguagens. É o mesmo padrão de várias '
                 'questões desta prova: a frase certa com um final errado.',
    'referencia': 'BRANCO, G. A. Jr.; TAMAE, R. Y. Uma breve introdução ao '
                  'estudo e implementação de compiladores. Revista Científica '
                  'Eletrônica de Psicologia, ano V, n. 08, fev. 2008.',
}

RB[23] = {
    'itens': {
        'I': 'FALSA. Verificado por simulação. O PRIMEIRO movimento já apaga '
             'o símbolo mais à esquerda: em q0 a máquina lê 1, escreve B e '
             'anda para a direita. Depois de 4 movimentos a fita contém '
             '"10011", e não "110011" — a entrada original só existiria se a '
             'máquina ainda não tivesse feito nada.',
        'II': 'VERDADEIRA. Verificado por simulação: após 8 movimentos a fita '
              'contém "1001". Nesse ponto a máquina já apagou o 1 da ponta '
              'esquerda (movimento 1), correu até a direita (movimentos 2 a '
              '6), detectou o branco e voltou (movimento 7) e apagou o 1 da '
              'ponta direita (movimento 8), completando a verificação do '
              'primeiro par.',
        'III': 'VERDADEIRA. A entrada 110011 é um palíndromo binário de '
               'comprimento par, que é exatamente a linguagem aceita por M. A '
               'simulação confirma: a máquina para no estado de aceitação qf '
               'após 27 movimentos.',
        'IV': 'VERDADEIRA. A linguagem dos palíndromos binários de '
              'comprimento par é livre de contexto, e toda linguagem livre de '
              'contexto é aceita por algum autômato com pilha. A pilha '
              'empilha a primeira metade e desempilha comparando com a '
              'segunda.',
    },
    'correta': 'II, III e IV. A única falsa é I, e ela falha por um detalhe '
               'de contagem: o primeiro movimento já modifica a fita.',
    'distratores': {
        'a': 'Junta I (falsa) com IV.',
        'b': 'Correta no que afirma, mas incompleta: descarta IV.',
        'c': 'Inclui I, a única falsa.',
    },
    'conceito': 'A estratégia da máquina é a mesma de conferir um palíndromo '
                'à mão: apaga o símbolo da ponta esquerda, guarda qual era '
                '(indo para q1 se leu 0, para q5 se leu 1), corre até a outra '
                'ponta, exige encontrar o mesmo símbolo, apaga e volta. Se em '
                'algum momento o símbolo não bate, não há transição e a '
                'máquina trava sem aceitar.',
    'pegadinha': 'O item I parece descrever "o estado inicial", e a fita '
                 'inicial realmente é 110011. Mas quatro movimentos já se '
                 'passaram, e o primeiro deles apagou um símbolo. Contar '
                 'movimentos numa máquina de Turing exige lembrar que o '
                 'movimento inclui a escrita, e não só o deslocamento.',
    'referencia': 'SIPSER, M. Introdução à Teoria da Computação. 2. ed. '
                  'norte-americana. Cengage CTP, 2007.',
    'verificado': 'Máquina implementada e executada em '
                  'ferramentas/tm_q23.py: a entrada 110011 é aceita em 27 '
                  'movimentos, com a fita em "10011" após 4 movimentos e em '
                  '"1001" após 8. Entradas não palíndromas (10, 1010) e de '
                  'comprimento ímpar (101) travam sem aceitar.',
}

RB[24] = {
    'itens': {
        'I': 'VERDADEIRA. A profundidade da pilha de recursão acompanha a '
             'qualidade das partições. Quando o pivô é sempre o pior possível '
             '— o que acontece com vetor JÁ ORDENADO, justamente porque o '
             'pivô escolhido é o último elemento — cada chamada reduz o '
             'problema em apenas um elemento, e a profundidade chega a n. '
             'Verificado por execução: para n = 10 já ordenado, a '
             'profundidade medida foi 10.',
        'II': 'FALSA na segunda metade. O algoritmo é recursivo, sim, mas NÃO '
              'é estável. A partição de Lomuto troca elementos distantes '
              'entre si, o que destrói a ordem relativa de chaves iguais. '
              'Verificado por execução: a entrada 2a, 1x, 2b, 1y, 2c sai como '
              '1y, 1x, 2c, 2b, 2a — as três chaves iguais a 2 saem na ordem '
              'exatamente inversa da original.',
        'III': 'VERDADEIRA. No caso médio as partições são razoavelmente '
               'equilibradas, a recursão tem profundidade O(log n) e cada '
               'nível faz O(n) comparações, resultando em O(n log n). É o '
               'comportamento típico do quicksort e a razão de ele ser tão '
               'usado na prática.',
        'IV': 'FALSA. Escolher o primeiro ou o último elemento como pivô é '
              'equivalente: as duas escolhas são arbitrárias e as duas '
              'degeneram para O(n²) em entradas já ordenadas ou quase '
              'ordenadas. Não há ganho de eficiência em trocar uma pela '
              'outra. O que de fato ajuda é escolher o pivô por mediana de '
              'três ou aleatoriamente.',
    },
    'correta': 'I e III. O algoritmo é um quicksort com partição de Lomuto e '
               'pivô no último elemento: custo médio O(n log n) e pilha de '
               'recursão que pode chegar a O(n) no pior caso.',
    'distratores': {
        'b': 'Junta as duas falsas: a estabilidade que o algoritmo não tem e '
             'a vantagem inexistente de trocar a posição do pivô.',
        'c': 'Acerta III mas soma IV.',
        'd': 'Acerta I e III mas soma II, afirmando estabilidade.',
    },
    'conceito': 'Quicksort tem três propriedades que costumam ser '
                'confundidas: é rápido em MÉDIA, O(n log n), mas O(n²) no '
                'pior caso; ordena no próprio vetor, gastando memória extra '
                'apenas com a pilha de recursão, que pode chegar a O(n); e '
                'NÃO é estável, porque troca elementos não adjacentes.',
    'pegadinha': 'O item II encaixa uma afirmação falsa (estável) logo depois '
                 'de uma verdadeira e óbvia (recursivo), na mesma frase. '
                 'Basta olhar as duas primeiras linhas do algoritmo para '
                 'confirmar a recursão, e a tentação é dar o item por bom sem '
                 'examinar a segunda propriedade.',
    'referencia': 'Enade 2021, Ciência da Computação, questão 32.',
    'verificado': 'Algoritmo transcrito de figuras/q24_fig1.png para '
                  'codigos/q24_quicksort.txt e executado em '
                  'ferramentas/algos.py: ordena corretamente; a profundidade '
                  'de recursão é 10 para um vetor ordenado de 10 elementos; e '
                  'o teste de estabilidade falha, com 2a, 2b, 2c saindo como '
                  '2c, 2b, 2a.',
}

RB[25] = {
    'itens': {},
    'correta': 'A regra saoirmas(X,Y) :- filhode(X,P), filhode(Y,P), X \\= Y, '
               'mulher(X), mulher(Y) lê-se assim: X e Y são irmãs se existe '
               'um P que é progenitor de ambas, se X e Y são pessoas '
               'diferentes e se ambas são mulheres. As três condições são '
               'necessárias: o mesmo P garante o parentesco, o X \\= Y evita '
               'que alguém seja irmã de si mesma e os dois predicados mulher '
               'garantem o gênero exigido pela palavra "irmãs".',
    'distratores': {
        'a': 'Define IRMÃOS, e não irmãs: não exige gênero nenhum. Estaria '
             'correta se a pergunta fosse sobre irmandade em geral.',
        'b': 'Exige que apenas X seja mulher. Nesse caso Y poderia ser homem, '
             'e o par não seria formado por duas irmãs.',
        'd': 'O erro decisivo está em usar variáveis diferentes para o '
             'progenitor: filhode(X,P) e filhode(Y,M). Como P e M são '
             'independentes, a regra aceitaria quaisquer duas mulheres que '
             'tenham algum progenitor, ainda que não tenham nenhum em comum. '
             'A unificação pela MESMA variável é o que expressa "mesmo pai ou '
             'mesma mãe".',
    },
    'conceito': 'Em Prolog o parentesco é expresso pela UNIFICAÇÃO de '
                'variáveis: repetir a mesma variável P em dois objetivos '
                'obriga os dois a se referirem ao mesmo indivíduo. Trocar por '
                'outra variável dissolve a restrição, ainda que a regra '
                'continue sintaticamente válida.',
    'pegadinha': 'As quatro alternativas são quase idênticas, e só duas '
                 'coisas mudam de uma para outra: quantos predicados de '
                 'gênero aparecem no fim da regra e qual variável é usada no '
                 'segundo filhode. Comparar as regras entre si, termo a '
                 'termo, é mais eficiente do que ler cada uma inteira.',
    'referencia': 'Enade 2021, Ciência da Computação, questão 33 (ANULADA).',
    'aviso_anulada': 'Esta questão foi cancelada pelo INEP: o gabarito '
                     'definitivo do Enade 2021 a registra como ANULADA, e o '
                     'Relatório Síntese de Área confirma que a anulação partiu '
                     'da Comissão Assessora de Área. Aqui o motivo não é '
                     'publicado nem evidente, ao contrário do que acontece na '
                     'questão 21 — o que segue são hipóteses, e não a '
                     'explicação oficial. A prova original usava outra base de '
                     'fatos, com os predicados paide e maede no lugar de '
                     'filhode, e três defeitos formais aparecem nela. '
                     'Primeiro, o nome paide se lê naturalmente como "X é pai '
                     'de Y", mas a base só faz sentido no sentido oposto, "o '
                     'pai de X é Y" — o aluno precisa deduzir a direção '
                     'cruzando os fatos homem e mulher, e a direção muda '
                     'completamente o que a regra significa. Segundo, uma das '
                     'alternativas chamava mulher(X,Y), um predicado de dois '
                     'argumentos que não existe na base, onde mulher tem '
                     'apenas um. Terceiro, o enunciado pede "uma das situações '
                     'lógicas em que duas pessoas são irmãs", e esse "uma das" '
                     'abre espaço para defender também a alternativa que '
                     'define irmandade sem exigir gênero. Nada disso está na '
                     'versão que você respondeu, que trocou paide e maede pelo '
                     'filhode, de direção inequívoca. Estude a unificação de '
                     'variáveis, que é o conceito que a questão queria '
                     'cobrar.',
}

RB[26] = {
    'itens': {},
    'correta': 'Na PRIMEIRA iteração o algoritmo retira D, que tem custo 0, e '
               'relaxa os arcos que saem dele: A recebe 5, B recebe 9, E '
               'recebe 5 e F recebe 1. Na SEGUNDA iteração retira-se o '
               'vértice de menor estimativa na fila, que é F com custo 1, e '
               'relaxam-se os arcos que saem de F: F para E com peso 3 dá '
               '1 + 3 = 4, que melhora o 5 anterior, então E passa a 4; e F '
               'para G com peso 1 dá 1 + 1 = 2, então G passa a 2. O vértice '
               'C permanece em -1 porque nenhum caminho até ele foi '
               'descoberto ainda. O estado final é A: 5, B: 9, C: -1, D: 0, '
               'E: 4, F: 1, G: 2.',
    'distratores': {
        'a': 'Traz B em 6 e C em 10, valores que só apareceriam depois de '
             'processar A e B, várias iterações adiante. Além disso deixa G '
             'em -1, embora G já tenha sido alcançado por F.',
        'b': 'Corresponde a apenas UMA iteração: mantém E em 5, o valor vindo '
             'direto de D, sem o relaxamento por F, e G em -1. É o que se '
             'obtém parando depois de retirar apenas D.',
        'd': 'Traz B em 7 e C em 8, que exigiriam já ter processado A (para '
             'chegar a B por 5 + 2 = 7) e E (para chegar a C). São resultados '
             'de iterações posteriores.',
    },
    'conceito': 'Cada iteração de Dijkstra faz duas coisas: retira da fila o '
                'vértice de MENOR estimativa ainda aberto e relaxa todos os '
                'arcos que saem dele. Relaxar significa melhorar a estimativa '
                'do destino apenas se o caminho pelo vértice recém-fechado '
                'for mais barato do que o já conhecido.',
    'pegadinha': 'A contagem das iterações. A retirada do próprio vértice de '
                 'origem D conta como a primeira iteração, e não como uma '
                 'inicialização prévia. Quem considera D apenas "o ponto de '
                 'partida" e começa a contar em F executa uma iteração a mais '
                 'e chega às alternativas a ou d.',
    'referencia': 'Enade 2021, Ciência da Computação, questão 34.',
    'verificado': 'Grafo transcrito da figura e algoritmo executado em '
                  'ferramentas/verificar.py: após duas iterações o estado é '
                  'A: 5, B: 9, C: -1, D: 0, E: 4, F: 1, G: 2.',
}

RB[27] = {
    'itens': {},
    'correta': 'Escalabilidade é precisamente a capacidade de um sistema '
               'distribuído crescer — em número de usuários, de recursos ou '
               'de máquinas — sem perda significativa de desempenho e sem '
               'exigir mudança estrutural. Acrescentar dispositivos para '
               'atender demanda temporária ou crescente é o exemplo '
               'canônico.',
    'distratores': {
        'a': 'Afirma o oposto de uma premissa fundamental da área. Sistemas '
             'distribuídos NÃO dispõem de um relógio global: a própria '
             'definição do enunciado diz que os componentes coordenam suas '
             'ações "apenas enviando mensagens entre si". Por isso existem '
             'relógios lógicos (Lamport, vetoriais) e protocolos de '
             'sincronização aproximada como o NTP.',
        'b': 'Descreve o contrário do que caracteriza uma arquitetura '
             'peer-to-peer. A ausência de um ponto central é justamente o que '
             'faz a falha de um nó NÃO interromper os demais, e é a base da '
             'tolerância a falhas dessas redes.',
        'c': 'A heterogeneidade é uma característica esperada e desejada de '
             'sistemas distribuídos, e não um impedimento. Camadas de '
             'middleware e protocolos padronizados existem exatamente para '
             'mascarar diferenças de hardware, sistema operacional e '
             'linguagem.',
    },
    'conceito': 'As características clássicas de um sistema distribuído em '
                'Coulouris: heterogeneidade, abertura, segurança, '
                'escalabilidade, tratamento de falhas, concorrência e '
                'transparência. Ausência de relógio global e de estado global '
                'compartilhado são premissas, e não defeitos.',
    'pegadinha': 'Três das quatro alternativas transformam uma CARACTERÍSTICA '
                 'do modelo numa exigência ou numa limitação: exigem relógio '
                 'global, exigem homogeneidade ou supõem acoplamento total '
                 'entre nós. Cada uma nega um dos pilares da definição dada '
                 'no próprio enunciado.',
    'referencia': 'COULOURIS, G. et al. Sistemas Distribuídos: conceitos e '
                  'projeto. 5. ed. Porto Alegre: Bookman, 2013.',
}

RB[28] = {
    'itens': {},
    'correta': 'É uma aplicação direta do teorema de Bayes. Sejam V "a classe '
               'tem vulnerabilidade" e + "o linter alertou". Temos '
               'P(V) = 0,10, P(+|V) = 0,90 e P(+|não V) = 0,05. A '
               'probabilidade de haver alerta é P(+) = 0,90 × 0,10 + '
               '0,05 × 0,90 = 0,09 + 0,045 = 0,135. Logo '
               'P(V|+) = 0,09 / 0,135 = 0,667, ou seja, aproximadamente '
               '66,7%. Em números concretos: a cada 1000 classes analisadas, '
               '90 são verdadeiros positivos e 45 são falsos positivos; dos '
               '135 alertas, 90 são reais, e 90/135 = 2/3.',
    'distratores': {
        'a': 'Confunde P(+|V) com P(V|+). O enunciado informa que o linter '
             'acerta 90% das vezes em que HÁ vulnerabilidade; a pergunta é '
             'outra — dado que houve alerta, qual a chance de haver '
             'vulnerabilidade. Essa inversão é a falácia da taxa base, e é o '
             'erro que a questão está medindo.',
        'b': 'Não corresponde a nenhum passo do cálculo. Funciona como '
             'distrator plausível por estar entre os dois valores mais '
             'tentadores.',
        'd': 'Chute intuitivo de "meio a meio", que ignora tanto a '
             'prevalência quanto as taxas de acerto e erro.',
    },
    'conceito': 'Teorema de Bayes: P(V|+) = P(+|V) × P(V) / P(+). Quando a '
                'prevalência é baixa, os falsos positivos vindos da população '
                'grande de casos negativos competem com os verdadeiros '
                'positivos, e a confiança no alerta cai bem abaixo da taxa de '
                'acerto anunciada.',
    'pegadinha': 'Um linter que "acerta 90%" soa confiável, mas 90% é '
                 'sensibilidade, e não valor preditivo positivo. Como apenas '
                 '10% das classes têm vulnerabilidade, os 5% de falso '
                 'positivo incidem sobre 90% do repositório e produzem quase '
                 'metade do volume de alertas, derrubando a confiança de 90% '
                 'para 67%.',
    'referencia': 'Questão autoral do professor. Estatística aplicada à '
                  'computação.',
    'verificado': 'Cálculo conferido em ferramentas/verificar.py: '
                  'P(alerta) = 0,1350 e P(vulnerável | alerta) = 0,6667.',
}

RB[29] = {
    'itens': {},
    'correta': 'A relação está na 1FN — todos os atributos são atômicos — mas '
               'NÃO alcança a 2FN. A 2FN exige que todo atributo não-chave '
               'dependa da chave primária INTEIRA. A chave é composta por '
               '(ID_Projeto, ID_Funcionario), e a dependência 2 mostra que '
               'Nome_Funcionario depende apenas de ID_Funcionario, ou seja, '
               'de PARTE da chave. Isso é uma dependência parcial, e é '
               'exatamente o que a 2FN proíbe. A consequência prática é a '
               'anomalia de atualização descrita na alternativa: o nome do '
               'funcionário se repete em cada projeto em que ele está '
               'alocado, e corrigi-lo exige alterar todas essas linhas — se '
               'uma escapar, a base fica inconsistente.',
    'distratores': {
        'b': 'Afirma que a relação está na 2FN, o que a dependência parcial '
             '{ID_Funcionario} → {Nome_Funcionario} desmente diretamente.',
        'c': 'Afirma 3FN e ausência de redundância. A relação nem chega à '
             '2FN, e a redundância do nome do funcionário é visível.',
        'd': 'Acerta a forma normal (1FN) e erra a justificativa. A '
             'dependência problemática é PARCIAL — parte da chave determina '
             'um atributo não-chave — e não TRANSITIVA. Além disso, '
             'Carga_Horaria_Semanal depende da chave inteira, como diz a '
             'dependência 1, e portanto não é ela a origem do problema.',
    },
    'conceito': 'A escada das formas normais: a 1FN exige atributos atômicos; '
                'a 2FN elimina dependências PARCIAIS, em que parte de uma '
                'chave composta determina um atributo não-chave; a 3FN '
                'elimina dependências TRANSITIVAS, em que um atributo '
                'não-chave determina outro. Distinguir parcial de transitiva '
                'é o que a questão cobra.',
    'pegadinha': 'A alternativa d chega à mesma forma normal da resposta '
                 'correta, o que dá a sensação de estar certa. O erro está na '
                 'justificativa: troca "parcial" por "transitiva" e aponta o '
                 'atributo errado. Nesse tipo de questão a forma normal '
                 'sozinha não decide — a razão precisa fechar também.',
    'referencia': 'Questão autoral do professor. Normalização de bancos de '
                  'dados relacionais.',
}

RB[30] = {
    'itens': {},
    'correta': 'O princípio da necessidade, previsto no art. 6º, III da LGPD, '
               'determina que o tratamento se limite ao mínimo necessário '
               'para a realização da finalidade, abrangendo dados '
               'pertinentes, proporcionais e não excessivos. Uma lanterna '
               'digital precisa, no máximo, de acesso ao flash da câmera. '
               'Exigir lista de contatos, histórico de ligações, galeria de '
               'fotos e geolocalização precisa é o exemplo de manual de '
               'coleta excessiva. A justificativa interna da empresa — dados '
               'que "poderão ser úteis no futuro" — agrava o caso, porque '
               'viola também a finalidade (art. 6º, I), que exige propósito '
               'específico e informado ao titular.',
    'distratores': {
        'a': 'O princípio da qualidade dos dados (art. 6º, V) garante ao '
             'titular exatidão, clareza, relevância e atualização dos dados. '
             'Trata da QUALIDADE do que foi coletado, e não da QUANTIDADE. A '
             'alternativa ainda inventa um raciocínio sobre desatualização '
             'que não é o problema do caso.',
        'c': 'O princípio do livre acesso (art. 6º, IV) assegura ao titular '
             'consulta facilitada e gratuita sobre seus dados. É um direito '
             'de transparência, que pode até estar sendo violado em paralelo, '
             'mas não é o que a conduta descrita fere frontalmente.',
        'd': 'O princípio da não discriminação (art. 6º, IX) veda o '
             'tratamento para fins discriminatórios ilícitos ou abusivos. '
             'Publicidade direcionada, por si só, não configura discriminação '
             'no sentido legal — seria preciso demonstrar prejuízo ilícito a '
             'um grupo.',
    },
    'conceito': 'Os dez princípios do art. 6º da LGPD. Três deles atuam '
                'juntos contra a coleta abusiva: FINALIDADE (propósito '
                'legítimo, específico e informado), ADEQUAÇÃO '
                '(compatibilidade do tratamento com a finalidade) e '
                'NECESSIDADE (mínimo indispensável). Coletar hoje para usar '
                'em algo que talvez apareça amanhã viola os três.',
    'pegadinha': 'As quatro alternativas nomeiam princípios que realmente '
                 'existem na LGPD e vêm acompanhados de uma justificativa que '
                 'soa jurídica. Não basta reconhecer o nome do princípio; é '
                 'preciso saber o que cada um protege. O caso descrito é de '
                 'EXCESSO de coleta, e o princípio que trata de excesso é o '
                 'da necessidade.',
    'referencia': 'Questão autoral do professor. BRASIL, Lei nº 13.709/2018 '
                  '(LGPD), art. 6º, incisos I a X.',
}
