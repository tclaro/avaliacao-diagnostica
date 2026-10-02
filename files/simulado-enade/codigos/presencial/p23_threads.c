#include <stdio.h>
#include <pthread.h>

int x = 0, y = 0; // Variáveis compartilhadas

void funcao1(void *threadarg){
  x = 1;
   ... // várias instruções
  if (y == 0)
    printf("1 ");
  pthread_exit(0);
}

void funcao2(void *threadarg){
  y = 1;
... // várias instruções
  if (x == 0)
     printf("2 ");
  pthread_exit(0);
}

void main(){
  pthread_t t1, t2;
  // Cria e dispara t1 que executa funcao1
  pthread_create(&t1, NULL,(void *)funcao1, NULL);
  // Cria e dispara t2 que executa funcao2
  pthread_create(&t2, NULL,(void *)funcao2, NULL);
  // Pai espera filho terminar
  pthread_join(t1, NULL);
  // Pai espera filho terminar
  pthread_join(t2, NULL);
}
