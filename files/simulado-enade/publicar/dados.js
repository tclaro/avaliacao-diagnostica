/* Gerado por ferramentas/gerar_site.py a partir de
   dados/questoes.json. Nao edite este arquivo a mao. */
window.QUESTOES = {
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
 ]
};
window.CODIGOS = {
 "codigos/q12_busca.c": "#include <stdio.h>                                                  /* 1 */\n#define TAM 10                                                      /* 2 */\nint funcao1(int vetor[], int v) {                                   /* 3 */\n    int i;                                                          /* 4 */\n    for (i = 0; i < TAM; i++) {                                     /* 5 */\n        if (vetor[i] == v)                                          /* 6 */\n            return i;                                               /* 7 */\n    }                                                               /* 8 */\n    return -1;                                                      /* 9 */\n}                                                                   /* 10 */\nint funcao2(int vetor[], int v, int i, int f) {                     /* 11 */\n    int m = (i + f) / 2;                                            /* 12 */\n    if (v == vetor[m])                                              /* 13 */\n        return m;                                                   /* 14 */\n    if (i >= f)                                                     /* 15 */\n        return -1;                                                  /* 16 */\n    if (v > vetor[m])                                               /* 17 */\n        return funcao2(vetor, v, m+1, f);                           /* 18 */\n    else                                                            /* 19 */\n        return funcao2(vetor, v, i, m-1);                           /* 20 */\n}                                                                   /* 21 */\nint main() {                                                        /* 22 */\n    int vetor[TAM] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};           /* 23 */\n    printf(\"%d - %d\", funcao1(vetor, 15), funcao2(vetor, 15, 0, TAM-1));  /* 24 */\n    return 0;                                                       /* 25 */\n}                                                                   /* 26 */\n",
 "codigos/q24_quicksort.txt": "algoritmo ordena(A, lo, hi)\n    se lo < hi então\n        p := particao(A, lo, hi)\n        ordena(A, lo, p - 1)\n        ordena(A, p + 1, hi)\n\nalgoritmo particao(A, lo, hi)\n    pivot := A[hi]\n    i := lo\n    repita para j := lo até hi\n        se A[j] < pivot então\n            troca A[i] com A[j]\n            i := i + 1\n    troca A[i] com A[hi]\n    return i\n"
};
