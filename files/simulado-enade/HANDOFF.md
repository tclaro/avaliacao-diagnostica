# Simulado ENADE — Ciência da Computação · estado do projeto

> Atualizado após a sessão que concluiu as três fases. O que era plano virou
> entrega; o que sobrou de pendência está na §7. As armadilhas da extração
> continuam documentadas na §5 porque explicam **por que** as coisas estão
> como estão.

---

## 1. Objetivo

Site estático de revisão do simulado aplicado à turma. Duas telas:

1. **Home**: grid com as 30 questões, na numeração que os alunos viram.
2. **Questão**: enunciado + figuras + alternativas → o aluno responde de novo →
   só então abre a **resolução comentada**.

Decisão pedagógica firmada e implementada: não revelar a resposta no clique.
Refazer antes de ler o comentário é o que consolida; ler já sabendo a resposta
produz a sensação enganosa de "eu sabia". Há uma saída deliberada e discreta
("não sei responder, abrir a resolução") para quem realmente travou — ela abre
o comentário mas **não** registra a questão como respondida.

Sem backend, sem login. Progresso em `localStorage`.

---

## 2. Estado atual

| Item | Situação |
|---|---|
| Numeração alinhada (prova ↔ docx) | ✅ |
| Enunciados, itens romanos e alternativas | ✅ extraídos do `document.xml` |
| Gabaritos conferidos contra a chave oficial do INEP | ✅ 25 de 27 confirmados, 2 anuladas |
| 17 figuras extraídas, nomeadas e com descrição textual | ✅ |
| Algoritmo da questão 24 transcrito e executado | ✅ |
| Código C da questão 12 transcrito e executado | ✅ |
| **30 resoluções comentadas** | ✅ |
| **Site** | ✅ em `site/` |

---

## 3. Estrutura da pasta

```
simulado-enade/
├── HANDOFF.md                    ← este arquivo
├── origem/
│   ├── enade_q9_a_q35.docx       27 questões (Enade 2021, objetivas específicas)
│   ├── complementares.docx       3 questões autorais
│   ├── gabarito_inep_2021.pdf    chave definitiva do INEP (baixada nesta sessão)
│   └── bcc_logo_original.png   logo do curso em 1024 px (fonte das versões web)
├── dados/
│   ├── questoes.json             ← ENTREGA PRINCIPAL: as 30 questões completas
│   ├── mapeamento_questoes.json  índice original (nº, tema, gabarito, desempenho)
│   └── analise_item_lms.json     análise de item bruta do LMS (35 tentativas)
├── extracao/                     extração de texto plano antiga, COM DEFEITOS (§5)
├── figuras/                      17 PNGs + manifesto_figuras.json
├── codigos/                      SÃO EXIBIDOS AO ALUNO: só transcrição (§5.6)
│   ├── q12_busca.c               transcrição da figura, sem comentários
│   ├── q24_quicksort.txt         transcrição da figura, sem comentários
│   └── NOTAS_INTERNAS.md         os resultados de execução ficam aqui
├── ferramentas/                  scripts que produzem tudo acima (§4)
├── site/                         o site estático (§6)
│   └── imagens/                  logo e favicon, gerados do original
└── publicar/                     GERADO: a pasta que vai para o servidor
```

---

## 4. Como regerar tudo

Os arquivos em `dados/` e `site/dados.js` são **gerados**. Nunca edite os dois
últimos à mão — edite a fonte e rode os scripts na ordem:

```bash
python ferramentas/extrair_questoes.py <pasta_docx_extraido> <projeto>  # docx -> questoes.json
python ferramentas/consolidar.py ferramentas .                          # + resoluções, figuras, INEP
python ferramentas/gerar_site.py                                        # questoes.json -> site/dados.js
python ferramentas/gerar_pacote.py                                      # site/ -> publicar/ (para o servidor)
```

Na prática, para mudar o texto de uma resolução basta editar
`ferramentas/resolucoes_a.py` (questões 1–15) ou `resolucoes_b.py` (16–30) e
rodar os dois últimos comandos.

| Script | O que faz |
|---|---|
| `extrair_questoes.py` | lê `word/document.xml`, reconstrói os numerais romanos e liga as figuras |
| `conferir_inep.py` | casa as alternativas do docx com as da prova original e confere o gabarito |
| `resolucoes_a.py` / `_b.py` | o texto das 30 resoluções |
| `figuras_alt.py` | as 17 descrições textuais (só o que está desenhado — ver §5.6) |
| `auditar_vazamento.py` | barra resposta vazada em legenda ou bloco de código |
| `temas.py` | temas com acentuação correta |
| `indices_inep.py` | índices oficiais de facilidade e discriminação (uso interno) |
| `consolidar.py` | junta tudo em `dados/questoes.json` |
| `gerar_site.py` | embute os dados em `site/dados.js` |
| `gerar_pacote.py` | monta `publicar/`, a pasta que vai para o servidor |
| `algos.py`, `tm_q23.py`, `verificar.py` | executam os algoritmos das questões 12, 15, 23, 24, 26 e 28 |

---

## 5. Armadilhas verificadas (por que as coisas estão como estão)

**5.1 O offset de numeração é −8.** `numero_prova = numero_docx − 8`. As 3
complementares foram atribuídas às posições 28, 29 e 30 por inferência. Isso
**segue não confirmado** contra o LMS, mas a ordem bate com a do docx e os
gabaritos C/A/B conferem.

**5.2 Os numerais romanos são formatação, não texto.** No Word são lista
automática; a extração de texto plano os perde e cola as afirmações num
parágrafo corrido. Por isso a extração é feita lendo `w:numPr`/`w:ilvl` +
`numbering.xml`, e não o texto plano. Resultado: **58 itens em 16 questões**
(provas 3, 4, 6, 7, 9, 10, 11, 12, 16, 17, 18, 20, 21, 22, 23 e 24 — mais do
que as 11 estimadas antes), todos com rótulos contíguos I..N.

Duas confirmações independentes de que os contadores acertaram: a questão 12
bate palavra por palavra com o exemplo do schema, e na questão 4 o `IV.`
digitado à mão coincide com o rótulo reconstruído. O script emite alerta se
algum dia divergir.

**5.3 Não confie no nome dos arquivos de imagem.** Existe `image16.png` e
`image18.png`, mas **não existe `image17.png`**. O mapeamento correto vem da
ordem de aparição dos `r:embed`, já registrada em
`figuras/manifesto_figuras.json`.

**5.4 Linhas de continuação na tabela.** Seis questões têm linhas cuja primeira
célula é vazia — são continuação do enunciado, não alternativas. Tratar toda
linha após a primeira como alternativa faz perder 7 das 17 figuras. A regra
correta: é alternativa só se a coluna 0 for uma letra isolada.

**5.5 Código dentro de imagem.** Questões 12 e 24. Ambos os algoritmos estão
transcritos em `codigos/` e foram **executados**, não apenas lidos. O site
renderiza `<pre>` no lugar do print.

**5.6 Legenda de figura e bloco de código são material PRÉ-resposta.** Os dois
aparecem junto do enunciado, antes de o aluno responder — e foi por ali que as
questões 8 e 24 entregaram a resposta de graça. Foram os alunos que
reportaram.

Na questão 8, a legenda que eu havia escrito para o circuito terminava com "A
expressão resultante é ((X3 · X2') + X1')'", que é literalmente a alternativa
correta. Na 24, o `q24_quicksort.txt` trazia abaixo do pseudocódigo um bloco
"Verificado por execução" dizendo `(afirmação I é verdadeira)` e
`(afirmação II é falsa)` — e como o gabarito é "I e III", isso elimina as
outras três alternativas sozinho.

Nada disso vinha do docx nem do enunciado oficial do INEP: conferido contra a
prova original, que só pergunta "Qual das alternativas apresenta a expressão
booleana correspondente?". Era acréscimo meu.

A causa foi uma política errada, escrita na própria docstring do
`figuras_alt.py`: a legenda devia ser "completa o bastante para responder à
questão sem ver a imagem". A regra certa é outra — **a legenda descreve apenas
o que está desenhado, nunca o que se conclui**. Quem vê a imagem e quem lê a
legenda precisam receber a mesma informação. Descrever a topologia do circuito
é acessibilidade; dizer a que expressão ela equivale é gabarito.

Corrigido em 8 legendas (provas 8, 12, 14, 19, 21 e 23) e nos dois arquivos de
código, que agora contêm só a transcrição. Toda a verificação por execução
migrou para `codigos/NOTAS_INTERNAS.md` e para o campo `verificado` da
resolução, que só abre depois da resposta.

`ferramentas/auditar_vazamento.py` passou a rodar dentro do `gerar_site.py`:
procura frases de veredito e alternativas correta reproduzidas no material
pré-resposta, e **aborta o build** se achar. Testado plantando um vazamento de
propósito.

---

## 6. O site

`site/index.html` — abre direto do disco, sem servidor, porque os dados vão
embutidos em `site/dados.js` (`fetch` em `file://` é bloqueado por CORS).

- O site se chama **Avaliação Diagnóstica — BCC**, com o logo do curso no canto
  superior direito do cabeçalho e como favicon. Os arquivos servidos estão em
  `site/imagens/` (192 px para o cabeçalho, 64 px para o favicon), gerados a
  partir de `origem/bcc_logo_original.png` (1024 px, fundo transparente).
- Paleta herdada do projeto **Canjica** (`frontend/src/tema.css`): fundo
  preto-azulado, ciano como cor de ação. A ela se soma o laranja institucional
  do curso, `--bcc: #ec8410`, amostrado do anel do logo. A divisão é simples:
  laranja é identidade (só a palavra "BCC" no título e o logo), ciano é ação
  (links, botões, números do progresso).
- Mobile-first, verificado em 375 px sem estouro horizontal.
- Figuras com descrição textual completa como `figcaption` — nas questões em
  que a figura decide a resposta (Dijkstra, Turing, histograma, circuito), a
  descrição é suficiente para responder sem ver a imagem.
- Questões canceladas pelo INEP levam a tag `CANCELADA` na grade e no
  cabeçalho, um aviso no topo da página e a explicação do motivo ao fim da
  resolução.
- **O percentual de acerto da turma continua fora do site**, conforme decidido:
  o número está inflado por uso de IA e viraria falsa segurança. No lugar dele,
  cada questão mostra a **dificuldade nacional** do Enade 2021 — a faixa do
  INEP (Muito difícil / Difícil / Médio / Fácil) e o percentual de acerto de
  todos os concluintes do país. São 25 das 30: as duas canceladas não têm
  índice, e as três complementares são autorais. As seis questões que o INEP
  descartou do cálculo da nota nacional trazem uma nota explicando isso. A
  fonte é creditada no rodapé da home.
- **A dificuldade só aparece depois que o aluno responde**, pela mesma razão
  que a resolução: saber de antemão que a questão é "muito difícil" muda como
  ele a encara e contamina a tentativa. Na página da questão ela abre junto com
  a resolução, logo abaixo do veredito, onde serve de contexto para o resultado
  ("errei, mas só 12% do país acertou"). Na grade, o selo de dificuldade
  aparece apenas nos cartões já respondidos — do contrário vazaria antes de o
  aluno abrir a questão.
- O índice de discriminação (ponto-bisserial) **não** é exibido: é medida
  técnica, e um número negativo sem contexto confunde mais do que informa. O
  que aparece é a frase sobre o descarte.

### Publicação

**Não suba a pasta do projeto.** Rode `python ferramentas/gerar_pacote.py` e
suba o conteúdo de `publicar/`. Copiar a pasta inteira tem dois problemas:

1. O ponto de entrada ficaria em `site/index.html`, porque o site referencia
   `../figuras/` e precisa ser servido a partir da raiz do projeto — a URL
   viraria `dominio.com/site/index.html`.
2. Iriam junto o `HANDOFF.md`, a `analise_item_lms.json` e o
   `mapeamento_questoes.json`, que trazem o desempenho da turma e a observação
   de que parte dela usou IA na aplicação. Material interno.

O pacote tem 24 arquivos e 0,6 MB: `index.html` na raiz, `estilo.css`,
`app.js`, `dados.js`, `imagens/` e `figuras/`. São arquivos estáticos — não
precisa de PHP, banco nem nada rodando no servidor. Serve em Apache, nginx,
GitHub Pages, Netlify ou qualquer hospedagem comum.

O `gerar_pacote.py` confere sozinho, antes de dar por pronto, que todas as 17
figuras citadas nos dados existem no pacote e que nenhuma pasta interna vazou.

**Como o site sabe onde estão as figuras.** No repositório o site vive em
`site/` e as figuras um nível acima; no pacote tudo fica lado a lado. Quem
decide é o atributo `data-base` do `<body>`, que o `gerar_pacote.py` troca de
`"../"` para `""`. No `app.js` a leitura precisa comparar com `null`, e não
usar `||`: string vazia é *falsy* em JavaScript, e o fallback comeria
justamente o caso do pacote.

Para rodar localmente sem empacotar: `python -m http.server 8765` na raiz do
projeto e abrir `http://localhost:8765/site/index.html`.

**Uma ressalva honesta:** as resoluções vão todas em `dados.js`, que é público
por natureza. Um aluno determinado consegue abrir o arquivo e ler as respostas
sem responder nada. Isso é inerente a um site estático sem backend, que foi a
decisão do projeto. Se algum dia isso incomodar, a solução é um backend que
entregue a resolução só depois da resposta — o que traz login, servidor e
manutenção junto.

---

## 7. O que sobrou — decisões que são do professor

**7.1 Duas questões foram canceladas pelo INEP — e ficaram no simulado.** A
chave definitiva traz `ANULADA` para as questões 29 e 33 do docx, que são as
**provas 21 (erosão e dilatação) e 25 (Prolog)**. O Relatório Síntese de Área
confirma que a anulação partiu da Comissão Assessora de Área e que as notas
nacionais foram calculadas sobre 25 questões. As duas foram mantidas no site,
com a tag `CANCELADA` na grade e no cabeçalho, e com o motivo explicado ao fim
da resolução (§9).

Vale notar que a prova 21 já vinha sinalizada pelo LMS com "Revisão
recomendada" e tinha o segundo pior acerto da turma (28,6%) — e foi também a
questão mais difícil do país, com 10% de acerto e discriminação −0,08.

**7.2 Seis questões foram descartadas da nota nacional pelo INEP.** Além das
duas anuladas, o critério Ponto-Bisserial eliminou do cômputo da nota as
questões 12, 13, 17, 21, 25 e 32 do docx — as **provas 4, 5, 9, 13, 17 e 24**.
São questões com discriminação nula ou negativa: os estudantes que foram
melhor na prova como um todo acertaram MENOS essas questões, o que é assinatura
de item defeituoso. A nota nacional saiu de 19 das 27 questões.

Isso corrobora dois palpites do handoff antigo: a prova 5 (desenvolvimento
iterativo) estava na lista de "desconfiar", e tem discriminação −0,04; e a
prova 9 (exclusão mútua), a pior da turma, tem 12% de acerto nacional e
discriminação −0,01. Os índices oficiais de todas as 27 estão em
`ferramentas/indices_inep.py` e, por serem dados nacionais limpos, **passaram a
ser exibidos no site** no lugar do percentual da turma — mas só depois que o
aluno responde (§6).

**7.3 Configuração do quiz no LMS**, para a próxima aplicação:

- Provas 1, 2 e 3 ficaram como "Resposta Múltipla" em vez de "Múltipla
  Escolha", o que permite crédito parcial em questão de alternativa única.
- Prova 10 tem inconsistência de pontuação (média 0,24 e desvio 0,22 não
  fecham com 54,29% de acerto). **O gabarito dela está confirmado contra o
  INEP**, então o problema é de configuração, não de conteúdo.

**7.4 A estatística da turma segue contaminada.** Tempo médio de dois segundos
por questão em parte das submissões indica automação. Regras mantidas:
`discriminacao` não serve para nada, `acerto_turma` é **teto** e não valor, e
nada disso vai para o site. Reconsiderar só depois de expurgar as tentativas
suspeitas e recalcular no LMS.

**7.5 Revisão de conteúdo.** As resoluções foram escritas com base na chave
oficial e, onde possível, verificadas por execução — mas continuam sendo texto
gerado. Vale uma leitura das mais conceituais e discutíveis: provas 5
(desenvolvimento iterativo) e 18 (interfaces adaptativas).

---

## 8. Como os gabaritos foram conferidos

Isso não estava feito antes e mudou o quadro, então vale registrar o método.

A prova original do INEP tem **5 alternativas (A–E)** e o docx do professor tem
**4** — as questões foram adaptadas. Logo **as letras não se correspondem**:
comparar `d` do docx com `D` do INEP daria um resultado errado.

A conferência (`ferramentas/conferir_inep.py`) casa o **texto** das 4
alternativas do docx com as 5 da prova original, por emparelhamento 1:1,
descobre que letra do INEP corresponde à apontada como correta no docx e
compara com a chave. Dois cuidados que o método exigiu: alternativas do tipo
"I, III e IV" são comparadas como **conjunto de romanos** (a similaridade
textual não distingue "I, II e IV" de "I, III e IV"), e a normalização
**preserva apóstrofos e parênteses**, que são justamente o que distingue as
expressões booleanas da prova 8.

Resultado: 24 confirmadas automaticamente, 1 (prova 6) conferida à mão porque a
alternativa C ficou deslocada na extração de texto do PDF, e 2 anuladas.

---

## 9. Por que as provas 21 e 25 foram canceladas

O INEP não publica os motivos das anulações. Para a prova 21 o motivo é visível
no texto original; para a prova 25, não.

**Prova 21 (questão 29 do INEP) — defeito de redação, comprovado.** Comparando
o item a item da prova original com o docx do professor, a diferença é
cirúrgica: os itens I e III são idênticos, e nos itens II e IV o docx trocou
uma única palavra. No original, os dois diziam "calculamos o valor **mínimo**
de pixel sobreposto por B e substituímos o pixel da imagem [...] por esse valor
**máximo**" — calculam o mínimo e substituem pelo máximo, contradizendo a si
mesmos em meia frase. Isso derruba a questão, porque o item IV era um dos dois
que o gabarito oficial dava como verdadeiros (a resposta era "I e IV"): não se
sustenta como verdadeiro um item que se autocontradiz.

**O docx do professor já havia corrigido esse defeito**, trocando para "por
esse valor mínimo" nos dois itens. A questão como a turma respondeu é
consistente, e a resposta `d` se sustenta. É por isso que ela foi mantida sem
ressalva de conteúdo — só com o aviso de que não tem gabarito oficial.

**Prova 25 (questão 33 do INEP) — motivo não determinado.** O original usava
outra base de fatos, com os predicados `paide` e `maede` no lugar de `filhode`,
e o professor reescreveu a questão. Três defeitos formais são observáveis no
original, mas **nenhum deles é confirmado como a razão da anulação**:

1. `paide(X,Y)` se lê naturalmente como "X é pai de Y", mas a base só faz
   sentido no sentido oposto — `paide(ana, francisco)` com `mulher(ana)` e
   `homem(francisco)` só fecha se significar "o pai de ana é francisco". A
   direção muda o que a regra faz, e o aluno precisa deduzi-la cruzando os
   fatos de gênero.
2. Uma das alternativas chamava `mulher(X,Y)`, predicado de dois argumentos que
   não existe na base, onde `mulher` tem apenas um.
3. O enunciado pede "**uma das** situações lógicas em que duas pessoas são
   irmãs", e esse "uma das" abre espaço para defender também a alternativa que
   define irmandade sem exigir gênero.

Nenhum desses três aparece na versão adaptada, que usa `filhode`, de direção
inequívoca, e não tem a alternativa com `mulher/2`.

---

## 10. Créditos e licença

As 27 questões são do **Enade 2021, Ciência da Computação (bacharelado),
INEP/MEC** — creditado na home do site. As 3 complementares são autorais do
professor.
