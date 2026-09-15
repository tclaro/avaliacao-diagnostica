/* Transcricao da figura q12_fig1.png (questao 12 da prova / 20 do docx).
   Enade 2021 - Ciencia da Computacao. Numeracao de linha preservada
   conforme a imagem, porque o enunciado cita "linha 24" explicitamente. */
#include <stdio.h>                                                  /* 1 */
#define TAM 10                                                      /* 2 */
int funcao1(int vetor[], int v) {                                   /* 3 */
    int i;                                                          /* 4 */
    for (i = 0; i < TAM; i++) {                                     /* 5 */
        if (vetor[i] == v)                                          /* 6 */
            return i;                                               /* 7 */
    }                                                               /* 8 */
    return -1;                                                      /* 9 */
}                                                                   /* 10 */
int funcao2(int vetor[], int v, int i, int f) {                     /* 11 */
    int m = (i + f) / 2;                                            /* 12 */
    if (v == vetor[m])                                              /* 13 */
        return m;                                                   /* 14 */
    if (i >= f)                                                     /* 15 */
        return -1;                                                  /* 16 */
    if (v > vetor[m])                                               /* 17 */
        return funcao2(vetor, v, m+1, f);                           /* 18 */
    else                                                            /* 19 */
        return funcao2(vetor, v, i, m-1);                           /* 20 */
}                                                                   /* 21 */
int main() {                                                        /* 22 */
    int vetor[TAM] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};           /* 23 */
    printf("%d - %d", funcao1(vetor, 15), funcao2(vetor, 15, 0, TAM-1));  /* 24 */
    return 0;                                                       /* 25 */
}                                                                   /* 26 */
