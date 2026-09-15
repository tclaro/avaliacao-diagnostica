from collections import defaultdict
D={('q0','0'):('q1','B','D'),('q0','1'):('q5','B','D'),
   ('q1','0'):('q1','0','D'),('q1','1'):('q1','1','D'),('q1','B'):('q2','B','E'),
   ('q2','0'):('q3','B','E'),
   ('q3','0'):('q4','0','E'),('q3','1'):('q4','1','E'),('q3','B'):('qf','B','D'),
   ('q4','0'):('q4','0','E'),('q4','1'):('q4','1','E'),('q4','B'):('q0','B','D'),
   ('q5','0'):('q5','0','D'),('q5','1'):('q5','1','D'),('q5','B'):('q6','B','E'),
   ('q6','1'):('q7','B','E'),
   ('q7','0'):('q4','0','E'),('q7','1'):('q4','1','E'),('q7','B'):('qf','B','D')}
def roda(entrada,limite=200,marcos=()):
    fita=defaultdict(lambda:'B')
    for i,c in enumerate(entrada): fita[i]=c
    e,h,n='q0',0,0
    saidas={}
    while n<limite:
        if e=='qf': return e,n,saidas
        k=(e,fita[h])
        if k not in D: return ('TRAVOU em '+e),n,saidas
        e,w,mv=D[k]; fita[h]=w; h+=1 if mv=='D' else -1; n+=1
        if n in marcos:
            ks=sorted(fita); s=''.join(fita[i] for i in ks).replace('B','')
            saidas[n]=s
    return 'LIMITE',n,saidas
for ent in ['110011','1001','10','1010','101','']:
    e,n,s=roda(ent,marcos=(4,8))
    print(f'{ent or "(vazia)":<8} -> {e:<14} em {n:>3} movimentos  {s}')
