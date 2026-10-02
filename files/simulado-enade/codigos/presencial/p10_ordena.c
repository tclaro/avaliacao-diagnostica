01 void ordena(int *v, int n)
02 {
03   int i, j, chave;
04   for(i = 1; i < n; i++)
05   {
06      chave = v[i];
07      j = i - 1;
08      while(j >= 0 && v[j] < chave)
09      {
10          v[j-1] = v[j];
11          j = j - 1;
12      }
13      v[j+1] = chave;
14   }
15 }
