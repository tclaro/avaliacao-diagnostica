1 void F(int n) {
2    if(n > 0) {
3       for(int i = 0; i < n; i++) {
4          G(i);
5       }
6       F(n/2);
7    }
8 }
