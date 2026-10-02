/* Gerado por ferramentas/gerar_site.py a partir de
   dados/questoes.json e dados/presencial/questoes.json.
   Nao edite este arquivo a mao. */
window.AVALIACOES = {
 "online": {
  "questoes": [
   {
    "prova": 1,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Sistemas Operacionais — escalonamento",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Quando um computador é multiprogramado, ele geralmente tem múltiplos processos ou threads que competem pela CPU ao mesmo tempo. Essa situação ocorre sempre que dois ou mais processos estão simultaneamente no estado pronto. Se somente uma CPU se encontrar disponível, deverá ser feita uma escolha de qual processo executar em seguida. A parte do sistema operacional que faz a escolha é chamada de escalonador, e o algoritmo que ele usa é o algoritmo de escalonamento."
     },
     {
      "tipo": "paragrafo",
      "texto": "TANENBAUM, A. S. Sistemas Operacionais Modernos."
     },
     {
      "tipo": "referencia",
      "texto": "3. ed., São Paulo: Pearson, 2010 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando que em ambientes diferentes são necessários algoritmos diferentes de escalonamento, garantindo assim que seja maximizado o uso de seus recursos, assinale a opção que apresenta um algoritmo de escalonamento seguido do tipo de ambiente no qual deva ser implementado."
     }
    ],
    "comando": "Considerando que em ambientes diferentes são necessários algoritmos diferentes de escalonamento, garantindo assim que seja maximizado o uso de seus recursos, assinale a opção que apresenta um algoritmo de escalonamento seguido do tipo de ambiente no qual deva ser implementado.",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "Primeiro a chegar, último a sair (first in, last out - FILO); propício para sistemas de tempo real."
     },
     {
      "letra": "b",
      "texto": "Escalonamento por taxas monotônicas (rate monotonic scheduling - RMS); propício para sistemas em lote."
     },
     {
      "letra": "c",
      "texto": "Tarefa mais curta primeiro; propício para sistemas interativos."
     },
     {
      "letra": "d",
      "texto": "Escalonamento por prioridades; propício para sistemas interativos."
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "Tanenbaum organiza os algoritmos de escalonamento por ambiente, e cada ambiente tem uma meta diferente. Em sistemas interativos a meta é o tempo de resposta: o usuário está na frente da tela esperando. O escalonamento por prioridades — normalmente com múltiplas filas e realimentação — atende a isso porque permite privilegiar os processos que fazem muita E/S, justamente os que interagem com o usuário, em vez dos que só consomem CPU.",
     "por_que_cada_distrator_cai": {
      "a": "Inverte duas coisas. Primeiro, o algoritmo clássico é FIFO (first in, first out), e não FILO — FILO nem é usado como política de CPU. Segundo, tempo real exige garantia de prazo, e atender por ordem de chegada não garante prazo nenhum.",
      "b": "O RMS (rate monotonic scheduling) é o algoritmo de tempo real por excelência: atribui prioridade fixa conforme a frequência da tarefa periódica. Colocá-lo em \"sistemas em lote\" é trocar o par, porque em lote não há prazo periódico a cumprir.",
      "c": "Tarefa mais curta primeiro (SJF) é um algoritmo de LOTE, não interativo. Ele depende de conhecer de antemão a duração de cada tarefa, o que só é razoável num lote de jobs previsíveis. Num sistema interativo essa duração é imprevisível."
     },
     "conceito_chave": "Os três ambientes de Tanenbaum e a meta de cada um: LOTE (maximizar vazão e uso de CPU), INTERATIVO (minimizar tempo de resposta) e TEMPO REAL (cumprir prazos). Cada algoritmo nasce para uma dessas metas.",
     "pegadinha": "Cada alternativa é um par: um algoritmo seguido do ambiente em que ele deveria ser implementado. O erro raramente está numa das metades isoladamente — está no casamento entre as duas. Em três dos quatro pares o algoritmo citado é real (RMS, tarefa mais curta primeiro, prioridades) e apenas o ambiente está trocado; a alternativa a é a exceção, porque adultera também o nome, escrevendo FILO onde o algoritmo clássico é FIFO. Não adianta reconhecer o nome: é preciso saber para que ambiente ele foi feito.",
     "referencia": "TANENBAUM, A. S. Sistemas Operacionais Modernos. 3. ed. São Paulo: Pearson, 2010."
    },
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 41,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 2,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Estruturas de dados — listas, filas e pilhas",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A biblioteca de coleções da linguagem Java disponibiliza implementações de propósito geral para estruturas de dados elementares, como listas, filas e pilhas. Considere as seguintes definições de classes que representam implementações de estruturas de dados disponíveis na biblioteca da linguagem:"
     },
     {
      "tipo": "paragrafo",
      "texto": "• Classe A: os objetos são organizados em uma ordem linear e podem ser inseridos somente no início ou no final dessa sequência;"
     },
     {
      "tipo": "paragrafo",
      "texto": "• Classe B: os objetos são organizados em uma ordem linear determinada por uma referência ao próximo objeto;"
     },
     {
      "tipo": "paragrafo",
      "texto": "• Classe C: os objetos são removidos na ordem oposta em que foram inseridos;"
     },
     {
      "tipo": "paragrafo",
      "texto": "• Classe D: os objetos são inseridos e removidos respeitando a seguinte regra: o elemento a ser removido é sempre aquele que foi inserido primeiro."
     },
     {
      "tipo": "paragrafo",
      "texto": "Nesse contexto, assinale a alternativa que representa, respectivamente, as estruturas de dados implementadas pelas classes A, B, C e D."
     }
    ],
    "comando": "Nesse contexto, assinale a alternativa que representa, respectivamente, as estruturas de dados implementadas pelas classes A, B, C e D.",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "Lista circular, lista simplesmente ligada, pilha e fila."
     },
     {
      "letra": "b",
      "texto": "Deque, lista simplesmente ligada, pilha e fila."
     },
     {
      "letra": "c",
      "texto": "Lista duplamente ligada, lista simplesmente ligada, fila e pilha."
     },
     {
      "letra": "d",
      "texto": "Pilha, fila, deque e lista simplesmente encadeada."
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "Classe A (\"inseridos somente no início ou no final\") é a definição de DEQUE (double-ended queue). Classe B (\"ordem determinada por uma referência ao próximo objeto\") é a lista simplesmente ligada, em que cada nó aponta apenas para o seguinte. Classe C (\"removidos na ordem oposta à que foram inseridos\") é LIFO, ou seja, PILHA. Classe D (\"o removido é sempre o que foi inserido primeiro\") é FIFO, ou seja, FILA.",
     "por_que_cada_distrator_cai": {
      "a": "Erra apenas na classe A. Lista circular é definida pelo último nó apontar de volta para o primeiro, e não por restringir a inserção às pontas. As outras três estão certas, o que torna esta a alternativa mais perigosa.",
      "c": "Erra em A e inverte C com D. Lista duplamente ligada permite inserção em QUALQUER posição, e não só nas pontas — a restrição às pontas é o que caracteriza o deque. E \"removidos na ordem oposta\" é pilha, não fila.",
      "d": "Desalinha as quatro. Atribui pilha a A, fila a B, deque a C e lista a D, quando a descrição de B é explicitamente sobre encadeamento por referência, e não sobre disciplina de acesso."
     },
     "conceito_chave": "Estruturas lineares se distinguem pela DISCIPLINA DE ACESSO, e não pela implementação interna: pilha é LIFO, fila é FIFO, deque permite os dois extremos. \"Lista ligada\" descreve como a memória é encadeada, o que é uma pergunta diferente.",
     "pegadinha": "A classe A é a única que decide a questão, e a isca é \"lista duplamente ligada\" na alternativa c: ela também permite inserir nas pontas, mas não SOMENTE nas pontas. A palavra \"somente\" é o que exige deque.",
     "referencia": "Enade 2021, Ciência da Computação, questão 10."
    },
    "gabarito_inep": "B",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 40,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 3,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Inteligência Artificial — redes neurais profundas",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Uma equipe de cientistas da computação de uma determinada empresa de animação foi designada para desenvolver um sistema capaz de varrer a web no intuito de detectar sites que possam estar usando imagens de seus personagens de animação sem o devido consentimento. Portanto, o sistema deverá receber imagens como entrada, classificá-las entre imagens da empresa e imagens não produzidas pela empresa."
     },
     {
      "tipo": "paragrafo",
      "texto": "A figura abaixo esboça uma arquitetura de rede neural profunda e o processo de treinamento que os cientistas pretendem usar"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image1.png",
      "arquivo": "figuras/q03_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "Após uma tentativa, notaram-se duas dificuldades: 1) o tempo de treinamento da rede estava muito longo e 2) a acurácia da rede treinada não estava no patamar aceito pela empresa. Diante deste contexto, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Aumentar o número de camadas é uma alternativa que pode levar a uma melhora na acurácia, além de diminuir o tempo de treinamento da rede."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Fazer uso de redes convolucionais é uma alternativa que pode levar a uma melhora na acurácia, no entanto, pode exigir uso de máquinas com maior poder de processamento."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "Aumentar o número de unidades de processamento (neurônios) nas camadas pode levar a uma piora na acurácia, além de diminuir o tempo de treinamento da rede."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "Aumentar o número de amostras de treinamento é uma alternativa que pode levar a uma melhora na acurácia, apesar de aumentar o tempo de treinamento da rede."
     },
     {
      "tipo": "item",
      "rotulo": "V",
      "texto": "Fazer uso de redes recorrentes é uma alternativa que pode levar a uma melhora na acurácia, no entanto, pode exigir uso de máquinas com maior poder de processamento."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Aumentar o número de camadas é uma alternativa que pode levar a uma melhora na acurácia, além de diminuir o tempo de treinamento da rede.",
      "veredito": false
     },
     {
      "rotulo": "II",
      "texto": "Fazer uso de redes convolucionais é uma alternativa que pode levar a uma melhora na acurácia, no entanto, pode exigir uso de máquinas com maior poder de processamento.",
      "veredito": true
     },
     {
      "rotulo": "III",
      "texto": "Aumentar o número de unidades de processamento (neurônios) nas camadas pode levar a uma piora na acurácia, além de diminuir o tempo de treinamento da rede.",
      "veredito": false
     },
     {
      "rotulo": "IV",
      "texto": "Aumentar o número de amostras de treinamento é uma alternativa que pode levar a uma melhora na acurácia, apesar de aumentar o tempo de treinamento da rede.",
      "veredito": true
     },
     {
      "rotulo": "V",
      "texto": "Fazer uso de redes recorrentes é uma alternativa que pode levar a uma melhora na acurácia, no entanto, pode exigir uso de máquinas com maior poder de processamento.",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e IV"
     },
     {
      "letra": "b",
      "texto": "I e V"
     },
     {
      "letra": "c",
      "texto": "II e III"
     },
     {
      "letra": "d",
      "texto": "II e IV"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q03_fig1.png",
      "imagem_docx": "image1.png",
      "descricao_alt": "Fluxograma do treinamento de uma rede neural profunda. Do topo para baixo: \"Entrada (X)\" alimenta a \"Camada de Entrada\", que leva a camadas intermediárias (representadas por reticências e por uma \"Camada Intermediária n\") e depois à \"Camada de Saída\", produzindo as \"Saídas Previstas (Y')\". Essas saídas e as \"Saídas Reais (Y)\" entram na \"Função de Perda\", cujo resultado é somado e enviado a um \"Otimizador\". O otimizador faz o \"Ajuste dos pesos\", realimentando as caixas \"Pesos 1\", \"Pesos\" e \"Pesos n\", que por sua vez alimentam as respectivas camadas. Fonte: Chollet, Deep Learning with Python, 2017."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "FALSA. A primeira metade está certa: mais camadas pode melhorar a acurácia. A segunda inverte o custo — mais camadas significam mais parâmetros e mais cálculo, logo AUMENTAM o tempo de treinamento. Não existe almoço grátis aqui.",
      "II": "VERDADEIRA. Redes convolucionais são a arquitetura adequada para imagens: exploram localidade espacial e compartilham pesos entre as regiões, o que melhora a acurácia em visão. E de fato costumam exigir mais poder de processamento (GPU).",
      "III": "FALSA por duas razões. Aumentar o número de neurônios não leva necessariamente a uma piora — pode melhorar ou levar a sobreajuste, depende. E, de novo, mais neurônios AUMENTAM o tempo de treinamento, não o diminuem.",
      "IV": "VERDADEIRA. Mais amostras de treinamento é o remédio mais confiável para acurácia baixa, porque melhora a generalização e combate o sobreajuste. O preço, admitido no próprio item, é o tempo maior de treinamento.",
      "V": "FALSA. Redes recorrentes são feitas para dados SEQUENCIAIS — texto, áudio, séries temporais — em que a ordem carrega informação. Classificar uma imagem estática não é um problema sequencial, e a arquitetura não se aplica."
     },
     "por_que_a_correta_esta_certa": "Apenas II e IV descrevem ações que realmente podem melhorar a acurácia, e ambas admitem honestamente o custo: mais processamento e mais tempo.",
     "por_que_cada_distrator_cai": {
      "a": "Inclui I, que afirma que mais camadas DIMINUEM o tempo de treinamento.",
      "b": "Inclui I, com o mesmo erro, e V, que propõe rede recorrente para classificação de imagem.",
      "c": "Inclui III, que afirma que mais neurônios diminuem o tempo de treinamento."
     },
     "conceito_chave": "Capacidade do modelo e volume de dados trocam acurácia por tempo: toda mudança que aumenta a capacidade da rede (camadas, neurônios) ou a quantidade de dados aumenta o custo computacional. E a arquitetura precisa casar com a natureza do dado — convolucional para imagem, recorrente para sequência.",
     "pegadinha": "Os itens I, III e IV têm a mesma forma: \"fazer X pode mudar a acurácia, e o efeito no tempo é Y\". A diferença está só no final de cada frase. I e III dizem que o tempo diminui; IV, o único verdadeiro dos três, admite que aumenta.",
     "referencia": "CHOLLET, F. Deep Learning with Python. New York: Manning Publications, 2017."
    },
    "gabarito_inep": "D",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 64,
     "classe": "Fácil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 4,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "LGPD — dados sensíveis e ANPD",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A Lei Geral de Proteção de Dados Pessoais (LGPD) está em vigência desde o final de 2018 e tem por objetivo regulamentar o tratamento de dados pessoais de clientes e usuários de empresas públicas e privadas. Sobre a LGPD, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "A lei reprime o uso indiscriminado de dados pessoais considerados sensíveis, como origem racial ou étnica, convicção religiosa e opinião política, informados em cadastros pelos cidadãos."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Os dados anonimizados não serão considerados pessoais, mesmo que, utilizando-se de recursos próprios ou tecnológicos avançados, o processo de anonimização possa ser revertido."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O indivíduo poderá exigir que uma empresa informe se possui dados pessoais dele bem como solicitar formalmente que eles sejam corrigidos, atualizados ou eliminados."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "A Autoridade Nacional de Proteção de Dados (ANPD) é responsável pela fiscalização e regulação da LGPD, prestando esclarecimentos, averiguando possíveis denúncias e modificando a legislação pertinente quando necessário."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "A lei reprime o uso indiscriminado de dados pessoais considerados sensíveis, como origem racial ou étnica, convicção religiosa e opinião política, informados em cadastros pelos cidadãos.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Os dados anonimizados não serão considerados pessoais, mesmo que, utilizando-se de recursos próprios ou tecnológicos avançados, o processo de anonimização possa ser revertido.",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "O indivíduo poderá exigir que uma empresa informe se possui dados pessoais dele bem como solicitar formalmente que eles sejam corrigidos, atualizados ou eliminados.",
      "veredito": true
     },
     {
      "rotulo": "IV",
      "texto": "A Autoridade Nacional de Proteção de Dados (ANPD) é responsável pela fiscalização e regulação da LGPD, prestando esclarecimentos, averiguando possíveis denúncias e modificando a legislação pertinente quando necessário.",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e II"
     },
     {
      "letra": "b",
      "texto": "I e III"
     },
     {
      "letra": "c",
      "texto": "II e IV"
     },
     {
      "letra": "d",
      "texto": "I, III e IV"
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. O art. 5º, II da LGPD define dado pessoal sensível incluindo exatamente origem racial ou étnica, convicção religiosa e opinião política. O art. 11 restringe o tratamento desses dados a hipóteses específicas, que é a \"repressão ao uso indiscriminado\" de que fala o item.",
      "II": "FALSA. É o oposto do art. 12. O dado anonimizado deixa de ser pessoal, mas justamente SALVO quando o processo de anonimização puder ser revertido com esforços razoáveis. O item afirma que ele continua não sendo pessoal \"mesmo que o processo possa ser revertido\", invertendo a exceção.",
      "III": "VERDADEIRA. São os direitos do titular previstos no art. 18: confirmação da existência do tratamento, acesso aos dados, correção de dados incompletos, inexatos ou desatualizados, e eliminação.",
      "IV": "FALSA. A ANPD fiscaliza, regulamenta, orienta e aplica sanções — tudo isso o item acerta. O erro está no fim: \"modificando a legislação pertinente quando necessário\". Alterar lei é competência do Poder Legislativo; a ANPD edita normas infralegais, o que não é a mesma coisa."
     },
     "por_que_a_correta_esta_certa": "I e III reproduzem corretamente a definição de dado sensível (art. 5º, II combinado com o art. 11) e os direitos do titular (art. 18).",
     "por_que_cada_distrator_cai": {
      "a": "Inclui II, que inverte a regra do dado anonimizado reversível.",
      "c": "Inclui II e IV, as duas falsas, e deixa de fora as duas verdadeiras.",
      "d": "Acerta I e III mas soma IV, que atribui à ANPD o poder de modificar a lei."
     },
     "conceito_chave": "Três pilares da LGPD que caem sempre: o que é dado sensível (art. 5º, II), quando um dado deixa de ser pessoal (art. 12, anonimização irreversível) e o que o titular pode exigir (art. 18).",
     "pegadinha": "O item IV é quase inteiramente verdadeiro e só erra na última oração. Uma agência reguladora regulamenta, mas não legisla. Ler até o ponto final é o que separa quem marca b de quem marca d.",
     "referencia": "BRASIL. Lei nº 13.709/2018 (LGPD), arts. 5º, 11, 12, 18 e 55-J."
    },
    "gabarito_inep": "B",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 14,
     "classe": "Muito difícil",
     "descartada_ponto_bisserial": true,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 5,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Engenharia de Software — desenvolvimento iterativo",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O desenvolvimento de sistemas iterativo e evolutivo é uma abordagem que estabelece ciclos de desenvolvimento, com duração fixa, chamados iterações. O produto de cada iteração é um sistema parcial, executável, testável e integrável. Cada iteração inclui suas próprias atividades de análises de requisitos, projeto, implementação e teste. O ciclo de vida iterativo é baseado em refinamentos e incrementos sucessivos de um sistema por meio de múltiplas iterações, com realimentação e adaptação cíclicas como principais propulsores para convergir para um sistema adequado."
     },
     {
      "tipo": "referencia",
      "texto": "CRAIG, L. Utilizando UML e Padrões: Uma Introdução à Análise e ao Projeto Orientados a Objetos. 3. ed. Porto Alegre: Bookman, 2007 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando o texto apresentado, assinale a opção correta sobre o desenvolvimento iterativo e evolutivo."
     }
    ],
    "comando": "Considerando o texto apresentado, assinale a opção correta sobre o desenvolvimento iterativo e evolutivo.",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "A mudança nos requisitos do sistema é algo que gera atraso no desenvolvimento, por isso é aconselhável evitá-la."
     },
     {
      "letra": "b",
      "texto": "O ciclo de desenvolvimento possui duração fixa, porém, durante o desenvolvimento, poderá ser alterado no caso de sistemas críticos."
     },
     {
      "letra": "c",
      "texto": "O teste de usabilidade deve ser realizado no último ciclo, pois será o momento em que o usuário consegue testar todas as funcionalidades."
     },
     {
      "letra": "d",
      "texto": "O documento de teste de usabilidade deve contemplar os critérios de acessibilidade para atender a todos os usuários do sistema."
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "O documento de teste de usabilidade precisa contemplar critérios de acessibilidade porque \"todos os usuários do sistema\" inclui pessoas com deficiência. Acessibilidade é requisito de qualidade do produto, e não um extra opcional — por isso entra no planejamento do teste, e não depois dele.",
     "por_que_cada_distrator_cai": {
      "a": "Contraria a premissa central do enunciado. O ciclo iterativo e evolutivo existe PARA acomodar mudança de requisitos: o próprio texto fala em \"realimentação e adaptação cíclicas como principais propulsores\". Tratar mudança como algo a evitar é a lógica do modelo cascata.",
      "b": "Erra o que é fixo. No timeboxing a DURAÇÃO da iteração é inviolável; o que se ajusta é o escopo entregue naquele prazo. A alternativa propõe o contrário — esticar o prazo — e ainda cria uma exceção para \"sistemas críticos\" que não existe no método.",
      "c": "Deixar o teste de usabilidade para o último ciclo anula o benefício do desenvolvimento iterativo. Cada iteração produz um sistema \"parcial, executável, testável\", como diz o enunciado, justamente para que o feedback do usuário chegue cedo e ainda dê tempo de corrigir."
     },
     "conceito_chave": "No desenvolvimento iterativo e evolutivo, a duração da iteração é fixa e o escopo é variável; a mudança de requisitos é esperada, e não combatida; e a validação com o usuário acontece a cada ciclo.",
     "pegadinha": "A alternativa correta é a única que NÃO fala de iteratividade. Quem procura a frase sobre ciclos acaba em b, que soa razoável (\"prazo fixo, mas flexível para casos críticos\") e é exatamente a negação do timeboxing.",
     "referencia": "LARMAN, C. Utilizando UML e Padrões: Uma Introdução à Análise e ao Projeto Orientados a Objetos. 3. ed. Porto Alegre: Bookman, 2007."
    },
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 20,
     "classe": "Difícil",
     "descartada_ponto_bisserial": true,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 6,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Arquitetura — Von Neumann e ENIAC",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O primeiro computador criado foi o ENIAC (Electronic Numerical Integrator And Computer), desenvolvido por Eckert e Mauchly na Universidade da Pennsylvania, Estados Unidos. O projeto iniciou-se em 1943, financiado pelo governo americano. O período era da Segunda Guerra Mundial e o objetivo era poder calcular de forma mais ágil as melhores trajetórias para transporte de armas e mantimentos em meio aos exércitos inimigos. Esse é o tipo de cálculo que pequenos aparelhos celulares fazem hoje para encontrar rotas nas cidades por meio de GPS (Global Positioning System) e análise de mapa. O projeto só foi concluído em 1946, tarde demais para ser utilizado para a Segunda Guerra, mas foi bastante utilizado até 1955."
     },
     {
      "tipo": "paragrafo",
      "texto": "Muitos projetos surgiram depois do ENIAC, mas eles eram barrados por algumas dificuldades e limitações, como por exemplo, o fato de não serem programados e trabalharem com números decimais. O problema de trabalhar com decimais é que cada algarismo armazenado possui 10 estados possíveis, representando os números de 0 a 9. Dentro de um sistema eletrônico, isso é complicado porque a carga de cada dispositivo, seja transistor, seja válvula, deveria ser medida para se verificar que número ela estava representando. Os erros eram muito frequentes. Bastava que uma válvula estivesse fora da temperatura ideal para que os resultados das operações começassem a sair errado. Von Neumann recomendou, então, que, em sua arquitetura, os dados e instruções passassem a ser armazenados em código binário, facilitando a análise dos mesmos e reduzindo a quantidade de erros."
     },
     {
      "tipo": "referencia",
      "texto": "BRITO, A. V. Introdução a Arquitetura de Computadores. UFPB Virtual, 2020. Disponível em: http://producao.virtual.ufpb.br/."
     },
     {
      "tipo": "referencia",
      "texto": "Acesso em: 05 maio 2020 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Acerca da arquitetura de Von Neumann, avalie as asserções a seguir e a relação proposta entre elas."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Embora as arquiteturas de computadores tenham evoluído muito do ENIAC aos modernos notebooks de hoje, a arquitetura de Von Neumann, conceito da década de 1950, tem se mantido até os dias atuais."
     },
     {
      "tipo": "paragrafo",
      "texto": "PORQUE"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "A arquitetura de Von Neumann permite que a CPU realize a busca de uma ou mais instruções além da próxima a ser executada; essa técnica é utilizada para acelerar a velocidade de operação da CPU, uma vez que a próxima instrução a ser executada está normalmente armazenada nos registradores da CPU e não precisa ser buscada da memória principal, que é muito mais lenta."
     },
     {
      "tipo": "paragrafo",
      "texto": "A respeito dessas asserções, assinale a opção correta."
     }
    ],
    "comando": "A respeito dessas asserções, assinale a opção correta.",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Embora as arquiteturas de computadores tenham evoluído muito do ENIAC aos modernos notebooks de hoje, a arquitetura de Von Neumann, conceito da década de 1950, tem se mantido até os dias atuais.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "A arquitetura de Von Neumann permite que a CPU realize a busca de uma ou mais instruções além da próxima a ser executada; essa técnica é utilizada para acelerar a velocidade de operação da CPU, uma vez que a próxima instrução a ser executada está normalmente armazenada nos registradores da CPU e não precisa ser buscada da memória principal, que é muito mais lenta.",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
     },
     {
      "letra": "b",
      "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I"
     },
     {
      "letra": "c",
      "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa"
     },
     {
      "letra": "d",
      "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. A arquitetura de Von Neumann — programa armazenado, com dados e instruções na mesma memória, e execução sequencial controlada por um contador de programa — continua sendo a base dos computadores atuais. As implementações mudaram radicalmente; o modelo conceitual, não.",
      "II": "FALSA. O que o item descreve, buscar instruções além da próxima para acelerar a execução, é PREFETCH (busca antecipada), um recurso de implementação ligado a pipeline, e não uma característica da arquitetura de Von Neumann. E a justificativa dada está invertida: as instruções NÃO estão normalmente nos registradores; elas vêm da memória principal, e o prefetch existe precisamente PORQUE a memória é lenta."
     },
     "por_que_a_correta_esta_certa": "A asserção I é verdadeira e a II é falsa, o que torna irrelevante discutir se uma justifica a outra.",
     "por_que_cada_distrator_cai": {
      "a": "Exigiria que II fosse verdadeira e explicasse I. Nem uma coisa nem outra: II descreve prefetch, e não Von Neumann.",
      "b": "Também exige que II seja verdadeira. Ela não é — o mecanismo está mal atribuído e a causa está invertida.",
      "d": "Inverte os dois vereditos. I é o que há de mais consolidado em arquitetura: o modelo de programa armazenado sobreviveu."
     },
     "conceito_chave": "Separar ARQUITETURA (o modelo conceitual: programa armazenado, memória única, execução sequencial) de ORGANIZAÇÃO (como se implementa: pipeline, prefetch, cache, superescalar). Prefetch é organização.",
     "pegadinha": "A asserção II usa vocabulário técnico correto e descreve um mecanismo que realmente existe. O erro é de atribuição — e a frase final inverte a relação de causa, dizendo que a instrução já está no registrador, quando o problema que o prefetch resolve é exatamente ela NÃO estar.",
     "referencia": "BRITO, A. V. Introdução a Arquitetura de Computadores. UFPB Virtual, 2020."
    },
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 25,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 7,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Engenharia de Software — SCRUM",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O surgimento das metodologias ágeis eliminou o gerenciamento baseado em planos, substituindo-o pelo planejamento incremental. A documentação de projeto foi reduzida ao mínimo e deixou de ser previsto um gerente de projeto. Infelizmente, esse tipo de abordagem não atende as necessidades das organizações, em que gerentes de negócio necessitam acompanhar o andamento dos projetos, controlar orçamento, estabelecer prioridades e atualizar seus planos de negócio. Nesse contexto, foi desenvolvido o SCRUM, um framework para a organização de projetos ágeis. O SCRUM prevê dois indivíduos: o Scrum Master e o Product Owner, que são responsáveis por atuar como interface entre a equipe de desenvolvimento e a organização."
     },
     {
      "tipo": "referencia",
      "texto": "SOMMERVILLE, I. Engineering Software Products: An Introduction to Modern Software Engineering. Boston: Pearson, 2019 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Em relação à metodologia SCRUM, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O papel do Scrum Master é guiar a equipe no uso efetivo da metodologia SCRUM."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "O papel do Product Owner é garantir o foco no produto, evitando que o mesmo se perca em questões técnicas menos relevantes."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "Tanto o Scrum Master como o Product Owner têm autoridade direta sobre a equipe."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em:"
     }
    ],
    "comando": "É correto o que se afirma em:",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O papel do Scrum Master é guiar a equipe no uso efetivo da metodologia SCRUM.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "O papel do Product Owner é garantir o foco no produto, evitando que o mesmo se perca em questões técnicas menos relevantes.",
      "veredito": true
     },
     {
      "rotulo": "III",
      "texto": "Tanto o Scrum Master como o Product Owner têm autoridade direta sobre a equipe.",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "II, apenas"
     },
     {
      "letra": "b",
      "texto": "III, apenas"
     },
     {
      "letra": "c",
      "texto": "I e II, apenas"
     },
     {
      "letra": "d",
      "texto": "I e III, apenas"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. O Scrum Master é responsável por garantir que o time entenda e aplique o framework, removendo impedimentos e protegendo o processo. É um papel de facilitação.",
      "II": "VERDADEIRA. O Product Owner responde pelo valor do produto: mantém e prioriza o backlog e decide o que será construído, evitando que o time se perca em questões técnicas que não entregam valor.",
      "III": "FALSA. Nenhum dos dois tem autoridade hierárquica sobre o time — o time de desenvolvimento é auto-organizado e decide COMO fazer o trabalho. O próprio enunciado dá a pista: diz que nas metodologias ágeis \"deixou de ser previsto um gerente de projeto\" e que os dois papéis atuam como INTERFACE entre a equipe e a organização. Interface não é chefia."
     },
     "por_que_a_correta_esta_certa": "I e II descrevem corretamente os dois papéis: facilitação do processo (Scrum Master) e responsabilidade pelo produto (Product Owner).",
     "por_que_cada_distrator_cai": {
      "a": "Descarta I sem motivo — guiar o time no uso do Scrum é a definição do Scrum Master.",
      "b": "Fica apenas com III, o único item falso.",
      "d": "Acerta I mas soma III, reintroduzindo pela porta dos fundos a figura do chefe que o enunciado acabou de dizer que não existe."
     },
     "conceito_chave": "Scrum tem três responsabilidades e nenhuma delas é hierárquica: Product Owner (o que construir), Scrum Master (como o processo flui) e o time de desenvolvimento (auto-organizado, decide como construir).",
     "pegadinha": "O item III explora o hábito de traduzir \"papel de liderança\" como \"chefe\". A resposta está dentro do próprio enunciado, que descreve os dois papéis como interface com a organização, e não como comando sobre a equipe.",
     "referencia": "SOMMERVILLE, I. Engineering Software Products: An Introduction to Modern Software Engineering. Boston: Pearson, 2019."
    },
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 51,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 8,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Circuitos lógicos — álgebra booleana",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Em 1938, o matemático americano Claude Shannon notou o paralelismo entre a lógica proposicional e a lógica dos circuitos e percebeu que a álgebra booleana teria um papel importante na sistematização deste ramo da eletrônica. Cada um dos conetivos básicos da lógica são instâncias das operações básicas da álgebra booleana (“+”, “.” e ” ’ ”). Expressões booleanas combinando operações e variáveis podem ser usadas para representar circuitos combinacionais formados por portas lógicas."
     },
     {
      "tipo": "paragrafo",
      "texto": "GERSTING, J. L. Mathematical Structures for Computer Science. New York: W. H. Freeman and Company, 2002."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image2.png",
      "arquivo": "figuras/q08_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "figura",
      "imagem_docx": "image3.png",
      "arquivo": "figuras/q08_fig2.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "Qual das alternativas apresenta a expressão booleana correspondente?"
     }
    ],
    "comando": null,
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "(X3 . X2’) + X1’"
     },
     {
      "letra": "b",
      "texto": "(X3 . (x2’) + (x1’))’"
     },
     {
      "letra": "c",
      "texto": "((X3 . X2)’ + X1’)’"
     },
     {
      "letra": "d",
      "texto": "(X3 . X2)’ + X1’"
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q08_fig1.png",
      "imagem_docx": "image2.png",
      "descricao_alt": "Legenda com os símbolos das três portas lógicas básicas: a porta \"e\" (AND), desenhada como um retângulo de lado direito arredondado; a porta \"ou\" (OR), com entrada côncava e saída em ponta; e a porta \"não\" (NOT), um triângulo com um pequeno círculo na saída. O círculo é o símbolo da negação."
     },
     {
      "arquivo": "figuras/q08_fig2.png",
      "imagem_docx": "image3.png",
      "descricao_alt": "Circuito combinacional com três entradas empilhadas à esquerda: X1 no topo, X2 no meio e X3 embaixo. X1 atravessa um inversor, produzindo X1 negado. X2 atravessa outro inversor, produzindo X2 negado. X2 negado e X3 entram juntos numa porta AND. A saída dessa porta AND e o X1 negado entram numa porta OR. A saída da porta OR atravessa um último inversor, que é a saída do circuito."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "Lendo o circuito da entrada para a saída: X1 atravessa um inversor e vira X1'; X2 atravessa outro inversor e vira X2'; X3 e X2' entram numa porta AND, produzindo (X3 · X2'); esse resultado e X1' entram numa porta OR, produzindo (X3 · X2') + X1'; e o sinal ainda atravessa um último inversor, que nega tudo. A expressão final é, portanto, ((X3 · X2') + X1')', que é o que a alternativa escreve.",
     "por_que_cada_distrator_cai": {
      "a": "É exatamente a expressão correta SEM o inversor final. Quem lê o circuito até a porta OR e para ali marca esta. A única diferença para a resposta é a bolinha na saída do último triângulo.",
      "c": "Nega o AND inteiro — (X3 · X2)' — em vez de negar apenas X2 antes do AND. No circuito, o inversor de X2 vem ANTES da porta AND, e não depois dela.",
      "d": "Acumula os dois erros: nega o AND inteiro em vez de negar X2, e ainda ignora o inversor final."
     },
     "conceito_chave": "Cada bolinha (círculo pequeno) num diagrama de portas significa negação, e a posição dela importa: negar a entrada de uma porta AND é diferente de negar a saída dela. Basta percorrer o circuito da esquerda para a direita, escrevendo a expressão acumulada em cada fio.",
     "pegadinha": "O inversor final é um triângulo pequeno no canto direito, fácil de tomar por decoração. Ele é a única coisa que separa a alternativa a da alternativa b.",
     "referencia": "GERSTING, J. L. Mathematical Structures for Computer Science. New York: W. H. Freeman and Company, 2002."
    },
    "gabarito_inep": "B",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 63,
     "classe": "Fácil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 9,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Sistemas Operacionais — exclusão mútua",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Durante parte do tempo, um processo está ocupado realizando computações internas e outras coisas que não levam a condições de corrida. No entanto, às vezes, um processo tem de acessar uma memória compartilhada ou arquivos, ou realizar outras tarefas críticas que podem levar a corridas. Essa parte do programa onde a memória compartilhada é acessada é chamada de região crítica ou seção crítica. Se conseguíssemos arranjar as coisas de maneira que dois processos jamais estivessem em suas regiões críticas ao mesmo tempo, poderíamos evitar as corridas. Embora essa exigência evite as condições de corrida, ela não é suficiente para garantir que processos em paralelo cooperem de modo correto e eficiente usando dados compartilhados. Precisamos que quatro condições se mantenham para chegar a uma boa solução."
     },
     {
      "tipo": "lista",
      "rotulo": "1",
      "texto": "Dois processos jamais podem simultaneamente estar dentro de suas regiões críticas."
     },
     {
      "tipo": "lista",
      "rotulo": "2",
      "texto": "Nenhuma suposição pode ser feita a respeito de velocidades ou de número de CPUs."
     },
     {
      "tipo": "lista",
      "rotulo": "3",
      "texto": "Nenhum processo executando fora de sua região crítica pode bloquear qualquer processo."
     },
     {
      "tipo": "lista",
      "rotulo": "4",
      "texto": "Nenhum processo deve ser obrigado a esperar eternamente para entrar em sua região crítica."
     },
     {
      "tipo": "paragrafo",
      "texto": "Em um sentido abstrato, o comportamento que queremos é mostrado na figura a seguir."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image4.png",
      "arquivo": "figuras/q09_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando o texto e a figura apresentados, avalie as asserções a seguir e a relação proposta entre elas."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Em algumas situações, a exclusão mútua pode ser obtida por meio da desabilitação da interrupção controlada pelo Sistema Operacional, não sendo permitido que o seu controle seja feito pelo usuário."
     },
     {
      "tipo": "paragrafo",
      "texto": "PORQUE"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "A desabilitação da interrupção é uma técnica que pode impedir que o processador que está executando um processo em sua região crítica seja interrompido para executar outro código, sendo mais eficiente em sistemas de multiprocessadores devido a quantidade de processos concorrentes."
     },
     {
      "tipo": "paragrafo",
      "texto": "A respeito dessas asserções, assinale a opção correta."
     }
    ],
    "comando": "A respeito dessas asserções, assinale a opção correta.",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Em algumas situações, a exclusão mútua pode ser obtida por meio da desabilitação da interrupção controlada pelo Sistema Operacional, não sendo permitido que o seu controle seja feito pelo usuário.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "A desabilitação da interrupção é uma técnica que pode impedir que o processador que está executando um processo em sua região crítica seja interrompido para executar outro código, sendo mais eficiente em sistemas de multiprocessadores devido a quantidade de processos concorrentes.",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
     },
     {
      "letra": "b",
      "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I"
     },
     {
      "letra": "c",
      "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa"
     },
     {
      "letra": "d",
      "texto": "As asserções I e II são proposições falsas"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q09_fig1.png",
      "imagem_docx": "image4.png",
      "descricao_alt": "Diagrama de tempo com duas linhas horizontais, \"Processo A\" em cima e \"Processo B\" embaixo, e o tempo crescendo para a direita, marcado nos instantes T1, T2, T3 e T4. O processo A ocupa a região crítica (faixa cinza) de T1 a T3: entra em T1 e sai em T3. O processo B tenta entrar na região crítica em T2, mas fica bloqueado no intervalo de T2 a T3, indicado por uma chave rotulada \"B bloqueado\". Assim que A sai, em T3, B entra na região crítica e permanece até T4. O diagrama ilustra que os dois processos nunca ocupam a região crítica ao mesmo tempo. Fonte: Tanenbaum, Sistemas Operacionais Modernos, 4. ed., p. 83."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Desabilitar interrupções é uma técnica legítima de exclusão mútua, mas de uso restrito ao núcleo do sistema operacional. Entregar essa capacidade ao processo de usuário seria temerário: bastaria um processo desabilitar as interrupções e não reabilitá-las para o sistema inteiro travar.",
      "II": "FALSA. A primeira parte está correta — desabilitar a interrupção realmente impede que o processador seja interrompido durante a região crítica. O erro está no final: a técnica é MENOS eficaz em multiprocessadores, e não mais. Desabilitar a interrupção afeta somente a CPU que executou a instrução; as demais CPUs continuam livres para entrar na região crítica, e a exclusão mútua se perde."
     },
     "por_que_a_correta_esta_certa": "A asserção I é verdadeira e a II é falsa. Como II é falsa, não há o que discutir sobre ela justificar I.",
     "por_que_cada_distrator_cai": {
      "a": "Exigiria II verdadeira e justificando I. II termina afirmando o contrário do que acontece em multiprocessadores.",
      "b": "Também exige II verdadeira.",
      "d": "Declara I falsa. I é correta, e é exatamente por isso que a instrução de desabilitar interrupção é privilegiada e inacessível ao código de usuário."
     },
     "conceito_chave": "As quatro condições de uma boa solução de exclusão mútua listadas no enunciado, em especial a segunda: \"nenhuma suposição pode ser feita a respeito de velocidades ou de número de CPUs\". Desabilitar interrupção viola justamente essa condição, porque só funciona com uma CPU.",
     "pegadinha": "A asserção II tem três linhas corretas e uma oração final invertida. Esta é a questão com o menor índice de acerto do simulado, e o motivo é esse: quem para de ler quando reconhece a descrição correta da técnica marca a ou b.",
     "referencia": "TANENBAUM, A. S. Sistemas Operacionais Modernos. 4. ed. São Paulo: Pearson Education do Brasil, 2016, p. 83."
    },
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 12,
     "classe": "Muito difícil",
     "descartada_ponto_bisserial": true,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 10,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Aprendizado de máquina — supervisionado",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "As técnicas de aprendizado de máquinas empregam um princípio de inferência denominado indução, no qual é possível obter conclusões genéricas a partir de um conjunto particular de exemplos. Estas técnicas de aprendizados indutivos podem ser divididas em dois principais tipos: os supervisionados e os não supervisionados. No aprendizado supervisionado é fornecida uma referência do objetivo a ser alcançado, isto é, um treinamento com o conhecimento do ambiente. Diferentemente do aprendizado supervisionado, o não supervisionado não utiliza referências, ou seja, não ocorre um treinamento com o conhecimento do ambiente."
     },
     {
      "tipo": "paragrafo",
      "texto": "PELLUCCI P. R. S. et al. Utilização de técnicas de aprendizado de máquina no reconhecimento de entidades nomeadas no português."
     },
     {
      "tipo": "referencia",
      "texto": "Belo Horizonte. E-xacta, v. 4, n. 1, p. 73-81, 2011 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando as informações do texto, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "A regressão linear é um exemplo de modelo baseado no aprendizado supervisionado."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "A diferença entre a saída desejada e a saída gerada é o valor do erro de um aprendizado não supervisionado."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O aprendizado não supervisionado é mais utilizado quando o entendimento dos dados é feito por meio de reconhecimento de padrões."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "O aprendizado supervisionado é capaz de tomar decisões precisas ao receber novos dados a partir de um treinamento com dados conhecidos."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "A regressão linear é um exemplo de modelo baseado no aprendizado supervisionado.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "A diferença entre a saída desejada e a saída gerada é o valor do erro de um aprendizado não supervisionado.",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "O aprendizado não supervisionado é mais utilizado quando o entendimento dos dados é feito por meio de reconhecimento de padrões.",
      "veredito": true
     },
     {
      "rotulo": "IV",
      "texto": "O aprendizado supervisionado é capaz de tomar decisões precisas ao receber novos dados a partir de um treinamento com dados conhecidos.",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e III"
     },
     {
      "letra": "b",
      "texto": "II e III"
     },
     {
      "letra": "c",
      "texto": "II e IV"
     },
     {
      "letra": "d",
      "texto": "I, III e IV"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. A regressão linear ajusta um modelo a pares (entrada, saída desejada). Há rótulo, portanto é aprendizado supervisionado — é o exemplo mais elementar da categoria.",
      "II": "FALSA. Só existe \"diferença entre a saída desejada e a saída gerada\" quando há uma saída desejada, isto é, quando os dados estão rotulados. Isso é a definição de erro no aprendizado SUPERVISIONADO. O próprio enunciado diz que o não supervisionado \"não utiliza referências\".",
      "III": "VERDADEIRA. Sem rótulos, o que resta é procurar estrutura nos próprios dados: agrupamento, redução de dimensionalidade, detecção de anomalias. É exatamente o cenário de reconhecimento de padrões descrito no item.",
      "IV": "VERDADEIRA. Treinado com dados conhecidos e rotulados, o modelo supervisionado generaliza para dados novos. É a finalidade da categoria."
     },
     "por_que_a_correta_esta_certa": "I, III e IV descrevem corretamente as duas categorias. Apenas II troca uma pela outra.",
     "por_que_cada_distrator_cai": {
      "a": "Correta no que afirma, mas incompleta: deixa de fora IV, que também é verdadeiro.",
      "b": "Inclui II, que atribui ao não supervisionado um conceito — erro em relação à saída desejada — que só faz sentido no supervisionado.",
      "c": "Também inclui II e ainda descarta III, que é verdadeiro."
     },
     "conceito_chave": "A fronteira entre supervisionado e não supervisionado é uma só: existe rótulo? Se existe, dá para medir erro contra a resposta certa, e o problema é supervisionado. Se não existe, só dá para procurar estrutura, e o problema é não supervisionado.",
     "pegadinha": "O item II simplesmente troca as duas palavras de lugar. É a única troca da questão, e a resposta está escrita no enunciado, que define as duas categorias no primeiro parágrafo.",
     "referencia": "PELLUCCI, P. R. S. et al. Utilização de técnicas de aprendizado de máquina no reconhecimento de entidades nomeadas no português. E-xacta, v. 4, n. 1, p. 73-81, 2011."
    },
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 42,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 11,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "IHC e Requisitos — personas e cenários",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Duas técnicas comumente utilizadas para ampliar as informações básicas sobre requisitos são personas e cenários. Frequentemente usadas juntas, essas técnicas se complementam de forma a trazer detalhes realísticos que possibilitam ao desenvolvedor explorar as atividades atuais do usuário, uso futuro de novos produtos e visões futuristas de novas tecnologias. Elas também podem guiar o desenvolvimento ao longo do ciclo de vida do produto."
     },
     {
      "tipo": "paragrafo",
      "texto": "ROGERS, Y.; PREECE, J.; SHARP, H. Interaction Design: beyond human-computer interaction."
     },
     {
      "tipo": "referencia",
      "texto": "5. ed. Indianapolis, IN, USA: John Wiley & Sons, Inc., 2019 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Com base no texto apresentado e sobre os objetivos do uso de personas e cenários em um processo de elicitação de requisitos, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O uso de personas e cenários, em um processo de elicitação, explicita algumas situações que aparecem implícitas nos requisitos."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "O uso de personas e cenários, em um processo de elicitação, ajuda o projetista a entender melhor o impacto das decisões de projeto."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O uso de personas e cenários, em um processo de elicitação, facilita a especificação formal e não-ambígua dos requisitos de interação."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "O uso de personas e cenários, em um processo de elicitação, lembra à equipe de desenvolvimento que pessoas reais usarão o produto."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em:"
     }
    ],
    "comando": "É correto apenas o que se afirma em:",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O uso de personas e cenários, em um processo de elicitação, explicita algumas situações que aparecem implícitas nos requisitos.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "O uso de personas e cenários, em um processo de elicitação, ajuda o projetista a entender melhor o impacto das decisões de projeto.",
      "veredito": true
     },
     {
      "rotulo": "III",
      "texto": "O uso de personas e cenários, em um processo de elicitação, facilita a especificação formal e não-ambígua dos requisitos de interação.",
      "veredito": false
     },
     {
      "rotulo": "IV",
      "texto": "O uso de personas e cenários, em um processo de elicitação, lembra à equipe de desenvolvimento que pessoas reais usarão o produto.",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e III"
     },
     {
      "letra": "b",
      "texto": "I e IV"
     },
     {
      "letra": "c",
      "texto": "I, II e IV"
     },
     {
      "letra": "d",
      "texto": "II, III e IV"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Personas e cenários explicitam contexto, motivação e circunstância de uso — coisas que ficam implícitas numa lista seca de requisitos funcionais.",
      "II": "VERDADEIRA. Ao narrar como uma persona concreta usaria o sistema, a equipe consegue antecipar o efeito de uma decisão de projeto sobre alguém específico, em vez de raciocinar sobre um \"usuário\" abstrato.",
      "III": "FALSA. Personas e cenários são técnicas NARRATIVAS e deliberadamente informais. Especificação formal e não-ambígua é o território dos métodos formais (Z, B, redes de Petri) e de notações precisas — o oposto de uma história sobre uma pessoa fictícia. A ambiguidade, aqui, é um preço aceito em troca de riqueza de contexto.",
      "IV": "VERDADEIRA. É talvez o benefício mais citado: manter viva na equipe a consciência de que existe gente real do outro lado, em vez de \"o usuário\" como abstração."
     },
     "por_que_a_correta_esta_certa": "I, II e IV capturam os benefícios reais da técnica: explicitar o implícito, avaliar decisões de projeto e humanizar o usuário.",
     "por_que_cada_distrator_cai": {
      "a": "Inclui III, que atribui formalidade a uma técnica narrativa, e descarta II e IV.",
      "b": "Correta no que afirma, mas incompleta: deixa de fora II.",
      "d": "Acerta II e IV mas soma III e abandona I."
     },
     "conceito_chave": "Personas e cenários são técnicas de elicitação qualitativa. Servem para trazer contexto, empatia e realismo, e não precisão formal. São complementares à especificação, nunca substitutas dela.",
     "pegadinha": "A expressão \"especificação formal e não-ambígua\" no item III soa como elogio e como algo que qualquer técnica boa deveria entregar. É justamente o que personas e cenários NÃO entregam, por construção.",
     "referencia": "ROGERS, Y.; PREECE, J.; SHARP, H. Interaction Design: beyond human-computer interaction. 5. ed. Indianapolis: John Wiley & Sons, 2019."
    },
    "gabarito_inep": "D",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 38,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 12,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Algoritmos de busca — linear e binária (C)",
    "tags": [],
    "blocos": [
     {
      "tipo": "figura",
      "imagem_docx": "image5.png",
      "arquivo": "figuras/q12_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "A respeito das funções implementadas, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O resultado da impressão na linha 24 é: 7 - 7."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "A função funcao1, no pior caso, é uma estratégia mais rápida do que a funcao2."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "A função funcao2 implementa uma estratégia iterativa na concepção do algoritmo."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em:"
     }
    ],
    "comando": "É correto o que se afirma em:",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O resultado da impressão na linha 24 é: 7 - 7.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "A função funcao1, no pior caso, é uma estratégia mais rápida do que a funcao2.",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "A função funcao2 implementa uma estratégia iterativa na concepção do algoritmo.",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I, apenas"
     },
     {
      "letra": "b",
      "texto": "III, apenas"
     },
     {
      "letra": "c",
      "texto": "I e II, apenas"
     },
     {
      "letra": "d",
      "texto": "II e III, apenas"
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q12_fig1.png",
      "imagem_docx": "image5.png",
      "descricao_alt": "Listagem de código em linguagem C com 26 linhas numeradas. Define TAM igual a 10; a funcao1, que percorre o vetor do início ao fim comparando cada posição com o valor procurado (busca linear) e devolve o índice ou -1; e a funcao2, que calcula o meio do intervalo e chama a si mesma na metade esquerda ou direita conforme a comparação (busca binária recursiva). Na linha 23 o vetor é inicializado ordenado como {1, 3, 5, 7, 9, 11, 13, 15, 17, 19} e a linha 24 imprime o resultado das duas buscas pelo valor 15."
     }
    ],
    "codigo": {
     "linguagem": "c",
     "arquivo": "codigos/q12_busca.c",
     "legenda": "Observe o código abaixo escrito na linguagem C.",
     "numeracao_de_linha": true,
     "saida_verificada": "7 - 7",
     "nota": "O enunciado cita a linha 24 explicitamente, entao a numeracao precisa ser preservada na renderizacao."
    },
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Verificado por execução: o programa imprime exatamente \"7 - 7\". O vetor da linha 23 é {1, 3, 5, 7, 9, 11, 13, 15, 17, 19} e o valor 15 está no índice 7. A funcao1 percorre linearmente e para no índice 7; a funcao2 faz busca binária e converge para o mesmo índice 7.",
      "II": "FALSA. No pior caso a funcao1 (busca linear) percorre os n elementos, custando O(n); a funcao2 (busca binária) descarta metade do espaço a cada chamada, custando O(log n). No pior caso a linear é a MAIS LENTA das duas, e não a mais rápida.",
      "III": "FALSA. A funcao2 chama a si mesma nas linhas 18 e 20 — é recursiva, e não iterativa. Uma versão iterativa da busca binária existe e usa um laço while, mas não é o que está escrito aqui."
     },
     "por_que_a_correta_esta_certa": "Apenas a afirmação I sobrevive: a saída é mesmo \"7 - 7\", confirmada por execução do código.",
     "por_que_cada_distrator_cai": {
      "b": "Fica só com III, que confunde recursão com iteração.",
      "c": "Soma II, que inverte a comparação de custo entre busca linear e busca binária.",
      "d": "Junta as duas falsas e descarta a única verdadeira."
     },
     "conceito_chave": "Busca linear custa O(n) e não exige nada do vetor; busca binária custa O(log n) mas exige vetor ORDENADO. O vetor da linha 23 está ordenado, o que é a condição que permite às duas funções trabalharem sobre ele.",
     "pegadinha": "As duas funções devolvem o mesmo número, 7, e a saída \"7 - 7\" sugere que são equivalentes. Custo computacional não aparece no resultado, e sim no número de passos até chegar nele.",
     "referencia": "Enade 2021, Ciência da Computação, questão 20.",
     "verificado": "Código transcrito em codigos/q12_busca.c e executado: a linha 24 imprime \"7 - 7\"."
    },
    "gabarito_inep": "A",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 35,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 13,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Redes — dispositivos de interconexão",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "No projeto de redes de computadores, a escolha racional do dispositivo de conexão a ser utilizado é fundamental para o correto funcionamento da rede, bem como para a sua segurança e eficiência. Dispositivos como repetidores, hubs, bridges, switches, roteadores e gateways são muito comuns, mas diferem entre si em detalhes sutis e não muito sutis. Por existir uma grande quantidade desses dispositivos, vale a pena conhecer suas características principais, entender o seu funcionamento e saber quando e como são utilizados. A chave para entender esses dispositivos é observar que eles operam em camadas diferentes, como ilustra a figura 1. A camada é importante, porque diferentes dispositivos utilizam fragmentos de informações diferentes para decidir como realizar a comutação. Em um cenário típico, o usuário gera alguns dados a ser enviados para uma máquina remota. Esses dados são repassados à camada de transporte, que então acrescenta um cabeçalho (por exemplo, um cabeçalho TCP) e repassa o pacote resultante à camada de rede situada abaixo dela. Essa camada adiciona seu próprio cabeçalho para formar um pacote da camada de rede (por exemplo, um pacote IP). Na figura 2, vemos o pacote IP sombreado. Em seguida, o pacote vai"
     },
     {
      "tipo": "paragrafo",
      "texto": "para a camada de enlace de dados, que adiciona seu próprio cabeçalho e seu checksum (CRC) e entrega o quadro resultante à camada física para transmissão, digamos, por uma LAN."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image6.png",
      "arquivo": "figuras/q13_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando o contexto das informações e da figura apresentadas, assinale a alternativa correta."
     }
    ],
    "comando": "Considerando o contexto das informações e da figura apresentadas, assinale a alternativa correta.",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "Os repetidores não reconhecem quadros ou pacotes, apenas o seu próprio cabeçalho."
     },
     {
      "letra": "b",
      "texto": "Um hub tem várias interfaces de entrada/saída conectadas eletricamente; os quadros que chegam a qualquer uma dessas interfaces são enviados a todas as outras e, se dois quadros chegarem ao mesmo tempo, eles serão colocados em buffer de espera e arbitragem de enlace."
     },
     {
      "letra": "c",
      "texto": "Uma bridge conecta duas ou mais redes, diferentemente de um hub, cada porta é isolada das demais para criar um domínio próprio de colisão; ela só envia o quadro à porta onde ele é necessário, e pode encaminhar vários quadros ao mesmo tempo, além de examinar o campo de carga útil (pacotes de rede) dos quadros que encaminha, para obter o endereço do destinatário."
     },
     {
      "letra": "d",
      "texto": "Os gateways de transporte conectam dois computadores que utilizam diferentes protocolos de transporte orientados a conexões, por exemplo, um computador que utiliza o protocolo TCP/IP orientado a conexões pode se comunicar com um computador que utiliza um protocolo de transporte orientado a conexões diferentes, chamado SCTP."
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q13_fig1.png",
      "imagem_docx": "image6.png",
      "descricao_alt": "Duas figuras lado a lado. A figura 1 é uma tabela que associa cada camada ao dispositivo que nela opera: camada de aplicação, gateway de aplicação; camada de transporte, gateway de transporte; camada de rede, roteador; camada de enlace de dados, bridge e switch; camada física, repetidor e hub. A figura 2 mostra o encapsulamento de um quadro, com os campos em sequência: cabeçalho de quadro, cabeçalho de pacote, cabeçalho TCP, dados do usuário e CRC. O trecho do cabeçalho de pacote até os dados do usuário é identificado como o pacote fornecido pela camada de rede, e o conjunto inteiro como o quadro feito pela camada de enlace de dados. Fonte: Tanenbaum e Wetherall, Redes de Computadores, 5. ed., p. 213 e 214."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "Gateways de transporte de fato interligam dois computadores que usam protocolos de transporte orientados a conexão diferentes, fazendo a tradução entre eles — e o exemplo clássico de Tanenbaum é justamente TCP de um lado e SCTP do outro. Como mostra a figura 1, o gateway de transporte opera na camada de transporte.",
     "por_que_cada_distrator_cai": {
      "a": "Repetidor é um dispositivo analógico da camada FÍSICA: ele amplifica e regenera o sinal, sem interpretar nada. Não reconhece quadros, não reconhece pacotes e não tem cabeçalho próprio para reconhecer — a frase se contradiz.",
      "b": "A descrição do hub começa certa (interfaces ligadas eletricamente, quadro que chega é repetido em todas as outras) e termina errada. Hub não tem buffer nem arbitragem: se dois quadros chegam ao mesmo tempo, há COLISÃO. Guardar em buffer e arbitrar é o que faz o switch, e é por isso que o switch acaba com o domínio de colisão compartilhado.",
      "c": "Mistura três dispositivos. Isolar cada porta em seu próprio domínio de colisão e encaminhar vários quadros ao mesmo tempo é comportamento de SWITCH. E examinar a carga útil para obter o endereço do destinatário é olhar o pacote IP, ou seja, camada de rede — trabalho de ROTEADOR. A bridge opera na camada de enlace e decide pelo endereço MAC, sem abrir o pacote."
     },
     "conceito_chave": "Cada dispositivo de interconexão é definido pela CAMADA em que opera, como resume a figura 1: repetidor e hub na física, bridge e switch no enlace, roteador na rede, gateways no transporte e na aplicação. A camada determina que parte do quadro o dispositivo consegue enxergar.",
     "pegadinha": "Três das quatro alternativas atribuem a um dispositivo o comportamento de outro, ou lhe inventam uma capacidade que a camada em que ele opera não permite. O teste rápido é sempre o mesmo: que informação esse dispositivo precisaria ler para fazer o que a frase diz, e ele enxerga essa informação na camada em que opera?",
     "referencia": "TANENBAUM, A. S.; WETHERALL, D. Redes de Computadores. 5. ed. São Paulo: Pearson Prentice Hall, 2011, p. 213 e 214."
    },
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 10,
     "classe": "Muito difícil",
     "descartada_ponto_bisserial": true,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 14,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Banco de Dados — do DER ao modelo relacional",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Uma Organização Não Governamental (ONG), relacionada à causa animal, registra os pets (animais de estimação) amparados por ela, de acordo com o seguinte Diagrama Entidade Relacionamento (DER)."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image7.png",
      "arquivo": "figuras/q14_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "A partir das regras de mapeamento do Modelo Conceitual para o Modelo Lógico Relacional, assinale o Esquema Relacional mais adequado a ser gerado. Considere que as chaves primárias estão sublinhadas."
     }
    ],
    "comando": "A partir das regras de mapeamento do Modelo Conceitual para o Modelo Lógico Relacional, assinale o Esquema Relacional mais adequado a ser gerado. Considere que as chaves primárias estão sublinhadas.",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "PESSOA(cpf: texto, nome: texto) TIPO_PET(codigo: inteiro, descricao: texto) PET(codigo: inteiro, nome: texto, data_nascimento: data, codigo_tipo_pet: inteiro, adotante: texto) codigo_tipo_pet referencia TIPO_PET(codigo) adotante referencia PESSOA(cpf)"
     },
     {
      "letra": "b",
      "texto": "TIPO_PET(codigo: inteiro, descricao: texto) PET(codigo: inteiro, nome: texto, data_nascimento: data, codigo_tipo_pet: inteiro) codigo_tipo_pet referencia TIPO_PET(codigo) PESSOA(cpf: texto, nome: texto, codigo_pet: inteiro) codigo_pet referencia PET(codigo)"
     },
     {
      "letra": "c",
      "texto": "PET_PESSOA(codigo_pet: inteiro, nome_pet: texto, data_nascimento: data, cpf: texto, nome_pessoa: texto, codigo_tipo_pet: inteiro, descricao_tipo_pet: texto)"
     },
     {
      "letra": "d",
      "texto": "PESSOA(cpf: texto, nome: texto) PET(codigo: inteiro, nome: texto, data_nascimento: data, codigo_tipo_pet: inteiro, descricao_tipo_pet, adotante: texto) adotante referencia PESSOA(cpf)"
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q14_fig1.png",
      "imagem_docx": "image7.png",
      "descricao_alt": "Diagrama entidade-relacionamento com três entidades. TIPO_PET tem os atributos codigo (chave primária, marcada com círculo preenchido) e descricao. PESSOA tem cpf (chave primária) e nome. PET tem codigo (chave primária), nome e data_nascimento. TIPO_PET liga-se a PET pelo relacionamento \"pertencer\", com cardinalidade (1,1) do lado de TIPO_PET e (1,n) do lado de PET. PESSOA liga-se a PET pelo relacionamento \"adotar\", com cardinalidade (1,1) do lado de PESSOA e (0,n) do lado de PET."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "A regra de mapeamento para relacionamentos 1:N é uma só: a chave primária do lado 1 vira chave estrangeira na tabela do lado N. No DER, PET está no lado N das duas relações — muitos pets pertencem a um TIPO_PET, e muitos pets são adotados por uma PESSOA. Logo PET recebe as duas chaves estrangeiras: codigo_tipo_pet referenciando TIPO_PET(codigo) e adotante referenciando PESSOA(cpf). PESSOA e TIPO_PET permanecem com seus próprios atributos, sem referência a PET.",
     "por_que_cada_distrator_cai": {
      "b": "Inverte a relação \"adotar\", colocando codigo_pet dentro de PESSOA. Isso significaria que cada pessoa adota no máximo UM pet e que um mesmo pet poderia aparecer em várias pessoas — exatamente o contrário da cardinalidade do diagrama.",
      "c": "Funde tudo numa única tabela. Cada pet carregaria o nome da pessoa e a descrição do tipo repetidos, gerando redundância, anomalias de atualização e a impossibilidade de cadastrar um tipo de pet ou uma pessoa que ainda não tenha pet associado.",
      "d": "Acerta a chave estrangeira \"adotante\", mas copia descricao_tipo_pet para dentro de PET em vez de referenciar TIPO_PET. O texto descritivo do tipo passa a ser repetido em cada pet do mesmo tipo, e a tabela TIPO_PET perde a função."
     },
     "conceito_chave": "Mapeamento do modelo conceitual para o relacional: em 1:N a chave migra do lado 1 para o lado N; em 1:1 ela pode ir para qualquer um dos lados, em geral o de participação obrigatória; em N:N surge uma tabela nova só para o relacionamento.",
     "pegadinha": "A alternativa d é quase igual à correta e só troca uma REFERÊNCIA por uma CÓPIA do atributo descritivo. Guardar o texto em vez da chave é o erro de modelagem mais comum de todos, e é o que a normalização existe para evitar.",
     "referencia": "Enade 2021, Ciência da Computação, questão 22."
    },
    "gabarito_inep": "A",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 53,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 15,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Estruturas de dados — árvore binária de busca",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O uso da estrutura de dados tipo Árvore Binária de Busca é uma técnica fundamental de programação. Uma árvore binária é um conjunto finito de elementos que está vazio ou é particionado em três subconjuntos, a saber: 1) raiz da árvore - elemento inicial (único), 2) subárvore da esquerda - se vista isoladamente compõe outra árvore e 3) subárvore da direita - se vista isoladamente compõe outra árvore. A árvore pode não ter qualquer elemento (árvore vazia). A definição de árvore é recursiva e, devido a isso, muitas operações sobre árvores binárias utilizam recursão. Sendo “A” a raiz de uma árvore binária e “B” a raiz de sua subárvore esquerda ou direita, é dito que “A” é pai de “B” e que “B” é filho de “A”. Um elemento sem filhos é chamado de folha. A altura da árvore é o número de elementos encontrados no caminho descendente mais longo que liga a sua raiz até uma folha."
     },
     {
      "tipo": "paragrafo",
      "texto": "Uma Árvore de Busca Binária é uma árvore binária especializada, na qual a informação que o elemento filho esquerdo possui é numericamente menor que a informação do elemento pai. De forma análoga, a informação que o elemento filho direito possui é numericamente maior ou igual à informação do elemento pai. O objetivo de organizar dados em Árvores Binárias de Busca é facilitar a tarefa de encontrar um determinado elemento. O percurso completo de uma árvore binária consiste em visitar todos os elementos desta árvore, segundo algum critério, a fim de processá-los. Três formas são bem conhecidas para a realização deste percurso: 1) pré-ordem, 2) em-ordem e 3) pós-ordem. A figura a seguir mostra um exemplo de árvore binária."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image8.png",
      "arquivo": "figuras/q15_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando o texto e a figura apresentados e que a seguinte lista de elementos numéricos: (27, 34, 40, 18, 23, 5, 25, 36, 10, 7, -2) seja totalmente transferida para uma estrutura de Árvore Binária de Busca, inicialmente vazia, elemento a elemento, da esquerda para a direita, assinale a alternativa correta."
     }
    ],
    "comando": "Considerando o texto e a figura apresentados e que a seguinte lista de elementos numéricos: (27, 34, 40, 18, 23, 5, 25, 36, 10, 7, -2) seja totalmente transferida para uma estrutura de Árvore Binária de Busca, inicialmente vazia, elemento a elemento, da esquerda para a direita, assinale a alternativa correta.",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "A árvore resultante terá 5 níveis de altura, com 6 elementos à esquerda da raiz principal (inicial) e 4 elementos à direita."
     },
     {
      "letra": "b",
      "texto": "O percurso da árvore em Pré-ordem irá processar os elementos na seguinte ordem (do primeiro ao último): -2, 7, 10, 5, 25, 23, 18, 36, 40, 34, 27."
     },
     {
      "letra": "c",
      "texto": "O percurso da árvore em Em-ordem irá processar os elementos na seguinte ordem (do primeiro ao último): -2, 5, 7, 10, 18, 23, 25, 27, 34, 36, 40."
     },
     {
      "letra": "d",
      "texto": "O percurso da árvore em Pós-ordem irá processar os elementos na seguinte ordem (do primeiro ao último): 27, 18, 5, -2, 10, 7, 23, 25, 34, 40, 36."
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q15_fig1.png",
      "imagem_docx": "image8.png",
      "descricao_alt": "Exemplo genérico de árvore binária, com letras nos nós. A raiz é J. A subárvore esquerda de J tem raiz D, cujo filho esquerdo é A. A subárvore direita de J tem raiz O, com filho esquerdo L e filho direito R; L, por sua vez, tem filhos K à esquerda e M à direita. Esta figura é apenas ilustrativa do conceito de árvore binária: a questão pede a construção de outra árvore, a partir da lista numérica dada no enunciado. Fonte: Laureano, Estrutura de Dados com Algoritmos, 2008."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "Inserindo (27, 34, 40, 18, 23, 5, 25, 36, 10, 7, -2) numa árvore binária de busca vazia, o percurso EM-ORDEM produz -2, 5, 7, 10, 18, 23, 25, 27, 34, 36, 40. Há um atalho que dispensa montar a árvore: o percurso em-ordem de uma ABB devolve SEMPRE os elementos em ordem crescente, por definição da estrutura. Basta ordenar a lista dada e comparar.",
     "por_que_cada_distrator_cai": {
      "a": "A altura está certa (5 níveis), mas a contagem está errada. À esquerda da raiz 27 ficam 18, 5, -2, 10, 7, 23 e 25 — são 7 elementos, e não 6. À direita ficam 34, 40 e 36 — são 3, e não 4.",
      "b": "A sequência apresentada está correta, mas o percurso está trocado: -2, 7, 10, 5, 25, 23, 18, 36, 40, 34, 27 é a PÓS-ORDEM, e não a pré-ordem. A pré-ordem começa pela raiz, e esta sequência começa pelo menor elemento.",
      "d": "Mesmo erro de b, no sentido inverso: a sequência 27, 18, 5, -2, 10, 7, 23, 25, 34, 40, 36 é a PRÉ-ORDEM, rotulada como pós-ordem. A pós-ordem termina na raiz; esta começa nela."
     },
     "conceito_chave": "Os três percursos se distinguem por QUANDO a raiz é visitada: pré-ordem visita a raiz antes das subárvores (começa na raiz), em-ordem visita entre elas (o que numa ABB resulta em ordem crescente) e pós-ordem visita depois (termina na raiz).",
     "pegadinha": "As alternativas b e d trocam as sequências entre si: b apresenta a pós-ordem chamando de pré-ordem, e d apresenta a pré-ordem chamando de pós-ordem. Quem monta a árvore corretamente mas confunde os nomes dos percursos cai numa das duas. O teste de um segundo: pré-ordem COMEÇA na raiz, pós-ordem TERMINA na raiz.",
     "referencia": "LAUREANO, M. A. P. Estrutura de Dados com Algoritmos. São Paulo: Brasport, 2008, p. 126, 129 e 136.",
     "verificado": "Árvore construída e percorrida por código em ferramentas/verificar.py: o percurso em-ordem confere com a lista ordenada, há 7 elementos à esquerda e 3 à direita, e a altura é 5."
    },
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 45,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 16,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Segurança — criptografia ponta a ponta",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A criptografia de ponta a ponta do WhatsApp garante que somente você e a pessoa com quem você está se comunicando podem ler o que é enviado. Ninguém mais terá acesso a elas, nem mesmo o WhatsApp. As suas mensagens estão seguras com cadeados e somente você e a pessoa que as recebe possuem as chaves especiais necessárias para abri-los e ler as mensagens. E, para uma proteção ainda maior, cada mensagem que você envia tem um cadeado e uma chave únicos."
     },
     {
      "tipo": "referencia",
      "texto": "Disponível em: https://faq.whatsapp.com/pt_br/general/28030015. Acesso em: 05 mai. 2020."
     },
     {
      "tipo": "paragrafo",
      "texto": "Com base no texto acima e considerando os conceitos de segurança e criptografia, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Se um par de chaves é gerado durante a instalação do aplicativo e a chave pública do usuário é armazenada no servidor, é possível verificar a autenticidade de uma mensagem recebida usando a chave pública do remetente obtida do servidor."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "A estratégia de utilizar um vetor de inicialização (IV) variável para compor chaves criptográficas diferentes para cada mensagem enviada oculta padrões de dados, além de dificultar os chamados ataques de reprodução."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O uso do algoritmo AES nas comunicações entre dois usuários indica o emprego de criptografia simétrica, isto é, aquela que utiliza um par de chaves, uma usada pelo remetente, para encriptar a mensagem, e outra para o destinatário decriptá-la."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "A presença do algoritmo SHA-256, no protocolo de comunicação entre cliente e servidor, sugere a verificação de integridade das mensagens, visto que é possível detectar se ocorreu alguma modificação comparando-se os valores de hash da mensagem enviada e recebida."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Se um par de chaves é gerado durante a instalação do aplicativo e a chave pública do usuário é armazenada no servidor, é possível verificar a autenticidade de uma mensagem recebida usando a chave pública do remetente obtida do servidor.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "A estratégia de utilizar um vetor de inicialização (IV) variável para compor chaves criptográficas diferentes para cada mensagem enviada oculta padrões de dados, além de dificultar os chamados ataques de reprodução.",
      "veredito": true
     },
     {
      "rotulo": "III",
      "texto": "O uso do algoritmo AES nas comunicações entre dois usuários indica o emprego de criptografia simétrica, isto é, aquela que utiliza um par de chaves, uma usada pelo remetente, para encriptar a mensagem, e outra para o destinatário decriptá-la.",
      "veredito": false
     },
     {
      "rotulo": "IV",
      "texto": "A presença do algoritmo SHA-256, no protocolo de comunicação entre cliente e servidor, sugere a verificação de integridade das mensagens, visto que é possível detectar se ocorreu alguma modificação comparando-se os valores de hash da mensagem enviada e recebida.",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e IV"
     },
     {
      "letra": "b",
      "texto": "III e IV"
     },
     {
      "letra": "c",
      "texto": "I, II e III"
     },
     {
      "letra": "d",
      "texto": "I, II e IV"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Se cada usuário gera um par de chaves na instalação e publica a chave pública no servidor, qualquer destinatário pode buscar a chave pública do remetente e verificar a assinatura da mensagem. Isso é exatamente autenticação de origem.",
      "II": "VERDADEIRA. Um vetor de inicialização variável faz com que a mesma mensagem, cifrada duas vezes, produza textos cifrados diferentes. Isso oculta padrões — o problema clássico do modo ECB — e dificulta ataques de reprodução, em que o atacante reenvia uma mensagem capturada.",
      "III": "FALSA. A primeira metade acerta: o AES é mesmo um algoritmo simétrico. A definição dada em seguida é que está trocada. Criptografia simétrica usa a MESMA chave para cifrar e decifrar; \"um par de chaves, uma para o remetente e outra para o destinatário\" é a descrição da criptografia ASSIMÉTRICA.",
      "IV": "VERDADEIRA. SHA-256 é uma função de hash criptográfico. Comparar o hash calculado na origem com o calculado no destino detecta qualquer alteração no conteúdo, e isso é a definição de verificação de integridade."
     },
     "por_que_a_correta_esta_certa": "I, II e IV associam corretamente cada primitiva ao serviço de segurança que ela presta: par de chaves para autenticidade, vetor de inicialização variável para confidencialidade robusta e hash para integridade.",
     "por_que_cada_distrator_cai": {
      "a": "Correta no que afirma, mas incompleta: descarta II, que é verdadeiro.",
      "b": "Inclui III, que confunde simétrico com assimétrico, e descarta I e II.",
      "c": "Também inclui III e deixa de fora IV."
     },
     "conceito_chave": "Cada primitiva criptográfica presta um serviço distinto: cifragem simétrica (AES) dá confidencialidade com uma chave única compartilhada; cifragem assimétrica dá par de chaves e permite autenticidade e não-repúdio; função de hash (SHA-256) dá integridade. Confundi-las é o erro mais comum da área.",
     "pegadinha": "O item III começa com uma afirmação verdadeira — \"o uso do AES indica criptografia simétrica\" — e só erra na definição que vem depois do \"isto é\". Quem valida a primeira metade e segue em frente marca c.",
     "referencia": "WhatsApp. Criptografia de ponta a ponta. Disponível em faq.whatsapp.com. Acesso em 05 mai. 2020."
    },
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 28,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 17,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Computação em nuvem — modelos do NIST",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A computação em nuvem (cloud computing) pode ser definida como a infraestrutura de comunicação representada por vários servidores web, responsáveis por armazenar dados e aplicações, em que cada parte desta infraestrutura é provida como um serviço e estes são normalmente alocados em centros de dados, utilizando hardware compartilhado para computação e armazenamento. Segundo o Instituto Nacional de Padrões e Tecnologia (NIST), um modelo de Computação em Nuvem deve apresentar 5 características essenciais, 3 modelos de serviço e 4 modelos de implantação. As características essenciais"
     },
     {
      "tipo": "paragrafo",
      "texto": "são: self-service sob demanda, acesso à rede ampla, pooling de recursos, elasticidade rápida e serviço medido. Os modelos de serviços são: Software como um Serviço (SaaS), Plataforma como um Serviço (PaaS) e Infraestrutura como um Serviço (IaaS) e os modelos de implantação são: Nuvem Privada, Nuvem Pública, Nuvem Comunidade e Nuvem Híbrida."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando as informações apresentadas, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "No modelo SaaS, o usuário não precisa adquirir ou realizar upgrade de hardware para rodar as aplicações, não administra ou controla a infraestrutura subjacente e as atualizações de software são de responsabilidade do provedor do serviço em nuvem."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "A elasticidade é a capacidade de aumentar ou diminuir de forma automática o tempo de disponibilidade dos recursos computacionais que foram provisionados contratualmente para cada usuário."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "A Nuvem Comunidade tem como objetivo gerenciar os recursos computacionais pertencentes a cada uma das organizações participantes de uma comunidade de organizações para compartilhar a infraestrutura de software e hardware entre todos."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "No modelo IaaS, o usuário não administra ou controla a infraestrutura da nuvem, mas tem controle sobre os sistemas operacionais, armazenamento e aplicativos implantados."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "No modelo SaaS, o usuário não precisa adquirir ou realizar upgrade de hardware para rodar as aplicações, não administra ou controla a infraestrutura subjacente e as atualizações de software são de responsabilidade do provedor do serviço em nuvem.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "A elasticidade é a capacidade de aumentar ou diminuir de forma automática o tempo de disponibilidade dos recursos computacionais que foram provisionados contratualmente para cada usuário.",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "A Nuvem Comunidade tem como objetivo gerenciar os recursos computacionais pertencentes a cada uma das organizações participantes de uma comunidade de organizações para compartilhar a infraestrutura de software e hardware entre todos.",
      "veredito": false
     },
     {
      "rotulo": "IV",
      "texto": "No modelo IaaS, o usuário não administra ou controla a infraestrutura da nuvem, mas tem controle sobre os sistemas operacionais, armazenamento e aplicativos implantados.",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e II"
     },
     {
      "letra": "b",
      "texto": "I e IV"
     },
     {
      "letra": "c",
      "texto": "II e III"
     },
     {
      "letra": "d",
      "texto": "II, III e IV"
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. É a descrição exata do SaaS: o usuário consome a aplicação pronta, sem administrar hardware, sistema operacional ou a própria aplicação, e atualizar o software é responsabilidade do provedor.",
      "II": "FALSA. Elasticidade rápida é a capacidade de provisionar e liberar RECURSOS COMPUTACIONAIS — CPU, memória, armazenamento — conforme a demanda varia. O item troca isso por \"aumentar ou diminuir o tempo de disponibilidade dos recursos\", que não é elasticidade nem é algo que se ajuste automaticamente.",
      "III": "FALSA. Na definição do NIST, a nuvem comunitária é uma infraestrutura COMPARTILHADA por organizações com preocupações comuns (missão, segurança, conformidade). O item inverte, falando em gerenciar os recursos pertencentes a cada organização participante, o que descreve várias infraestruturas separadas, e não uma compartilhada.",
      "IV": "VERDADEIRA. É a descrição exata do IaaS: o usuário não administra a infraestrutura física da nuvem, mas tem controle sobre sistema operacional, armazenamento e as aplicações que implanta."
     },
     "por_que_a_correta_esta_certa": "I e IV reproduzem corretamente os dois extremos dos modelos de serviço do NIST: no SaaS o provedor controla quase tudo; no IaaS o usuário controla tudo acima da camada física.",
     "por_que_cada_distrator_cai": {
      "a": "Inclui II, que redefine elasticidade como ajuste de tempo de disponibilidade.",
      "c": "Junta as duas falsas, II e III.",
      "d": "Acerta IV mas soma II e III."
     },
     "conceito_chave": "O modelo NIST tem três eixos: 5 características essenciais (entre elas elasticidade rápida e serviço medido), 3 modelos de serviço (SaaS, PaaS e IaaS, em ordem decrescente de controle do provedor) e 4 modelos de implantação (privada, pública, comunitária e híbrida).",
     "pegadinha": "Os itens II e III não negam os conceitos: eles os REDEFINEM com palavras plausíveis. Elasticidade vira tempo de disponibilidade; nuvem comunitária vira gestão dos recursos de cada participante. Soam técnicos e estão errados.",
     "referencia": "MELL, P.; GRANCE, T. The NIST Definition of Cloud Computing. NIST Special Publication 800-145, 2011."
    },
    "gabarito_inep": "B",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 19,
     "classe": "Difícil",
     "descartada_ponto_bisserial": true,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 18,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "IHC — interfaces adaptativas",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "As interfaces adaptativas realizam as adaptações e personalizações de forma automática e dinâmica durante o processo de navegação, com base na aprendizagem da navegação e da interação do usuário. Técnicas de interfaces adaptativas podem ser utilizadas para adaptar interfaces às preferências do usuário, à sua capacidade cognitiva e ao seu estilo de navegação, tornando as interações mais naturais e atrativas. Essas técnicas de adaptação podem ser empregadas tanto para a reorganização dos objetos no ambiente, como para alterar a forma de apresentar informações. As adaptações podem ocorrer em diferentes níveis ou de diferentes formas: adaptação de conteúdo, adaptação da navegação e adaptação da apresentação do conteúdo. Cada um desses níveis de adaptação possui métodos e técnicas de adaptação próprios."
     },
     {
      "tipo": "referencia",
      "texto": "NIENOW, A. L. Interfaces adaptativas no comércio eletrônico como facilitadoras da inclusão digital de idosos. Revista Tecnologia e Tendências, v. 9, n. 2, p. 116-136, 2017 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando a construção de interfaces adaptativas na interação homem-computador, avalie as afirmações a seguir quanto aos níveis e técnicas de adaptação."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "No nível de conteúdo, podem-se considerar as técnicas de fragmentos de texto, fragmentos condicionais, páginas variantes e abordagem baseada em frames."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "No nível de navegação, podem-se considerar as técnicas de layouts de página e guias de estilos."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "No nível de apresentação, podem-se considerar as técnicas de orientação direta, anotação de links, apresentação e ocultação e ordenação de links."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em"
     }
    ],
    "comando": "É correto o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "No nível de conteúdo, podem-se considerar as técnicas de fragmentos de texto, fragmentos condicionais, páginas variantes e abordagem baseada em frames.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "No nível de navegação, podem-se considerar as técnicas de layouts de página e guias de estilos.",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "No nível de apresentação, podem-se considerar as técnicas de orientação direta, anotação de links, apresentação e ocultação e ordenação de links.",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I, apenas"
     },
     {
      "letra": "b",
      "texto": "III, apenas"
     },
     {
      "letra": "c",
      "texto": "I e II, apenas"
     },
     {
      "letra": "d",
      "texto": "II e III, apenas"
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Fragmentos de texto, fragmentos condicionais, páginas variantes e abordagem baseada em frames são as técnicas clássicas de adaptação de CONTEÚDO na taxonomia de hipermídia adaptativa: todas decidem QUE informação mostrar a cada usuário.",
      "II": "FALSA. Layouts de página e guias de estilo dizem respeito a como a informação é APRESENTADA — tipografia, cor, disposição visual. Não têm relação com navegação, que trata de como o usuário se desloca entre os pontos do sistema.",
      "III": "FALSA. Orientação direta, anotação de links, ocultação de links e ordenação de links são, todas elas, técnicas de adaptação da NAVEGAÇÃO — são as formas clássicas de suporte à navegação adaptativa. O item as coloca no nível de apresentação."
     },
     "por_que_a_correta_esta_certa": "Apenas a afirmação I associa corretamente as técnicas ao seu nível de adaptação.",
     "por_que_cada_distrator_cai": {
      "b": "Fica só com III, que desloca as técnicas de navegação para o nível de apresentação.",
      "c": "Acerta I mas soma II, que confunde apresentação com navegação.",
      "d": "Junta as duas falsas e descarta a única verdadeira."
     },
     "conceito_chave": "Os três níveis de adaptação respondem a perguntas diferentes: CONTEÚDO pergunta o que mostrar; NAVEGAÇÃO pergunta para onde o usuário pode ir e como os caminhos são sinalizados; APRESENTAÇÃO pergunta com que aparência mostrar.",
     "pegadinha": "Os itens II e III trocam de lugar entre si. Há um atalho seguro: toda técnica cujo nome contém \"link\" — anotação de links, ocultação, ordenação — é navegação, porque link é justamente o que leva o usuário de um ponto a outro. Isso resolve o item III sem depender de memória da taxonomia.",
     "referencia": "NIENOW, A. L. Interfaces adaptativas no comércio eletrônico como facilitadoras da inclusão digital de idosos. Revista Tecnologia e Tendências, v. 9, n. 2, p. 116-136, 2017."
    },
    "gabarito_inep": "A",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 15,
     "classe": "Muito difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 19,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Estatística — distribuição normal e histograma",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A figura a seguir mostra o histograma de uma amostra composta de 20 000 servidores. O eixo x apresenta a quantidade de requisições simultâneas desses servidores. Por exemplo, o valor 168 indica que há 1 850 servidores com capacidade de atender 168 requisições simultâneas."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image9.png",
      "arquivo": "figuras/q19_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "É possível afirmar que ao conectarmo-nos a um servidor dessa amostra, ao acaso, há aproximadamente"
     }
    ],
    "comando": null,
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "34,13% de chance que sua capacidade esteja no intervalo [141, 201]."
     },
     {
      "letra": "b",
      "texto": "34,13% de chance que sua capacidade esteja no intervalo [161, 181]."
     },
     {
      "letra": "c",
      "texto": "76,68% de chance que sua capacidade esteja no intervalo [171, 191]."
     },
     {
      "letra": "d",
      "texto": "95,44% de chance que sua capacidade esteja no intervalo [151, 191]."
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q19_fig1.png",
      "imagem_docx": "image9.png",
      "descricao_alt": "Histograma de 20 000 servidores. O eixo horizontal, rotulado \"Capacidade\", vai de cerca de 122 a 234 requisições simultâneas; o eixo vertical, \"Frequência\", vai de 0 a 2 000. As barras formam uma curva simétrica em forma de sino, com o pico próximo de 1 850 servidores em torno do valor 168 a 171, e caudas que se aproximam de zero nas duas extremidades. Um quadro no canto superior direito informa: Média 171 e Desvio Padrão 10. Fonte: openintro.org."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "O quadro no canto da figura dá os dois parâmetros: média 171 e desvio padrão 10. O intervalo [151, 191] é exatamente 171 menos 20 até 171 mais 20, ou seja, a média mais ou menos DOIS desvios padrão. Pela regra empírica da distribuição normal, essa faixa concentra 95,44% dos casos.",
     "por_que_cada_distrator_cai": {
      "a": "O intervalo [141, 201] é a média mais ou menos TRÊS desvios padrão, que corresponde a 99,73%, e não a 34,13%.",
      "b": "O intervalo [161, 181] é a média mais ou menos UM desvio padrão, que corresponde a 68,27%. O valor 34,13% é a metade disso, e valeria para meia faixa, como [171, 181].",
      "c": "O intervalo [171, 191] vai da média até dois desvios acima, ou seja, metade da faixa de 95,44%, o que dá 47,72%, e não 76,68%."
     },
     "conceito_chave": "A regra empírica 68-95-99,7: numa distribuição normal, aproximadamente 68,27% dos valores caem dentro de 1 desvio padrão da média, 95,44% dentro de 2 e 99,73% dentro de 3. Cada faixa é simétrica, então metade dela vale metade da porcentagem.",
     "pegadinha": "O número 34,13% aparece em duas alternativas justamente porque é familiar: é a metade de 68,27%, a área de um desvio padrão de um lado só. Ele está correto como quantidade, mas casado com o intervalo errado nas duas vezes. O caminho seguro é converter o intervalo em múltiplos de sigma ANTES de olhar as porcentagens.",
     "referencia": "Enade 2021, Ciência da Computação, questão 27. Dados de openintro.org."
    },
    "gabarito_inep": "D",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 51,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 20,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Arquitetura — pipeline de 5 estágios",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A figura 1 ilustra um pipeline com cinco unidades, também denominadas estágios. O estágio 1 busca a instrução na memória e a coloca em um buffer até que ela seja necessária. O estágio 2 decodifica a instrução, determina seu tipo e de quais operandos ela necessita. O estágio 3 localiza e busca os operandos, seja nos registradores, seja na memória. O estágio 4 é que realiza o trabalho de executar a instrução, normalmente fazendo os operandos passar pelo caminho de dados. Por fim, o estágio 5 escreve o resultado de volta no registrador adequado. Na figura 2, vemos como o pipeline funciona em função do tempo. Durante o ciclo de relógio 1, o estágio S1 está trabalhando na instrução 1, buscando-a na memória. Durante o ciclo 2, o estágio S2 decodifica a instrução 1, enquanto o estágio S1 busca a instrução 2. Durante o ciclo 3, o estágio S3 busca os operandos da instrução 1, o estágio S2 decodifica a instrução 2, e o estágio S1 busca a terceira instrução. Durante o ciclo 4, o estágio S4 executa a instrução 1, S3 busca os operandos para a instrução 2, S2 decodifica a instrução 3 e S1 busca a instrução 4. Por fim, durante o ciclo 5, S5 escreve (grava) o resultado da instrução 1 de volta no registrador, enquanto os outros estágios trabalham nas instruções seguintes."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image10.png",
      "arquivo": "figuras/q20_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando o modelo teórico do pipeline apresentado, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Uma falta na busca de instrução (nenhuma instrução buscada), em determinado ciclo, causará uma bolha (ausência de instrução útil) no estágio S1, e essa bolha percorrerá todos os estágios seguintes, um após o outro, nos próximos 4 ciclos, até ser eliminada do pipeline."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Cada instrução leva 5 ciclos para ser executada, mas se alguma instrução não precisar passar por determinado estágio, ela poderá percorrer o pipeline em um número menor de ciclos, por exemplo, se a instrução não possuir operandos ela não precisará passar pelo estágio S3 e assim poderá ser movida diretamente para o estágio S4."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "Dispondo de cache de dados separada da cache de instruções, o estágio S1 busca instruções na cache de instruções e dados na cache de dados."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "Dispondo de BTB (branch target buffer), após a busca de uma instrução de desvio condicional, as instruções seguintes podem ser buscadas e colocadas no pipeline, o que evita bolhas em seus vários estágios."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Uma falta na busca de instrução (nenhuma instrução buscada), em determinado ciclo, causará uma bolha (ausência de instrução útil) no estágio S1, e essa bolha percorrerá todos os estágios seguintes, um após o outro, nos próximos 4 ciclos, até ser eliminada do pipeline.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Cada instrução leva 5 ciclos para ser executada, mas se alguma instrução não precisar passar por determinado estágio, ela poderá percorrer o pipeline em um número menor de ciclos, por exemplo, se a instrução não possuir operandos ela não precisará passar pelo estágio S3 e assim poderá ser movida diretamente para o estágio S4.",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "Dispondo de cache de dados separada da cache de instruções, o estágio S1 busca instruções na cache de instruções e dados na cache de dados.",
      "veredito": false
     },
     {
      "rotulo": "IV",
      "texto": "Dispondo de BTB (branch target buffer), após a busca de uma instrução de desvio condicional, as instruções seguintes podem ser buscadas e colocadas no pipeline, o que evita bolhas em seus vários estágios.",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e II"
     },
     {
      "letra": "b",
      "texto": "I e IV"
     },
     {
      "letra": "c",
      "texto": "III e IV"
     },
     {
      "letra": "d",
      "texto": "I, II e III"
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q20_fig1.png",
      "imagem_docx": "image10.png",
      "descricao_alt": "Duas figuras. A figura 1 mostra o pipeline como cinco caixas em sequência: S1, unidade de busca de instrução; S2, unidade de decodificação de instrução; S3, unidade de busca de operando; S4, unidade de execução de instrução; e S5, unidade de gravação. A figura 2 é um diagrama de ocupação ao longo de nove ciclos de relógio: cada linha corresponde a um estágio (S1 a S5) e cada coluna a um ciclo (1 a 9). O estágio S1 processa a instrução 1 no ciclo 1, a instrução 2 no ciclo 2 e assim por diante; cada estágio seguinte começa um ciclo depois do anterior, formando uma escada diagonal. A partir do ciclo 5 os cinco estágios trabalham simultaneamente, cada um numa instrução diferente. Fonte: Tanenbaum, Organização Estruturada de Computadores, 5. ed., p. 35."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Se a busca falha num ciclo, o estágio S1 não produz instrução útil e cria uma bolha. Como o pipeline avança em bloco a cada ciclo de relógio, essa bolha caminha para S2, S3, S4 e S5 nos quatro ciclos seguintes, até sair pela ponta.",
      "II": "FALSA. Num pipeline síncrono toda instrução atravessa TODOS os estágios, na mesma ordem e no mesmo ritmo. Se uma instrução sem operandos pudesse pular S3 e ir direto para S4, ela alcançaria a instrução anterior e duas instruções disputariam o mesmo estágio no mesmo ciclo. Quando um estágio não tem o que fazer, ele é atravessado sem trabalho útil — mas é atravessado.",
      "III": "FALSA. O estágio S1 é a unidade de busca de INSTRUÇÃO; quem busca operandos é o estágio S3, como o próprio enunciado descreve. Ter cache de dados separada da cache de instruções é verdade e é útil, mas a atribuição feita no item está errada: S1 não busca dados.",
      "IV": "VERDADEIRA. O branch target buffer guarda o alvo provável dos desvios já vistos. Com ele, logo após buscar uma instrução de desvio condicional o processador já pode continuar buscando a partir do alvo previsto, em vez de esperar a condição ser resolvida — que é exatamente o que evita as bolhas."
     },
     "por_que_a_correta_esta_certa": "I e IV tratam corretamente do mesmo fenômeno por dois ângulos: como a bolha se propaga e como a previsão de desvio evita que ela se forme.",
     "por_que_cada_distrator_cai": {
      "a": "Inclui II, que permite instruções pularem estágios e quebrarem a sincronia do pipeline.",
      "c": "Inclui III, que atribui a busca de dados ao estágio errado, e descarta I.",
      "d": "Junta II e III, as duas falsas, ao verdadeiro I."
     },
     "conceito_chave": "O pipeline é síncrono: todos os estágios avançam juntos a cada ciclo de relógio, e nenhuma instrução ultrapassa outra. O ganho vem da vazão — uma instrução concluída por ciclo em regime — e não da latência individual, que continua sendo de 5 ciclos.",
     "pegadinha": "O item III mistura um fato verdadeiro (arquitetura Harvard, com caches separadas) com uma atribuição falsa de função ao estágio S1. Reconhecer o fato verdadeiro leva a marcar o item inteiro como certo.",
     "referencia": "TANENBAUM, A. S. Organização Estruturada de Computadores. 5. ed. São Paulo: Pearson Prentice Hall, 2007, p. 35."
    },
    "gabarito_inep": "B",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 34,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 21,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Processamento de imagens — erosão e dilatação",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "As operações morfológicas são um conjunto de operações que processam imagens com base em formas. As operações morfológicas aplicam um elemento estruturador B a uma imagem A de entrada e geram uma imagem de saída."
     },
     {
      "tipo": "paragrafo",
      "texto": "Em relação às operações morfológicas de Erosão e Dilatação, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Dilatação: À medida que o kernel B é aplicado sobre a imagem, calculamos o valor máximo de pixel sobreposto por B e substituímos o pixel da imagem, na posição do ponto de ancoragem, por esse valor máximo; exemplo:"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image11.png",
      "arquivo": "figuras/q21_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Dilatação: À medida que o kernel B é aplicado sobre a imagem, calculamos o valor mínimo de pixel sobreposto por B e substituímos o pixel da imagem, na posição do ponto de ancoragem, por esse valor mínimo; exemplo:"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image12.png",
      "arquivo": "figuras/q21_fig2.png",
      "descricao_alt": null
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "Erosão: À medida que o kernel B é aplicado sobre a imagem, calculamos o valor máximo de pixel sobreposto por B e substituímos o pixel da imagem, na posição do ponto de ancoragem, por esse valor máximo; exemplo:"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image13.png",
      "arquivo": "figuras/q21_fig3.png",
      "descricao_alt": null
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "Erosão: À medida que o kernel B é aplicado sobre a imagem, calculamos o valor mínimo de pixel sobreposto por B e substituímos o pixel da imagem, na posição do ponto de ancoragem, por esse valor mínimo; exemplo:"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image14.png",
      "arquivo": "figuras/q21_fig4.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em"
     }
    ],
    "comando": "É correto o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Dilatação: À medida que o kernel B é aplicado sobre a imagem, calculamos o valor máximo de pixel sobreposto por B e substituímos o pixel da imagem, na posição do ponto de ancoragem, por esse valor máximo; exemplo:",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Dilatação: À medida que o kernel B é aplicado sobre a imagem, calculamos o valor mínimo de pixel sobreposto por B e substituímos o pixel da imagem, na posição do ponto de ancoragem, por esse valor mínimo; exemplo:",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "Erosão: À medida que o kernel B é aplicado sobre a imagem, calculamos o valor máximo de pixel sobreposto por B e substituímos o pixel da imagem, na posição do ponto de ancoragem, por esse valor máximo; exemplo:",
      "veredito": false
     },
     {
      "rotulo": "IV",
      "texto": "Erosão: À medida que o kernel B é aplicado sobre a imagem, calculamos o valor mínimo de pixel sobreposto por B e substituímos o pixel da imagem, na posição do ponto de ancoragem, por esse valor mínimo; exemplo:",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e II, apenas"
     },
     {
      "letra": "b",
      "texto": "II e III, apenas"
     },
     {
      "letra": "c",
      "texto": "III e IV, apenas"
     },
     {
      "letra": "d",
      "texto": "I e IV, apenas"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q21_fig1.png",
      "imagem_docx": "image11.png",
      "descricao_alt": "Exemplo associado à afirmação I. A letra \"j\" manuscrita, em traço preto grosso sobre fundo branco, é transformada por uma seta rotulada \"Dilatação\" numa versão da mesma letra com traço visivelmente MAIS FINO, quase apenas o contorno."
     },
     {
      "arquivo": "figuras/q21_fig2.png",
      "imagem_docx": "image12.png",
      "descricao_alt": "Exemplo associado à afirmação II. A letra \"j\" manuscrita é transformada por uma seta rotulada \"Dilatação\" numa versão com traço visivelmente MAIS GROSSO e mais escuro."
     },
     {
      "arquivo": "figuras/q21_fig3.png",
      "imagem_docx": "image13.png",
      "descricao_alt": "Exemplo associado à afirmação III. A letra \"j\" manuscrita é transformada por uma seta rotulada \"Erosão\" numa versão com traço MAIS FINO, quase apenas o contorno."
     },
     {
      "arquivo": "figuras/q21_fig4.png",
      "imagem_docx": "image14.png",
      "descricao_alt": "Exemplo associado à afirmação IV. A letra \"j\" manuscrita é transformada por uma seta rotulada \"Erosão\" numa versão com traço MAIS GROSSO e mais escuro."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA pela definição formal. Em morfologia sobre imagens em tons de cinza, a DILATAÇÃO substitui cada pixel pelo valor MÁXIMO da vizinhança coberta pelo elemento estruturador B. É exatamente o que o item enuncia.",
      "II": "FALSA. Atribui à dilatação o cálculo do mínimo, que é a operação de erosão.",
      "III": "FALSA. Atribui à erosão o cálculo do máximo, que é a operação de dilatação.",
      "IV": "VERDADEIRA pela definição formal. A EROSÃO substitui cada pixel pelo valor MÍNIMO da vizinhança coberta por B."
     },
     "por_que_a_correta_esta_certa": "Pelas definições de morfologia em tons de cinza, I e IV estão corretas: dilatação usa o máximo e erosão usa o mínimo. Era esta a alternativa apontada como correta no material de origem — mas veja o aviso sobre a anulação.",
     "por_que_cada_distrator_cai": {
      "a": "Junta I (correta) com II, que troca a operação da dilatação.",
      "b": "Junta as duas afirmações trocadas, II e III.",
      "c": "Junta III (trocada) com IV (correta)."
     },
     "conceito_chave": "Em tons de cinza, dilatação é o filtro de MÁXIMO e erosão é o filtro de MÍNIMO. O efeito visual depende de qual região é considerada o objeto: se o objeto é a região CLARA (o caso usual em imagem binária, com objeto igual a 1), a dilatação engrossa e a erosão afina. Se o objeto é a região ESCURA, como no \"j\" desenhado em traço preto sobre fundo branco, o efeito visual se inverte — o filtro de máximo clareia e afina o traço, e o de mínimo escurece e engrossa.",
     "pegadinha": "As figuras da questão mostram o \"j\" AFINANDO no item rotulado \"Dilatação\" e ENGROSSANDO no item rotulado \"Erosão\", o contrário do que quase todo curso ensina: \"dilatação engorda, erosão emagrece\". Não há erro nas figuras, que são coerentes com a definição por máximo e mínimo, porque o traço é escuro sobre fundo claro. Mas a questão cobra a definição formal e ilustra com um caso em que a intuição visual aponta para o lado oposto.",
     "referencia": "Enade 2021, Ciência da Computação, questão 29 (ANULADA). Documentação de operações morfológicas do OpenCV.",
     "aviso_anulada": "Esta questão foi cancelada pelo INEP: o gabarito definitivo do Enade 2021 a registra como ANULADA, e o Relatório Síntese de Área confirma que a anulação partiu da Comissão Assessora de Área. O motivo não é publicado, mas neste caso ele é visível no texto original, e é um defeito de redação. Na prova como o INEP a imprimiu, os itens II e IV diziam \"calculamos o valor MÍNIMO de pixel sobreposto por B e substituímos o pixel da imagem [...] por esse valor MÁXIMO\" — calculam o mínimo e substituem pelo máximo, contradizendo a si mesmos em meia frase. Isso é fatal para a questão, porque o item IV era justamente um dos dois que o gabarito oficial dava como verdadeiros (a resposta era \"I e IV\"): não dá para sustentar como verdadeiro um item que se autocontradiz. Os itens I e III, que calculam e substituem pelo máximo, estavam coerentes. A versão que você respondeu corrigiu esse defeito — nela os itens II e IV substituem \"por esse valor mínimo\" — e por isso a questão aqui é consistente e a resposta se sustenta. Vale integralmente pelo conceito."
    },
    "gabarito_inep": "ANULADA",
    "anulada_inep": true,
    "dificuldade_inep": null
   },
   {
    "prova": 22,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Compiladores — análise léxica, sintática e semântica",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Um compilador é um software que traduz um programa descrito em uma linguagem de alto nível para um programa equivalente em código de máquina para um processador. Em geral, um compilador não produz diretamente o código de máquina, mas sim, um programa em linguagem simbólica (assembly) semanticamente equivalente ao programa em linguagem de alto nível. O programa em linguagem simbólica é, então, traduzido para o programa em linguagem de máquina através de montadores. Para realizar esta tarefa, o compilador executa a análise léxica, sintática e semântica do código-fonte do programa que está sendo executado em linguagem abstrata para depois gerar o código de máquina."
     },
     {
      "tipo": "paragrafo",
      "texto": "BRANCO, G. A. Jr.; TAMAE, R. Y. Uma breve introdução ao estudo e implementação de compiladores."
     },
     {
      "tipo": "referencia",
      "texto": "Revista Científica Eletrônica de Psicologia. Ano V, n. 08, fev. 2008 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando as informações do texto, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O analisador sintático tem a função de verificar se a sequência de símbolos gerada pelo analisador léxico compõe um programa válido ou não."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Na análise léxica, o analisador irá identificar cada símbolo que tenha significado para linguagem, gerando a mesma classificação para Java, Pascal ou outra linguagem."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O analisador semântico utiliza o código fonte para verificar incoerências quanto ao significado das construções implementadas."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "A fase de otimização do código procura melhorar o código intermediário, visando um código de máquina mais rápido em termos de execução."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O analisador sintático tem a função de verificar se a sequência de símbolos gerada pelo analisador léxico compõe um programa válido ou não.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Na análise léxica, o analisador irá identificar cada símbolo que tenha significado para linguagem, gerando a mesma classificação para Java, Pascal ou outra linguagem.",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "O analisador semântico utiliza o código fonte para verificar incoerências quanto ao significado das construções implementadas.",
      "veredito": true
     },
     {
      "rotulo": "IV",
      "texto": "A fase de otimização do código procura melhorar o código intermediário, visando um código de máquina mais rápido em termos de execução.",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e IV"
     },
     {
      "letra": "b",
      "texto": "II e III"
     },
     {
      "letra": "c",
      "texto": "I, III e IV"
     },
     {
      "letra": "d",
      "texto": "I, II e III"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. O analisador sintático recebe a sequência de tokens produzida pelo analisador léxico e verifica se ela obedece à gramática da linguagem, construindo a árvore sintática. É exatamente \"verificar se compõe um programa válido\".",
      "II": "FALSA. A análise léxica depende inteiramente da linguagem. As palavras reservadas de Java não são as de Pascal, os delimitadores mudam e as regras de formação de identificadores e literais mudam. Dizer que o analisador gera \"a mesma classificação para Java, Pascal ou outra linguagem\" é negar o que a análise léxica faz.",
      "III": "VERDADEIRA. A análise semântica verifica coerência de significado: compatibilidade de tipos, variável usada sem declaração, número de argumentos numa chamada. São erros que passam pela sintaxe mas não fazem sentido.",
      "IV": "VERDADEIRA. A fase de otimização trabalha sobre o código intermediário para produzir um código de máquina final mais rápido ou menor."
     },
     "por_que_a_correta_esta_certa": "I, III e IV descrevem corretamente as fases do compilador. Apenas II erra, ao supor que a análise léxica seja independente da linguagem.",
     "por_que_cada_distrator_cai": {
      "a": "Correta no que afirma, mas incompleta: descarta III, que é verdadeiro.",
      "b": "Inclui II, a única falsa, e descarta I e IV.",
      "d": "Acerta I e III mas soma II."
     },
     "conceito_chave": "A cadeia de fases do compilador: a análise LÉXICA quebra o texto em tokens, a SINTÁTICA verifica se os tokens formam uma estrutura válida pela gramática, a SEMÂNTICA verifica se a estrutura faz sentido, e só então vêm geração e otimização de código. Cada fase consome a saída da anterior.",
     "pegadinha": "O item II descreve corretamente o que a análise léxica faz (\"identificar cada símbolo que tenha significado para a linguagem\") e só erra na oração final, que universaliza a classificação entre linguagens. É o mesmo padrão de várias questões desta prova: a frase certa com um final errado.",
     "referencia": "BRANCO, G. A. Jr.; TAMAE, R. Y. Uma breve introdução ao estudo e implementação de compiladores. Revista Científica Eletrônica de Psicologia, ano V, n. 08, fev. 2008."
    },
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 45,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 23,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Teoria da Computação — máquina de Turing",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Semelhante a um autômato finito mas com uma memória ilimitada e irrestrita, uma máquina de Turing é um modelo muito mais preciso de um computador de propósito geral. Uma máquina de Turing pode fazer tudo o que um computador real pode fazer, entretanto mesmo ela não pode resolver certos problemas. Num sentido muito real, esses problemas estão além dos limites teóricos da computação."
     },
     {
      "tipo": "referencia",
      "texto": "SIPSER, M. Introdução à Teoria da Computação. 2. ed. norte-americana. Cengage CTP, 2007 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considere a seguinte máquina de Turing M que aceita apenas números binários palíndromos cujo comprimento é par."
     },
     {
      "tipo": "paragrafo",
      "texto": "Observação: no diagrama, as transições estão representadas no seguinte formato: \"Leitura/Escrita Movimento\", onde direção pode ser \"D\" (direita) ou \"E\" (esquerda). Exemplo: \"0/B D\" significa que o símbolo lido é \"0\", o símbolo escrito é \"B\" e o movimento é para a direita."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image15.png",
      "arquivo": "figuras/q23_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando que o estado inicial de M é q0, que a sua fita se encontra inicializada com a entrada 110011 e infinitos símbolos \"B\" à esquerda e à direita, e que a cabeça de leitura encontra-se inicialmente no símbolo mais à esquerda da entrada, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Após 4 movimentos de M, o conteúdo da fita, excluindo-se os símbolos \"B\", é \"110011\"."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Após 8 movimentos de M, o conteúdo da fita, excluindo-se os símbolos \"B\", é \"1001\"."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "A máquina irá certamente travar em um estado de aceitação."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "Existe um autômato com pilha que também aceita a linguagem de M."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Após 4 movimentos de M, o conteúdo da fita, excluindo-se os símbolos \"B\", é \"110011\".",
      "veredito": false
     },
     {
      "rotulo": "II",
      "texto": "Após 8 movimentos de M, o conteúdo da fita, excluindo-se os símbolos \"B\", é \"1001\".",
      "veredito": true
     },
     {
      "rotulo": "III",
      "texto": "A máquina irá certamente travar em um estado de aceitação.",
      "veredito": true
     },
     {
      "rotulo": "IV",
      "texto": "Existe um autômato com pilha que também aceita a linguagem de M.",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e IV"
     },
     {
      "letra": "b",
      "texto": "II e III"
     },
     {
      "letra": "c",
      "texto": "I, III e IV"
     },
     {
      "letra": "d",
      "texto": "II, III e IV"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q23_fig1.png",
      "imagem_docx": "image15.png",
      "descricao_alt": "Diagrama de estados da máquina de Turing M, com os estados q0 a q7 e o estado final qf, desenhado com círculo duplo. O estado inicial é q0. As transições, no formato \"leitura/escrita movimento\", são: de q0, lendo 0, escreve B e vai à direita para q1; de q0, lendo 1, escreve B e vai à direita para q5. Em q1 há um laço próprio que mantém 0 ou 1 e anda à direita; lendo B, q1 mantém B, anda à esquerda e vai para q2. De q2, lendo 0, escreve B, anda à esquerda e vai para q3. De q3, lendo 0 ou 1, mantém o símbolo, anda à esquerda e vai para q4; lendo B, mantém B, anda à direita e vai para qf. Em q4 há um laço próprio que mantém 0 ou 1 e anda à esquerda; lendo B, q4 mantém B, anda à direita e volta para q0. O ramo inferior é simétrico: em q5 há um laço que mantém 0 ou 1 e anda à direita; lendo B, q5 mantém B, anda à esquerda e vai para q6. De q6, lendo 1, escreve B, anda à esquerda e vai para q7. De q7, lendo 0 ou 1, mantém o símbolo, anda à esquerda e vai para q4; lendo B, mantém B, anda à direita e vai para qf."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "FALSA. Verificado por simulação. O PRIMEIRO movimento já apaga o símbolo mais à esquerda: em q0 a máquina lê 1, escreve B e anda para a direita. Depois de 4 movimentos a fita contém \"10011\", e não \"110011\" — a entrada original só existiria se a máquina ainda não tivesse feito nada.",
      "II": "VERDADEIRA. Verificado por simulação: após 8 movimentos a fita contém \"1001\". Nesse ponto a máquina já apagou o 1 da ponta esquerda (movimento 1), correu até a direita (movimentos 2 a 6), detectou o branco e voltou (movimento 7) e apagou o 1 da ponta direita (movimento 8), completando a verificação do primeiro par.",
      "III": "VERDADEIRA. A entrada 110011 é um palíndromo binário de comprimento par, que é exatamente a linguagem aceita por M. A simulação confirma: a máquina para no estado de aceitação qf após 27 movimentos.",
      "IV": "VERDADEIRA. A linguagem dos palíndromos binários de comprimento par é livre de contexto, e toda linguagem livre de contexto é aceita por algum autômato com pilha. A pilha empilha a primeira metade e desempilha comparando com a segunda."
     },
     "por_que_a_correta_esta_certa": "II, III e IV. A única falsa é I, e ela falha por um detalhe de contagem: o primeiro movimento já modifica a fita.",
     "por_que_cada_distrator_cai": {
      "a": "Junta I (falsa) com IV.",
      "b": "Correta no que afirma, mas incompleta: descarta IV.",
      "c": "Inclui I, a única falsa."
     },
     "conceito_chave": "A estratégia da máquina é a mesma de conferir um palíndromo à mão: apaga o símbolo da ponta esquerda, guarda qual era (indo para q1 se leu 0, para q5 se leu 1), corre até a outra ponta, exige encontrar o mesmo símbolo, apaga e volta. Se em algum momento o símbolo não bate, não há transição e a máquina trava sem aceitar.",
     "pegadinha": "O item I parece descrever \"o estado inicial\", e a fita inicial realmente é 110011. Mas quatro movimentos já se passaram, e o primeiro deles apagou um símbolo. Contar movimentos numa máquina de Turing exige lembrar que o movimento inclui a escrita, e não só o deslocamento.",
     "referencia": "SIPSER, M. Introdução à Teoria da Computação. 2. ed. norte-americana. Cengage CTP, 2007.",
     "verificado": "Máquina implementada e executada em ferramentas/tm_q23.py: a entrada 110011 é aceita em 27 movimentos, com a fita em \"10011\" após 4 movimentos e em \"1001\" após 8. Entradas não palíndromas (10, 1010) e de comprimento ímpar (101) travam sem aceitar."
    },
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 23,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 24,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Ordenação — quicksort, estabilidade e custo",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Existe um grande número de implementações para algoritmos de ordenação. Um dos fatores a serem considerados, por exemplo, é o número máximo e médio de comparações que são necessárias para ordenar um vetor com n elementos. Diz-se também que um algoritmo de ordenação é estável se ele preserva a ordem de elementos que são iguais. Isto é, se tais elementos aparecem na sequência ordenada na mesma ordem em que estão na sequência inicial. Analise o algoritmo abaixo, onde A é um vetor e “i, j, lo e hi” são índices do vetor:"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image16.png",
      "arquivo": "figuras/q24_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "Com relação ao algoritmo apresentado, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O algoritmo precisa de um espaço adicional O(n) para a pilha de recursão."
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "O algoritmo apresentado é um algoritmo de ordenação recursivo e estável."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O algoritmo precisa, em média, de O(n log n) comparações para ordenar n itens."
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "O uso do primeiro elemento do vetor como “pivot” é mais eficiente que usar o último."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O algoritmo precisa de um espaço adicional O(n) para a pilha de recursão.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "O algoritmo apresentado é um algoritmo de ordenação recursivo e estável.",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "O algoritmo precisa, em média, de O(n log n) comparações para ordenar n itens.",
      "veredito": true
     },
     {
      "rotulo": "IV",
      "texto": "O uso do primeiro elemento do vetor como “pivot” é mais eficiente que usar o último.",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e III"
     },
     {
      "letra": "b",
      "texto": "II e IV"
     },
     {
      "letra": "c",
      "texto": "III e IV"
     },
     {
      "letra": "d",
      "texto": "I, II e III"
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q24_fig1.png",
      "imagem_docx": "image16.png",
      "descricao_alt": "Pseudocódigo de dois algoritmos. O algoritmo \"ordena(A, lo, hi)\": se lo for menor que hi, então p recebe particao(A, lo, hi), e em seguida chama ordena(A, lo, p - 1) e ordena(A, p + 1, hi). O algoritmo \"particao(A, lo, hi)\": pivot recebe A[hi]; i recebe lo; repita para j de lo até hi, e se A[j] for menor que pivot então troca A[i] com A[j] e incrementa i; ao final troca A[i] com A[hi] e retorna i."
     }
    ],
    "codigo": {
     "linguagem": "pseudocodigo",
     "arquivo": "codigos/q24_quicksort.txt",
     "numeracao_de_linha": false,
     "saida_verificada": "ordena corretamente; profundidade de recursao igual a n para vetor ja ordenado; nao e estavel",
     "nota": "Transcrito da figura q24_fig1.png e executado em ferramentas/algos.py."
    },
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. A profundidade da pilha de recursão acompanha a qualidade das partições. Quando o pivô é sempre o pior possível — o que acontece com vetor JÁ ORDENADO, justamente porque o pivô escolhido é o último elemento — cada chamada reduz o problema em apenas um elemento, e a profundidade chega a n. Verificado por execução: para n = 10 já ordenado, a profundidade medida foi 10.",
      "II": "FALSA na segunda metade. O algoritmo é recursivo, sim, mas NÃO é estável. A partição de Lomuto troca elementos distantes entre si, o que destrói a ordem relativa de chaves iguais. Verificado por execução: a entrada 2a, 1x, 2b, 1y, 2c sai como 1y, 1x, 2c, 2b, 2a — as três chaves iguais a 2 saem na ordem exatamente inversa da original.",
      "III": "VERDADEIRA. No caso médio as partições são razoavelmente equilibradas, a recursão tem profundidade O(log n) e cada nível faz O(n) comparações, resultando em O(n log n). É o comportamento típico do quicksort e a razão de ele ser tão usado na prática.",
      "IV": "FALSA. Escolher o primeiro ou o último elemento como pivô é equivalente: as duas escolhas são arbitrárias e as duas degeneram para O(n²) em entradas já ordenadas ou quase ordenadas. Não há ganho de eficiência em trocar uma pela outra. O que de fato ajuda é escolher o pivô por mediana de três ou aleatoriamente."
     },
     "por_que_a_correta_esta_certa": "I e III. O algoritmo é um quicksort com partição de Lomuto e pivô no último elemento: custo médio O(n log n) e pilha de recursão que pode chegar a O(n) no pior caso.",
     "por_que_cada_distrator_cai": {
      "b": "Junta as duas falsas: a estabilidade que o algoritmo não tem e a vantagem inexistente de trocar a posição do pivô.",
      "c": "Acerta III mas soma IV.",
      "d": "Acerta I e III mas soma II, afirmando estabilidade."
     },
     "conceito_chave": "Quicksort tem três propriedades que costumam ser confundidas: é rápido em MÉDIA, O(n log n), mas O(n²) no pior caso; ordena no próprio vetor, gastando memória extra apenas com a pilha de recursão, que pode chegar a O(n); e NÃO é estável, porque troca elementos não adjacentes.",
     "pegadinha": "O item II encaixa uma afirmação falsa (estável) logo depois de uma verdadeira e óbvia (recursivo), na mesma frase. Basta olhar as duas primeiras linhas do algoritmo para confirmar a recursão, e a tentação é dar o item por bom sem examinar a segunda propriedade.",
     "referencia": "Enade 2021, Ciência da Computação, questão 32.",
     "verificado": "Algoritmo transcrito de figuras/q24_fig1.png para codigos/q24_quicksort.txt e executado em ferramentas/algos.py: ordena corretamente; a profundidade de recursão é 10 para um vetor ordenado de 10 elementos; e o teste de estabilidade falha, com 2a, 2b, 2c saindo como 2c, 2b, 2a."
    },
    "gabarito_inep": "A",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 17,
     "classe": "Difícil",
     "descartada_ponto_bisserial": true,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 25,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Programação lógica — Prolog",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A linguagem PROLOG pertence ao paradigma da programação lógica, no qual a lógica proposicional e algorítmica pode ser expressa na forma de descritores de fatos e regras de produção de respostas. No contexto da árvore genealógica de uma família, analise a seguinte base de fatos descrita em linguagem Prolog:"
     },
     {
      "tipo": "paragrafo",
      "texto": "homem(francisco)."
     },
     {
      "tipo": "paragrafo",
      "texto": "homem(marcos)."
     },
     {
      "tipo": "paragrafo",
      "texto": "mulher(ana)."
     },
     {
      "tipo": "paragrafo",
      "texto": "mulher(maria)."
     },
     {
      "tipo": "paragrafo",
      "texto": "mulher(joana)."
     },
     {
      "tipo": "paragrafo",
      "texto": "mulher(luiza)."
     },
     {
      "tipo": "paragrafo",
      "texto": "filhode(ana, francisco)."
     },
     {
      "tipo": "paragrafo",
      "texto": "filhode(marcos, francisco)."
     },
     {
      "tipo": "paragrafo",
      "texto": "filhode(ana, maria)."
     },
     {
      "tipo": "paragrafo",
      "texto": "filhode(marcos, maria)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Qual regra lógica de produção está corretamente escrita para verificar uma das situações lógicas em que duas pessoas são irmãs?"
     }
    ],
    "comando": "A linguagem PROLOG pertence ao paradigma da programação lógica, no qual a lógica proposicional e algorítmica pode ser expressa na forma de descritores de fatos e regras de produção de respostas. No contexto da árvore genealógica de uma família, analise a seguinte base de fatos descrita em linguagem Prolog:",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "saoirmas(X,Y):-filhode(X,P), filhode(Y,P), X\\=Y."
     },
     {
      "letra": "b",
      "texto": "saoirmas(X,Y):-filhode(X,P), filhode(Y,P), X\\=Y, mulher(X)."
     },
     {
      "letra": "c",
      "texto": "saoirmas(X,Y):-filhode(X,P), filhode(Y,P), X\\=Y, mulher(X), mulher(Y)."
     },
     {
      "letra": "d",
      "texto": "saoirmas(X,Y):-filhode(X,P), filhode(Y,M), X\\=Y, mulher(X), mulher(Y)."
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "A regra saoirmas(X,Y) :- filhode(X,P), filhode(Y,P), X \\= Y, mulher(X), mulher(Y) lê-se assim: X e Y são irmãs se existe um P que é progenitor de ambas, se X e Y são pessoas diferentes e se ambas são mulheres. As três condições são necessárias: o mesmo P garante o parentesco, o X \\= Y evita que alguém seja irmã de si mesma e os dois predicados mulher garantem o gênero exigido pela palavra \"irmãs\".",
     "por_que_cada_distrator_cai": {
      "a": "Define IRMÃOS, e não irmãs: não exige gênero nenhum. Estaria correta se a pergunta fosse sobre irmandade em geral.",
      "b": "Exige que apenas X seja mulher. Nesse caso Y poderia ser homem, e o par não seria formado por duas irmãs.",
      "d": "O erro decisivo está em usar variáveis diferentes para o progenitor: filhode(X,P) e filhode(Y,M). Como P e M são independentes, a regra aceitaria quaisquer duas mulheres que tenham algum progenitor, ainda que não tenham nenhum em comum. A unificação pela MESMA variável é o que expressa \"mesmo pai ou mesma mãe\"."
     },
     "conceito_chave": "Em Prolog o parentesco é expresso pela UNIFICAÇÃO de variáveis: repetir a mesma variável P em dois objetivos obriga os dois a se referirem ao mesmo indivíduo. Trocar por outra variável dissolve a restrição, ainda que a regra continue sintaticamente válida.",
     "pegadinha": "As quatro alternativas são quase idênticas, e só duas coisas mudam de uma para outra: quantos predicados de gênero aparecem no fim da regra e qual variável é usada no segundo filhode. Comparar as regras entre si, termo a termo, é mais eficiente do que ler cada uma inteira.",
     "referencia": "Enade 2021, Ciência da Computação, questão 33 (ANULADA).",
     "aviso_anulada": "Esta questão foi cancelada pelo INEP: o gabarito definitivo do Enade 2021 a registra como ANULADA, e o Relatório Síntese de Área confirma que a anulação partiu da Comissão Assessora de Área. Aqui o motivo não é publicado nem evidente, ao contrário do que acontece na questão 21 — o que segue são hipóteses, e não a explicação oficial. A prova original usava outra base de fatos, com os predicados paide e maede no lugar de filhode, e três defeitos formais aparecem nela. Primeiro, o nome paide se lê naturalmente como \"X é pai de Y\", mas a base só faz sentido no sentido oposto, \"o pai de X é Y\" — o aluno precisa deduzir a direção cruzando os fatos homem e mulher, e a direção muda completamente o que a regra significa. Segundo, uma das alternativas chamava mulher(X,Y), um predicado de dois argumentos que não existe na base, onde mulher tem apenas um. Terceiro, o enunciado pede \"uma das situações lógicas em que duas pessoas são irmãs\", e esse \"uma das\" abre espaço para defender também a alternativa que define irmandade sem exigir gênero. Nada disso está na versão que você respondeu, que trocou paide e maede pelo filhode, de direção inequívoca. Estude a unificação de variáveis, que é o conceito que a questão queria cobrar."
    },
    "gabarito_inep": "ANULADA",
    "anulada_inep": true,
    "dificuldade_inep": null
   },
   {
    "prova": 26,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Grafos — algoritmo de Dijkstra",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O algoritmo de Dijkstra para o problema do caminho mínimo em dígrafos com pesos utiliza uma fila de prioridades de vértices, na qual as prioridades são uma estimativa do custo final. A cada iteração, um vértice é retirado da fila, e os arcos que começam nesse vértice são analisados. Considere o seguinte grafo, no qual deseja-se conhecer o custo de um caminho mínimo para cada vértice, a partir do vértice D. Considere que -1 representa um custo “infinito”, ou seja, nenhum caminho até o vértice foi até o"
     },
     {
      "tipo": "paragrafo",
      "texto": "momento descoberto."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image18.png",
      "arquivo": "figuras/q26_fig1.png",
      "descricao_alt": null
     },
     {
      "tipo": "paragrafo",
      "texto": "Com base nas informações e no grafo apresentados, assinale a alternativa que representa a estimativa de custo após duas iterações do algoritmo."
     }
    ],
    "comando": "Com base nas informações e no grafo apresentados, assinale a alternativa que representa a estimativa de custo após duas iterações do algoritmo.",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "A: 5 B: 6 C: 10 D: 0 E: 4 F: 1 G: -1"
     },
     {
      "letra": "b",
      "texto": "A: 5 B: 9 C: -1 D: 0 E: 5 F: 1 G: -1"
     },
     {
      "letra": "c",
      "texto": "A: 5 B: 9 C: -1 D: 0 E: 4 F: 1 G: 2"
     },
     {
      "letra": "d",
      "texto": "A: 5 B: 7 C: 8 D: 0 E: 4 F: 1 G: 2"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/q26_fig1.png",
      "imagem_docx": "image18.png",
      "descricao_alt": "Dígrafo com pesos e sete vértices rotulados de A a G. Os arcos orientados, com seus pesos, são: de D para A com peso 5; de D para B com peso 9; de D para E com peso 5; de D para F com peso 1; de A para B com peso 2; de B para C com peso 8; de E para B com peso 1; de E para C com peso 5; de F para E com peso 3; de F para G com peso 1; e de G para E com peso 1. O vértice D, à esquerda, é a origem da busca."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "Na PRIMEIRA iteração o algoritmo retira D, que tem custo 0, e relaxa os arcos que saem dele: A recebe 5, B recebe 9, E recebe 5 e F recebe 1. Na SEGUNDA iteração retira-se o vértice de menor estimativa na fila, que é F com custo 1, e relaxam-se os arcos que saem de F: F para E com peso 3 dá 1 + 3 = 4, que melhora o 5 anterior, então E passa a 4; e F para G com peso 1 dá 1 + 1 = 2, então G passa a 2. O vértice C permanece em -1 porque nenhum caminho até ele foi descoberto ainda. O estado final é A: 5, B: 9, C: -1, D: 0, E: 4, F: 1, G: 2.",
     "por_que_cada_distrator_cai": {
      "a": "Traz B em 6 e C em 10, valores que só apareceriam depois de processar A e B, várias iterações adiante. Além disso deixa G em -1, embora G já tenha sido alcançado por F.",
      "b": "Corresponde a apenas UMA iteração: mantém E em 5, o valor vindo direto de D, sem o relaxamento por F, e G em -1. É o que se obtém parando depois de retirar apenas D.",
      "d": "Traz B em 7 e C em 8, que exigiriam já ter processado A (para chegar a B por 5 + 2 = 7) e E (para chegar a C). São resultados de iterações posteriores."
     },
     "conceito_chave": "Cada iteração de Dijkstra faz duas coisas: retira da fila o vértice de MENOR estimativa ainda aberto e relaxa todos os arcos que saem dele. Relaxar significa melhorar a estimativa do destino apenas se o caminho pelo vértice recém-fechado for mais barato do que o já conhecido.",
     "pegadinha": "A contagem das iterações. A retirada do próprio vértice de origem D conta como a primeira iteração, e não como uma inicialização prévia. Quem considera D apenas \"o ponto de partida\" e começa a contar em F executa uma iteração a mais e chega às alternativas a ou d.",
     "referencia": "Enade 2021, Ciência da Computação, questão 34.",
     "verificado": "Grafo transcrito da figura e algoritmo executado em ferramentas/verificar.py: após duas iterações o estado é A: 5, B: 9, C: -1, D: 0, E: 4, F: 1, G: 2."
    },
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 23,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 27,
    "origem": "Enade 2021 - INEP/MEC",
    "tema": "Sistemas distribuídos — conceitos",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Um sistema distribuído é aquele no qual os componentes de hardware ou software, localizados em computadores interligados em rede, comunicam-se e coordenam suas ações apenas enviando mensagens entre si."
     },
     {
      "tipo": "referencia",
      "texto": "COULOURIS, G. et al. Sistemas distribuídos: conceitos e projeto. 5. ed., Porto Alegre: Bookman, 2013 (adaptado)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Com base na definição apresentada e nos conceitos básicos de sistemas distribuídos, assinale a opção correta."
     }
    ],
    "comando": "Com base na definição apresentada e nos conceitos básicos de sistemas distribuídos, assinale a opção correta.",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "A existência de um relógio físico local sincronizado com um relógio global é o que permite aos usuários de um sistema distribuído trocarem mensagens de forma coordenada."
     },
     {
      "letra": "b",
      "texto": "A falha de um componente em um sistema distribuído peer-to-peer causa a interrupção de todos os demais componentes até o seu retorno."
     },
     {
      "letra": "c",
      "texto": "O compartilhamento dos recursos distribuídos entre computadores interligados por uma rede é possível desde que os dispositivos sejam homogêneos em termos de hardware e software."
     },
     {
      "letra": "d",
      "texto": "A adição de novos dispositivos em um sistema distribuído para atender a uma demanda temporária ou crescente está ligada à característica de escalabilidade do sistema."
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "Escalabilidade é precisamente a capacidade de um sistema distribuído crescer — em número de usuários, de recursos ou de máquinas — sem perda significativa de desempenho e sem exigir mudança estrutural. Acrescentar dispositivos para atender demanda temporária ou crescente é o exemplo canônico.",
     "por_que_cada_distrator_cai": {
      "a": "Afirma o oposto de uma premissa fundamental da área. Sistemas distribuídos NÃO dispõem de um relógio global: a própria definição do enunciado diz que os componentes coordenam suas ações \"apenas enviando mensagens entre si\". Por isso existem relógios lógicos (Lamport, vetoriais) e protocolos de sincronização aproximada como o NTP.",
      "b": "Descreve o contrário do que caracteriza uma arquitetura peer-to-peer. A ausência de um ponto central é justamente o que faz a falha de um nó NÃO interromper os demais, e é a base da tolerância a falhas dessas redes.",
      "c": "A heterogeneidade é uma característica esperada e desejada de sistemas distribuídos, e não um impedimento. Camadas de middleware e protocolos padronizados existem exatamente para mascarar diferenças de hardware, sistema operacional e linguagem."
     },
     "conceito_chave": "As características clássicas de um sistema distribuído em Coulouris: heterogeneidade, abertura, segurança, escalabilidade, tratamento de falhas, concorrência e transparência. Ausência de relógio global e de estado global compartilhado são premissas, e não defeitos.",
     "pegadinha": "Três das quatro alternativas transformam uma CARACTERÍSTICA do modelo numa exigência ou numa limitação: exigem relógio global, exigem homogeneidade ou supõem acoplamento total entre nós. Cada uma nega um dos pilares da definição dada no próprio enunciado.",
     "referencia": "COULOURIS, G. et al. Sistemas Distribuídos: conceitos e projeto. 5. ed. Porto Alegre: Bookman, 2013."
    },
    "gabarito_inep": "D",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 51,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2021, Ciência da Computação (Bacharelado), Tabelas 6.11b e 6.12b."
    }
   },
   {
    "prova": 28,
    "origem": "Autoral do professor",
    "tema": "Estatística — teorema de Bayes",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Uma equipe de engenharia de software implementou um sistema de análise estática de código (linter) para identificar vulnerabilidades antes do deploy em produção. Sabe-se que em um grande repositório de código legado da empresa, 10% das classes possuem, de fato, alguma vulnerabilidade de segurança."
     },
     {
      "tipo": "paragrafo",
      "texto": "Durante os testes de homologação, o linter demonstrou uma taxa de verdadeiro positivo de 90% (ou seja, se a classe tem vulnerabilidade, o linter aponta a falha em 90% das vezes). No entanto, o sistema também possui uma taxa de falso positivo de 5% (ou seja, se a classe não possui vulnerabilidade, o linter incorretamente acusa uma falha em 5% dos casos)."
     },
     {
      "tipo": "paragrafo",
      "texto": "Se, ao analisar uma classe aleatória do repositório, o linter alertar a presença de uma vulnerabilidade, qual é a probabilidade aproximada de que a classe realmente contenha a vulnerabilidade?"
     }
    ],
    "comando": null,
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "90,0%"
     },
     {
      "letra": "b",
      "texto": "75,3%"
     },
     {
      "letra": "c",
      "texto": "66,7%"
     },
     {
      "letra": "d",
      "texto": "50,0%"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": null,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "É uma aplicação direta do teorema de Bayes. Sejam V \"a classe tem vulnerabilidade\" e + \"o linter alertou\". Temos P(V) = 0,10, P(+|V) = 0,90 e P(+|não V) = 0,05. A probabilidade de haver alerta é P(+) = 0,90 × 0,10 + 0,05 × 0,90 = 0,09 + 0,045 = 0,135. Logo P(V|+) = 0,09 / 0,135 = 0,667, ou seja, aproximadamente 66,7%. Em números concretos: a cada 1000 classes analisadas, 90 são verdadeiros positivos e 45 são falsos positivos; dos 135 alertas, 90 são reais, e 90/135 = 2/3.",
     "por_que_cada_distrator_cai": {
      "a": "Confunde P(+|V) com P(V|+). O enunciado informa que o linter acerta 90% das vezes em que HÁ vulnerabilidade; a pergunta é outra — dado que houve alerta, qual a chance de haver vulnerabilidade. Essa inversão é a falácia da taxa base, e é o erro que a questão está medindo.",
      "b": "Não corresponde a nenhum passo do cálculo. Funciona como distrator plausível por estar entre os dois valores mais tentadores.",
      "d": "Chute intuitivo de \"meio a meio\", que ignora tanto a prevalência quanto as taxas de acerto e erro."
     },
     "conceito_chave": "Teorema de Bayes: P(V|+) = P(+|V) × P(V) / P(+). Quando a prevalência é baixa, os falsos positivos vindos da população grande de casos negativos competem com os verdadeiros positivos, e a confiança no alerta cai bem abaixo da taxa de acerto anunciada.",
     "pegadinha": "Um linter que \"acerta 90%\" soa confiável, mas 90% é sensibilidade, e não valor preditivo positivo. Como apenas 10% das classes têm vulnerabilidade, os 5% de falso positivo incidem sobre 90% do repositório e produzem quase metade do volume de alertas, derrubando a confiança de 90% para 67%.",
     "referencia": "Questão autoral do professor. Estatística aplicada à computação.",
     "verificado": "Cálculo conferido em ferramentas/verificar.py: P(alerta) = 0,1350 e P(vulnerável | alerta) = 0,6667."
    },
    "gabarito_inep": null,
    "anulada_inep": false,
    "dificuldade_inep": null
   },
   {
    "prova": 29,
    "origem": "Autoral do professor",
    "tema": "Banco de Dados — normalização 1FN e 2FN",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O processo de normalização em bancos de dados relacionais é fundamental para evitar anomalias de inserção, atualização e exclusão, além de minimizar a redundância de dados."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considere uma relação ProjetoFuncionario que armazena informações sobre a alocação de desenvolvedores em projetos, possuindo o seguinte esquema:"
     },
     {
      "tipo": "paragrafo",
      "texto": "ProjetoFuncionario (ID_Projeto, ID_Funcionario, Nome_Funcionario, Carga_Horaria_Semanal)"
     },
     {
      "tipo": "paragrafo",
      "texto": "Nesta relação, a chave primária é composta pelos atributos (ID_Projeto, ID_Funcionario). A partir das regras de negócio, as seguintes dependências funcionais foram mapeadas:"
     },
     {
      "tipo": "lista",
      "rotulo": "1",
      "texto": "{ID_Projeto, ID_Funcionario} → {Carga_Horaria_Semanal}"
     },
     {
      "tipo": "lista",
      "rotulo": "2",
      "texto": "{ID_Funcionario} → {Nome_Funcionario}"
     },
     {
      "tipo": "paragrafo",
      "texto": "Analisando a estrutura e as dependências funcionais descritas, indique em qual forma normal (FN) a relação se encontra e qual anomalia principal ela está suscetível a sofrer."
     }
    ],
    "comando": null,
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "Encontra-se na Primeira Forma Normal (1FN) e é suscetível a anomalias de atualização, caso o nome de um funcionário precise ser alterado."
     },
     {
      "letra": "b",
      "texto": "Encontra-se na Segunda Forma Normal (2FN) e é suscetível a anomalias de exclusão de projetos."
     },
     {
      "letra": "c",
      "texto": "Encontra-se na Terceira Forma Normal (3FN), estando livre de anomalias de redundância e inconsistência."
     },
     {
      "letra": "d",
      "texto": "Encontra-se na Primeira Forma Normal (1FN) por apresentar dependência transitiva entre Carga_Horaria_Semanal e a chave primária."
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": null,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "A relação está na 1FN — todos os atributos são atômicos — mas NÃO alcança a 2FN. A 2FN exige que todo atributo não-chave dependa da chave primária INTEIRA. A chave é composta por (ID_Projeto, ID_Funcionario), e a dependência 2 mostra que Nome_Funcionario depende apenas de ID_Funcionario, ou seja, de PARTE da chave. Isso é uma dependência parcial, e é exatamente o que a 2FN proíbe. A consequência prática é a anomalia de atualização descrita na alternativa: o nome do funcionário se repete em cada projeto em que ele está alocado, e corrigi-lo exige alterar todas essas linhas — se uma escapar, a base fica inconsistente.",
     "por_que_cada_distrator_cai": {
      "b": "Afirma que a relação está na 2FN, o que a dependência parcial {ID_Funcionario} → {Nome_Funcionario} desmente diretamente.",
      "c": "Afirma 3FN e ausência de redundância. A relação nem chega à 2FN, e a redundância do nome do funcionário é visível.",
      "d": "Acerta a forma normal (1FN) e erra a justificativa. A dependência problemática é PARCIAL — parte da chave determina um atributo não-chave — e não TRANSITIVA. Além disso, Carga_Horaria_Semanal depende da chave inteira, como diz a dependência 1, e portanto não é ela a origem do problema."
     },
     "conceito_chave": "A escada das formas normais: a 1FN exige atributos atômicos; a 2FN elimina dependências PARCIAIS, em que parte de uma chave composta determina um atributo não-chave; a 3FN elimina dependências TRANSITIVAS, em que um atributo não-chave determina outro. Distinguir parcial de transitiva é o que a questão cobra.",
     "pegadinha": "A alternativa d chega à mesma forma normal da resposta correta, o que dá a sensação de estar certa. O erro está na justificativa: troca \"parcial\" por \"transitiva\" e aponta o atributo errado. Nesse tipo de questão a forma normal sozinha não decide — a razão precisa fechar também.",
     "referencia": "Questão autoral do professor. Normalização de bancos de dados relacionais."
    },
    "gabarito_inep": null,
    "anulada_inep": false,
    "dificuldade_inep": null
   },
   {
    "prova": 30,
    "origem": "Autoral do professor",
    "tema": "LGPD — princípio da necessidade",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Uma startup desenvolveu um aplicativo gratuito de utilidade simples: uma lanterna digital para smartphones. No entanto, nos Termos de Uso e Política de Privacidade, a empresa condiciona o funcionamento do aplicativo à concessão, por parte do usuário, de permissões de acesso irrestrito à lista de contatos, histórico de ligações, galeria de fotos e dados precisos de geolocalização. A empresa justifica internamente que \"esses dados poderão ser úteis no futuro para treinar novos modelos de inteligência artificial ou monetizar a plataforma via anúncios direcionados\"."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando as disposições da Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), a conduta adotada por esta startup fere frontalmente qual princípio basilar do tratamento de dados pessoais?"
     }
    ],
    "comando": null,
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "Princípio da Qualidade dos Dados, pois as informações coletadas (fotos e contatos) tendem a se desatualizar rapidamente sem a intervenção direta da empresa."
     },
     {
      "letra": "b",
      "texto": "Princípio da Necessidade (ou Minimização), pois a coleta deve se limitar ao mínimo necessário para a realização da finalidade proposta e informada."
     },
     {
      "letra": "c",
      "texto": "Princípio do Livre Acesso, já que o usuário não tem permissão para editar os dados que foram capturados passivamente pelo aplicativo."
     },
     {
      "letra": "d",
      "texto": "Princípio da Não Discriminação, visto que a empresa planeja utilizar as informações para criar perfis comportamentais para anúncios direcionados."
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": null,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "O princípio da necessidade, previsto no art. 6º, III da LGPD, determina que o tratamento se limite ao mínimo necessário para a realização da finalidade, abrangendo dados pertinentes, proporcionais e não excessivos. Uma lanterna digital precisa, no máximo, de acesso ao flash da câmera. Exigir lista de contatos, histórico de ligações, galeria de fotos e geolocalização precisa é o exemplo de manual de coleta excessiva. A justificativa interna da empresa — dados que \"poderão ser úteis no futuro\" — agrava o caso, porque viola também a finalidade (art. 6º, I), que exige propósito específico e informado ao titular.",
     "por_que_cada_distrator_cai": {
      "a": "O princípio da qualidade dos dados (art. 6º, V) garante ao titular exatidão, clareza, relevância e atualização dos dados. Trata da QUALIDADE do que foi coletado, e não da QUANTIDADE. A alternativa ainda inventa um raciocínio sobre desatualização que não é o problema do caso.",
      "c": "O princípio do livre acesso (art. 6º, IV) assegura ao titular consulta facilitada e gratuita sobre seus dados. É um direito de transparência, que pode até estar sendo violado em paralelo, mas não é o que a conduta descrita fere frontalmente.",
      "d": "O princípio da não discriminação (art. 6º, IX) veda o tratamento para fins discriminatórios ilícitos ou abusivos. Publicidade direcionada, por si só, não configura discriminação no sentido legal — seria preciso demonstrar prejuízo ilícito a um grupo."
     },
     "conceito_chave": "Os dez princípios do art. 6º da LGPD. Três deles atuam juntos contra a coleta abusiva: FINALIDADE (propósito legítimo, específico e informado), ADEQUAÇÃO (compatibilidade do tratamento com a finalidade) e NECESSIDADE (mínimo indispensável). Coletar hoje para usar em algo que talvez apareça amanhã viola os três.",
     "pegadinha": "As quatro alternativas nomeiam princípios que realmente existem na LGPD e vêm acompanhados de uma justificativa que soa jurídica. Não basta reconhecer o nome do princípio; é preciso saber o que cada um protege. O caso descrito é de EXCESSO de coleta, e o princípio que trata de excesso é o da necessidade.",
     "referencia": "Questão autoral do professor. BRASIL, Lei nº 13.709/2018 (LGPD), art. 6º, incisos I a X."
    },
    "gabarito_inep": null,
    "anulada_inep": false,
    "dificuldade_inep": null
   }
  ],
  "codigos": {
   "codigos/q12_busca.c": "#include <stdio.h>                                                  /* 1 */\n#define TAM 10                                                      /* 2 */\nint funcao1(int vetor[], int v) {                                   /* 3 */\n    int i;                                                          /* 4 */\n    for (i = 0; i < TAM; i++) {                                     /* 5 */\n        if (vetor[i] == v)                                          /* 6 */\n            return i;                                               /* 7 */\n    }                                                               /* 8 */\n    return -1;                                                      /* 9 */\n}                                                                   /* 10 */\nint funcao2(int vetor[], int v, int i, int f) {                     /* 11 */\n    int m = (i + f) / 2;                                            /* 12 */\n    if (v == vetor[m])                                              /* 13 */\n        return m;                                                   /* 14 */\n    if (i >= f)                                                     /* 15 */\n        return -1;                                                  /* 16 */\n    if (v > vetor[m])                                               /* 17 */\n        return funcao2(vetor, v, m+1, f);                           /* 18 */\n    else                                                            /* 19 */\n        return funcao2(vetor, v, i, m-1);                           /* 20 */\n}                                                                   /* 21 */\nint main() {                                                        /* 22 */\n    int vetor[TAM] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};           /* 23 */\n    printf(\"%d - %d\", funcao1(vetor, 15), funcao2(vetor, 15, 0, TAM-1));  /* 24 */\n    return 0;                                                       /* 25 */\n}                                                                   /* 26 */\n",
   "codigos/q24_quicksort.txt": "algoritmo ordena(A, lo, hi)\n    se lo < hi então\n        p := particao(A, lo, hi)\n        ordena(A, lo, p - 1)\n        ordena(A, p + 1, hi)\n\nalgoritmo particao(A, lo, hi)\n    pivot := A[hi]\n    i := lo\n    repita para j := lo até hi\n        se A[j] < pivot então\n            troca A[i] com A[j]\n            i := i + 1\n    troca A[i] com A[hi]\n    return i\n"
  }
 },
 "presencial": {
  "questoes": [
   {
    "prova": 1,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Estruturas de dados — árvore AVL",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Uma árvore AVL é um tipo de árvore binária balanceada na qual a diferença entre as alturas de suas subárvores da esquerda e da direita não pode ser maior do que 1 para qualquer nó. Após a inserção de um nó em uma AVL, a raiz da subárvore de nível mais baixo no qual o novo nó foi inserido é marcada. Se a altura de seus filhos diferir em mais de uma unidade, é realizada uma rotação simples ou uma rotação dupla para igualar suas alturas."
     },
     {
      "tipo": "referencia",
      "texto": "LAFORE, R. Data Structures & algorithms in Java. Indianópolis: Sams Publishing, 2003 (adaptado)"
     },
     {
      "tipo": "paragrafo",
      "texto": "A seguir, é apresentado um exemplo de árvore AVL"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image1.png",
      "arquivo": "figuras/presencial/p01_fig1.png",
      "descricao_alt": "Árvore AVL. Raiz 13. Filho esquerdo de 13: 10; filho direito: 15. Filhos de 10: 5 à esquerda e 11 à direita. 15 tem apenas o filho direito 16. Filhos de 5: 4 à esquerda e 8 à direita."
     },
     {
      "tipo": "paragrafo",
      "texto": "Pelo exposto no texto acima, após a inserção de um nó com valor 3 na árvore AVL exemplificada, é correto afirmar que ela ficará com a seguinte configuração"
     }
    ],
    "comando": "Pelo exposto no texto acima, após a inserção de um nó com valor 3 na árvore AVL exemplificada, é correto afirmar que ela ficará com a seguinte configuração",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "",
      "figura": {
       "arquivo": "figuras/presencial/p01_fig2.png",
       "imagem_docx": "image2.png",
       "descricao_alt": "Árvore com raiz 13. Filho esquerdo de 13: 5; filho direito: 15. Filhos de 5: 4 à esquerda e 10 à direita. 4 tem apenas o filho esquerdo 3. Filhos de 10: 8 à esquerda e 11 à direita. 15 tem apenas o filho direito 16."
      }
     },
     {
      "letra": "b",
      "texto": "",
      "figura": {
       "arquivo": "figuras/presencial/p01_fig3.png",
       "imagem_docx": "image3.png",
       "descricao_alt": "Árvore com raiz 13. Filho esquerdo de 13: 10; filho direito: 15. Filhos de 10: 5 à esquerda e 11 à direita. Filhos de 5: 4 à esquerda e 8 à direita. 4 tem apenas o filho esquerdo 3. 15 tem apenas o filho direito 16."
      }
     },
     {
      "letra": "c",
      "texto": "",
      "figura": {
       "arquivo": "figuras/presencial/p01_fig4.png",
       "imagem_docx": "image4.png",
       "descricao_alt": "Árvore com raiz 10. Filho esquerdo de 10: 5; filho direito: 13. Filhos de 5: 4 à esquerda e 11 à direita. 4 tem apenas o filho esquerdo 3. 11 tem apenas o filho esquerdo 8. Filhos de 13: 15 à esquerda e 16 à direita."
      }
     },
     {
      "letra": "d",
      "texto": "",
      "figura": {
       "arquivo": "figuras/presencial/p01_fig5.png",
       "imagem_docx": "image5.png",
       "descricao_alt": "Árvore com raiz 10. Filho esquerdo de 10: 5; filho direito: 13. Filhos de 5: 4 à esquerda e 8 à direita. 4 tem apenas o filho esquerdo 3. Filhos de 13: 11 à esquerda e 15 à direita. 15 tem apenas o filho direito 16."
      }
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p01_fig1.png",
      "imagem_docx": "image1.png",
      "descricao_alt": "Árvore AVL. Raiz 13. Filho esquerdo de 13: 10; filho direito: 15. Filhos de 10: 5 à esquerda e 11 à direita. 15 tem apenas o filho direito 16. Filhos de 5: 4 à esquerda e 8 à direita."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "O 3 entra como filho esquerdo do 4. Subindo pelo caminho de inserção, o 4 fica com altura 2, o 5 com altura 3 e o 10 passa a ter subárvore esquerda de altura 3 contra 1 da direita (o 11): fator de balanceamento +2. O 10 é a raiz da subárvore de nível mais baixo desbalanceada. Como o 3 entrou na esquerda da esquerda do 10, o caso é esquerda-esquerda, resolvido por uma rotação simples à direita no 10: o 5 sobe, o 10 desce para a direita do 5 e leva o 11, e o 8, que era filho direito do 5, passa a ser filho esquerdo do 10. A raiz 13 continua balanceada (alturas 3 e 2).",
     "por_que_cada_distrator_cai": {
      "b": "É a árvore logo depois da inserção, sem rebalanceamento nenhum. O 10 fica com fator +2, então ela deixou de ser AVL.",
      "c": "Promove o 10 a raiz e reorganiza a árvore inteira. Além de mexer em nós que estavam balanceados, quebra a ordem de busca: o 11 fica na subárvore esquerda do 10, e o 8 abaixo do 11.",
      "d": "Também promove o 10 a raiz, como se o desbalanceamento estivesse no 13. Mas o 13 não chega a ficar desbalanceado: a rotação acontece no nó mais baixo que perdeu o equilíbrio, e ela sozinha devolve a altura original da subárvore."
     },
     "conceito_chave": "Na AVL, depois de inserir, sobe-se pelo caminho até o primeiro nó com fator de balanceamento ±2. O formato do caminho até o novo nó decide a rotação: esquerda-esquerda ou direita-direita pedem rotação simples; esquerda-direita ou direita-esquerda pedem rotação dupla.",
     "pegadinha": "As alternativas c e d têm cara de \"árvore bem balanceada\", com raiz nova e tudo arrumado. A AVL não reconstrói a árvore: faz o mínimo de rotações no ponto mais baixo do desequilíbrio, e o resto fica onde estava.",
     "referencia": "LAFORE, R. Data Structures & algorithms in Java. Indianópolis: Sams Publishing, 2003.",
     "verificado": "Inserção AVL implementada e executada sobre a árvore da figura: o resultado coincide só com a alternativa a."
    },
    "questao_inep": 9,
    "gabarito_inep": "A",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 38,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 9,
     "edicao": 2017
    }
   },
   {
    "prova": 2,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Engenharia de Software — padrão Observer",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Considere os seguintes requisitos para desenvolvimento de uma solução para uma rede de restaurantes fast-food:"
     },
     {
      "tipo": "paragrafo",
      "texto": "Quando o status de um pedido é atualizado, todos os dispositivos dos envolvidos devem receber a informação. Os sistemas a ser atualizados incluem os acessados pelo entregador, pela linha de produção e pela central de atendimento. Espera-se ainda que outros sistemas possam ser incluídos futuramente (por exemplo, sistema de pedido on-line do cliente), devendo se comportar da mesma forma."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando esse contexto, avalie as asserções a seguir e a relação proposta entre elas."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O requisito apresentado pode ser implementado com a utilização do padrão de projeto Observer"
     },
     {
      "tipo": "paragrafo",
      "texto": "PORQUE"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "O padrão de projeto observer realiza o estilo arquitetural cliente-servidor, no qual o servidor é responsável por enviar notificações aos clientes sempre que houver atualização em alguma informação de interesse"
     },
     {
      "tipo": "paragrafo",
      "texto": "A respeito dessas asserções, assinale a opção correta"
     }
    ],
    "comando": "A respeito dessas asserções, assinale a opção correta",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O requisito apresentado pode ser implementado com a utilização do padrão de projeto Observer",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "O padrão de projeto observer realiza o estilo arquitetural cliente-servidor, no qual o servidor é responsável por enviar notificações aos clientes sempre que houver atualização em alguma informação de interesse",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I"
     },
     {
      "letra": "b",
      "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I"
     },
     {
      "letra": "c",
      "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa"
     },
     {
      "letra": "d",
      "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Vários sistemas (entregador, produção, central e outros que virão) precisam ser avisados sempre que o estado de um pedido muda, sem que o pedido conheça cada um deles. É a definição do Observer: um sujeito mantém uma lista de observadores e notifica todos quando muda. Incluir um sistema novo é só registrar mais um observador.",
      "II": "FALSA. O Observer é um padrão de projeto de comportamento, dentro de um programa; não realiza o estilo arquitetural cliente-servidor. No cliente-servidor quem toma a iniciativa é o cliente, que faz uma requisição e recebe a resposta. No Observer quem toma a iniciativa é o sujeito, que avisa os observadores. O estilo arquitetural mais próximo é o publicador-assinante, ou a arquitetura orientada a eventos."
     },
     "por_que_a_correta_esta_certa": "A asserção I é verdadeira e a II é falsa. Sendo a II falsa, nem se discute se ela justifica a I.",
     "por_que_cada_distrator_cai": {
      "a": "Exige a II verdadeira. Ela confunde o padrão de projeto com o estilo cliente-servidor.",
      "b": "Também exige a II verdadeira.",
      "d": "Diz que a I é falsa, mas o requisito descrito é o caso de uso clássico do Observer."
     },
     "conceito_chave": "Observer: dependência um-para-muitos em que a mudança de estado de um objeto (o sujeito) é notificada automaticamente aos dependentes (os observadores), que se registram e saem da lista sem que o sujeito conheça suas classes concretas.",
     "pegadinha": "A II soa plausível porque \"o servidor envia notificações aos clientes\" lembra o Observer. Mas padrão de projeto e estilo arquitetural estão em níveis diferentes, e no cliente-servidor a comunicação parte do cliente.",
     "referencia": "GAMMA, E. et al. Padrões de projeto: soluções reutilizáveis de software orientado a objetos. Porto Alegre: Bookman, 2000."
    },
    "questao_inep": 10,
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 19,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 10,
     "edicao": 2017
    }
   },
   {
    "prova": 3,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Paradigmas de programação — encapsulamento",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O encapsulamento é um mecanismo da programação orientada a objetos no qual os membros de uma classe (atributos e métodos) constituem uma caixa preta. O nível de visibilidade dos membros pode ser definido pelos modificadores de visibilidade “privado”, “público” e “protegido”."
     },
     {
      "tipo": "paragrafo",
      "texto": "Com relação ao comportamento gerado pelos modificadores de visibilidade, assinale a opção correta"
     }
    ],
    "comando": "Com relação ao comportamento gerado pelos modificadores de visibilidade, assinale a opção correta",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "Um atributo privado pode ser acessado pelos métodos privados da própria classe e pelos métodos protegidos das suas classes descendentes"
     },
     {
      "letra": "b",
      "texto": "Um atributo privado pode ser acessado pelos métodos públicos da própria classe e pelos métodos públicos das suas classes descendentes"
     },
     {
      "letra": "c",
      "texto": "Um método protegido não pode acessar os atributos privados e declarados na própria classe"
     },
     {
      "letra": "d",
      "texto": "Um membro protegido é visível na classe à qual pertence e em suas classes descendentes"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "Um membro protegido é visível dentro da própria classe e nas classes que herdam dela. É exatamente o meio-termo entre o privado (só a própria classe) e o público (qualquer classe).",
     "por_que_cada_distrator_cai": {
      "a": "Atributo privado só é acessado por métodos da PRÓPRIA classe, qualquer que seja a visibilidade deles. Os métodos das classes descendentes, protegidos ou não, não enxergam o atributo privado do ancestral.",
      "b": "Mesmo erro, com métodos públicos: a visibilidade do método da subclasse não dá a ele acesso ao que é privado na superclasse.",
      "c": "Inverte a regra. Todo método da classe, seja privado, protegido ou público, acessa os atributos privados dela. O modificador do método diz quem pode CHAMÁ-LO, e não o que ele pode acessar."
     },
     "conceito_chave": "Visibilidade controla quem enxerga um membro a partir de fora. Privado: só a própria classe. Protegido: a classe e suas descendentes. Público: todos. Dentro da classe, todos os métodos enxergam todos os membros.",
     "pegadinha": "Misturar duas coisas: a visibilidade do método que tenta acessar e a visibilidade do atributo acessado. Quem decide o acesso é o modificador do atributo e a relação entre as classes.",
     "referencia": "DEITEL, P.; DEITEL, H. Java: como programar. 10. ed. São Paulo: Pearson, 2016."
    },
    "questao_inep": 11,
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 50,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 11,
     "edicao": 2017
    }
   },
   {
    "prova": 4,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Arquitetura — memória de acesso aleatório",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Em um computador, a memória é a unidade funcional que armazena e recupera operações e dados. Tipicamente, a memória de um computador usa uma técnica chamada acesso aleatório, que permite o acesso a qualquer uma de suas posições (células). As memórias de acesso aleatório são divididas em células de tamanho fixo, estando cada célula associada a um identificador numérico único chamado endereço. Todos os acessos à memória referem-se a um endereço específico e deve-se sempre buscar ou armazenar o conteúdo completo de uma célula, ou seja, a célula é a unidade mínima de acesso"
     },
     {
      "tipo": "referencia",
      "texto": "SCHNEIDER, G.M.; GERTING, J.L. An invitation to computer science. 6a. ed. Boston: MA: Course Technology, Cengage Learning, 2009 (adaptado)"
     },
     {
      "tipo": "paragrafo",
      "texto": "A figura que se segue apresenta a estrutura de uma unidade de memória de acesso aleatório."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image6.png",
      "arquivo": "figuras/presencial/p04_fig1.png",
      "descricao_alt": "Esquema de uma memória de acesso aleatório. À esquerda, a coluna \"Endereço\" numera as células de 0, 1, 2, 3 até 2^N − 1. Ao centro, a \"Memória\" é uma pilha de células horizontais; a primeira está dividida em bits, com uma seta indicando \"1 bit\", e uma chave sob a pilha marca a \"Largura da memória\". À direita, o \"Registrador de endereços da memória\", de \"N bits\", tem uma seta apontando para a memória; abaixo, o \"Registrador de dados da memória\" tem setas nos dois sentidos entre ele e a memória."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando o funcionamento de uma memória de acesso aleatório, avalie as afirmações a seguir"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Se a largura do registrador de endereços da memória foi de 8 bits, o tamanho máximo dessa unidade de memória será de 256 células"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Se o registrador de dados da memória tiver 8 bits, será necessária mais que uma operação para armazenar o valor inteiro 2 024 nessa unidade de memória"
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "Se o registrador de dados da memória tiver 12 bits, é possível que a largura da memória seja de 8 bits"
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em:"
     }
    ],
    "comando": "É correto o que se afirma em:",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Se a largura do registrador de endereços da memória foi de 8 bits, o tamanho máximo dessa unidade de memória será de 256 células",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Se o registrador de dados da memória tiver 8 bits, será necessária mais que uma operação para armazenar o valor inteiro 2 024 nessa unidade de memória",
      "veredito": true
     },
     {
      "rotulo": "III",
      "texto": "Se o registrador de dados da memória tiver 12 bits, é possível que a largura da memória seja de 8 bits",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I, apenas"
     },
     {
      "letra": "b",
      "texto": "I e II, apenas"
     },
     {
      "letra": "c",
      "texto": "II e III, apenas"
     },
     {
      "letra": "d",
      "texto": "I, II e III"
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p04_fig1.png",
      "imagem_docx": "image6.png",
      "descricao_alt": "Esquema de uma memória de acesso aleatório. À esquerda, a coluna \"Endereço\" numera as células de 0, 1, 2, 3 até 2^N − 1. Ao centro, a \"Memória\" é uma pilha de células horizontais; a primeira está dividida em bits, com uma seta indicando \"1 bit\", e uma chave sob a pilha marca a \"Largura da memória\". À direita, o \"Registrador de endereços da memória\", de \"N bits\", tem uma seta apontando para a memória; abaixo, o \"Registrador de dados da memória\" tem setas nos dois sentidos entre ele e a memória."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Com N bits de endereço há 2^N endereços distintos. Com 8 bits, 2^8 = 256 células, numeradas de 0 a 255.",
      "II": "VERDADEIRA. O registrador de dados tem a largura de uma célula, e a célula é a unidade mínima de acesso. Com 8 bits o maior inteiro sem sinal é 255, e 2 024 precisa de 11 bits (2^10 = 1 024 ≤ 2 024 < 2 048 = 2^11). O valor tem de ser dividido em duas células, ou seja, duas operações de escrita.",
      "III": "FALSA. O registrador de dados transporta o conteúdo de uma célula inteira por operação, e o texto diz que se busca ou armazena sempre a célula completa. Por isso a largura do registrador de dados é a largura da memória. Um registrador de 12 bits corresponde a células de 12 bits, não de 8."
     },
     "por_que_a_correta_esta_certa": "I e II são verdadeiras e III é falsa.",
     "por_que_cada_distrator_cai": {
      "a": "Deixa de fora a II: 2 024 não cabe em 8 bits.",
      "c": "Inclui a III. A largura do registrador de dados e a da memória são iguais, porque a célula é transferida inteira.",
      "d": "Inclui a III, que é falsa."
     },
     "conceito_chave": "Dois números definem a memória. A largura do registrador de endereços (N bits) dá a QUANTIDADE de células, 2^N. A largura do registrador de dados dá o TAMANHO de cada célula.",
     "pegadinha": "Confundir as duas larguras: achar que o registrador de dados pode ser mais largo que a célula. Também vale fazer a conta de bits do 2 024 em vez de estimar no olho.",
     "referencia": "SCHNEIDER, G. M.; GERSTING, J. L. An invitation to computer science. 6. ed. Boston: Course Technology, 2009.",
     "verificado": "2^8 = 256 e 2024 tem 11 bits, conferido por execução."
    },
    "questao_inep": 12,
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 47,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 12,
     "edicao": 2017
    }
   },
   {
    "prova": 5,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Sistemas digitais — circuito e diagrama de tempo",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Os sistemas de refrigeração de piscinas de combustível em usinas nucleares evitam que a temperatura desses tanques exceda o limite de segurança. O circuito representado na figura a seguir atende aos requisitos necessários para o controle da ativação do sistema de resfriamento quando a temperatura está próxima de seu ponto crítico"
     },
     {
      "tipo": "paragrafo",
      "texto": "O diagrama de tempo ilustrado na figura apresenta uma amostra das temperaturas lidas desde o momento t1 ao t8. Os sinais de entrada Ta, Tb, Tc são de termômetros que medem a temperatura da piscina em diferentes pontos ao longo do dia e S é o terminal de acionamento do sistema"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image7.png",
      "arquivo": "figuras/presencial/p05_fig1.png",
      "descricao_alt": "À esquerda, diagrama de tempo com três sinais digitais, Ta, Tb e Tc, em oito intervalos marcados t1 a t8. Ta: baixo em t1; alto em t2 e t3; baixo em t4 e t5; alto em t6; baixo em t7; alto em t8. Tb: alto em t1; baixo em t2 e t3; alto em t4; baixo em t5; alto em t6; baixo em t7; alto em t8. Tc: alto em t1; baixo em t2; alto em t3; baixo em t4; alto em t5 e t6; baixo em t7 e t8. À direita, circuito com duas portas AND e uma porta OR. A primeira AND recebe Ta e Tb; a segunda AND recebe Tb e Tc (Tb se ramifica para as duas). As saídas das duas AND entram na porta OR, cuja saída é S."
     },
     {
      "tipo": "paragrafo",
      "texto": "Nesse contexto, assinale a opção em que são apresentados os momentos em que o sistema foi acionado"
     }
    ],
    "comando": "Nesse contexto, assinale a opção em que são apresentados os momentos em que o sistema foi acionado",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "t1, t4 e t8"
     },
     {
      "letra": "b",
      "texto": "t1, t6 e t8"
     },
     {
      "letra": "c",
      "texto": "t2, t4 e t6"
     },
     {
      "letra": "d",
      "texto": "t2, t6 e t8"
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p05_fig1.png",
      "imagem_docx": "image7.png",
      "descricao_alt": "À esquerda, diagrama de tempo com três sinais digitais, Ta, Tb e Tc, em oito intervalos marcados t1 a t8. Ta: baixo em t1; alto em t2 e t3; baixo em t4 e t5; alto em t6; baixo em t7; alto em t8. Tb: alto em t1; baixo em t2 e t3; alto em t4; baixo em t5; alto em t6; baixo em t7; alto em t8. Tc: alto em t1; baixo em t2; alto em t3; baixo em t4; alto em t5 e t6; baixo em t7 e t8. À direita, circuito com duas portas AND e uma porta OR. A primeira AND recebe Ta e Tb; a segunda AND recebe Tb e Tc (Tb se ramifica para as duas). As saídas das duas AND entram na porta OR, cuja saída é S."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "O circuito tem duas portas AND, uma com Ta e Tb e outra com Tb e Tc, ligadas a uma OR. Logo S = Ta·Tb + Tb·Tc, ou, fatorando, S = Tb·(Ta + Tc): o sistema liga quando Tb está alto e pelo menos um dos outros dois também está. Lendo os intervalos no diagrama, em t1 Tb e Tc estão altos; em t6 os três estão altos; em t8 Ta e Tb estão altos. Nos demais, ou Tb está baixo (t2, t3, t5 e t7), ou Tb está alto sozinho (t4). Resposta: t1, t6 e t8.",
     "por_que_cada_distrator_cai": {
      "a": "Inclui t4. Ali só Tb está alto (Ta e Tc estão baixos), e nenhuma das duas AND fecha.",
      "c": "Inclui t2 e t4 e deixa de fora t1 e t8. Em t2 o Tb está baixo, e com ele nenhuma das AND liga.",
      "d": "Troca t1 por t2. Em t1 Tb e Tc estão altos (S = 1); em t2 o Tb está baixo (S = 0)."
     },
     "conceito_chave": "Para ler um circuito combinacional junto com um diagrama de tempo, primeiro escreve-se a expressão de saída a partir das portas e depois avalia-se intervalo por intervalo. Simplificar ajuda: S = Tb·(Ta + Tc) mostra de cara que Tb baixo zera a saída.",
     "pegadinha": "Ler as bordas no lugar dos intervalos. As transições acontecem nas linhas tracejadas, e o valor que conta é o nível dentro de cada intervalo.",
     "referencia": "Enade 2017, Ciência da Computação (Bacharelado), questão 13.",
     "verificado": "Níveis transcritos do diagrama e expressão avaliada por execução: S = 1 em t1, t6 e t8."
    },
    "questao_inep": 13,
    "gabarito_inep": "B",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 56,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 13,
     "edicao": 2017
    }
   },
   {
    "prova": 6,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Matemática discreta — relações de equivalência",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Uma relação de equivalência é uma relação binária R em um conjunto A, tal que R é reflexiva, simétrica e transitiva."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considere as relações binárias apresentadas a seguir"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image8.png",
      "arquivo": "figuras/presencial/p06_fig1.png",
      "descricao_alt": "Quatro relações binárias. R1 = {(a, b) : a, b ∈ ℕ e a = b}. R2 = {(a, b) : a, b ∈ ℕ e a ≤ b}. R3 = {(a, b) : a, b ∈ ℕ e a = b − 1}. R4 = {(a, b) : a, b ∈ ℕ e a + b é um número par}."
     },
     {
      "tipo": "paragrafo",
      "texto": "São relações de equivalência apenas o que se apresenta em"
     }
    ],
    "comando": "São relações de equivalência apenas o que se apresenta em",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "R2 e R3"
     },
     {
      "letra": "b",
      "texto": "R1 e R3"
     },
     {
      "letra": "c",
      "texto": "R1 e R4"
     },
     {
      "letra": "d",
      "texto": "R1, R2 e R4"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p06_fig1.png",
      "imagem_docx": "image8.png",
      "descricao_alt": "Quatro relações binárias. R1 = {(a, b) : a, b ∈ ℕ e a = b}. R2 = {(a, b) : a, b ∈ ℕ e a ≤ b}. R3 = {(a, b) : a, b ∈ ℕ e a = b − 1}. R4 = {(a, b) : a, b ∈ ℕ e a + b é um número par}."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "R1 (igualdade) é a relação de equivalência mais simples: a = a; a = b implica b = a; a = b e b = c implicam a = c. R4 (a + b par) diz que a e b têm a mesma paridade. É reflexiva (a + a = 2a é par), simétrica (a + b = b + a) e transitiva: se a e b têm a mesma paridade, e b e c também, então a e c têm a mesma. R4 divide ℕ em duas classes, pares e ímpares.",
     "por_que_cada_distrator_cai": {
      "a": "R2 (≤) é reflexiva e transitiva, mas não é simétrica: 1 ≤ 2 e 2 ≤ 1 é falso. É uma relação de ORDEM. R3 (a = b − 1) não é nem reflexiva: a = a − 1 nunca vale.",
      "b": "Inclui R3, que falha nas três propriedades: não é reflexiva, não é simétrica (1 = 2 − 1, mas 2 ≠ 1 − 1) e não é transitiva (1 = 2 − 1 e 2 = 3 − 1, mas 1 ≠ 3 − 1).",
      "d": "Inclui R2, que não é simétrica."
     },
     "conceito_chave": "Equivalência = reflexiva + simétrica + transitiva. Ela particiona o conjunto em classes de elementos \"iguais sob algum critério\" (mesma paridade, mesmo resto, mesmo valor).",
     "pegadinha": "R2 parece segura porque é reflexiva e transitiva, as duas propriedades mais lembradas. A simetria é a que separa relação de equivalência de relação de ordem.",
     "referencia": "GERSTING, J. L. Fundamentos matemáticos para a ciência da computação. 5. ed. Rio de Janeiro: LTC, 2004.",
     "verificado": "As três propriedades foram testadas por execução em {0, ..., 11}: só R1 e R4 são de equivalência."
    },
    "questao_inep": 14,
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 40,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 14,
     "edicao": 2017
    }
   },
   {
    "prova": 7,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Redes — ataque homem no meio e ARP spoofing",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Uma das técnicas de ataques em ambientes virtuais é denominada “homem no meio” (man in the Middle), cujo objetivo é associar o endereço MAC do intruso ao endereço IP de um outro nó da rede – nesse caso, o ponto de acesso (Access Point – AP) wi-fi da rede. Como o AP é o gateway padrão dessa subrede sem fio, todo o tráfego originalmente direcionado ao ponto de acesso pode ser interceptado pelo intruso. Esse ataque explora deficiências conhecidas no projeto de segurança do IEEE 802.11 wi-fi."
     },
     {
      "tipo": "referencia",
      "texto": "COULOURIS, G et al. Sistemas distribuídos: conceitos e projeto. Porto Alegre: Bookman, 2013 (adaptado)"
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando um ataque virtual pela técnica “homem no meio”, por meio de Address Resolution Protocol (ARP) spoofing, avalie as afirmações a seguir"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O problema do compartilhamento de chave presente no projeto de segurança do AP pode ser resolvido com a utilização de um protocolo baseado em chave pública para negociar chaves individuais, como é feito no Transport Layer Security (TLS) / Secure Sockets Layer (SSL)"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "O problema do desvio de tráfego causado pelo ataque de homem no meio pode ser evitado com a configuração de um firewall nos pontos de acesso que filtram tráfego entre clientes de uma mesma subrede"
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O problema de falta de autenticação dos pontos de acesso sem fio pode ser contornado, obrigando-se o ponto de acesso a fornecer um certificado que possa ser autenticado pelo uso de uma chave pública obtida de terceiros"
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "A vulnerabilidade das chaves de 40 bits ou 64 bits a ataques de força bruta pode ser evitada utilizando-se um AP que permita chaves de 128 bits e limitando-se o tráfego a dispositivos compatíveis com chaves de 128 bits"
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O problema do compartilhamento de chave presente no projeto de segurança do AP pode ser resolvido com a utilização de um protocolo baseado em chave pública para negociar chaves individuais, como é feito no Transport Layer Security (TLS) / Secure Sockets Layer (SSL)",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "O problema do desvio de tráfego causado pelo ataque de homem no meio pode ser evitado com a configuração de um firewall nos pontos de acesso que filtram tráfego entre clientes de uma mesma subrede",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "O problema de falta de autenticação dos pontos de acesso sem fio pode ser contornado, obrigando-se o ponto de acesso a fornecer um certificado que possa ser autenticado pelo uso de uma chave pública obtida de terceiros",
      "veredito": true
     },
     {
      "rotulo": "IV",
      "texto": "A vulnerabilidade das chaves de 40 bits ou 64 bits a ataques de força bruta pode ser evitada utilizando-se um AP que permita chaves de 128 bits e limitando-se o tráfego a dispositivos compatíveis com chaves de 128 bits",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e III"
     },
     {
      "letra": "b",
      "texto": "I e IV"
     },
     {
      "letra": "c",
      "texto": "I, III e IV"
     },
     {
      "letra": "d",
      "texto": "II, III e IV"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Parte da fragilidade do Wi-Fi antigo (WEP) vinha de uma chave única compartilhada por todos. Negociar chaves individuais por sessão com criptografia de chave pública, como no TLS/SSL, elimina esse ponto, e é o caminho que o 802.11i (WPA2) seguiu.",
      "II": "FALSA. Filtrar o tráfego entre clientes da mesma sub-rede no ponto de acesso (isolamento de clientes) não impede o ARP spoofing do ataque descrito. O intruso se passa pelo próprio AP, que é o gateway, e o tráfego desviado é o tráfego em direção ao gateway, não entre clientes. O problema está na falta de autenticação, e o filtro não resolve isso.",
      "III": "VERDADEIRA. O homem no meio funciona porque o cliente não tem como provar que está falando com o AP legítimo. Exigir que o AP apresente um certificado verificável com uma chave pública de terceiros (uma autoridade certificadora) resolve a falta de autenticação.",
      "IV": "VERDADEIRA. Chaves de 40 ou 64 bits são quebráveis por força bruta. Exigir 128 bits e restringir a rede a dispositivos compatíveis torna a força bruta inviável."
     },
     "por_que_a_correta_esta_certa": "I, III e IV são verdadeiras. São as três correções que Coulouris lista para as deficiências do projeto de segurança do 802.11: chaves individuais negociadas, autenticação do ponto de acesso e chaves longas.",
     "por_que_cada_distrator_cai": {
      "a": "Deixa de fora a IV. Aumentar a chave para 128 bits é uma correção legítima contra força bruta.",
      "b": "Deixa de fora a III, justamente a que ataca a raiz do homem no meio: a falta de autenticação.",
      "d": "Inclui a II e deixa de fora a I. Isolar clientes não impede o intruso de se passar pelo gateway."
     },
     "conceito_chave": "Homem no meio por ARP spoofing: o intruso associa o próprio MAC ao IP do gateway e recebe o tráfego destinado a ele. A defesa de fundo é autenticar as partes (certificados) e cifrar com chaves individuais, e não filtrar o tráfego.",
     "pegadinha": "A II tem jeito de solução porque \"firewall\" é palavra de segurança. Mas o tráfego desviado é o que vai para o gateway, e o filtro entre clientes não toca nele.",
     "referencia": "COULOURIS, G. et al. Sistemas distribuídos: conceitos e projeto. 5. ed. Porto Alegre: Bookman, 2013."
    },
    "questao_inep": 15,
    "gabarito_inep": "D",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 26,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 15,
     "edicao": 2017
    }
   },
   {
    "prova": 8,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Ética e segurança — engenharia social",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A segurança da informação está diretamente relacionada com a proteção de um conjunto de informações, no sentido de preservar o valor que possuem para um indivíduo ou uma organização, tendo como propriedades básicas a confidencialidade, a integridade, a disponibilidade e a autenticidade."
     },
     {
      "tipo": "referencia",
      "texto": "LYRA, M.R. Segurança e auditoria em sistemas de informação. Rio de Janeiro: Ciência Moderna, 2008 (adaptado)"
     },
     {
      "tipo": "paragrafo",
      "texto": "A engenharia social é definida como o conjunto de técnicas utilizadas para reunir informações, explorando a tendência humana a ignorar os sistemas de segurança. Os ataques de engenharia social implicam interação com outros indivíduos, o que evidencia o aspecto psicológico da engenharia social"
     },
     {
      "tipo": "referencia",
      "texto": "MITNICK, K. D.; SIMON, W.L. The art of deception: controlling the human element of security. New York: Wiley, 2001 (adaptado)"
     },
     {
      "tipo": "paragrafo",
      "texto": "A ética normativa é o “certo” e o “errado” do comportamento social interpretado. A principal diferença entre essas duas perspectivas é a forma como um dilema moral é abordado, e não necessariamente as consequências disso"
     },
     {
      "tipo": "referencia",
      "texto": "Disponível em http://www.ethicsmorals.com. Acesso em: 18 Jul. 2017 (adaptado)"
     },
     {
      "tipo": "paragrafo",
      "texto": "Em relação à segurança da informação, avalie as afirmações a seguir:"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "As empresas sempre estarão vulneráveis, pois o fator humano é o elo mais fraco da segurança da informação"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "A segurança da informação não é um produto e, sim, um processo"
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "A ética profissional é um importante fator a ser considerado na segurança da informação"
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em"
     }
    ],
    "comando": "É correto o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "As empresas sempre estarão vulneráveis, pois o fator humano é o elo mais fraco da segurança da informação",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "A segurança da informação não é um produto e, sim, um processo",
      "veredito": true
     },
     {
      "rotulo": "III",
      "texto": "A ética profissional é um importante fator a ser considerado na segurança da informação",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I, apenas"
     },
     {
      "letra": "b",
      "texto": "I e III, apenas"
     },
     {
      "letra": "c",
      "texto": "II e III, apenas"
     },
     {
      "letra": "d",
      "texto": "I, II e III"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. É a tese central de Mitnick, citada no texto: a engenharia social explora a tendência humana de contornar os controles, e nenhuma tecnologia elimina o fator humano. Por isso a vulnerabilidade é permanente.",
      "II": "VERDADEIRA. Segurança não se compra pronta e instalada de uma vez. É um processo contínuo de avaliar riscos, aplicar controles, treinar pessoas, monitorar e revisar, como no ciclo de melhoria contínua das normas ISO/IEC 27001 e 27002.",
      "III": "VERDADEIRA. O texto liga ética e segurança: boa parte das ameaças vem de dentro, de quem tem acesso legítimo. A conduta ética dos profissionais é, portanto, um controle de segurança."
     },
     "por_que_a_correta_esta_certa": "As três afirmações são verdadeiras e estão sustentadas pelos três textos de apoio: segurança da informação (Lyra), engenharia social (Mitnick) e ética (ethicsmorals).",
     "por_que_cada_distrator_cai": {
      "a": "Deixa de fora a II e a III, que estão apoiadas diretamente nos textos.",
      "b": "Deixa de fora a II. Tratar segurança como produto, e não como processo, é o erro clássico que a área combate.",
      "c": "Deixa de fora a I. O \"sempre\" assusta, mas é exatamente o argumento de Mitnick sobre o elo humano."
     },
     "conceito_chave": "Segurança da informação tem três pilares: pessoas, processos e tecnologia. A engenharia social ataca o pilar das pessoas, que é o mais difícil de blindar.",
     "pegadinha": "O \"sempre\" da afirmação I faz muita gente descartá-la por reflexo, como se toda generalização fosse falsa. Aqui ela é a tese do próprio texto de apoio.",
     "referencia": "MITNICK, K. D.; SIMON, W. L. The art of deception: controlling the human element of security. New York: Wiley, 2001."
    },
    "questao_inep": 16,
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 66,
     "classe": "Fácil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 16,
     "edicao": 2017
    }
   },
   {
    "prova": 9,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Inteligência Artificial — IA na educação",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Grupos de cientistas e grandes corporações de todo o mundo têm buscado desenvolver sistemas computacionais inteligentes capazes de ajudar as pessoas a aprender. As possibilidades, os efeitos e as implicações éticas da aplicação da chamada Inteligência Artificial (IA) na educação são temas que vêm ganhando espaço nos debates na área de tecnologia educacional em todo o mundo."
     },
     {
      "tipo": "referencia",
      "texto": "Disponível em: http://www.revistaeducacao.com.br Acesso em 26 set. 2017 (adaptado)"
     },
     {
      "tipo": "paragrafo",
      "texto": "A respeito da adoção de técnicas de IA no processo educacional, avalie as asserções a seguir e a relação proposta entre elas"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Algoritmos de IA adaptativos podem auxiliar a experiência de aprendizado da pessoa de acordo com o seu perfil."
     },
     {
      "tipo": "paragrafo",
      "texto": "PORQUE"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Os sistemas com algoritmos de IA adaptativos analisam respostas anteriores, buscando determinados padrões que possam indicar pontos de dificuldade ou facilidade da pessoa em relação a determinado assunto."
     },
     {
      "tipo": "paragrafo",
      "texto": "A respeito dessas asserções, assinale a opção correta"
     }
    ],
    "comando": "A respeito dessas asserções, assinale a opção correta",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Algoritmos de IA adaptativos podem auxiliar a experiência de aprendizado da pessoa de acordo com o seu perfil.",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Os sistemas com algoritmos de IA adaptativos analisam respostas anteriores, buscando determinados padrões que possam indicar pontos de dificuldade ou facilidade da pessoa em relação a determinado assunto.",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I"
     },
     {
      "letra": "b",
      "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I"
     },
     {
      "letra": "c",
      "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa"
     },
     {
      "letra": "d",
      "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira"
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Sistemas adaptativos (tutores inteligentes, plataformas de aprendizagem adaptativa) ajustam conteúdo, ritmo e exercícios ao perfil de cada pessoa.",
      "II": "VERDADEIRA, e justifica a I. É analisando as respostas anteriores, e procurando nelas padrões de dificuldade ou de facilidade, que o sistema monta o perfil e decide o que apresentar em seguida. A II é o mecanismo que torna a I possível."
     },
     "por_que_a_correta_esta_certa": "As duas são verdadeiras e a II explica a I: o sistema consegue se adaptar ao perfil (I) PORQUE aprende esse perfil a partir das respostas anteriores (II).",
     "por_que_cada_distrator_cai": {
      "b": "Diz que a II não justifica a I. Mas a II é exatamente o mecanismo que torna a adaptação possível.",
      "c": "Diz que a II é falsa. Analisar o histórico de respostas é o princípio de funcionamento desses sistemas.",
      "d": "Diz que a I é falsa, contrariando o próprio texto de apoio."
     },
     "conceito_chave": "Na asserção-razão, o teste da justificativa é ler as duas unidas por \"porque\" e ver se a II responde \"como?\" ou \"por quê?\" à I. Aqui responde: adapta-se porque analisa o histórico.",
     "pegadinha": "Achar que a II está só \"relacionada\" e marcar b por cautela. Quando a II descreve o mecanismo que produz a I, ela é justificativa.",
     "referencia": "Revista Educação. Disponível em: http://www.revistaeducacao.com.br. Acesso em: 26 set. 2017."
    },
    "questao_inep": 17,
    "gabarito_inep": "A",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 80,
     "classe": "Fácil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 17,
     "edicao": 2017
    }
   },
   {
    "prova": 10,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Algoritmos — ordenação por inserção (C)",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O algoritmo a seguir recebe um vetor V de números inteiros e rearranja esse vetor de tal forma que seus elementos, ao final, estejam ordenados de forma crescente"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image9.png",
      "arquivo": "figuras/presencial/p10_fig1.png",
      "descricao_alt": "Código em C da função ordena, com as linhas numeradas de 01 a 15."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando que esse algoritmo há erros de lógica que devem ser corrigidos para que os elementos sejam ordenados de forma crescente, assinale a opção correta no que se refere às correções adequadas"
     }
    ],
    "comando": "Considerando que esse algoritmo há erros de lógica que devem ser corrigidos para que os elementos sejam ordenados de forma crescente, assinale a opção correta no que se refere às correções adequadas",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "A linha 04 deve ser corrigida da seguinte forma: for (i = 1; i < n – 1; i ++) e a linha 13, do seguinte modo: v [j – 1] = chave"
     },
     {
      "letra": "b",
      "texto": "A linha 07 deve ser corrigida da seguinte forma: j = i + 1 e a linha 08, do seguinte modo: while (j > = 0 && v[j] > chave"
     },
     {
      "letra": "c",
      "texto": "A linha 08 deve ser corrigida da seguinte forma: while (j > = 0 && v[j] > chave e a linha 10, do seguinte modo: v [j + 1] = v [j]"
     },
     {
      "letra": "d",
      "texto": "A linha 10 deve ser corrigida da seguinte forma: v [j + 1] = v [j] e a linha 13, do seguinte modo: v [j - 1] = chave"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p10_fig1.png",
      "imagem_docx": "image9.png",
      "descricao_alt": "Código em C da função ordena, com as linhas numeradas de 01 a 15."
     }
    ],
    "codigo": {
     "linguagem": "c",
     "arquivo": "codigos/presencial/p10_ordena.c",
     "numeracao_de_linha": true,
     "nota": "As alternativas citam as linhas 04, 07, 08, 10 e 13; a numeracao da figura foi mantida na transcricao."
    },
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "O algoritmo é a ordenação por inserção, com dois erros. Na linha 08 a condição v[j] < chave desloca os MENORES que a chave, o que ordenaria de forma decrescente; para ordem crescente, deslocam-se os maiores: v[j] > chave. Na linha 10, v[j-1] = v[j] desloca para a esquerda e, com j = 0, acessa v[-1], fora do vetor; o deslocamento certo abre espaço à direita: v[j+1] = v[j]. Com as duas correções, a linha 13 (v[j+1] = chave) já está certa.",
     "por_que_cada_distrator_cai": {
      "a": "Mexe na linha 04, que está certa: a inserção começa em i = 1 e vai até n − 1, e i < n − 1 pularia o último elemento. Também troca a linha 13, que está certa, por v[j-1] = chave.",
      "b": "j = i + 1 começa a comparação depois da chave, e não antes. Além disso, não corrige a linha 10.",
      "d": "Corrige a linha 10, mas estraga a 13 e deixa a 08 com o sinal invertido."
     },
     "conceito_chave": "Ordenação por inserção: para cada i, guarda-se v[i] em chave, desloca-se uma casa para a direita cada elemento à esquerda que seja MAIOR que a chave e insere-se a chave no buraco que sobra, em v[j+1].",
     "pegadinha": "Há dois erros independentes, e corrigir só um não basta. Quem acha um erro e marca a primeira alternativa que o menciona cai na d.",
     "referencia": "CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. Rio de Janeiro: Elsevier, 2012.",
     "verificado": "Original e variantes executados sobre 200 vetores aleatórios: só a versão com as linhas 08 e 10 corrigidas ordena sempre; corrigir só uma delas falha."
    },
    "questao_inep": 18,
    "gabarito_inep": "D",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 38,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 18,
     "edicao": 2017
    }
   },
   {
    "prova": 11,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Banco de Dados — SQL com junções",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Considere o diagrama Entidade-Relacionamento apresentado a seguir"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image10.png",
      "arquivo": "figuras/presencial/p11_fig1.png",
      "descricao_alt": "Diagrama entidade-relacionamento com quatro tabelas. Partido: idPartido INTEGER NOT NULL [PK], siglaPartido VARCHAR(45) NOT NULL, descricaoPartido VARCHAR(45) NOT NULL. Deputado: idPartido INTEGER NOT NULL [PK], idPartido INTEGER NOT NULL [FK], nomeDeputado VARCHAR(60) NOT NULL. Participacao: idSecao INTEGER NOT NULL [PFK], idDeputado INTEGER NOT NULL [PFK]. Secao: idSecao INTEGER NOT NULL [PK], dataSecao DATE NOT NULL, horaSecao TIME NOT NULL, decisao VARCHAR(2000) NOT NULL. Linhas de relacionamento ligam Partido a Deputado, Deputado a Participacao e Participacao a Secao."
     },
     {
      "tipo": "paragrafo",
      "texto": "Qual código SQL exibe o nome de todos os deputados que compareceram a pelo menos uma seção e as datas de cada seção em que os deputados participaram?"
     }
    ],
    "comando": "Qual código SQL exibe o nome de todos os deputados que compareceram a pelo menos uma seção e as datas de cada seção em que os deputados participaram?",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "SELECT Deputado.nomeDeputado, Secao.dataSecao FROM Deputado, Participacao, Secao WHERE Deputado.idDeputado = Participacao. idDeputado OR Secao.idSecao = Participacao.idSecao;"
     },
     {
      "letra": "b",
      "texto": "SELECT Deputado.nomeDeputado, Secao.dataSecao FROM Deputado LEFT OUTER JOIN Participacao ON Deputado.idDeputado = Participacao.idDeputado LEFT OUTER JOIN Secao ON Secao.idSecao = Participacao.idSecao;"
     },
     {
      "letra": "c",
      "texto": "SELECT Deputado.nomeDeputado, Secao.dataSecao FROM Deputado RIGHT OUTER JOIN Participacao ON Deputado.idDeputado = Participacao.idDeputado RIGHT OUTER JOIN Secao ON Secao.idSecao = Participacao.idSecao;"
     },
     {
      "letra": "d",
      "texto": "SELECT Deputado.nomeDeputado, Secao.dataSecao FROM Deputado INNER JOIN Participacao ON Deputado.idDeputado = Participacao.idDeputado INNER JOIN Secao ON Participacao.idSecao=Secao.idSecao;"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p11_fig1.png",
      "imagem_docx": "image10.png",
      "descricao_alt": "Diagrama entidade-relacionamento com quatro tabelas. Partido: idPartido INTEGER NOT NULL [PK], siglaPartido VARCHAR(45) NOT NULL, descricaoPartido VARCHAR(45) NOT NULL. Deputado: idPartido INTEGER NOT NULL [PK], idPartido INTEGER NOT NULL [FK], nomeDeputado VARCHAR(60) NOT NULL. Participacao: idSecao INTEGER NOT NULL [PFK], idDeputado INTEGER NOT NULL [PFK]. Secao: idSecao INTEGER NOT NULL [PK], dataSecao DATE NOT NULL, horaSecao TIME NOT NULL, decisao VARCHAR(2000) NOT NULL. Linhas de relacionamento ligam Partido a Deputado, Deputado a Participacao e Participacao a Secao."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "O INNER JOIN mantém só as combinações que têm par nas duas tabelas. Deputado com Participacao deixa apenas os deputados que participaram de alguma seção; juntando com Secao, cada linha traz o nome do deputado e a data de uma seção em que ele esteve. É exatamente \"todos os deputados que compareceram a pelo menos uma seção, com as datas\".",
     "por_que_cada_distrator_cai": {
      "a": "A condição usa OR: basta o deputado casar com a participação OU a seção casar com a participação. Isso gera combinações de deputados com seções em que não estiveram, um produto cartesiano filtrado de forma frouxa.",
      "b": "O LEFT OUTER JOIN preserva todos os deputados, inclusive os que nunca compareceram, que aparecem com dataSecao nula. A questão pede só os que compareceram.",
      "c": "O RIGHT OUTER JOIN preserva o lado direito: no final, todas as seções, inclusive as sem deputado (com nome nulo). Também não é o pedido."
     },
     "conceito_chave": "INNER JOIN: só as linhas com correspondência dos dois lados. LEFT e RIGHT OUTER JOIN: preservam um dos lados inteiro e completam o outro com NULL. Numa tabela associativa como Participacao, o INNER JOIN em cadeia responde \"quem fez par com quem\".",
     "pegadinha": "\"Todos os deputados\" puxa para o LEFT JOIN. Mas a frase continua: \"que compareceram a pelo menos uma seção\". Esse filtro exclui quem não tem par, e é isso que o INNER faz.",
     "referencia": "ELMASRI, R.; NAVATHE, S. B. Sistemas de banco de dados. 6. ed. São Paulo: Pearson, 2011."
    },
    "questao_inep": 19,
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 59,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 19,
     "edicao": 2017
    }
   },
   {
    "prova": 12,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Redes — TCP e UDP",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Em redes de computadores, a camada de transporte é responsável pela transferência de dados entre máquinas de origem e destino. Dois protocolos tradicionais para essa camada são o Transmission Control Protocol (TCP) e o User Datagram Protocol (UDP). Diferentemente do UDP, o TCP é orientado à conexão."
     },
     {
      "tipo": "paragrafo",
      "texto": "Com relação a esses protocolos, avalie as afirmações a seguir"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O UDP é mais eficiente que o TCP quando o tempo de envio de pacotes é fundamental"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "O TCP é o mais utilizado em jogos on-line de ação para a apresentação gráfica"
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O TCP é mais eficiente que o UDP quando a confiabilidade de entrega de dados é fundamental"
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em"
     }
    ],
    "comando": "É correto o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O UDP é mais eficiente que o TCP quando o tempo de envio de pacotes é fundamental",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "O TCP é o mais utilizado em jogos on-line de ação para a apresentação gráfica",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "O TCP é mais eficiente que o UDP quando a confiabilidade de entrega de dados é fundamental",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "II, apenas"
     },
     {
      "letra": "b",
      "texto": "III, apenas"
     },
     {
      "letra": "c",
      "texto": "I e II, apenas"
     },
     {
      "letra": "d",
      "texto": "I e III, apenas"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. O UDP não estabelece conexão, não espera confirmação nem retransmite. Por isso a latência é menor, e é a escolha quando o tempo de entrega importa mais que a garantia (voz, vídeo ao vivo, jogos).",
      "II": "FALSA. Jogos on-line de ação usam majoritariamente UDP para o estado do jogo e a apresentação. Um pacote atrasado por retransmissão do TCP chega tarde demais para ser útil, e é melhor descartá-lo e seguir com o próximo.",
      "III": "VERDADEIRA. O TCP garante entrega, ordem e ausência de duplicatas, com confirmações e retransmissões. Quando a confiabilidade é o requisito (transferência de arquivos, web, e-mail), é o protocolo adequado."
     },
     "por_que_a_correta_esta_certa": "I e III são verdadeiras e descrevem o compromisso entre os dois protocolos: o UDP ganha em latência e o TCP em confiabilidade.",
     "por_que_cada_distrator_cai": {
      "a": "Marca só a II, que é falsa.",
      "b": "Esquece a I, que é o caso de uso clássico do UDP.",
      "c": "Inclui a II. Jogos de ação usam UDP justamente para não esperar retransmissões."
     },
     "conceito_chave": "TCP: orientado à conexão, confiável, ordenado, com controle de fluxo e de congestionamento, e por isso mais lento. UDP: sem conexão e sem garantias, e por isso mais rápido e leve.",
     "pegadinha": "Achar que jogo on-line \"precisa\" de TCP porque não pode perder dados. Em tempo real, um dado atrasado vale menos que um dado perdido.",
     "referencia": "KUROSE, J. F.; ROSS, K. W. Redes de computadores e a Internet. 6. ed. São Paulo: Pearson, 2013."
    },
    "questao_inep": 20,
    "gabarito_inep": "D",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 61,
     "classe": "Fácil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 20,
     "edicao": 2017
    }
   },
   {
    "prova": 13,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Lógica — proposições e conectivos",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Na lógica proposicional, definem-se regras para determinar o valor-verdade (verdadeiro ou falso) de sentenças em relação a um modelo particular. Essas regras permitem representar raciocínios lógicos comuns das linguagens naturais."
     },
     {
      "tipo": "paragrafo",
      "texto": "Nesse contexto, considere a sentença e as proposições lógicas a seguir"
     },
     {
      "tipo": "paragrafo",
      "texto": "“Um veículo que é elétrico (E) pode ser um robô (R) se for autônomo (A), caso contrário não é um robô (R)”"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image11.png",
      "arquivo": "figuras/presencial/p13_fig1.png",
      "descricao_alt": "Três proposições lógicas. P1 = (E ∧ R) ↔ A. P2 = E → (R ↔ A). P3 = E → ((A → R) ∨ ¬R)."
     },
     {
      "tipo": "paragrafo",
      "texto": "A sentença pode ser representada pela(s) expressão(ões) lógica(s)"
     }
    ],
    "comando": "A sentença pode ser representada pela(s) expressão(ões) lógica(s)",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "P2, apenas"
     },
     {
      "letra": "b",
      "texto": "P3, apenas"
     },
     {
      "letra": "c",
      "texto": "P1 e P2, apenas"
     },
     {
      "letra": "d",
      "texto": "P1 e P3, apenas"
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p13_fig1.png",
      "imagem_docx": "image11.png",
      "descricao_alt": "Três proposições lógicas. P1 = (E ∧ R) ↔ A. P2 = E → (R ↔ A). P3 = E → ((A → R) ∨ ¬R)."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "A sentença trata só de veículos elétricos, então começa com \"E →\". Dentro dela: é robô se for autônomo, e não é robô caso contrário. Ser autônomo basta para ser robô, e não ser autônomo implica não ser robô; juntas, as duas partes formam o bicondicional R ↔ A. Resulta P2: E → (R ↔ A).",
     "por_que_cada_distrator_cai": {
      "b": "P3 = E → ((A → R) ∨ ¬R) é uma tautologia. (A → R) ∨ ¬R equivale a ¬A ∨ R ∨ ¬R, que é sempre verdadeiro porque contém R ∨ ¬R. Uma fórmula que nunca é falsa não representa uma regra.",
      "c": "Inclui P1 = (E ∧ R) ↔ A, que diz que todo autônomo é um robô elétrico, até um veículo não elétrico. A sentença não afirma nada sobre veículos não elétricos.",
      "d": "Inclui P1 e a tautologia P3."
     },
     "conceito_chave": "\"Se e somente se\" (↔) aparece quando a frase dá as duas direções: a condição basta (se for autônomo, é robô) e é necessária (se não for, não é). A restrição a um universo (só veículos elétricos) vira um antecedente: E → (…).",
     "pegadinha": "P3 parece mais completa, com mais conectivos. Antes de escolher, vale testar se a fórmula pode ser falsa: se não pode, ela não diz nada.",
     "referencia": "RUSSELL, S.; NORVIG, P. Inteligência artificial. 3. ed. Rio de Janeiro: Elsevier, 2013.",
     "verificado": "Tabelas-verdade conferidas por execução: P3 é verdadeira nas 8 valorações; P2 só é falsa para veículo elétrico em que R e A divergem."
    },
    "questao_inep": 21,
    "gabarito_inep": "A",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 18,
     "classe": "Difícil",
     "descartada_ponto_bisserial": true,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 21,
     "edicao": 2017
    }
   },
   {
    "prova": 14,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Programação — algoritmo guloso do troco",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Um país utiliza moedas de 1, 5, 10, 25 e 50 centavos. Um programador desenvolveu o método a seguir, que implementa a estratégia gulosa para o problema do troco mínimo. Esse método recebe como parâmetro um valor inteiro, em centavos, e retorna um array no qual cada posição indica a quantidade de moedas de cada valor"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image12.png",
      "arquivo": "figuras/presencial/p14_fig1.png",
      "descricao_alt": "Código Java do método troco, que recebe um valor inteiro em centavos e devolve um vetor de cinco posições."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando o método apresentado, avalie as asserções a seguir e a relação proposta entre elas"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O método guloso encontra o menor número de moedas para o valor de entrada, considerando as moedas do país"
     },
     {
      "tipo": "paragrafo",
      "texto": "PORQUE"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Métodos gulosos sempre encontram a solução global ótima."
     },
     {
      "tipo": "paragrafo",
      "texto": "A respeito dessas asserções, assinale a opção correta"
     }
    ],
    "comando": "A respeito dessas asserções, assinale a opção correta",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O método guloso encontra o menor número de moedas para o valor de entrada, considerando as moedas do país",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Métodos gulosos sempre encontram a solução global ótima.",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I"
     },
     {
      "letra": "b",
      "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa"
     },
     {
      "letra": "c",
      "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira"
     },
     {
      "letra": "d",
      "texto": "As asserções I e II são proposições falsas"
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p14_fig1.png",
      "imagem_docx": "image12.png",
      "descricao_alt": "Código Java do método troco, que recebe um valor inteiro em centavos e devolve um vetor de cinco posições."
     }
    ],
    "codigo": {
     "linguagem": "java",
     "arquivo": "codigos/presencial/p14_troco.java",
     "numeracao_de_linha": false
    },
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. O sistema 1, 5, 10, 25 e 50 é canônico: para ele o guloso (pegar sempre a maior moeda que cabe) dá o menor número de moedas em qualquer valor. É o mesmo caso das moedas do real.",
      "II": "FALSA. A estratégia gulosa só é ótima quando o problema tem a propriedade da escolha gulosa. No próprio troco ela falha com outros sistemas de moedas: com moedas de 1, 10 e 25, o guloso dá 30 = 25 + 1 + 1 + 1 + 1 + 1 (seis moedas), enquanto o ótimo é 10 + 10 + 10 (três)."
     },
     "por_que_a_correta_esta_certa": "A I é verdadeira para estas moedas, e a II é falsa como regra geral. A I vale por uma propriedade do sistema de moedas, e não porque todo guloso acerte.",
     "por_que_cada_distrator_cai": {
      "a": "Exige a II verdadeira. Métodos gulosos não garantem o ótimo global em geral.",
      "c": "Diz que a I é falsa, mas para 1, 5, 10, 25 e 50 o guloso é de fato ótimo.",
      "d": "Também nega a I."
     },
     "conceito_chave": "O guloso faz a melhor escolha local e nunca volta atrás. Ele é ótimo só para problemas com escolha gulosa e subestrutura ótima (árvore geradora mínima, Huffman, troco com sistema canônico). Para sistemas de moedas arbitrários, o troco mínimo exige programação dinâmica.",
     "pegadinha": "Como a I é verdadeira, dá vontade de achar que a II a justifica. Mas a II é uma generalização falsa: a I é verdadeira apesar dela, por causa das moedas escolhidas.",
     "referencia": "CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. Rio de Janeiro: Elsevier, 2012.",
     "verificado": "Guloso comparado com programação dinâmica para todos os valores de 0 a 1000 centavos: sempre iguais. Com moedas 1, 10 e 25, o guloso usa 6 moedas para 30 e o ótimo usa 3."
    },
    "questao_inep": 22,
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 53,
     "classe": "Médio",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 22,
     "edicao": 2017
    }
   },
   {
    "prova": 15,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Teoria da Computação — linguagens regulares",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Considere o seguinte alfabeto"
     },
     {
      "tipo": "paragrafo",
      "texto": "Σ = {(, ), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, −}."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considere, ainda, uma linguagem L definida sobre esse alfabeto."
     },
     {
      "tipo": "paragrafo",
      "texto": "L = {w | w ∈ Σ*, para cada ocorrência de ‘(’ em w, existe uma ocorrência de ‘)’}"
     },
     {
      "tipo": "paragrafo",
      "texto": "Por exemplo: a cadeia x = (2 + (3 – 4)) pertence a L, mas a cadeia y = (2 + (3 – 4) não pertence a L"
     },
     {
      "tipo": "paragrafo",
      "texto": "Com relação à linguagem L, avalie as asserções a seguir e a relação proposta entre elas"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "A linguagem L não pode ser considerada regular"
     },
     {
      "tipo": "paragrafo",
      "texto": "PORQUE"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Autômatos finitos não possuem mecanismos que permitam contar infinitamente o número de ocorrências de determinado símbolo em uma cadeia"
     },
     {
      "tipo": "paragrafo",
      "texto": "A respeito dessas asserções, assinale a opção correta"
     }
    ],
    "comando": "A respeito dessas asserções, assinale a opção correta",
    "itens": [
     {
      "rotulo": "I",
      "texto": "A linguagem L não pode ser considerada regular",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Autômatos finitos não possuem mecanismos que permitam contar infinitamente o número de ocorrências de determinado símbolo em uma cadeia",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I"
     },
     {
      "letra": "b",
      "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I"
     },
     {
      "letra": "c",
      "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa"
     },
     {
      "letra": "d",
      "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira"
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Pelos exemplos, a cadeia pertence a L quando cada \"(\" é fechado por um \")\", ou seja, quando os parênteses abertos têm fechamento correspondente. Reconhecer isso exige contar quantos \"(\" ainda estão abertos, e esse número não tem limite. Pelo lema do bombeamento, a linguagem não é regular: tomando uma cadeia com p \"(\" seguidos de p \")\", bombear um trecho só de \"(\" deixa parênteses sem fechamento.",
      "II": "VERDADEIRA, e justifica a I. Um autômato finito tem um número fixo de estados e nenhuma memória além do estado atual, então só consegue distinguir uma quantidade limitada de contagens. Por isso não reconhece linguagens que exigem contagem ilimitada, e é exatamente o que torna L não regular."
     },
     "por_que_a_correta_esta_certa": "As duas são verdadeiras e a II é a razão da I: L não é regular PORQUE reconhecê-la exige contar sem limite, e autômatos finitos não contam sem limite. Um autômato com pilha conta, e L é livre de contexto.",
     "por_que_cada_distrator_cai": {
      "b": "Diz que a II não justifica a I. Mas a limitação de memória do autômato finito é justamente o motivo da não regularidade.",
      "c": "Diz que a II é falsa. Ela é a caracterização clássica do limite dos autômatos finitos.",
      "d": "Diz que a I é falsa, ou seja, que L seria regular. Isso exigiria um autômato finito que contasse parênteses sem limite."
     },
     "conceito_chave": "Linguagens regulares são as reconhecidas por autômatos finitos, que só têm memória finita. O exemplo canônico de linguagem não regular é aⁿbⁿ, e parênteses balanceados são a mesma ideia. Para isso é preciso pilha: linguagens livres de contexto.",
     "pegadinha": "A definição de L no enunciado é informal (\"para cada ocorrência de ( existe uma ocorrência de )\"). Os exemplos é que deixam claro o que se quer: o fechamento de cada parêntese aberto.",
     "referencia": "SIPSER, M. Introdução à teoria da computação. 2. ed. São Paulo: Cengage Learning, 2007."
    },
    "questao_inep": 23,
    "gabarito_inep": "A",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 19,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 23,
     "edicao": 2017
    }
   },
   {
    "prova": 16,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Grafos — Dijkstra, Kruskal e caminhos mínimos",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A figura a seguir exibe um grafo que representa um mapa rodoviário, no qual os vértices representam cidades e as arestas representam vias. Os pesos indicam o tempo atual de deslocamento entre duas cidades"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image15.png",
      "arquivo": "figuras/presencial/p16_fig1.png",
      "descricao_alt": "Grafo não direcionado e ponderado com dez vértices; quatro têm nome (i, w, j e k) e seis não têm. Partindo de i há três rotas até j. Rota de cima: i liga-se a um vértice sem nome com peso 4, que se liga a outro vértice sem nome com peso 2, que se liga a j com peso 1. Rota do meio: i liga-se a um vértice sem nome com peso 2; desse vértice saem duas arestas, uma de peso 1 para outro vértice sem nome (que se liga a j com peso 2) e outra de peso 2 para w (que se liga a j com peso 1). Rota de baixo: i liga-se a um vértice sem nome com peso 1, que se liga a outro vértice sem nome com peso 15, que se liga a j com peso 1. Por fim, j liga-se a k com peso 2."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando que os tempos de ida e volta são iguais para qualquer via, avalie as afirmações a seguir acerca desse grafo"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Dado o vértice de origem i, o algoritmo de Dijkstra encontra o menor tempo de deslocamento entre a cidade i e todas as demais cidades do grafo"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Uma árvore geradora de custo mínimo gerada pelo algoritmo de Kruskal contém um caminho de custo mínimo cuja origem é i e cujo destino é k"
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "Se um caminho de custo mínimo entre os vértices i e k contém o vértice w, então o subcaminho de origem w e destino k deve também ser mínimo"
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em"
     }
    ],
    "comando": "É correto o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Dado o vértice de origem i, o algoritmo de Dijkstra encontra o menor tempo de deslocamento entre a cidade i e todas as demais cidades do grafo",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Uma árvore geradora de custo mínimo gerada pelo algoritmo de Kruskal contém um caminho de custo mínimo cuja origem é i e cujo destino é k",
      "veredito": true
     },
     {
      "rotulo": "III",
      "texto": "Se um caminho de custo mínimo entre os vértices i e k contém o vértice w, então o subcaminho de origem w e destino k deve também ser mínimo",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I, apenas"
     },
     {
      "letra": "b",
      "texto": "I e III, apenas"
     },
     {
      "letra": "c",
      "texto": "II e III, apenas"
     },
     {
      "letra": "d",
      "texto": "I, II e III"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p16_fig1.png",
      "imagem_docx": "image15.png",
      "descricao_alt": "Grafo não direcionado e ponderado com dez vértices; quatro têm nome (i, w, j e k) e seis não têm. Partindo de i há três rotas até j. Rota de cima: i liga-se a um vértice sem nome com peso 4, que se liga a outro vértice sem nome com peso 2, que se liga a j com peso 1. Rota do meio: i liga-se a um vértice sem nome com peso 2; desse vértice saem duas arestas, uma de peso 1 para outro vértice sem nome (que se liga a j com peso 2) e outra de peso 2 para w (que se liga a j com peso 1). Rota de baixo: i liga-se a um vértice sem nome com peso 1, que se liga a outro vértice sem nome com peso 15, que se liga a j com peso 1. Por fim, j liga-se a k com peso 2."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Todos os pesos são positivos, e essa é a condição para o Dijkstra funcionar. A partir de i, ele encontra o menor tempo até cada uma das outras cidades.",
      "II": "VERDADEIRA neste grafo. A árvore geradora mínima tem custo total 13 e, qualquer que seja a ordem de desempate entre as arestas de peso 2, o caminho de i a k dentro dela custa 7, que é o menor tempo possível de i até k. Ela passa pela rota do meio (2 + 1 + 2 + 2 ou 2 + 2 + 1 + 2). Atenção: isso é propriedade DESTE grafo, e não do Kruskal. Em geral a árvore geradora mínima não preserva caminhos mínimos.",
      "III": "VERDADEIRA. É a subestrutura ótima dos caminhos mínimos: se houvesse um caminho mais curto de w até k, bastaria trocá-lo no caminho i → k e obter um caminho de i a k mais curto que o mínimo, o que é absurdo. É essa propriedade que justifica o Dijkstra e o Bellman-Ford."
     },
     "por_que_a_correta_esta_certa": "As três afirmações são verdadeiras, e o gabarito oficial do INEP (questão 24 do Enade 2017) também é \"I, II e III\". A que exige mais cuidado é a II: ela é verdadeira por causa dos pesos deste grafo, e é preciso fazer a conta para confirmar.",
     "por_que_cada_distrator_cai": {
      "a": "Deixa de fora a III, que é a propriedade fundamental dos caminhos mínimos, e a II.",
      "b": "Deixa de fora a II. É a resposta de quem lembra que \"a árvore geradora mínima não preserva caminhos mínimos\" e não confere neste grafo. Aqui, o caminho de i a k na árvore custa 7, o mínimo.",
      "c": "Deixa de fora a I. Com pesos positivos, o Dijkstra encontra os menores caminhos a partir da origem."
     },
     "conceito_chave": "Árvore geradora mínima e árvore de caminhos mínimos são objetos diferentes: a primeira minimiza a soma de TODAS as arestas; a segunda, a distância de uma origem a cada vértice. Às vezes coincidem num caminho específico, como aqui, mas não há garantia.",
     "pegadinha": "Responder pela regra geral sem olhar o grafo. A afirmação II é sobre \"esse grafo\", e nele ela vale. A regra geral é verdadeira (a árvore geradora mínima não garante caminhos mínimos), mas não decide o caso concreto.",
     "referencia": "CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. Rio de Janeiro: Elsevier, 2012.",
     "verificado": "Dijkstra e Kruskal executados no grafo da figura, testando todas as ordens de desempate entre as arestas de peso 2: menor tempo de i a k = 7, e o caminho i-k na árvore geradora mínima custa 7 em todos os casos."
    },
    "questao_inep": 24,
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 31,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 24,
     "edicao": 2017
    }
   },
   {
    "prova": 17,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Teoria da Computação — complexidade de Fibonacci",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A sequência de Fibonacci é uma sequência de números inteiros que começa em 1, a que se segue 1, e na qual cada elementos subsequentes é a soma dos dois elementos anteriores. A função fib a seguir calcula o n-ésimo elemento da sequência de Fibonacci"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image16.png",
      "arquivo": "figuras/presencial/p17_fig1.png",
      "descricao_alt": "Código em C da função recursiva fib."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando a implementação acima, avalie as afirmações a seguir:"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "A complexidade de tempo da função fib é exponencial no valor de n"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "A complexidade de espaço da função fib é exponencial no valor de n"
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "É possível implementar uma versão iterativa da função fib com complexidade de tempo linear no valor de n e a complexidade de espaço constante."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em"
     }
    ],
    "comando": "É correto o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "A complexidade de tempo da função fib é exponencial no valor de n",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "A complexidade de espaço da função fib é exponencial no valor de n",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "É possível implementar uma versão iterativa da função fib com complexidade de tempo linear no valor de n e a complexidade de espaço constante.",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I, apenas"
     },
     {
      "letra": "b",
      "texto": "II, apenas"
     },
     {
      "letra": "c",
      "texto": "I e III, apenas"
     },
     {
      "letra": "d",
      "texto": "II e III, apenas"
     }
    ],
    "gabarito": "c",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p17_fig1.png",
      "imagem_docx": "image16.png",
      "descricao_alt": "Código em C da função recursiva fib."
     }
    ],
    "codigo": {
     "linguagem": "c",
     "arquivo": "codigos/presencial/p17_fib.c",
     "numeracao_de_linha": false
    },
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. Cada chamada com n ≥ 2 faz duas chamadas, e o número total cresce como a própria sequência de Fibonacci, Θ(φⁿ) com φ ≈ 1,618. É exponencial em n.",
      "II": "FALSA. O espaço de uma função recursiva é a profundidade máxima da pilha, e não o total de chamadas. As chamadas não ficam todas abertas ao mesmo tempo: a cadeia mais longa é n, n − 1, n − 2, …, 1. O espaço é Θ(n), linear.",
      "III": "VERDADEIRA. Basta guardar os dois últimos termos e avançar num laço: n iterações (tempo linear) com duas variáveis (espaço constante)."
     },
     "por_que_a_correta_esta_certa": "I e III são verdadeiras: a versão recursiva ingênua é exponencial no tempo, e a iterativa resolve o mesmo problema em tempo linear e espaço constante.",
     "por_que_cada_distrator_cai": {
      "a": "Deixa de fora a III. A versão iterativa com duas variáveis é linear no tempo e constante no espaço.",
      "b": "Marca só a II, que é falsa: o espaço é a altura da pilha, Θ(n).",
      "d": "Inclui a II e deixa de fora a I, que é a mais conhecida das três."
     },
     "conceito_chave": "Na recursão, o tempo é o tamanho da árvore de chamadas e o espaço é a altura dela. A de fib tem cerca de φⁿ nós, mas altura n.",
     "pegadinha": "Achar que, se o tempo é exponencial, o espaço também é. A pilha guarda só o caminho atual da raiz até a folha, e não a árvore inteira.",
     "referencia": "CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. Rio de Janeiro: Elsevier, 2012.",
     "verificado": "Executado: 177 chamadas para n = 10 e 21 891 para n = 20, com profundidade máxima da pilha igual a n."
    },
    "questao_inep": 25,
    "gabarito_inep": "C",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 29,
     "classe": "Difícil",
     "descartada_ponto_bisserial": true,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 25,
     "edicao": 2017
    }
   },
   {
    "prova": 18,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Processamento de imagens — ruído sal e pimenta",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "A figura a seguir mostra uma imagem de ressonância magnética corrompida por ruído do tipo “sal e pimenta”"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image17.png",
      "arquivo": "figuras/presencial/p18_fig1.png",
      "descricao_alt": "Imagem de ressonância magnética, em tons de cinza, de um corte lateral da cabeça humana, mostrando o cérebro, o cerebelo e a coluna cervical. Toda a imagem, inclusive o fundo preto, está salpicada de pontos brancos e pretos isolados."
     },
     {
      "tipo": "paragrafo",
      "texto": "Para que o ruído seja atenuado e as bordas das estruturas representadas sejam preservadas, deve-se aplicar na imagem o filtro"
     }
    ],
    "comando": "Para que o ruído seja atenuado e as bordas das estruturas representadas sejam preservadas, deve-se aplicar na imagem o filtro",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "da média"
     },
     {
      "letra": "b",
      "texto": "Laplaciano"
     },
     {
      "letra": "c",
      "texto": "do mínimo"
     },
     {
      "letra": "d",
      "texto": "da mediana"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p18_fig1.png",
      "imagem_docx": "image17.png",
      "descricao_alt": "Imagem de ressonância magnética, em tons de cinza, de um corte lateral da cabeça humana, mostrando o cérebro, o cerebelo e a coluna cervical. Toda a imagem, inclusive o fundo preto, está salpicada de pontos brancos e pretos isolados."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "O ruído sal e pimenta são pixels isolados com valores extremos (preto ou branco). O filtro da mediana troca cada pixel pela mediana da vizinhança. Um valor extremo isolado nunca é a mediana, então some, e numa borda a mediana fica com o valor de um dos lados, sem misturar os dois. Atenua o ruído e preserva as bordas, exatamente o que se pede.",
     "por_que_cada_distrator_cai": {
      "a": "O filtro da média também atenua o ruído, mas espalha os valores extremos pela vizinhança e borra as bordas, porque mistura os dois lados delas.",
      "b": "O Laplaciano é um filtro de realce: destaca bordas e variações bruscas. Num pixel de ruído isolado, ele AUMENTA o contraste em vez de removê-lo.",
      "c": "O filtro do mínimo (erosão em tons de cinza) remove o \"sal\", os pontos brancos, mas espalha a \"pimenta\", os pontos pretos, e ainda encolhe as regiões claras."
     },
     "conceito_chave": "Filtros lineares (média, gaussiano) suavizam tudo por igual. Filtros de ordem (mediana, mínimo, máximo) escolhem um valor da vizinhança ordenada. A mediana é o filtro clássico para ruído impulsivo, porque descarta os extremos.",
     "pegadinha": "A média é o primeiro filtro de suavização que se aprende, e atenua o ruído. O que a elimina é a segunda exigência: preservar as bordas.",
     "referencia": "GONZALEZ, R. C.; WOODS, R. E. Processamento digital de imagens. 3. ed. São Paulo: Pearson, 2010."
    },
    "questao_inep": 26,
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 25,
     "classe": "Difícil",
     "descartada_ponto_bisserial": true,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 26,
     "edicao": 2017
    }
   },
   {
    "prova": 19,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Computação gráfica — modelos de iluminação",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Em computação gráfica, existem vários modelos de iluminação diferentes que expressam e controlam os fatores que determinam a cor de uma superfície em função de um determinado conjunto de luzes. Uma vez definido um modelo de iluminação, pode-se aplicar luz sobre as várias faces dos objetos de uma cena, processo denominado sombreamento."
     },
     {
      "tipo": "paragrafo",
      "texto": "As figuras a seguir ilustram a aplicação de dois modelos de iluminação, a saber: o modelo de sombreamento constante (à esquerda) e o modelo de Phong (à direita)"
     },
     {
      "tipo": "referencia",
      "texto": "AZEVEDO, E.; CONI, A., Computação gráfica: geração de imagens. Rio de Janeiro: Campus, 2003 (adaptado)"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image18.png",
      "arquivo": "figuras/presencial/p19_fig1.png",
      "descricao_alt": "Duas renderizações em vermelho da mesma cabeça humana. À esquerda, a superfície aparece formada por faces planas, com cada polígono visível em um tom uniforme. À direita, a superfície é lisa, com transições suaves de tom e pontos de brilho. Legenda: Disponível em: <https://www.cs.cmu.edu>. Acesso em: 17 jul 2017."
     },
     {
      "tipo": "paragrafo",
      "texto": "Em relação aos modelos de iluminação apresentados, avalie as afirmações a seguir."
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "A aplicação do modelo de sombreamento constante causa na imagem um efeito visual denominado Bandas de Mach"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Embora seja útil para gerar imagens realísticas, o modelo de Phong mostra-se pouco eficiente na apresentação das reflexões especulares"
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O modelo de sombreamento constante não é útil para gerar imagens realísticas porque ele dá destaque ao aspecto facetado da representação poliedral das superfícies"
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "Para a utilização do modelo de Phong, é necessário supor que a fonte de luz localiza-se no infinito"
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "A aplicação do modelo de sombreamento constante causa na imagem um efeito visual denominado Bandas de Mach",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Embora seja útil para gerar imagens realísticas, o modelo de Phong mostra-se pouco eficiente na apresentação das reflexões especulares",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "O modelo de sombreamento constante não é útil para gerar imagens realísticas porque ele dá destaque ao aspecto facetado da representação poliedral das superfícies",
      "veredito": true
     },
     {
      "rotulo": "IV",
      "texto": "Para a utilização do modelo de Phong, é necessário supor que a fonte de luz localiza-se no infinito",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I e II"
     },
     {
      "letra": "b",
      "texto": "I e III"
     },
     {
      "letra": "c",
      "texto": "I, III e IV"
     },
     {
      "letra": "d",
      "texto": "II , III e IV"
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p19_fig1.png",
      "imagem_docx": "image18.png",
      "descricao_alt": "Duas renderizações em vermelho da mesma cabeça humana. À esquerda, a superfície aparece formada por faces planas, com cada polígono visível em um tom uniforme. À direita, a superfície é lisa, com transições suaves de tom e pontos de brilho. Legenda: Disponível em: <https://www.cs.cmu.edu>. Acesso em: 17 jul 2017."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. No sombreamento constante (flat) cada face tem uma cor só, e o olho exagera o contraste nas arestas entre faces vizinhas. É o efeito de bandas de Mach, visível na cabeça da esquerda.",
      "II": "FALSA. O modelo de Phong é justamente conhecido por representar bem as reflexões especulares (os brilhos). Ele tem um termo especular próprio, controlado por um expoente de brilho, como se vê nos pontos claros da cabeça da direita.",
      "III": "VERDADEIRA. Como cada polígono recebe uma cor única, a superfície aparece facetada, e o resultado não é realista para superfícies curvas.",
      "IV": "FALSA. O modelo de Phong não exige luz no infinito. A luz pode ser pontual e estar a qualquer distância. Supor luz distante é uma simplificação opcional, que deixa o vetor da luz constante e barateia o cálculo."
     },
     "por_que_a_correta_esta_certa": "I e III são verdadeiras. As duas descrevem os defeitos visíveis do sombreamento constante: bandas de Mach e aspecto facetado.",
     "por_que_cada_distrator_cai": {
      "a": "Inclui a II. O ponto forte do Phong é justamente o brilho especular.",
      "c": "Inclui a IV. Fonte de luz no infinito é uma simplificação, e não um requisito do modelo.",
      "d": "Inclui a II e a IV, que são falsas, e deixa de fora a I."
     },
     "conceito_chave": "Três níveis de sombreamento: constante (uma cor por face), Gouraud (cor calculada nos vértices e interpolada) e Phong (normal interpolada e iluminação calculada por pixel, com especular de boa qualidade).",
     "pegadinha": "A II começa com um elogio verdadeiro (\"útil para gerar imagens realísticas\") e esconde o erro no fim. É preciso ler a afirmação até a última palavra.",
     "referencia": "AZEVEDO, E.; CONCI, A. Computação gráfica: geração de imagens. Rio de Janeiro: Campus, 2003."
    },
    "questao_inep": 27,
    "gabarito_inep": "B",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 35,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 27,
     "edicao": 2017
    }
   },
   {
    "prova": 20,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Engenharia de Software — Scrum e manifesto ágil",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Os métodos ágeis são fundamentados no desenvolvimento e entrega incremental tendo em vista atender aos requisitos dos clientes. Eles agregam um conjunto de princípios provenientes do manifesto ágil, tais como"
     },
     {
      "tipo": "lista",
      "rotulo": "•",
      "texto": "Envolvimento do cliente"
     },
     {
      "tipo": "lista",
      "rotulo": "•",
      "texto": "Entrega incremental"
     },
     {
      "tipo": "lista",
      "rotulo": "•",
      "texto": "Pessoas, não processos"
     },
     {
      "tipo": "lista",
      "rotulo": "•",
      "texto": "Aceitação das mudanças"
     },
     {
      "tipo": "lista",
      "rotulo": "•",
      "texto": "Manutenção da simplicidade"
     },
     {
      "tipo": "paragrafo",
      "texto": "O Scrum é um exemplo de método ágil de gerenciamento de projetos. Avalie as afirmações a seguir sobre a relação do SCRUM com os princípios do manifesto ágil"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "O Scrum adota a entrega incremental por meio de Sprints"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "O Scrum adota a simplicidade por meio do uso da programação em pares"
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O Scrum adota o envolvimento do cliente com a priorização e a negociação dos requisitos na concepção de Sprints"
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em"
     }
    ],
    "comando": "É correto o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "O Scrum adota a entrega incremental por meio de Sprints",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "O Scrum adota a simplicidade por meio do uso da programação em pares",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "O Scrum adota o envolvimento do cliente com a priorização e a negociação dos requisitos na concepção de Sprints",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "II, apenas"
     },
     {
      "letra": "b",
      "texto": "III, apenas"
     },
     {
      "letra": "c",
      "texto": "I e II, apenas"
     },
     {
      "letra": "d",
      "texto": "I e III, apenas"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. A sprint é um ciclo curto e fixo ao fim do qual se entrega um incremento potencialmente utilizável do produto. É a entrega incremental do manifesto.",
      "II": "FALSA. Programação em pares é uma prática do Extreme Programming (XP), e não do Scrum. O Scrum é um framework de gerenciamento e não prescreve práticas de engenharia.",
      "III": "VERDADEIRA. O cliente participa por meio do Product Owner, que prioriza o backlog do produto e negocia com o time o que entra em cada sprint, na reunião de planejamento."
     },
     "por_que_a_correta_esta_certa": "I e III são verdadeiras: sprints realizam a entrega incremental, e o backlog priorizado pelo Product Owner realiza o envolvimento do cliente.",
     "por_que_cada_distrator_cai": {
      "a": "Marca só a II, que atribui ao Scrum uma prática do XP.",
      "b": "Deixa de fora a I. A sprint é o próprio mecanismo de entrega incremental do Scrum.",
      "c": "Inclui a II. Programação em pares não faz parte do Scrum."
     },
     "conceito_chave": "O Scrum define papéis (Product Owner, Scrum Master, time), eventos (sprint, planejamento, reunião diária, revisão, retrospectiva) e artefatos (backlogs e incremento). Práticas técnicas como programação em pares, TDD e integração contínua vêm do XP.",
     "pegadinha": "Misturar métodos ágeis. Como Scrum e XP são usados juntos com frequência, as práticas de um acabam atribuídas ao outro.",
     "referencia": "SOMMERVILLE, I. Engenharia de software. 9. ed. São Paulo: Pearson, 2011."
    },
    "questao_inep": 28,
    "gabarito_inep": "D",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 63,
     "classe": "Fácil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 28,
     "edicao": 2017
    }
   },
   {
    "prova": 21,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Sistemas Operacionais — substituição de páginas",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O projetista do gerenciador de memória de um novo sistema operacional precisa escolher entre os algoritmos de substituição de páginas FIFO ( First In First Out – o primeiro a entrar é o primeiro a sair) e LRU (Least Recently Used – menos recentemente usado). Para isso, avaliou o número de faltas de página obtidas em ambos os algoritmos para o tamanho de memória de 4 páginas, utilizando a sequência de acessos às páginas 1-2-3-4-1-2-5-1-2-3-4-5 de um processo e memória inicialmente vazia."
     },
     {
      "tipo": "paragrafo",
      "texto": "Com base nessa simulação, avalie as asserções a seguir e a relação proposta entre elas"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "Na simulação proposta, é possível observar que os algoritmos FIFO e LRU apresentam o mesmo desempenho"
     },
     {
      "tipo": "paragrafo",
      "texto": "PORQUE"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Os parâmetros utilizados na simulação são insuficientes para determinar a diferença de funcionamento entre os algoritmos"
     },
     {
      "tipo": "paragrafo",
      "texto": "A respeito dessas asserções, assinale a opção correta"
     }
    ],
    "comando": "A respeito dessas asserções, assinale a opção correta",
    "itens": [
     {
      "rotulo": "I",
      "texto": "Na simulação proposta, é possível observar que os algoritmos FIFO e LRU apresentam o mesmo desempenho",
      "veredito": false
     },
     {
      "rotulo": "II",
      "texto": "Os parâmetros utilizados na simulação são insuficientes para determinar a diferença de funcionamento entre os algoritmos",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I"
     },
     {
      "letra": "b",
      "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa"
     },
     {
      "letra": "c",
      "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira"
     },
     {
      "letra": "d",
      "texto": "As asserções I e II são proposições falsas"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "FALSA. Simulando com 4 quadros e a sequência 1-2-3-4-1-2-5-1-2-3-4-5: o FIFO tem 10 faltas de página e o LRU, 8. O desempenho é diferente.",
      "II": "FALSA. A simulação basta para distinguir os algoritmos, e mostrou a diferença. Aliás, essa é a sequência clássica da anomalia de Belady: com 3 quadros o FIFO tem 9 faltas e com 4 tem 10, mais quadros e mais faltas."
     },
     "por_que_a_correta_esta_certa": "As duas asserções são falsas. A conta, feita página a página, dá 10 faltas no FIFO e 8 no LRU.",
     "por_que_cada_distrator_cai": {
      "a": "Exige as duas verdadeiras. A I cai na primeira conta.",
      "b": "Diz que a I é verdadeira, ou seja, que FIFO e LRU empatam. Não empatam: 10 contra 8.",
      "c": "Diz que a II é verdadeira. Os parâmetros bastaram para mostrar a diferença."
     },
     "conceito_chave": "FIFO substitui a página que está há mais tempo na memória; LRU, a que está há mais tempo sem uso. O LRU é uma aproximação do ótimo e não sofre a anomalia de Belady; o FIFO sofre.",
     "pegadinha": "Responder sem simular. A questão parece pedir opinião sobre os algoritmos, mas a resposta sai de contar as faltas, que leva um minuto no papel.",
     "referencia": "TANENBAUM, A. S. Sistemas operacionais modernos. 3. ed. São Paulo: Pearson, 2010.",
     "verificado": "Simulação executada: FIFO com 4 quadros = 10 faltas; LRU com 4 quadros = 8 faltas."
    },
    "questao_inep": 29,
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 26,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 29,
     "edicao": 2017
    }
   },
   {
    "prova": 22,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Compiladores — tabela LL(1)",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Em um compilador, um analisador sintático descendente preditivo pode ser implementado com o auxílio de uma tabela construída a partir de uma gramática livre de contexto. Essa tabela, chamada tabela LL(k), indica a regra de produção a ser aplicada olhando-se o k-ésimo próximo símbolo lido, chamado lookahead(k). Por motivo de eficiência, normalmente busca-se utilizar k = 1. Considere a gramática livre de contexto G = (X, Y, Z, a, b, c, d, e, P, X), em que P é composto pelas seguintes regras de produção:"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image19.png",
      "arquivo": "figuras/presencial/p22_fig1.png",
      "descricao_alt": "Regras de produção da gramática G: X → aZbXY | c; Y → dX | ε; Z → e."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considere, ainda, a seguinte tabela LL(1), construída a partir da gramática G, sendo $ o símbolo que representa o fim da cadeia. Essa tabela possui duas produções distintas na célula (Y, d), gerando, no analisador sintático, uma dúvida na escolha da regra de produção aplicada em determinados momentos da análise"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image20.png",
      "arquivo": "figuras/presencial/p22_fig2.png",
      "descricao_alt": "Tabela LL(1) com linhas X, Y e Z e colunas a, b, c, d, e e $. Linha X: em a, X → aZbXY; em c, X → c. Linha Y: em d, duas produções, Y → dX e Y → ε; em $, Y → ε. Linha Z: em e, Z → e. As demais células estão vazias."
     },
     {
      "tipo": "paragrafo",
      "texto": "Considerando que o processo de construção dessa tabela LL(1), a partir da gramática G, foi seguido corretamente, a existência de duas regras de produção distintas na célula (Y, d), neste caso específico, resulta"
     }
    ],
    "comando": "Considerando que o processo de construção dessa tabela LL(1), a partir da gramática G, foi seguido corretamente, a existência de duas regras de produção distintas na célula (Y, d), neste caso específico, resulta",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "de um não-determinismo causado por uma ambiguidade na gramática"
     },
     {
      "letra": "b",
      "texto": "do uso incorreto do símbolo de cadeia vazia (ɛ) nas regras de produção"
     },
     {
      "letra": "c",
      "texto": "da presença de duas regras de produção com um único terminal no corpo"
     },
     {
      "letra": "d",
      "texto": "da presença de duas regras de produção com o mesmo não terminal na cabeça"
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p22_fig1.png",
      "imagem_docx": "image19.png",
      "descricao_alt": "Regras de produção da gramática G: X → aZbXY | c; Y → dX | ε; Z → e."
     },
     {
      "arquivo": "figuras/presencial/p22_fig2.png",
      "imagem_docx": "image20.png",
      "descricao_alt": "Tabela LL(1) com linhas X, Y e Z e colunas a, b, c, d, e e $. Linha X: em a, X → aZbXY; em c, X → c. Linha Y: em d, duas produções, Y → dX e Y → ε; em $, Y → ε. Linha Z: em e, Z → e. As demais células estão vazias."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "As duas produções caem em (Y, d) por motivos diferentes. Y → dX entra porque começa com d. Y → ε entra porque d está em FOLLOW(Y): na regra X → aZbXY, o que vem depois de X é Y, que pode começar com d. Isso é sintoma de ambiguidade, como no \"else pendente\": numa cadeia como a e b a e b c d c, o par \"d c\" pode ser gerado pelo Y do X interno ou pelo do X externo, com duas árvores de derivação diferentes. Gramática ambígua nunca é LL(1), e o conflito é inevitável.",
     "por_que_cada_distrator_cai": {
      "b": "O ε está usado corretamente em Y → ε. A cadeia vazia é permitida em gramáticas livres de contexto, e a tabela foi construída certo, como diz o enunciado.",
      "c": "Produções com um único terminal no corpo (X → c, Z → e) não causam conflito: cada uma ocupa a célula do próprio terminal.",
      "d": "Ter várias produções com a mesma cabeça é normal (X tem duas, Y tem duas). O conflito surge quando os conjuntos de previsão delas se sobrepõem, e não pelo fato de compartilharem a cabeça."
     },
     "conceito_chave": "Na tabela LL(1), A → α vai para (A, t) para cada t em FIRST(α), e, se α deriva ε, também para cada t em FOLLOW(A). Duas produções na mesma célula significam que a gramática não é LL(1). Quando isso vem de ambiguidade, nenhuma reorganização da tabela resolve.",
     "pegadinha": "O ε chama a atenção porque é ele que \"puxa\" o FOLLOW. Mas o uso do ε é legítimo; o problema é a gramática permitir duas derivações para a mesma cadeia.",
     "referencia": "AHO, A. V. et al. Compiladores: princípios, técnicas e ferramentas. 2. ed. São Paulo: Pearson, 2008.",
     "verificado": "FIRST e FOLLOW calculados por execução: FIRST(Y) = {d, ε} e FOLLOW(Y) = {d, $}. A cadeia aebaebcdc tem 2 derivações mais à esquerda."
    },
    "questao_inep": 30,
    "gabarito_inep": "B",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 40,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 30,
     "edicao": 2017
    }
   },
   {
    "prova": 23,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Sistemas distribuídos — threads e concorrência",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Considere o programa a seguir, que ilustra a criação, execução e sincronização de duas threads"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image21.png",
      "arquivo": "figuras/presencial/p23_fig1.png",
      "descricao_alt": "Programa em C com duas threads que compartilham as variáveis x e y."
     },
     {
      "tipo": "paragrafo",
      "texto": "Ao final da execução da função main, será impresso"
     }
    ],
    "comando": "Ao final da execução da função main, será impresso",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "O valor “1”, necessariamente"
     },
     {
      "letra": "b",
      "texto": "O valor “2”, necessariamente"
     },
     {
      "letra": "c",
      "texto": "O valor “1”, ou o valor “2”, mas nunca ambos"
     },
     {
      "letra": "d",
      "texto": "O valor “1”, ou o valor “2”, ou nenhum valor, mas nunca ambos"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p23_fig1.png",
      "imagem_docx": "image21.png",
      "descricao_alt": "Programa em C com duas threads que compartilham as variáveis x e y."
     }
    ],
    "codigo": {
     "linguagem": "c",
     "arquivo": "codigos/presencial/p23_threads.c",
     "numeracao_de_linha": false
    },
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "Cada thread escreve na sua variável e depois lê a da outra. Se t1 roda inteira antes de t2 escrever y, imprime \"1\" (e t2 depois vê x = 1, sem imprimir). O simétrico imprime \"2\". Se as duas escrevem antes de qualquer uma ler, as duas veem 1 e ninguém imprime. Para imprimir os dois, t1 teria de ler y = 0 (t2 ainda não escreveu) e t2 teria de ler x = 0 (t1 ainda não escreveu); mas cada uma escreve ANTES de ler, então isso é impossível. Resultado: \"1\", \"2\" ou nada, nunca os dois.",
     "por_que_cada_distrator_cai": {
      "a": "Ignora que a ordem de execução das threads não é determinada. \"1\" é só um dos resultados possíveis.",
      "b": "Mesmo erro: assume que t2 sempre perde a corrida.",
      "c": "Esquece o caso em que as duas escrevem antes de as duas lerem, e nenhuma imprime."
     },
     "conceito_chave": "Com threads concorrentes sem sincronização, o resultado depende da intercalação. Para analisar, enumeram-se as ordens possíveis das operações que importam (aqui, duas escritas e duas leituras), respeitando a ordem dentro de cada thread.",
     "pegadinha": "O caso \"nenhum valor\" é o que a maioria esquece. Uma nota para quem quiser ir além: essa análise assume consistência sequencial. Em processadores reais, sem barreiras de memória, a escrita pode ser reordenada depois da leitura, e imprimir \"1 2\" passa a ser possível. Isso vai além do que a questão cobra.",
     "referencia": "TANENBAUM, A. S. Sistemas operacionais modernos. 3. ed. São Paulo: Pearson, 2010.",
     "verificado": "Todas as intercalações das quatro operações enumeradas por execução: as saídas possíveis são \"1\", \"2\" e nenhuma."
    },
    "questao_inep": 31,
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 33,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 31,
     "edicao": 2017
    }
   },
   {
    "prova": 24,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Inteligência Artificial — agentes inteligentes",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "O uso de agentes inteligentes permite a solução de problemas complexos por meio do uso de heurísticas implementadas de forma distribuída. Na literatura, o Mundo do Aspirador de Pó (Vacuum-Cleaner World) é um problema fictício que envolve o emprego e uso de agentes no ensino dos conceitos relacionados a Inteligência Artificial. Esse mundo fictício é composto por um aspirador de pó e dois ou mais ambientes, conforme ilustra a figura a seguir. Os ambientes podem estar sujos ou limpos"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image22.png",
      "arquivo": "figuras/presencial/p24_fig1.png",
      "descricao_alt": "Desenho com dois quadrados lado a lado, \"Ambiente A\" e \"Ambiente B\". No Ambiente A há um aspirador de pó e um monte de sujeira. No Ambiente B há apenas um monte de sujeira."
     },
     {
      "tipo": "paragrafo",
      "texto": "Nesse mundo, um agente representa o aspirador de pó equipado com dois sensores: um de localização e outro para a identificação de sujeira. O agente pode executar as seguintes operações:"
     },
     {
      "tipo": "lista",
      "rotulo": "•",
      "texto": "Verificar se o ambiente atual está sujo"
     },
     {
      "tipo": "lista",
      "rotulo": "•",
      "texto": "Limpar o ambiente"
     },
     {
      "tipo": "lista",
      "rotulo": "•",
      "texto": "Fazer nada"
     },
     {
      "tipo": "lista",
      "rotulo": "•",
      "texto": "Mover-se para o próximo ambiente, utilizando um dos comandos: direita, esquerda, frente ou trás"
     },
     {
      "tipo": "referencia",
      "texto": "RUSSEL, S.J. NORVIG, P.; Artificial Intelligence: a modern approach. 3ed. New Jersey: Pearson, 2009 (adaptado)"
     },
     {
      "tipo": "paragrafo",
      "texto": "Com relação aos conceitos envolvendo sistemas multiagentes e o problema do Mundo do Aspirador de Pó apresentado, assinale a opção correta."
     }
    ],
    "comando": "Com relação aos conceitos envolvendo sistemas multiagentes e o problema do Mundo do Aspirador de Pó apresentado, assinale a opção correta.",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "Definidas as localizações do agente e da sujeira como elementos únicos de um estado, no cenário da figura, há 2² = 4 estados possíveis para avaliação"
     },
     {
      "letra": "b",
      "texto": "O comportamento de um agente é definido por uma ou mais funções que mapeiam uma dada sequência percebida para uma ação definida"
     },
     {
      "letra": "c",
      "texto": "A sequência percebida de um agente refere-se ao histórico do resultado de todas as ações tomadas pelo agente até o presente momento"
     },
     {
      "letra": "d",
      "texto": "A percepção de um agente refere-se aos resultados das ações tomadas por ele"
     }
    ],
    "gabarito": "b",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p24_fig1.png",
      "imagem_docx": "image22.png",
      "descricao_alt": "Desenho com dois quadrados lado a lado, \"Ambiente A\" e \"Ambiente B\". No Ambiente A há um aspirador de pó e um monte de sujeira. No Ambiente B há apenas um monte de sujeira."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "É a definição de Russell e Norvig: o comportamento de um agente é descrito pela função de agente, que mapeia qualquer sequência de percepções para uma ação. No aspirador, a sequência [A, sujo] leva a \"limpar\", e [A, limpo] a \"mover para B\".",
     "por_que_cada_distrator_cai": {
      "a": "O estado tem três componentes: onde está o agente (2 opções) e se cada um dos dois ambientes está sujo (2 × 2). São 2 × 2² = 8 estados, e não 2² = 4.",
      "c": "A sequência de percepções é o histórico do que o agente PERCEBEU pelos sensores, e não o histórico das ações que ele tomou.",
      "d": "A percepção é a entrada que o agente recebe dos sensores num instante (local e sujeira), e não o resultado das ações dele."
     },
     "conceito_chave": "Percepção: o que os sensores informam agora. Sequência de percepções: tudo o que o agente já percebeu. Função de agente: o mapeamento da sequência de percepções para a ação. Programa de agente: a implementação concreta dessa função.",
     "pegadinha": "As alternativas c e d trocam percepção por ação, o que entra pelo sensor pelo que sai pelo atuador. E a a conta só a sujeira, esquecendo que a posição do agente também faz parte do estado.",
     "referencia": "RUSSELL, S.; NORVIG, P. Artificial intelligence: a modern approach. 3. ed. New Jersey: Pearson, 2009.",
     "verificado": "Estados enumerados por execução: posição do agente × sujeira em A × sujeira em B = 8."
    },
    "questao_inep": 32,
    "gabarito_inep": "B",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 38,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 32,
     "edicao": 2017
    }
   },
   {
    "prova": 25,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Teoria da Computação — recorrência e complexidade",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Considere a função recursiva F a seguir, que em sua execução chama a função G"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image23.png",
      "arquivo": "figuras/presencial/p25_fig1.png",
      "descricao_alt": "Código em C da função recursiva F, com as linhas numeradas de 1 a 8."
     },
     {
      "tipo": "paragrafo",
      "texto": "Com base nos conceitos de teoria da complexidade, avalie as afirmações a seguir"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "A equação de recorrência que define a complexidade da função F é a mesma do algoritmo clássico de ordenação mergesort"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "O número de chamadas recursivas da função F é Θ(log n)."
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "O número de vezes que a função G da linha 4 é chamada é O(n log n)."
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto o que se afirma em"
     }
    ],
    "comando": "É correto o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "A equação de recorrência que define a complexidade da função F é a mesma do algoritmo clássico de ordenação mergesort",
      "veredito": false
     },
     {
      "rotulo": "II",
      "texto": "O número de chamadas recursivas da função F é Θ(log n).",
      "veredito": true
     },
     {
      "rotulo": "III",
      "texto": "O número de vezes que a função G da linha 4 é chamada é O(n log n).",
      "veredito": true
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I, apenas"
     },
     {
      "letra": "b",
      "texto": "II, apenas"
     },
     {
      "letra": "c",
      "texto": "I e III, apenas"
     },
     {
      "letra": "d",
      "texto": "II e III, apenas"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p25_fig1.png",
      "imagem_docx": "image23.png",
      "descricao_alt": "Código em C da função recursiva F, com as linhas numeradas de 1 a 8."
     }
    ],
    "codigo": {
     "linguagem": "c",
     "arquivo": "codigos/presencial/p25_recursiva.c",
     "numeracao_de_linha": true,
     "nota": "O item III cita a linha 4; numeracao da figura mantida."
    },
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "FALSA. A função F faz um laço de n passos e UMA chamada recursiva com n/2: T(n) = T(n/2) + Θ(n), que dá Θ(n). O mergesort faz DUAS chamadas com n/2: T(n) = 2T(n/2) + Θ(n), que dá Θ(n log n). As recorrências são diferentes.",
      "II": "VERDADEIRA. n cai pela metade a cada chamada até chegar a 0, então há cerca de log₂ n + 1 chamadas: Θ(log n).",
      "III": "VERDADEIRA. G é chamada n + n/2 + n/4 + … < 2n vezes, que é Θ(n). Como O dá um limite SUPERIOR, Θ(n) também é O(n log n). A afirmação é verdadeira, mas não é o limite mais justo."
     },
     "por_que_a_correta_esta_certa": "II e III são verdadeiras. A III exige atenção: o número exato de chamadas de G é linear, e todo crescimento linear está contido em O(n log n).",
     "por_que_cada_distrator_cai": {
      "a": "Marca só a I, que confunde uma chamada recursiva com duas.",
      "b": "Deixa de fora a III. Quem calcula Θ(n) e conclui que \"O(n log n) está errado\" esquece que O é só um limite superior.",
      "c": "Inclui a I, que é falsa, e deixa de fora a II."
     },
     "conceito_chave": "Pelo Teorema Mestre, T(n) = aT(n/b) + f(n): com a = 1, b = 2 e f(n) = n, cai no caso 3 e dá Θ(n). Com a = 2 (mergesort), cai no caso 2 e dá Θ(n log n). E O(g) quer dizer \"no máximo da ordem de g\", e não \"exatamente\".",
     "pegadinha": "Duas armadilhas. Ver \"dividir ao meio + laço linear\" e concluir \"é o mergesort\" sem contar as chamadas. E tratar O como se fosse Θ, descartando a III.",
     "referencia": "CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. Rio de Janeiro: Elsevier, 2012.",
     "verificado": "Executado para n = 1 024 e n = 2²⁰: G é chamada menos de 2n vezes, e F executa log₂ n + 1 vezes com n > 0."
    },
    "questao_inep": 33,
    "gabarito_inep": "D",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 29,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 33,
     "edicao": 2017
    }
   },
   {
    "prova": 26,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Banco de Dados — formas normais",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Quando se trabalha com banco de dados, é possível encontrar redundância de dados e mistura de diferentes assuntos em uma mesma tabela. Para evitar esses tipos de falhas, podem ser aplicadas formas normais, que são regras que compõem o processo chamado normalização. Entre essas regras, as mais utilizadas e que resolvem a maioria das falhas são a Primeira Forma Normal (1FN), a Segunda Forma Normal (2FN) e a Terceira Forma Normal (3FN). A figura a seguir mostra um exemplo de tabela que poderia ser armazenada em um banco de dados. Nela, a coluna Numero contém um valor único, sequencial, que não se repete."
     },
     {
      "tipo": "figura",
      "imagem_docx": "image26.png",
      "arquivo": "figuras/presencial/p26_fig1.png",
      "descricao_alt": "Tabela com as colunas Numero, Titulo, Zona, Seção, UF, NomeEleitor, FoneEleitor, Sigla, NomePartido, NumCand e NomeCand. Linha 1: Numero 1, Titulo 11111111111, Zona 40, Seção 999, UF DF, NomeEleitor Pessoa1, FoneEleitor com dois valores (11111-1111 e 22222-2222), Sigla P1, NomePartido Partido1, NumCand 99, NomeCand Candidato1. Linha 2: Numero 2, Titulo 22222222222, Zona 22, Seção 888, UF RR, NomeEleitor Pessoa2, FoneEleitor com dois valores (33333-3333 e 44444-4444), Sigla P2, NomePartido Partido2, NumCand 88, NomeCand Candidato2."
     },
     {
      "tipo": "paragrafo",
      "texto": "Com base no texto e no exemplo de tabela apresentado, avalie as afirmações a seguir:"
     },
     {
      "tipo": "item",
      "rotulo": "I",
      "texto": "A tabela não está na 1FN e, portanto, pode-se dizer que ela não atende à 2FN nem à 3FN"
     },
     {
      "tipo": "item",
      "rotulo": "II",
      "texto": "Se forem criadas duas novas tabelas: Partido (com as colunas Sigla e NomePartido) e Candidato (com as colunas NumCand e NomeCand), pode-se dizer que as três tabelas atendem à 2FN"
     },
     {
      "tipo": "item",
      "rotulo": "III",
      "texto": "Se a tabela for transformada em duas: Voto (com as colunas Numero, Sigla, NomePartido, NumCand, NomeCand e Titulo) e Eleitor (com a coluna Titulo e as colunas restantes), pode-se dizer que as duas tabelas atendem à 3FN"
     },
     {
      "tipo": "item",
      "rotulo": "IV",
      "texto": "Os atributos Sigla, NomePartido, NumCand e NomeCand não dependem funcionalmente do atributo Numero, mas os atributos restantes, sim"
     },
     {
      "tipo": "paragrafo",
      "texto": "É correto apenas o que se afirma em"
     }
    ],
    "comando": "É correto apenas o que se afirma em",
    "itens": [
     {
      "rotulo": "I",
      "texto": "A tabela não está na 1FN e, portanto, pode-se dizer que ela não atende à 2FN nem à 3FN",
      "veredito": true
     },
     {
      "rotulo": "II",
      "texto": "Se forem criadas duas novas tabelas: Partido (com as colunas Sigla e NomePartido) e Candidato (com as colunas NumCand e NomeCand), pode-se dizer que as três tabelas atendem à 2FN",
      "veredito": false
     },
     {
      "rotulo": "III",
      "texto": "Se a tabela for transformada em duas: Voto (com as colunas Numero, Sigla, NomePartido, NumCand, NomeCand e Titulo) e Eleitor (com a coluna Titulo e as colunas restantes), pode-se dizer que as duas tabelas atendem à 3FN",
      "veredito": false
     },
     {
      "rotulo": "IV",
      "texto": "Os atributos Sigla, NomePartido, NumCand e NomeCand não dependem funcionalmente do atributo Numero, mas os atributos restantes, sim",
      "veredito": false
     }
    ],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "I"
     },
     {
      "letra": "b",
      "texto": "I e III"
     },
     {
      "letra": "c",
      "texto": "I, II e III"
     },
     {
      "letra": "d",
      "texto": "II e IV"
     }
    ],
    "gabarito": "a",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p26_fig1.png",
      "imagem_docx": "image26.png",
      "descricao_alt": "Tabela com as colunas Numero, Titulo, Zona, Seção, UF, NomeEleitor, FoneEleitor, Sigla, NomePartido, NumCand e NomeCand. Linha 1: Numero 1, Titulo 11111111111, Zona 40, Seção 999, UF DF, NomeEleitor Pessoa1, FoneEleitor com dois valores (11111-1111 e 22222-2222), Sigla P1, NomePartido Partido1, NumCand 99, NomeCand Candidato1. Linha 2: Numero 2, Titulo 22222222222, Zona 22, Seção 888, UF RR, NomeEleitor Pessoa2, FoneEleitor com dois valores (33333-3333 e 44444-4444), Sigla P2, NomePartido Partido2, NumCand 88, NomeCand Candidato2."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {
      "I": "VERDADEIRA. A coluna FoneEleitor guarda dois telefones na mesma célula: é um atributo multivalorado, que viola a 1FN (valores atômicos). E, como 2FN e 3FN pressupõem 1FN, a tabela não atende nenhuma delas.",
      "II": "FALSA. Separar Partido e Candidato resolve parte das dependências, mas a tabela que sobra continua com FoneEleitor multivalorado. Ela não está nem na 1FN, e portanto não atende a 2FN.",
      "III": "FALSA. Eleitor fica com FoneEleitor multivalorado, então não está na 1FN. E Voto mantém NomePartido dependendo de Sigla e NomeCand dependendo de NumCand, dependências transitivas que violam a 3FN.",
      "IV": "FALSA. Numero é único em cada linha, o que faz dele chave: TODOS os demais atributos dependem funcionalmente dele, inclusive Sigla, NomePartido, NumCand e NomeCand. Algumas dessas dependências são transitivas, mas existem."
     },
     "por_que_a_correta_esta_certa": "Só a I é verdadeira. Todas as outras esbarram no mesmo ponto: enquanto FoneEleitor for multivalorado, nenhuma tabela que o contenha passa da 1FN.",
     "por_que_cada_distrator_cai": {
      "b": "Inclui a III. A tabela Eleitor herda o telefone multivalorado, e Voto mantém dependências transitivas.",
      "c": "Inclui a II e a III. Nas duas, o telefone continua multivalorado.",
      "d": "Nega a I e inclui a IV. Numero é chave, e todo atributo de uma tabela depende funcionalmente da chave."
     },
     "conceito_chave": "1FN: valores atômicos, sem multivalorados nem grupos repetidos. 2FN: 1FN e nenhum atributo dependendo de parte de uma chave composta. 3FN: 2FN e nenhuma dependência transitiva entre atributos não chave. Cada forma pressupõe a anterior.",
     "pegadinha": "A II e a III propõem decomposições que parecem boas e distraem do defeito mais básico: o telefone duplo na mesma célula, que segue lá. Na normalização, comece sempre pela 1FN.",
     "referencia": "ELMASRI, R.; NAVATHE, S. B. Sistemas de banco de dados. 6. ed. São Paulo: Pearson, 2011."
    },
    "questao_inep": 34,
    "gabarito_inep": "A",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 20,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 34,
     "edicao": 2017
    }
   },
   {
    "prova": 27,
    "origem": "Enade 2017 - INEP/MEC",
    "tema": "Sistemas Operacionais — deadlock com semáforos",
    "tags": [],
    "blocos": [
     {
      "tipo": "paragrafo",
      "texto": "Um programador inexperiente está desenvolvendo um sistema multithread que possui duas estruturas de dados diferentes, E1 e E2, as quais armazenam valores inteiros. O acesso concorrente a essas estruturas é controlado por semáforos. Durante sua execução, o sistema dispara as threads T1 e T2 simultaneamente. A tabela a seguir possibilita uma visão em linhas gerais dos algoritmos dessas threads"
     },
     {
      "tipo": "figura",
      "imagem_docx": "image27.png",
      "arquivo": "figuras/presencial/p27_fig1.png",
      "descricao_alt": "Tabela com os passos das threads T1 e T2, lado a lado. T1: aloca E1; calcula a média M1 dos valores de E1; aloca E2; calcula a média M2 dos valores de E2; calcula M3 = M1 + M2; soma M3 em todos os valores de E2; libera E1; libera E2. T2: aloca E2; calcula a soma S1 de todos os valores de E2; aloca E1; calcula a soma S2 de todos os valores de E1; calcula S3 = |S1 − S2|; subtrai S2 de todos os valores de E1; libera E2; libera E1."
     },
     {
      "tipo": "paragrafo",
      "texto": "Durante a execução do referido programa, é possível que"
     }
    ],
    "comando": "Durante a execução do referido programa, é possível que",
    "itens": [],
    "itens_conferidos": true,
    "alternativas": [
     {
      "letra": "a",
      "texto": "Ocorra deadlock, que pode ser evitado se o programador tomar o cuidado de não executar cálculos entre um pedido de alocação e outros"
     },
     {
      "letra": "b",
      "texto": "Ocorra deadlock, sendo a probabilidade dessa ocorrência tão baixa e sua consequência tão inócua que não haverá comprometimento do programa"
     },
     {
      "letra": "c",
      "texto": "Não ocorra deadlock, desde que o programador use semáforos para controlar o acesso às estruturas de dados, o que é suficiente para evitar o problema"
     },
     {
      "letra": "d",
      "texto": "Ocorra deadlock, que pode ser evitado se o programador tomar o cuidado de solicitar o acesso às estruturas de dados na mesma ordem em ambas as threads"
     }
    ],
    "gabarito": "d",
    "gabarito_conferido_inep": true,
    "figuras": [
     {
      "arquivo": "figuras/presencial/p27_fig1.png",
      "imagem_docx": "image27.png",
      "descricao_alt": "Tabela com os passos das threads T1 e T2, lado a lado. T1: aloca E1; calcula a média M1 dos valores de E1; aloca E2; calcula a média M2 dos valores de E2; calcula M3 = M1 + M2; soma M3 em todos os valores de E2; libera E1; libera E2. T2: aloca E2; calcula a soma S1 de todos os valores de E2; aloca E1; calcula a soma S2 de todos os valores de E1; calcula S3 = |S1 − S2|; subtrai S2 de todos os valores de E1; libera E2; libera E1."
     }
    ],
    "codigo": null,
    "resolucao": {
     "escrita": true,
     "veredito_por_item": {},
     "por_que_a_correta_esta_certa": "T1 aloca E1 e depois E2; T2 aloca E2 e depois E1. Se T1 pegar E1 e T2 pegar E2 antes de cada uma pedir a segunda, uma espera pela outra para sempre: espera circular, deadlock. A prevenção clássica é impor uma ordem global de alocação. Se as duas pedirem E1 antes de E2, quem pega E1 primeiro sempre consegue E2, e o ciclo não se forma.",
     "por_que_cada_distrator_cai": {
      "a": "Tirar os cálculos entre as alocações só estreita a janela, sem fechá-la: entre o primeiro pedido e o segundo a outra thread ainda pode pegar o recurso. A probabilidade diminui, mas o deadlock continua possível.",
      "b": "A consequência de um deadlock não é inócua: as duas threads param para sempre e o programa trava. Probabilidade baixa não é correção.",
      "c": "Os semáforos já estão sendo usados, e são eles que causam o bloqueio. Semáforo garante exclusão mútua, e não ausência de deadlock."
     },
     "conceito_chave": "Deadlock exige quatro condições simultâneas (Coffman): exclusão mútua, posse e espera, não preempção e espera circular. Ordenar a alocação dos recursos elimina a espera circular, e é a prevenção mais prática.",
     "pegadinha": "A alternativa a parece técnica e cuidadosa. Mas deadlock é questão de possibilidade, e não de probabilidade: reduzir a janela de risco não é eliminá-lo.",
     "referencia": "TANENBAUM, A. S. Sistemas operacionais modernos. 3. ed. São Paulo: Pearson, 2010.",
     "verificado": "Intercalações dos pedidos enumeradas por execução: com ordens opostas há espera circular; com a mesma ordem, não."
    },
    "questao_inep": 35,
    "gabarito_inep": "E",
    "anulada_inep": false,
    "dificuldade_inep": {
     "acerto_nacional": 31,
     "classe": "Difícil",
     "descartada_ponto_bisserial": false,
     "fonte": "MEC/Inep/Daes — Relatório Síntese de Área, Enade 2017, Ciência da Computação (Bacharelado), Tabela 6.11b.",
     "questao_inep": 35,
     "edicao": 2017
    }
   }
  ],
  "codigos": {
   "codigos/presencial/p10_ordena.c": "01 void ordena(int *v, int n)\n02 {\n03   int i, j, chave;\n04   for(i = 1; i < n; i++)\n05   {\n06      chave = v[i];\n07      j = i - 1;\n08      while(j >= 0 && v[j] < chave)\n09      {\n10          v[j-1] = v[j];\n11          j = j - 1;\n12      }\n13      v[j+1] = chave;\n14   }\n15 }\n",
   "codigos/presencial/p14_troco.java": "public static int[] troco(int valor){\n    int[] moedas = new int[5];\n\n    moedas[4] = valor / 50;\n    valor = valor % 50;\n    moedas[3] = valor / 25;\n    valor = valor % 25;\n    moedas[2] = valor / 10;\n    valor = valor % 10;\n    moedas[1] = valor / 5;\n    valor = valor % 5;\n    moedas[0] = valor;\n    return(moedas);\n}\n",
   "codigos/presencial/p17_fib.c": "unsigned int fib (unsigned int n)\n{\n    if (n < 2)\n        return 1;\n    return fib(n - 2) + fib (n - 1);\n}\n",
   "codigos/presencial/p23_threads.c": "#include <stdio.h>\n#include <pthread.h>\n\nint x = 0, y = 0; // Variáveis compartilhadas\n\nvoid funcao1(void *threadarg){\n  x = 1;\n   ... // várias instruções\n  if (y == 0)\n    printf(\"1 \");\n  pthread_exit(0);\n}\n\nvoid funcao2(void *threadarg){\n  y = 1;\n... // várias instruções\n  if (x == 0)\n     printf(\"2 \");\n  pthread_exit(0);\n}\n\nvoid main(){\n  pthread_t t1, t2;\n  // Cria e dispara t1 que executa funcao1\n  pthread_create(&t1, NULL,(void *)funcao1, NULL);\n  // Cria e dispara t2 que executa funcao2\n  pthread_create(&t2, NULL,(void *)funcao2, NULL);\n  // Pai espera filho terminar\n  pthread_join(t1, NULL);\n  // Pai espera filho terminar\n  pthread_join(t2, NULL);\n}\n",
   "codigos/presencial/p25_recursiva.c": "1 void F(int n) {\n2    if(n > 0) {\n3       for(int i = 0; i < n; i++) {\n4          G(i);\n5       }\n6       F(n/2);\n7    }\n8 }\n"
  }
 }
};
