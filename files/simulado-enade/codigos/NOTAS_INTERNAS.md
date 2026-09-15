# Notas internas sobre os códigos das questões 12 e 24

> **Não exibir ao aluno.** Os arquivos em `codigos/` são embutidos em
> `site/dados.js` e renderizados como bloco de código junto do enunciado, ou
> seja, ficam visíveis **antes** de o aluno responder. Por isso eles contêm
> apenas a transcrição do que está na figura original.
>
> Tudo que é resultado, verificação ou veredito mora aqui — ou no campo
> `verificado` da resolução, que só abre depois da resposta.
>
> Este arquivo fica fora do pacote publicado: `gerar_pacote.py` só leva
> `site/` e `figuras/`.

## Por que este arquivo existe

A questão 24 entregava a resposta. O `q24_quicksort.txt` trazia, logo abaixo do
pseudocódigo, um bloco "Verificado por execução" que dizia com todas as letras
`(afirmação I é verdadeira)` e `(afirmação II é falsa)`. Como o gabarito é
"I e III", saber o veredito de I e de II elimina as outras três alternativas —
a questão virava leitura, não raciocínio.

Foram os alunos que reportaram.

## Questão 12 — `q12_busca.c`

Transcrição da figura `q12_fig1.png` (questão 20 do docx). A numeração de linha
é preservada porque o enunciado cita "linha 24" explicitamente.

Compilado e executado (porta em `ferramentas/algos.py`, já que não há compilador
C na máquina; a divisão inteira do C foi replicada com truncamento para zero):

- a linha 24 imprime **`7 - 7`**;
- o vetor da linha 23 está ordenado, o que é a condição que permite a busca
  binária funcionar;
- `funcao2` chama a si mesma nas linhas 18 e 20 — é recursiva, não iterativa.

## Questão 24 — `q24_quicksort.txt`

Transcrição da figura `q24_fig1.png` (questão 32 do docx). É um quicksort com
partição de Lomuto e pivô no **último** elemento do intervalo.

Executado em `ferramentas/algos.py`:

- ordena corretamente vetor aleatório, já ordenado, em ordem inversa e com
  todos os elementos iguais;
- vetor **já ordenado** de 10 elementos produz profundidade de recursão 10, ou
  seja, O(n) de espaço na pilha;
- **não é estável**: a entrada `2a, 1x, 2b, 1y, 2c` sai como
  `1y, 1x, 2c, 2b, 2a`, invertendo a ordem relativa das chaves iguais;
- caso médio de 36 comparações contra 54 no pior caso, para n = 10.

Sobre o laço: `repita para j := lo até hi` inclui o próprio `hi`. Como `A[hi]`
é o pivot, a comparação `A[j] < pivot` é falsa nessa última volta e nada
acontece — o algoritmo funciona apesar de o limite usual ser `hi - 1`. Isso é
uma observação sobre a transcrição, e não sobre as afirmações da questão.
