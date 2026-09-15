# -*- coding: utf-8 -*-
"""Resoluções comentadas das questões 1 a 15 (Fase 2 do HANDOFF.md).

Cada entrada traz:
  itens       - veredito e justificativa de cada afirmação I/II/III/IV
  correta     - por que a alternativa do gabarito está certa
  distratores - por que cada uma das outras cai
  conceito    - o conceito-chave da questão
  pegadinha   - o erro que a questão está armando
  referencia  - a fonte citada no rodapé do docx
  verificado  - (opcional) como o resultado foi checado por execução
"""

RA = {}

RA[1] = {
    'itens': {},
    'correta': 'Tanenbaum organiza os algoritmos de escalonamento por '
               'ambiente, e cada ambiente tem uma meta diferente. Em sistemas '
               'interativos a meta é o tempo de resposta: o usuário está na '
               'frente da tela esperando. O escalonamento por prioridades — '
               'normalmente com múltiplas filas e realimentação — atende a '
               'isso porque permite privilegiar os processos que fazem muita '
               'E/S, justamente os que interagem com o usuário, em vez dos '
               'que só consomem CPU.',
    'distratores': {
        'a': 'Inverte duas coisas. Primeiro, o algoritmo clássico é FIFO '
             '(first in, first out), e não FILO — FILO nem é usado como '
             'política de CPU. Segundo, tempo real exige garantia de prazo, e '
             'atender por ordem de chegada não garante prazo nenhum.',
        'b': 'O RMS (rate monotonic scheduling) é o algoritmo de tempo real '
             'por excelência: atribui prioridade fixa conforme a frequência '
             'da tarefa periódica. Colocá-lo em "sistemas em lote" é trocar o '
             'par, porque em lote não há prazo periódico a cumprir.',
        'c': 'Tarefa mais curta primeiro (SJF) é um algoritmo de LOTE, não '
             'interativo. Ele depende de conhecer de antemão a duração de '
             'cada tarefa, o que só é razoável num lote de jobs previsíveis. '
             'Num sistema interativo essa duração é imprevisível.',
    },
    'conceito': 'Os três ambientes de Tanenbaum e a meta de cada um: LOTE '
                '(maximizar vazão e uso de CPU), INTERATIVO (minimizar tempo '
                'de resposta) e TEMPO REAL (cumprir prazos). Cada algoritmo '
                'nasce para uma dessas metas.',
    'pegadinha': 'Cada alternativa é um par: um algoritmo seguido do ambiente '
                 'em que ele deveria ser implementado. O erro raramente está '
                 'numa das metades isoladamente — está no casamento entre as '
                 'duas. Em três dos quatro pares o algoritmo citado é real '
                 '(RMS, tarefa mais curta primeiro, prioridades) e apenas o '
                 'ambiente está trocado; a alternativa a é a exceção, porque '
                 'adultera também o nome, escrevendo FILO onde o algoritmo '
                 'clássico é FIFO. Não adianta reconhecer o nome: é preciso '
                 'saber para que ambiente ele foi feito.',
    'referencia': 'TANENBAUM, A. S. Sistemas Operacionais Modernos. '
                  '3. ed. São Paulo: Pearson, 2010.',
}

RA[2] = {
    'itens': {},
    'correta': 'Classe A ("inseridos somente no início ou no final") é a '
               'definição de DEQUE (double-ended queue). Classe B ("ordem '
               'determinada por uma referência ao próximo objeto") é a lista '
               'simplesmente ligada, em que cada nó aponta apenas para o '
               'seguinte. Classe C ("removidos na ordem oposta à que foram '
               'inseridos") é LIFO, ou seja, PILHA. Classe D ("o removido é '
               'sempre o que foi inserido primeiro") é FIFO, ou seja, FILA.',
    'distratores': {
        'a': 'Erra apenas na classe A. Lista circular é definida pelo último '
             'nó apontar de volta para o primeiro, e não por restringir a '
             'inserção às pontas. As outras três estão certas, o que torna '
             'esta a alternativa mais perigosa.',
        'c': 'Erra em A e inverte C com D. Lista duplamente ligada permite '
             'inserção em QUALQUER posição, e não só nas pontas — a restrição '
             'às pontas é o que caracteriza o deque. E "removidos na ordem '
             'oposta" é pilha, não fila.',
        'd': 'Desalinha as quatro. Atribui pilha a A, fila a B, deque a C e '
             'lista a D, quando a descrição de B é explicitamente sobre '
             'encadeamento por referência, e não sobre disciplina de acesso.',
    },
    'conceito': 'Estruturas lineares se distinguem pela DISCIPLINA DE ACESSO, '
                'e não pela implementação interna: pilha é LIFO, fila é FIFO, '
                'deque permite os dois extremos. "Lista ligada" descreve como '
                'a memória é encadeada, o que é uma pergunta diferente.',
    'pegadinha': 'A classe A é a única que decide a questão, e a isca é '
                 '"lista duplamente ligada" na alternativa c: ela também '
                 'permite inserir nas pontas, mas não SOMENTE nas pontas. A '
                 'palavra "somente" é o que exige deque.',
    'referencia': 'Enade 2021, Ciência da Computação, questão 10.',
}

RA[3] = {
    'itens': {
        'I': 'FALSA. A primeira metade está certa: mais camadas pode melhorar '
             'a acurácia. A segunda inverte o custo — mais camadas significam '
             'mais parâmetros e mais cálculo, logo AUMENTAM o tempo de '
             'treinamento. Não existe almoço grátis aqui.',
        'II': 'VERDADEIRA. Redes convolucionais são a arquitetura adequada '
              'para imagens: exploram localidade espacial e compartilham '
              'pesos entre as regiões, o que melhora a acurácia em visão. E '
              'de fato costumam exigir mais poder de processamento (GPU).',
        'III': 'FALSA por duas razões. Aumentar o número de neurônios não '
               'leva necessariamente a uma piora — pode melhorar ou levar a '
               'sobreajuste, depende. E, de novo, mais neurônios AUMENTAM o '
               'tempo de treinamento, não o diminuem.',
        'IV': 'VERDADEIRA. Mais amostras de treinamento é o remédio mais '
              'confiável para acurácia baixa, porque melhora a generalização '
              'e combate o sobreajuste. O preço, admitido no próprio item, é '
              'o tempo maior de treinamento.',
        'V': 'FALSA. Redes recorrentes são feitas para dados SEQUENCIAIS — '
             'texto, áudio, séries temporais — em que a ordem carrega '
             'informação. Classificar uma imagem estática não é um problema '
             'sequencial, e a arquitetura não se aplica.',
    },
    'correta': 'Apenas II e IV descrevem ações que realmente podem melhorar a '
               'acurácia, e ambas admitem honestamente o custo: mais '
               'processamento e mais tempo.',
    'distratores': {
        'a': 'Inclui I, que afirma que mais camadas DIMINUEM o tempo de '
             'treinamento.',
        'b': 'Inclui I, com o mesmo erro, e V, que propõe rede recorrente '
             'para classificação de imagem.',
        'c': 'Inclui III, que afirma que mais neurônios diminuem o tempo de '
             'treinamento.',
    },
    'conceito': 'Capacidade do modelo e volume de dados trocam acurácia por '
                'tempo: toda mudança que aumenta a capacidade da rede '
                '(camadas, neurônios) ou a quantidade de dados aumenta o '
                'custo computacional. E a arquitetura precisa casar com a '
                'natureza do dado — convolucional para imagem, recorrente '
                'para sequência.',
    'pegadinha': 'Os itens I, III e IV têm a mesma forma: "fazer X pode mudar '
                 'a acurácia, e o efeito no tempo é Y". A diferença está só '
                 'no final de cada frase. I e III dizem que o tempo diminui; '
                 'IV, o único verdadeiro dos três, admite que aumenta.',
    'referencia': 'CHOLLET, F. Deep Learning with Python. New York: Manning '
                  'Publications, 2017.',
}

RA[4] = {
    'itens': {
        'I': 'VERDADEIRA. O art. 5º, II da LGPD define dado pessoal sensível '
             'incluindo exatamente origem racial ou étnica, convicção '
             'religiosa e opinião política. O art. 11 restringe o tratamento '
             'desses dados a hipóteses específicas, que é a "repressão ao uso '
             'indiscriminado" de que fala o item.',
        'II': 'FALSA. É o oposto do art. 12. O dado anonimizado deixa de ser '
              'pessoal, mas justamente SALVO quando o processo de '
              'anonimização puder ser revertido com esforços razoáveis. O '
              'item afirma que ele continua não sendo pessoal "mesmo que o '
              'processo possa ser revertido", invertendo a exceção.',
        'III': 'VERDADEIRA. São os direitos do titular previstos no art. 18: '
               'confirmação da existência do tratamento, acesso aos dados, '
               'correção de dados incompletos, inexatos ou desatualizados, e '
               'eliminação.',
        'IV': 'FALSA. A ANPD fiscaliza, regulamenta, orienta e aplica sanções '
              '— tudo isso o item acerta. O erro está no fim: "modificando a '
              'legislação pertinente quando necessário". Alterar lei é '
              'competência do Poder Legislativo; a ANPD edita normas '
              'infralegais, o que não é a mesma coisa.',
    },
    'correta': 'I e III reproduzem corretamente a definição de dado sensível '
               '(art. 5º, II combinado com o art. 11) e os direitos do '
               'titular (art. 18).',
    'distratores': {
        'a': 'Inclui II, que inverte a regra do dado anonimizado reversível.',
        'c': 'Inclui II e IV, as duas falsas, e deixa de fora as duas '
             'verdadeiras.',
        'd': 'Acerta I e III mas soma IV, que atribui à ANPD o poder de '
             'modificar a lei.',
    },
    'conceito': 'Três pilares da LGPD que caem sempre: o que é dado sensível '
                '(art. 5º, II), quando um dado deixa de ser pessoal (art. 12, '
                'anonimização irreversível) e o que o titular pode exigir '
                '(art. 18).',
    'pegadinha': 'O item IV é quase inteiramente verdadeiro e só erra na '
                 'última oração. Uma agência reguladora regulamenta, mas não '
                 'legisla. Ler até o ponto final é o que separa quem marca b '
                 'de quem marca d.',
    'referencia': 'BRASIL. Lei nº 13.709/2018 (LGPD), arts. 5º, 11, 12, 18 '
                  'e 55-J.',
}

RA[5] = {
    'itens': {},
    'correta': 'O documento de teste de usabilidade precisa contemplar '
               'critérios de acessibilidade porque "todos os usuários do '
               'sistema" inclui pessoas com deficiência. Acessibilidade é '
               'requisito de qualidade do produto, e não um extra opcional — '
               'por isso entra no planejamento do teste, e não depois dele.',
    'distratores': {
        'a': 'Contraria a premissa central do enunciado. O ciclo iterativo e '
             'evolutivo existe PARA acomodar mudança de requisitos: o próprio '
             'texto fala em "realimentação e adaptação cíclicas como '
             'principais propulsores". Tratar mudança como algo a evitar é a '
             'lógica do modelo cascata.',
        'b': 'Erra o que é fixo. No timeboxing a DURAÇÃO da iteração é '
             'inviolável; o que se ajusta é o escopo entregue naquele prazo. '
             'A alternativa propõe o contrário — esticar o prazo — e ainda '
             'cria uma exceção para "sistemas críticos" que não existe no '
             'método.',
        'c': 'Deixar o teste de usabilidade para o último ciclo anula o '
             'benefício do desenvolvimento iterativo. Cada iteração produz um '
             'sistema "parcial, executável, testável", como diz o enunciado, '
             'justamente para que o feedback do usuário chegue cedo e ainda '
             'dê tempo de corrigir.',
    },
    'conceito': 'No desenvolvimento iterativo e evolutivo, a duração da '
                'iteração é fixa e o escopo é variável; a mudança de '
                'requisitos é esperada, e não combatida; e a validação com o '
                'usuário acontece a cada ciclo.',
    'pegadinha': 'A alternativa correta é a única que NÃO fala de '
                 'iteratividade. Quem procura a frase sobre ciclos acaba em '
                 'b, que soa razoável ("prazo fixo, mas flexível para casos '
                 'críticos") e é exatamente a negação do timeboxing.',
    'referencia': 'LARMAN, C. Utilizando UML e Padrões: Uma Introdução à '
                  'Análise e ao Projeto Orientados a Objetos. 3. ed. '
                  'Porto Alegre: Bookman, 2007.',
}

RA[6] = {
    'itens': {
        'I': 'VERDADEIRA. A arquitetura de Von Neumann — programa armazenado, '
             'com dados e instruções na mesma memória, e execução sequencial '
             'controlada por um contador de programa — continua sendo a base '
             'dos computadores atuais. As implementações mudaram '
             'radicalmente; o modelo conceitual, não.',
        'II': 'FALSA. O que o item descreve, buscar instruções além da '
              'próxima para acelerar a execução, é PREFETCH (busca '
              'antecipada), um recurso de implementação ligado a pipeline, e '
              'não uma característica da arquitetura de Von Neumann. E a '
              'justificativa dada está invertida: as instruções NÃO estão '
              'normalmente nos registradores; elas vêm da memória principal, '
              'e o prefetch existe precisamente PORQUE a memória é lenta.',
    },
    'correta': 'A asserção I é verdadeira e a II é falsa, o que torna '
               'irrelevante discutir se uma justifica a outra.',
    'distratores': {
        'a': 'Exigiria que II fosse verdadeira e explicasse I. Nem uma coisa '
             'nem outra: II descreve prefetch, e não Von Neumann.',
        'b': 'Também exige que II seja verdadeira. Ela não é — o mecanismo '
             'está mal atribuído e a causa está invertida.',
        'd': 'Inverte os dois vereditos. I é o que há de mais consolidado em '
             'arquitetura: o modelo de programa armazenado sobreviveu.',
    },
    'conceito': 'Separar ARQUITETURA (o modelo conceitual: programa '
                'armazenado, memória única, execução sequencial) de '
                'ORGANIZAÇÃO (como se implementa: pipeline, prefetch, cache, '
                'superescalar). Prefetch é organização.',
    'pegadinha': 'A asserção II usa vocabulário técnico correto e descreve um '
                 'mecanismo que realmente existe. O erro é de atribuição — e '
                 'a frase final inverte a relação de causa, dizendo que a '
                 'instrução já está no registrador, quando o problema que o '
                 'prefetch resolve é exatamente ela NÃO estar.',
    'referencia': 'BRITO, A. V. Introdução a Arquitetura de Computadores. '
                  'UFPB Virtual, 2020.',
}

RA[7] = {
    'itens': {
        'I': 'VERDADEIRA. O Scrum Master é responsável por garantir que o '
             'time entenda e aplique o framework, removendo impedimentos e '
             'protegendo o processo. É um papel de facilitação.',
        'II': 'VERDADEIRA. O Product Owner responde pelo valor do produto: '
              'mantém e prioriza o backlog e decide o que será construído, '
              'evitando que o time se perca em questões técnicas que não '
              'entregam valor.',
        'III': 'FALSA. Nenhum dos dois tem autoridade hierárquica sobre o '
               'time — o time de desenvolvimento é auto-organizado e decide '
               'COMO fazer o trabalho. O próprio enunciado dá a pista: diz '
               'que nas metodologias ágeis "deixou de ser previsto um gerente '
               'de projeto" e que os dois papéis atuam como INTERFACE entre a '
               'equipe e a organização. Interface não é chefia.',
    },
    'correta': 'I e II descrevem corretamente os dois papéis: facilitação do '
               'processo (Scrum Master) e responsabilidade pelo produto '
               '(Product Owner).',
    'distratores': {
        'a': 'Descarta I sem motivo — guiar o time no uso do Scrum é a '
             'definição do Scrum Master.',
        'b': 'Fica apenas com III, o único item falso.',
        'd': 'Acerta I mas soma III, reintroduzindo pela porta dos fundos a '
             'figura do chefe que o enunciado acabou de dizer que não '
             'existe.',
    },
    'conceito': 'Scrum tem três responsabilidades e nenhuma delas é '
                'hierárquica: Product Owner (o que construir), Scrum Master '
                '(como o processo flui) e o time de desenvolvimento '
                '(auto-organizado, decide como construir).',
    'pegadinha': 'O item III explora o hábito de traduzir "papel de '
                 'liderança" como "chefe". A resposta está dentro do próprio '
                 'enunciado, que descreve os dois papéis como interface com a '
                 'organização, e não como comando sobre a equipe.',
    'referencia': 'SOMMERVILLE, I. Engineering Software Products: An '
                  'Introduction to Modern Software Engineering. Boston: '
                  'Pearson, 2019.',
}

RA[8] = {
    'itens': {},
    'correta': 'Lendo o circuito da entrada para a saída: X1 atravessa um '
               'inversor e vira X1\'; X2 atravessa outro inversor e vira '
               'X2\'; X3 e X2\' entram numa porta AND, produzindo (X3 · '
               'X2\'); esse resultado e X1\' entram numa porta OR, produzindo '
               '(X3 · X2\') + X1\'; e o sinal ainda atravessa um último '
               'inversor, que nega tudo. A expressão final é, portanto, '
               '((X3 · X2\') + X1\')\', que é o que a alternativa escreve.',
    'distratores': {
        'a': 'É exatamente a expressão correta SEM o inversor final. Quem lê '
             'o circuito até a porta OR e para ali marca esta. A única '
             'diferença para a resposta é a bolinha na saída do último '
             'triângulo.',
        'c': 'Nega o AND inteiro — (X3 · X2)\' — em vez de negar apenas X2 '
             'antes do AND. No circuito, o inversor de X2 vem ANTES da porta '
             'AND, e não depois dela.',
        'd': 'Acumula os dois erros: nega o AND inteiro em vez de negar X2, e '
             'ainda ignora o inversor final.',
    },
    'conceito': 'Cada bolinha (círculo pequeno) num diagrama de portas '
                'significa negação, e a posição dela importa: negar a entrada '
                'de uma porta AND é diferente de negar a saída dela. Basta '
                'percorrer o circuito da esquerda para a direita, escrevendo '
                'a expressão acumulada em cada fio.',
    'pegadinha': 'O inversor final é um triângulo pequeno no canto direito, '
                 'fácil de tomar por decoração. Ele é a única coisa que '
                 'separa a alternativa a da alternativa b.',
    'referencia': 'GERSTING, J. L. Mathematical Structures for Computer '
                  'Science. New York: W. H. Freeman and Company, 2002.',
}

RA[9] = {
    'itens': {
        'I': 'VERDADEIRA. Desabilitar interrupções é uma técnica legítima de '
             'exclusão mútua, mas de uso restrito ao núcleo do sistema '
             'operacional. Entregar essa capacidade ao processo de usuário '
             'seria temerário: bastaria um processo desabilitar as '
             'interrupções e não reabilitá-las para o sistema inteiro travar.',
        'II': 'FALSA. A primeira parte está correta — desabilitar a '
              'interrupção realmente impede que o processador seja '
              'interrompido durante a região crítica. O erro está no final: a '
              'técnica é MENOS eficaz em multiprocessadores, e não mais. '
              'Desabilitar a interrupção afeta somente a CPU que executou a '
              'instrução; as demais CPUs continuam livres para entrar na '
              'região crítica, e a exclusão mútua se perde.',
    },
    'correta': 'A asserção I é verdadeira e a II é falsa. Como II é falsa, '
               'não há o que discutir sobre ela justificar I.',
    'distratores': {
        'a': 'Exigiria II verdadeira e justificando I. II termina afirmando o '
             'contrário do que acontece em multiprocessadores.',
        'b': 'Também exige II verdadeira.',
        'd': 'Declara I falsa. I é correta, e é exatamente por isso que a '
             'instrução de desabilitar interrupção é privilegiada e '
             'inacessível ao código de usuário.',
    },
    'conceito': 'As quatro condições de uma boa solução de exclusão mútua '
                'listadas no enunciado, em especial a segunda: "nenhuma '
                'suposição pode ser feita a respeito de velocidades ou de '
                'número de CPUs". Desabilitar interrupção viola justamente '
                'essa condição, porque só funciona com uma CPU.',
    'pegadinha': 'A asserção II tem três linhas corretas e uma oração final '
                 'invertida. Esta é a questão com o menor índice de acerto do '
                 'simulado, e o motivo é esse: quem para de ler quando '
                 'reconhece a descrição correta da técnica marca a ou b.',
    'referencia': 'TANENBAUM, A. S. Sistemas Operacionais Modernos. 4. ed. '
                  'São Paulo: Pearson Education do Brasil, 2016, p. 83.',
}

RA[10] = {
    'itens': {
        'I': 'VERDADEIRA. A regressão linear ajusta um modelo a pares '
             '(entrada, saída desejada). Há rótulo, portanto é aprendizado '
             'supervisionado — é o exemplo mais elementar da categoria.',
        'II': 'FALSA. Só existe "diferença entre a saída desejada e a saída '
              'gerada" quando há uma saída desejada, isto é, quando os dados '
              'estão rotulados. Isso é a definição de erro no aprendizado '
              'SUPERVISIONADO. O próprio enunciado diz que o não '
              'supervisionado "não utiliza referências".',
        'III': 'VERDADEIRA. Sem rótulos, o que resta é procurar estrutura nos '
               'próprios dados: agrupamento, redução de dimensionalidade, '
               'detecção de anomalias. É exatamente o cenário de '
               'reconhecimento de padrões descrito no item.',
        'IV': 'VERDADEIRA. Treinado com dados conhecidos e rotulados, o '
              'modelo supervisionado generaliza para dados novos. É a '
              'finalidade da categoria.',
    },
    'correta': 'I, III e IV descrevem corretamente as duas categorias. Apenas '
               'II troca uma pela outra.',
    'distratores': {
        'a': 'Correta no que afirma, mas incompleta: deixa de fora IV, que '
             'também é verdadeiro.',
        'b': 'Inclui II, que atribui ao não supervisionado um conceito — erro '
             'em relação à saída desejada — que só faz sentido no '
             'supervisionado.',
        'c': 'Também inclui II e ainda descarta III, que é verdadeiro.',
    },
    'conceito': 'A fronteira entre supervisionado e não supervisionado é uma '
                'só: existe rótulo? Se existe, dá para medir erro contra a '
                'resposta certa, e o problema é supervisionado. Se não '
                'existe, só dá para procurar estrutura, e o problema é não '
                'supervisionado.',
    'pegadinha': 'O item II simplesmente troca as duas palavras de lugar. É a '
                 'única troca da questão, e a resposta está escrita no '
                 'enunciado, que define as duas categorias no primeiro '
                 'parágrafo.',
    'referencia': 'PELLUCCI, P. R. S. et al. Utilização de técnicas de '
                  'aprendizado de máquina no reconhecimento de entidades '
                  'nomeadas no português. E-xacta, v. 4, n. 1, p. 73-81, '
                  '2011.',
    'nota_professor': 'Esta é a questão com inconsistência de pontuação no '
                      'LMS apontada na seção 5 do HANDOFF (média 0,24 e '
                      'desvio 0,22 não fecham com 54,29% de acerto). O '
                      'gabarito está confirmado contra a chave do INEP '
                      '(alternativa E da prova original), então a '
                      'inconsistência é de configuração do quiz, e não do '
                      'gabarito.',
}

RA[11] = {
    'itens': {
        'I': 'VERDADEIRA. Personas e cenários explicitam contexto, motivação '
             'e circunstância de uso — coisas que ficam implícitas numa lista '
             'seca de requisitos funcionais.',
        'II': 'VERDADEIRA. Ao narrar como uma persona concreta usaria o '
              'sistema, a equipe consegue antecipar o efeito de uma decisão '
              'de projeto sobre alguém específico, em vez de raciocinar sobre '
              'um "usuário" abstrato.',
        'III': 'FALSA. Personas e cenários são técnicas NARRATIVAS e '
               'deliberadamente informais. Especificação formal e não-ambígua '
               'é o território dos métodos formais (Z, B, redes de Petri) e '
               'de notações precisas — o oposto de uma história sobre uma '
               'pessoa fictícia. A ambiguidade, aqui, é um preço aceito em '
               'troca de riqueza de contexto.',
        'IV': 'VERDADEIRA. É talvez o benefício mais citado: manter viva na '
              'equipe a consciência de que existe gente real do outro lado, '
              'em vez de "o usuário" como abstração.',
    },
    'correta': 'I, II e IV capturam os benefícios reais da técnica: '
               'explicitar o implícito, avaliar decisões de projeto e '
               'humanizar o usuário.',
    'distratores': {
        'a': 'Inclui III, que atribui formalidade a uma técnica narrativa, e '
             'descarta II e IV.',
        'b': 'Correta no que afirma, mas incompleta: deixa de fora II.',
        'd': 'Acerta II e IV mas soma III e abandona I.',
    },
    'conceito': 'Personas e cenários são técnicas de elicitação qualitativa. '
                'Servem para trazer contexto, empatia e realismo, e não '
                'precisão formal. São complementares à especificação, nunca '
                'substitutas dela.',
    'pegadinha': 'A expressão "especificação formal e não-ambígua" no item '
                 'III soa como elogio e como algo que qualquer técnica boa '
                 'deveria entregar. É justamente o que personas e cenários '
                 'NÃO entregam, por construção.',
    'referencia': 'ROGERS, Y.; PREECE, J.; SHARP, H. Interaction Design: '
                  'beyond human-computer interaction. 5. ed. Indianapolis: '
                  'John Wiley & Sons, 2019.',
}

RA[12] = {
    'itens': {
        'I': 'VERDADEIRA. Verificado por execução: o programa imprime '
             'exatamente "7 - 7". O vetor da linha 23 é {1, 3, 5, 7, 9, 11, '
             '13, 15, 17, 19} e o valor 15 está no índice 7. A funcao1 '
             'percorre linearmente e para no índice 7; a funcao2 faz busca '
             'binária e converge para o mesmo índice 7.',
        'II': 'FALSA. No pior caso a funcao1 (busca linear) percorre os n '
              'elementos, custando O(n); a funcao2 (busca binária) descarta '
              'metade do espaço a cada chamada, custando O(log n). No pior '
              'caso a linear é a MAIS LENTA das duas, e não a mais rápida.',
        'III': 'FALSA. A funcao2 chama a si mesma nas linhas 18 e 20 — é '
               'recursiva, e não iterativa. Uma versão iterativa da busca '
               'binária existe e usa um laço while, mas não é o que está '
               'escrito aqui.',
    },
    'correta': 'Apenas a afirmação I sobrevive: a saída é mesmo "7 - 7", '
               'confirmada por execução do código.',
    'distratores': {
        'b': 'Fica só com III, que confunde recursão com iteração.',
        'c': 'Soma II, que inverte a comparação de custo entre busca linear e '
             'busca binária.',
        'd': 'Junta as duas falsas e descarta a única verdadeira.',
    },
    'conceito': 'Busca linear custa O(n) e não exige nada do vetor; busca '
                'binária custa O(log n) mas exige vetor ORDENADO. O vetor da '
                'linha 23 está ordenado, o que é a condição que permite às '
                'duas funções trabalharem sobre ele.',
    'pegadinha': 'As duas funções devolvem o mesmo número, 7, e a saída '
                 '"7 - 7" sugere que são equivalentes. Custo computacional '
                 'não aparece no resultado, e sim no número de passos até '
                 'chegar nele.',
    'referencia': 'Enade 2021, Ciência da Computação, questão 20.',
    'verificado': 'Código transcrito em codigos/q12_busca.c e executado: a '
                  'linha 24 imprime "7 - 7".',
}

RA[13] = {
    'itens': {},
    'correta': 'Gateways de transporte de fato interligam dois computadores '
               'que usam protocolos de transporte orientados a conexão '
               'diferentes, fazendo a tradução entre eles — e o exemplo '
               'clássico de Tanenbaum é justamente TCP de um lado e SCTP do '
               'outro. Como mostra a figura 1, o gateway de transporte opera '
               'na camada de transporte.',
    'distratores': {
        'a': 'Repetidor é um dispositivo analógico da camada FÍSICA: ele '
             'amplifica e regenera o sinal, sem interpretar nada. Não '
             'reconhece quadros, não reconhece pacotes e não tem cabeçalho '
             'próprio para reconhecer — a frase se contradiz.',
        'b': 'A descrição do hub começa certa (interfaces ligadas '
             'eletricamente, quadro que chega é repetido em todas as outras) '
             'e termina errada. Hub não tem buffer nem arbitragem: se dois '
             'quadros chegam ao mesmo tempo, há COLISÃO. Guardar em buffer e '
             'arbitrar é o que faz o switch, e é por isso que o switch acaba '
             'com o domínio de colisão compartilhado.',
        'c': 'Mistura três dispositivos. Isolar cada porta em seu próprio '
             'domínio de colisão e encaminhar vários quadros ao mesmo tempo é '
             'comportamento de SWITCH. E examinar a carga útil para obter o '
             'endereço do destinatário é olhar o pacote IP, ou seja, camada '
             'de rede — trabalho de ROTEADOR. A bridge opera na camada de '
             'enlace e decide pelo endereço MAC, sem abrir o pacote.',
    },
    'conceito': 'Cada dispositivo de interconexão é definido pela CAMADA em '
                'que opera, como resume a figura 1: repetidor e hub na '
                'física, bridge e switch no enlace, roteador na rede, '
                'gateways no transporte e na aplicação. A camada determina '
                'que parte do quadro o dispositivo consegue enxergar.',
    'pegadinha': 'Três das quatro alternativas atribuem a um dispositivo o '
                 'comportamento de outro, ou lhe inventam uma capacidade que '
                 'a camada em que ele opera não permite. O teste rápido é '
                 'sempre o mesmo: que informação esse dispositivo precisaria '
                 'ler para fazer o que a frase diz, e ele enxerga essa '
                 'informação na camada em que opera?',
    'referencia': 'TANENBAUM, A. S.; WETHERALL, D. Redes de Computadores. '
                  '5. ed. São Paulo: Pearson Prentice Hall, 2011, '
                  'p. 213 e 214.',
}

RA[14] = {
    'itens': {},
    'correta': 'A regra de mapeamento para relacionamentos 1:N é uma só: a '
               'chave primária do lado 1 vira chave estrangeira na tabela do '
               'lado N. No DER, PET está no lado N das duas relações — muitos '
               'pets pertencem a um TIPO_PET, e muitos pets são adotados por '
               'uma PESSOA. Logo PET recebe as duas chaves estrangeiras: '
               'codigo_tipo_pet referenciando TIPO_PET(codigo) e adotante '
               'referenciando PESSOA(cpf). PESSOA e TIPO_PET permanecem com '
               'seus próprios atributos, sem referência a PET.',
    'distratores': {
        'b': 'Inverte a relação "adotar", colocando codigo_pet dentro de '
             'PESSOA. Isso significaria que cada pessoa adota no máximo UM '
             'pet e que um mesmo pet poderia aparecer em várias pessoas — '
             'exatamente o contrário da cardinalidade do diagrama.',
        'c': 'Funde tudo numa única tabela. Cada pet carregaria o nome da '
             'pessoa e a descrição do tipo repetidos, gerando redundância, '
             'anomalias de atualização e a impossibilidade de cadastrar um '
             'tipo de pet ou uma pessoa que ainda não tenha pet associado.',
        'd': 'Acerta a chave estrangeira "adotante", mas copia '
             'descricao_tipo_pet para dentro de PET em vez de referenciar '
             'TIPO_PET. O texto descritivo do tipo passa a ser repetido em '
             'cada pet do mesmo tipo, e a tabela TIPO_PET perde a função.',
    },
    'conceito': 'Mapeamento do modelo conceitual para o relacional: em 1:N a '
                'chave migra do lado 1 para o lado N; em 1:1 ela pode ir para '
                'qualquer um dos lados, em geral o de participação '
                'obrigatória; em N:N surge uma tabela nova só para o '
                'relacionamento.',
    'pegadinha': 'A alternativa d é quase igual à correta e só troca uma '
                 'REFERÊNCIA por uma CÓPIA do atributo descritivo. Guardar o '
                 'texto em vez da chave é o erro de modelagem mais comum de '
                 'todos, e é o que a normalização existe para evitar.',
    'referencia': 'Enade 2021, Ciência da Computação, questão 22.',
}

RA[15] = {
    'itens': {},
    'correta': 'Inserindo (27, 34, 40, 18, 23, 5, 25, 36, 10, 7, -2) numa '
               'árvore binária de busca vazia, o percurso EM-ORDEM produz '
               '-2, 5, 7, 10, 18, 23, 25, 27, 34, 36, 40. Há um atalho que '
               'dispensa montar a árvore: o percurso em-ordem de uma ABB '
               'devolve SEMPRE os elementos em ordem crescente, por definição '
               'da estrutura. Basta ordenar a lista dada e comparar.',
    'distratores': {
        'a': 'A altura está certa (5 níveis), mas a contagem está errada. À '
             'esquerda da raiz 27 ficam 18, 5, -2, 10, 7, 23 e 25 — são 7 '
             'elementos, e não 6. À direita ficam 34, 40 e 36 — são 3, e não '
             '4.',
        'b': 'A sequência apresentada está correta, mas o percurso está '
             'trocado: -2, 7, 10, 5, 25, 23, 18, 36, 40, 34, 27 é a '
             'PÓS-ORDEM, e não a pré-ordem. A pré-ordem começa pela raiz, e '
             'esta sequência começa pelo menor elemento.',
        'd': 'Mesmo erro de b, no sentido inverso: a sequência 27, 18, 5, -2, '
             '10, 7, 23, 25, 34, 40, 36 é a PRÉ-ORDEM, rotulada como '
             'pós-ordem. A pós-ordem termina na raiz; esta começa nela.',
    },
    'conceito': 'Os três percursos se distinguem por QUANDO a raiz é '
                'visitada: pré-ordem visita a raiz antes das subárvores '
                '(começa na raiz), em-ordem visita entre elas (o que numa ABB '
                'resulta em ordem crescente) e pós-ordem visita depois '
                '(termina na raiz).',
    'pegadinha': 'As alternativas b e d trocam as sequências entre si: b '
                 'apresenta a pós-ordem chamando de pré-ordem, e d apresenta '
                 'a pré-ordem chamando de pós-ordem. Quem monta a árvore '
                 'corretamente mas confunde os nomes dos percursos cai numa '
                 'das duas. O teste de um segundo: pré-ordem COMEÇA na raiz, '
                 'pós-ordem TERMINA na raiz.',
    'referencia': 'LAUREANO, M. A. P. Estrutura de Dados com Algoritmos. '
                  'São Paulo: Brasport, 2008, p. 126, 129 e 136.',
    'verificado': 'Árvore construída e percorrida por código em '
                  'ferramentas/verificar.py: o percurso em-ordem confere com '
                  'a lista ordenada, há 7 elementos à esquerda e 3 à direita, '
                  'e a altura é 5.',
}
