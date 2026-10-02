# -*- coding: utf-8 -*-
"""Resolucoes comentadas da avaliacao presencial, questoes 1 a 14.

Mesmo formato de resolucoes_a.py:
  itens       - veredito e justificativa de cada afirmacao I/II/III/IV
                (comeca com VERDADEIRA ou FALSA)
  correta     - por que a alternativa do gabarito esta certa
  distratores - por que cada uma das outras cai
  conceito    - o conceito-chave da questao
  pegadinha   - o erro que a questao esta armando
  referencia  - a fonte citada no docx
  verificado  - (opcional) como o resultado foi checado por execucao
                (ferramentas/verificar_presencial.py)
"""

RA = {}

RA[1] = {
    'itens': {},
    'correta': 'O 3 entra como filho esquerdo do 4. Subindo pelo caminho de '
               'inserção, o 4 fica com altura 2, o 5 com altura 3 e o 10 '
               'passa a ter subárvore esquerda de altura 3 contra 1 da '
               'direita (o 11): fator de balanceamento +2. O 10 é a raiz da '
               'subárvore de nível mais baixo desbalanceada. Como o 3 entrou '
               'na esquerda da esquerda do 10, o caso é esquerda-esquerda, '
               'resolvido por uma rotação simples à direita no 10: o 5 sobe, '
               'o 10 desce para a direita do 5 e leva o 11, e o 8, que era '
               'filho direito do 5, passa a ser filho esquerdo do 10. A raiz '
               '13 continua balanceada (alturas 3 e 2).',
    'distratores': {
        'b': 'É a árvore logo depois da inserção, sem rebalanceamento '
             'nenhum. O 10 fica com fator +2, então ela deixou de ser AVL.',
        'c': 'Promove o 10 a raiz e reorganiza a árvore inteira. Além de '
             'mexer em nós que estavam balanceados, quebra a ordem de busca: '
             'o 11 fica na subárvore esquerda do 10, e o 8 abaixo do 11.',
        'd': 'Também promove o 10 a raiz, como se o desbalanceamento '
             'estivesse no 13. Mas o 13 não chega a ficar desbalanceado: a '
             'rotação acontece no nó mais baixo que perdeu o equilíbrio, e '
             'ela sozinha devolve a altura original da subárvore.',
    },
    'conceito': 'Na AVL, depois de inserir, sobe-se pelo caminho até o '
                'primeiro nó com fator de balanceamento ±2. O formato do '
                'caminho até o novo nó decide a rotação: esquerda-esquerda ou '
                'direita-direita pedem rotação simples; esquerda-direita ou '
                'direita-esquerda pedem rotação dupla.',
    'pegadinha': 'As alternativas c e d têm cara de "árvore bem '
                 'balanceada", com raiz nova e tudo arrumado. A AVL não '
                 'reconstrói a árvore: faz o mínimo de rotações no ponto '
                 'mais baixo do desequilíbrio, e o resto fica onde estava.',
    'referencia': 'LAFORE, R. Data Structures & algorithms in Java. '
                  'Indianópolis: Sams Publishing, 2003.',
    'verificado': 'Inserção AVL implementada e executada sobre a árvore da '
                  'figura: o resultado coincide só com a alternativa a.',
}

RA[2] = {
    'itens': {
        'I': 'VERDADEIRA. Vários sistemas (entregador, produção, central e '
             'outros que virão) precisam ser avisados sempre que o estado de '
             'um pedido muda, sem que o pedido conheça cada um deles. É a '
             'definição do Observer: um sujeito mantém uma lista de '
             'observadores e notifica todos quando muda. Incluir um sistema '
             'novo é só registrar mais um observador.',
        'II': 'FALSA. O Observer é um padrão de projeto de comportamento, '
              'dentro de um programa; não realiza o estilo arquitetural '
              'cliente-servidor. No cliente-servidor quem toma a iniciativa '
              'é o cliente, que faz uma requisição e recebe a resposta. No '
              'Observer quem toma a iniciativa é o sujeito, que avisa os '
              'observadores. O estilo arquitetural mais próximo é o '
              'publicador-assinante, ou a arquitetura orientada a eventos.',
    },
    'correta': 'A asserção I é verdadeira e a II é falsa. Sendo a II falsa, '
               'nem se discute se ela justifica a I.',
    'distratores': {
        'a': 'Exige a II verdadeira. Ela confunde o padrão de projeto com o '
             'estilo cliente-servidor.',
        'b': 'Também exige a II verdadeira.',
        'd': 'Diz que a I é falsa, mas o requisito descrito é o caso de uso '
             'clássico do Observer.',
    },
    'conceito': 'Observer: dependência um-para-muitos em que a mudança de '
                'estado de um objeto (o sujeito) é notificada '
                'automaticamente aos dependentes (os observadores), que se '
                'registram e saem da lista sem que o sujeito conheça suas '
                'classes concretas.',
    'pegadinha': 'A II soa plausível porque "o servidor envia notificações '
                 'aos clientes" lembra o Observer. Mas padrão de projeto e '
                 'estilo arquitetural estão em níveis diferentes, e no '
                 'cliente-servidor a comunicação parte do cliente.',
    'referencia': 'GAMMA, E. et al. Padrões de projeto: soluções reutilizáveis '
                  'de software orientado a objetos. Porto Alegre: Bookman, '
                  '2000.',
}

RA[3] = {
    'itens': {},
    'correta': 'Um membro protegido é visível dentro da própria classe e nas '
               'classes que herdam dela. É exatamente o meio-termo entre o '
               'privado (só a própria classe) e o público (qualquer classe).',
    'distratores': {
        'a': 'Atributo privado só é acessado por métodos da PRÓPRIA classe, '
             'qualquer que seja a visibilidade deles. Os métodos das classes '
             'descendentes, protegidos ou não, não enxergam o atributo '
             'privado do ancestral.',
        'b': 'Mesmo erro, com métodos públicos: a visibilidade do método da '
             'subclasse não dá a ele acesso ao que é privado na superclasse.',
        'c': 'Inverte a regra. Todo método da classe, seja privado, '
             'protegido ou público, acessa os atributos privados dela. O '
             'modificador do método diz quem pode CHAMÁ-LO, e não o que ele '
             'pode acessar.',
    },
    'conceito': 'Visibilidade controla quem enxerga um membro a partir de '
                'fora. Privado: só a própria classe. Protegido: a classe e '
                'suas descendentes. Público: todos. Dentro da classe, todos '
                'os métodos enxergam todos os membros.',
    'pegadinha': 'Misturar duas coisas: a visibilidade do método que tenta '
                 'acessar e a visibilidade do atributo acessado. Quem decide '
                 'o acesso é o modificador do atributo e a relação entre as '
                 'classes.',
    'referencia': 'DEITEL, P.; DEITEL, H. Java: como programar. 10. ed. São '
                  'Paulo: Pearson, 2016.',
}

RA[4] = {
    'itens': {
        'I': 'VERDADEIRA. Com N bits de endereço há 2^N endereços distintos. '
             'Com 8 bits, 2^8 = 256 células, numeradas de 0 a 255.',
        'II': 'VERDADEIRA. O registrador de dados tem a largura de uma '
              'célula, e a célula é a unidade mínima de acesso. Com 8 bits o '
              'maior inteiro sem sinal é 255, e 2 024 precisa de 11 bits '
              '(2^10 = 1 024 ≤ 2 024 < 2 048 = 2^11). O valor tem de ser '
              'dividido em duas células, ou seja, duas operações de escrita.',
        'III': 'FALSA. O registrador de dados transporta o conteúdo de uma '
               'célula inteira por operação, e o texto diz que se busca ou '
               'armazena sempre a célula completa. Por isso a largura do '
               'registrador de dados é a largura da memória. Um registrador '
               'de 12 bits corresponde a células de 12 bits, não de 8.',
    },
    'correta': 'I e II são verdadeiras e III é falsa.',
    'distratores': {
        'a': 'Deixa de fora a II: 2 024 não cabe em 8 bits.',
        'c': 'Inclui a III. A largura do registrador de dados e a da memória '
             'são iguais, porque a célula é transferida inteira.',
        'd': 'Inclui a III, que é falsa.',
    },
    'conceito': 'Dois números definem a memória. A largura do registrador de '
                'endereços (N bits) dá a QUANTIDADE de células, 2^N. A '
                'largura do registrador de dados dá o TAMANHO de cada '
                'célula.',
    'pegadinha': 'Confundir as duas larguras: achar que o registrador de '
                 'dados pode ser mais largo que a célula. Também vale fazer '
                 'a conta de bits do 2 024 em vez de estimar no olho.',
    'referencia': 'SCHNEIDER, G. M.; GERSTING, J. L. An invitation to computer '
                  'science. 6. ed. Boston: Course Technology, 2009.',
    'verificado': '2^8 = 256 e 2024 tem 11 bits, conferido por execução.',
}

RA[5] = {
    'itens': {},
    'correta': 'O circuito tem duas portas AND, uma com Ta e Tb e outra com '
               'Tb e Tc, ligadas a uma OR. Logo S = Ta·Tb + Tb·Tc, ou, '
               'fatorando, S = Tb·(Ta + Tc): o sistema liga quando Tb está '
               'alto e pelo menos um dos outros dois também está. Lendo os '
               'intervalos no diagrama, em t1 Tb e Tc estão altos; em t6 os '
               'três estão altos; em t8 Ta e Tb estão altos. Nos demais, ou '
               'Tb está baixo (t2, t3, t5 e t7), ou Tb está alto sozinho '
               '(t4). Resposta: t1, t6 e t8.',
    'distratores': {
        'a': 'Inclui t4. Ali só Tb está alto (Ta e Tc estão baixos), e '
             'nenhuma das duas AND fecha.',
        'c': 'Inclui t2 e t4 e deixa de fora t1 e t8. Em t2 o Tb está baixo, '
             'e com ele nenhuma das AND liga.',
        'd': 'Troca t1 por t2. Em t1 Tb e Tc estão altos (S = 1); em t2 o Tb '
             'está baixo (S = 0).',
    },
    'conceito': 'Para ler um circuito combinacional junto com um diagrama de '
                'tempo, primeiro escreve-se a expressão de saída a partir '
                'das portas e depois avalia-se intervalo por intervalo. '
                'Simplificar ajuda: S = Tb·(Ta + Tc) mostra de cara que Tb '
                'baixo zera a saída.',
    'pegadinha': 'Ler as bordas no lugar dos intervalos. As transições '
                 'acontecem nas linhas tracejadas, e o valor que conta é o '
                 'nível dentro de cada intervalo.',
    'referencia': 'Enade 2017, Ciência da Computação (Bacharelado), questão 13.',
    'verificado': 'Níveis transcritos do diagrama e expressão avaliada por '
                  'execução: S = 1 em t1, t6 e t8.',
}

RA[6] = {
    'itens': {},
    'correta': 'R1 (igualdade) é a relação de equivalência mais simples: '
               'a = a; a = b implica b = a; a = b e b = c implicam a = c. R4 '
               '(a + b par) diz que a e b têm a mesma paridade. É reflexiva '
               '(a + a = 2a é par), simétrica (a + b = b + a) e transitiva: se '
               'a e b têm a mesma paridade, e b e c também, então a e c têm a '
               'mesma. R4 divide ℕ em duas classes, pares e ímpares.',
    'distratores': {
        'a': 'R2 (≤) é reflexiva e transitiva, mas não é simétrica: 1 ≤ 2 e '
             '2 ≤ 1 é falso. É uma relação de ORDEM. R3 (a = b − 1) não é '
             'nem reflexiva: a = a − 1 nunca vale.',
        'b': 'Inclui R3, que falha nas três propriedades: não é reflexiva, '
             'não é simétrica (1 = 2 − 1, mas 2 ≠ 1 − 1) e não é transitiva '
             '(1 = 2 − 1 e 2 = 3 − 1, mas 1 ≠ 3 − 1).',
        'd': 'Inclui R2, que não é simétrica.',
    },
    'conceito': 'Equivalência = reflexiva + simétrica + transitiva. Ela '
                'particiona o conjunto em classes de elementos "iguais sob '
                'algum critério" (mesma paridade, mesmo resto, mesmo valor).',
    'pegadinha': 'R2 parece segura porque é reflexiva e transitiva, as duas '
                 'propriedades mais lembradas. A simetria é a que separa '
                 'relação de equivalência de relação de ordem.',
    'referencia': 'GERSTING, J. L. Fundamentos matemáticos para a ciência da '
                  'computação. 5. ed. Rio de Janeiro: LTC, 2004.',
    'verificado': 'As três propriedades foram testadas por execução em '
                  '{0, ..., 11}: só R1 e R4 são de equivalência.',
}

RA[7] = {
    'itens': {
        'I': 'VERDADEIRA. Parte da fragilidade do Wi-Fi antigo (WEP) vinha de '
             'uma chave única compartilhada por todos. Negociar chaves '
             'individuais por sessão com criptografia de chave pública, como '
             'no TLS/SSL, elimina esse ponto, e é o caminho que o 802.11i '
             '(WPA2) seguiu.',
        'II': 'FALSA. Filtrar o tráfego entre clientes da mesma sub-rede no '
              'ponto de acesso (isolamento de clientes) não impede o ARP '
              'spoofing do ataque descrito. O intruso se passa pelo próprio '
              'AP, que é o gateway, e o tráfego desviado é o tráfego em '
              'direção ao gateway, não entre clientes. O problema está na '
              'falta de autenticação, e o filtro não resolve isso.',
        'III': 'VERDADEIRA. O homem no meio funciona porque o cliente não '
               'tem como provar que está falando com o AP legítimo. Exigir '
               'que o AP apresente um certificado verificável com uma chave '
               'pública de terceiros (uma autoridade certificadora) resolve '
               'a falta de autenticação.',
        'IV': 'VERDADEIRA. Chaves de 40 ou 64 bits são quebráveis por força '
              'bruta. Exigir 128 bits e restringir a rede a dispositivos '
              'compatíveis torna a força bruta inviável.',
    },
    'correta': 'I, III e IV são verdadeiras. São as três correções que '
               'Coulouris lista para as deficiências do projeto de segurança '
               'do 802.11: chaves individuais negociadas, autenticação do '
               'ponto de acesso e chaves longas.',
    'distratores': {
        'a': 'Deixa de fora a IV. Aumentar a chave para 128 bits é uma '
             'correção legítima contra força bruta.',
        'b': 'Deixa de fora a III, justamente a que ataca a raiz do homem no '
             'meio: a falta de autenticação.',
        'd': 'Inclui a II e deixa de fora a I. Isolar clientes não impede o '
             'intruso de se passar pelo gateway.',
    },
    'conceito': 'Homem no meio por ARP spoofing: o intruso associa o próprio '
                'MAC ao IP do gateway e recebe o tráfego destinado a ele. A '
                'defesa de fundo é autenticar as partes (certificados) e '
                'cifrar com chaves individuais, e não filtrar o tráfego.',
    'pegadinha': 'A II tem jeito de solução porque "firewall" é palavra de '
                 'segurança. Mas o tráfego desviado é o que vai para o '
                 'gateway, e o filtro entre clientes não toca nele.',
    'referencia': 'COULOURIS, G. et al. Sistemas distribuídos: conceitos e '
                  'projeto. 5. ed. Porto Alegre: Bookman, 2013.',
}

RA[8] = {
    'itens': {
        'I': 'VERDADEIRA. É a tese central de Mitnick, citada no texto: a '
             'engenharia social explora a tendência humana de contornar os '
             'controles, e nenhuma tecnologia elimina o fator humano. Por '
             'isso a vulnerabilidade é permanente.',
        'II': 'VERDADEIRA. Segurança não se compra pronta e instalada de uma '
              'vez. É um processo contínuo de avaliar riscos, aplicar '
              'controles, treinar pessoas, monitorar e revisar, como no ciclo '
              'de melhoria contínua das normas ISO/IEC 27001 e 27002.',
        'III': 'VERDADEIRA. O texto liga ética e segurança: boa parte das '
               'ameaças vem de dentro, de quem tem acesso legítimo. A '
               'conduta ética dos profissionais é, portanto, um controle de '
               'segurança.',
    },
    'correta': 'As três afirmações são verdadeiras e estão sustentadas pelos '
               'três textos de apoio: segurança da informação (Lyra), '
               'engenharia social (Mitnick) e ética (ethicsmorals).',
    'distratores': {
        'a': 'Deixa de fora a II e a III, que estão apoiadas diretamente nos '
             'textos.',
        'b': 'Deixa de fora a II. Tratar segurança como produto, e não como '
             'processo, é o erro clássico que a área combate.',
        'c': 'Deixa de fora a I. O "sempre" assusta, mas é exatamente o '
             'argumento de Mitnick sobre o elo humano.',
    },
    'conceito': 'Segurança da informação tem três pilares: pessoas, '
                'processos e tecnologia. A engenharia social ataca o pilar '
                'das pessoas, que é o mais difícil de blindar.',
    'pegadinha': 'O "sempre" da afirmação I faz muita gente descartá-la por '
                 'reflexo, como se toda generalização fosse falsa. Aqui ela '
                 'é a tese do próprio texto de apoio.',
    'referencia': 'MITNICK, K. D.; SIMON, W. L. The art of deception: '
                  'controlling the human element of security. New York: '
                  'Wiley, 2001.',
}

RA[9] = {
    'itens': {
        'I': 'VERDADEIRA. Sistemas adaptativos (tutores inteligentes, '
             'plataformas de aprendizagem adaptativa) ajustam conteúdo, '
             'ritmo e exercícios ao perfil de cada pessoa.',
        'II': 'VERDADEIRA, e justifica a I. É analisando as respostas '
              'anteriores, e procurando nelas padrões de dificuldade ou de '
              'facilidade, que o sistema monta o perfil e decide o que '
              'apresentar em seguida. A II é o mecanismo que torna a I '
              'possível.',
    },
    'correta': 'As duas são verdadeiras e a II explica a I: o sistema '
               'consegue se adaptar ao perfil (I) PORQUE aprende esse perfil '
               'a partir das respostas anteriores (II).',
    'distratores': {
        'b': 'Diz que a II não justifica a I. Mas a II é exatamente o '
             'mecanismo que torna a adaptação possível.',
        'c': 'Diz que a II é falsa. Analisar o histórico de respostas é o '
             'princípio de funcionamento desses sistemas.',
        'd': 'Diz que a I é falsa, contrariando o próprio texto de apoio.',
    },
    'conceito': 'Na asserção-razão, o teste da justificativa é ler as duas '
                'unidas por "porque" e ver se a II responde "como?" ou "por '
                'quê?" à I. Aqui responde: adapta-se porque analisa o '
                'histórico.',
    'pegadinha': 'Achar que a II está só "relacionada" e marcar b por '
                 'cautela. Quando a II descreve o mecanismo que produz a I, '
                 'ela é justificativa.',
    'referencia': 'Revista Educação. Disponível em: '
                  'http://www.revistaeducacao.com.br. Acesso em: 26 set. 2017.',
}

RA[10] = {
    'itens': {},
    'correta': 'O algoritmo é a ordenação por inserção, com dois erros. Na '
               'linha 08 a condição v[j] < chave desloca os MENORES que a '
               'chave, o que ordenaria de forma decrescente; para ordem '
               'crescente, deslocam-se os maiores: v[j] > chave. Na linha 10, '
               'v[j-1] = v[j] desloca para a esquerda e, com j = 0, acessa '
               'v[-1], fora do vetor; o deslocamento certo abre espaço à '
               'direita: v[j+1] = v[j]. Com as duas correções, a linha 13 '
               '(v[j+1] = chave) já está certa.',
    'distratores': {
        'a': 'Mexe na linha 04, que está certa: a inserção começa em i = 1 e '
             'vai até n − 1, e i < n − 1 pularia o último elemento. Também '
             'troca a linha 13, que está certa, por v[j-1] = chave.',
        'b': 'j = i + 1 começa a comparação depois da chave, e não antes. '
             'Além disso, não corrige a linha 10.',
        'd': 'Corrige a linha 10, mas estraga a 13 e deixa a 08 com o sinal '
             'invertido.',
    },
    'conceito': 'Ordenação por inserção: para cada i, guarda-se v[i] em '
                'chave, desloca-se uma casa para a direita cada elemento à '
                'esquerda que seja MAIOR que a chave e insere-se a chave no '
                'buraco que sobra, em v[j+1].',
    'pegadinha': 'Há dois erros independentes, e corrigir só um não basta. '
                 'Quem acha um erro e marca a primeira alternativa que o '
                 'menciona cai na d.',
    'referencia': 'CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. '
                  'Rio de Janeiro: Elsevier, 2012.',
    'verificado': 'Original e variantes executados sobre 200 vetores '
                  'aleatórios: só a versão com as linhas 08 e 10 corrigidas '
                  'ordena sempre; corrigir só uma delas falha.',
}

RA[11] = {
    'itens': {},
    'correta': 'O INNER JOIN mantém só as combinações que têm par nas duas '
               'tabelas. Deputado com Participacao deixa apenas os deputados '
               'que participaram de alguma seção; juntando com Secao, cada '
               'linha traz o nome do deputado e a data de uma seção em que ele '
               'esteve. É exatamente "todos os deputados que compareceram a '
               'pelo menos uma seção, com as datas".',
    'distratores': {
        'a': 'A condição usa OR: basta o deputado casar com a participação OU '
             'a seção casar com a participação. Isso gera combinações de '
             'deputados com seções em que não estiveram, um produto '
             'cartesiano filtrado de forma frouxa.',
        'b': 'O LEFT OUTER JOIN preserva todos os deputados, inclusive os '
             'que nunca compareceram, que aparecem com dataSecao nula. A '
             'questão pede só os que compareceram.',
        'c': 'O RIGHT OUTER JOIN preserva o lado direito: no final, todas as '
             'seções, inclusive as sem deputado (com nome nulo). Também não '
             'é o pedido.',
    },
    'conceito': 'INNER JOIN: só as linhas com correspondência dos dois lados. '
                'LEFT e RIGHT OUTER JOIN: preservam um dos lados inteiro e '
                'completam o outro com NULL. Numa tabela associativa como '
                'Participacao, o INNER JOIN em cadeia responde "quem fez '
                'par com quem".',
    'pegadinha': '"Todos os deputados" puxa para o LEFT JOIN. Mas a frase '
                 'continua: "que compareceram a pelo menos uma seção". Esse '
                 'filtro exclui quem não tem par, e é isso que o INNER faz.',
    'referencia': 'ELMASRI, R.; NAVATHE, S. B. Sistemas de banco de dados. '
                  '6. ed. São Paulo: Pearson, 2011.',
}

RA[12] = {
    'itens': {
        'I': 'VERDADEIRA. O UDP não estabelece conexão, não espera '
             'confirmação nem retransmite. Por isso a latência é menor, e é '
             'a escolha quando o tempo de entrega importa mais que a '
             'garantia (voz, vídeo ao vivo, jogos).',
        'II': 'FALSA. Jogos on-line de ação usam majoritariamente UDP para o '
              'estado do jogo e a apresentação. Um pacote atrasado por '
              'retransmissão do TCP chega tarde demais para ser útil, e é '
              'melhor descartá-lo e seguir com o próximo.',
        'III': 'VERDADEIRA. O TCP garante entrega, ordem e ausência de '
               'duplicatas, com confirmações e retransmissões. Quando a '
               'confiabilidade é o requisito (transferência de arquivos, '
               'web, e-mail), é o protocolo adequado.',
    },
    'correta': 'I e III são verdadeiras e descrevem o compromisso entre os '
               'dois protocolos: o UDP ganha em latência e o TCP em '
               'confiabilidade.',
    'distratores': {
        'a': 'Marca só a II, que é falsa.',
        'b': 'Esquece a I, que é o caso de uso clássico do UDP.',
        'c': 'Inclui a II. Jogos de ação usam UDP justamente para não '
             'esperar retransmissões.',
    },
    'conceito': 'TCP: orientado à conexão, confiável, ordenado, com controle '
                'de fluxo e de congestionamento, e por isso mais lento. UDP: '
                'sem conexão e sem garantias, e por isso mais rápido e leve.',
    'pegadinha': 'Achar que jogo on-line "precisa" de TCP porque não pode '
                 'perder dados. Em tempo real, um dado atrasado vale menos '
                 'que um dado perdido.',
    'referencia': 'KUROSE, J. F.; ROSS, K. W. Redes de computadores e a '
                  'Internet. 6. ed. São Paulo: Pearson, 2013.',
}

RA[13] = {
    'itens': {},
    'correta': 'A sentença trata só de veículos elétricos, então começa com '
               '"E →". Dentro dela: é robô se for autônomo, e não é robô caso '
               'contrário. Ser autônomo basta para ser robô, e não ser '
               'autônomo implica não ser robô; juntas, as duas partes formam '
               'o bicondicional R ↔ A. Resulta P2: E → (R ↔ A).',
    'distratores': {
        'b': 'P3 = E → ((A → R) ∨ ¬R) é uma tautologia. (A → R) ∨ ¬R equivale '
             'a ¬A ∨ R ∨ ¬R, que é sempre verdadeiro porque contém R ∨ ¬R. '
             'Uma fórmula que nunca é falsa não representa uma regra.',
        'c': 'Inclui P1 = (E ∧ R) ↔ A, que diz que todo autônomo é um robô '
             'elétrico, até um veículo não elétrico. A sentença não afirma '
             'nada sobre veículos não elétricos.',
        'd': 'Inclui P1 e a tautologia P3.',
    },
    'conceito': '"Se e somente se" (↔) aparece quando a frase dá as duas '
                'direções: a condição basta (se for autônomo, é robô) e é '
                'necessária (se não for, não é). A restrição a um universo (só '
                'veículos elétricos) vira um antecedente: E → (…).',
    'pegadinha': 'P3 parece mais completa, com mais conectivos. Antes de '
                 'escolher, vale testar se a fórmula pode ser falsa: se não '
                 'pode, ela não diz nada.',
    'referencia': 'RUSSELL, S.; NORVIG, P. Inteligência artificial. 3. ed. '
                  'Rio de Janeiro: Elsevier, 2013.',
    'verificado': 'Tabelas-verdade conferidas por execução: P3 é verdadeira '
                  'nas 8 valorações; P2 só é falsa para veículo elétrico em '
                  'que R e A divergem.',
}

RA[14] = {
    'itens': {
        'I': 'VERDADEIRA. O sistema 1, 5, 10, 25 e 50 é canônico: para ele o '
             'guloso (pegar sempre a maior moeda que cabe) dá o menor número '
             'de moedas em qualquer valor. É o mesmo caso das moedas do '
             'real.',
        'II': 'FALSA. A estratégia gulosa só é ótima quando o problema tem a '
              'propriedade da escolha gulosa. No próprio troco ela falha com '
              'outros sistemas de moedas: com moedas de 1, 10 e 25, o guloso '
              'dá 30 = 25 + 1 + 1 + 1 + 1 + 1 (seis moedas), enquanto o ótimo '
              'é 10 + 10 + 10 (três).',
    },
    'correta': 'A I é verdadeira para estas moedas, e a II é falsa como regra '
               'geral. A I vale por uma propriedade do sistema de moedas, e '
               'não porque todo guloso acerte.',
    'distratores': {
        'a': 'Exige a II verdadeira. Métodos gulosos não garantem o ótimo '
             'global em geral.',
        'c': 'Diz que a I é falsa, mas para 1, 5, 10, 25 e 50 o guloso é de '
             'fato ótimo.',
        'd': 'Também nega a I.',
    },
    'conceito': 'O guloso faz a melhor escolha local e nunca volta atrás. Ele '
                'é ótimo só para problemas com escolha gulosa e subestrutura '
                'ótima (árvore geradora mínima, Huffman, troco com sistema '
                'canônico). Para sistemas de moedas arbitrários, o troco '
                'mínimo exige programação dinâmica.',
    'pegadinha': 'Como a I é verdadeira, dá vontade de achar que a II a '
                 'justifica. Mas a II é uma generalização falsa: a I é '
                 'verdadeira apesar dela, por causa das moedas escolhidas.',
    'referencia': 'CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. '
                  'Rio de Janeiro: Elsevier, 2012.',
    'verificado': 'Guloso comparado com programação dinâmica para todos os '
                  'valores de 0 a 1000 centavos: sempre iguais. Com moedas 1, '
                  '10 e 25, o guloso usa 6 moedas para 30 e o ótimo usa 3.',
}
