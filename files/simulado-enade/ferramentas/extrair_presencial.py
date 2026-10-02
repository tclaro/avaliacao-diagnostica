# -*- coding: utf-8 -*-
"""Avaliacao presencial: gera dados/presencial/questoes.json a partir do docx.

Fonte: origem/presencial/enade2017_adaptado_questoes.docx (27 questoes do
Enade 2017, objetivas especificas, adaptadas pelo professor para 4
alternativas) e o gabarito em origem/presencial/enade2017_adaptado_gabarito.docx.

Reaproveita a leitura de document.xml de extrair_questoes.py (numerais romanos
por w:numPr + numbering.xml, figuras pela ordem de r:embed). O que muda em
relacao a avaliacao online:

  - a numeracao do docx JA e a numeracao que os alunos viram (sem offset);
  - as questoes 24 e 25 estao na mesma tabela: cada linha "Questao |
    Enunciado" abre uma questao nova;
  - as alternativas da questao 1 sao imagens, nao texto;
  - formulas pequenas coladas como imagem no meio de uma frase (questoes 15 e
    25) viram texto no lugar exato em que aparecem, para que a frase se leia
    inteira no celular e no leitor de tela;
  - na questao 21 o "PORQUE" entre as assercoes foi digitado como item da
    lista automatica, e o Word o numerou como II. Ele volta a ser paragrafo e
    as assercoes sao renumeradas I e II;
  - erros de digitacao inequivocos sao corrigidos por uma lista explicita
    (CORRECOES). Cada correcao precisa encontrar o texto original, ou o script
    para: nada e trocado em silencio.

Uso:  python ferramentas/extrair_presencial.py
"""
import io
import json
import os
import re
import sys
import zipfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import extrair_questoes as X                      # noqa: E402
from temas_presencial import TEMAS                # noqa: E402

W, R, BLIP = X.W, X.R, X.BLIP
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGEM = os.path.join(RAIZ, 'origem', 'presencial')
DOCX_EXTRAIDO = os.path.join(ORIGEM, 'docx_extraido')
GABARITO_DOCX = os.path.join(ORIGEM, 'enade2017_adaptado_gabarito.docx')
QUESTOES_DOCX = os.path.join(ORIGEM, 'enade2017_adaptado_questoes.docx')
DESTINO = os.path.join(RAIZ, 'dados', 'presencial', 'questoes.json')
FIGURAS = os.path.join(RAIZ, 'figuras', 'presencial')

# Imagens que sao so um pedaco de frase (formula). Viram texto no lugar.
INLINE = {
    'image13.png': 'Σ = {(, ), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, −}.',
    'image14.png': 'L = {w | w ∈ Σ*',
    'image24.png': ' F é Θ(log n).',
    'image25.png': ' O(n log n).',
}

# (prova, texto no docx, texto corrigido). So erros inequivocos de digitacao;
# nada que mude o sentido da questao.
CORRECOES = [
    (9, 'não temas que vêm', 'são temas que vêm'),
    (11, 'Qual código SPL', 'Qual código SQL'),
    (12, 'Diferentemente do UDEP', 'Diferentemente do UDP'),
    (12, 'O TCP é o mais eficiente que o UDP', 'O TCP é mais eficiente que o UDP'),
    (13, 'pode ser um robô ®', 'pode ser um robô (R)'),
    (15, 'a cadeira x', 'a cadeia x'),
    # exemplo adulterado na adaptacao; o original do INEP e x = (2 + (3 - 4))
    (15, 'x = 2 + (3 – 4 ))', 'x = (2 + (3 – 4))'),
    (15, 'em uma cadeira', 'em uma cadeia'),
    (15, "ocorrência de ‘(‘em w", "ocorrência de ‘(’ em w"),
    (16, 'algoritmo de Krukal', 'algoritmo de Kruskal'),
    (19, 'faces dos objetivos de uma cena', 'faces dos objetos de uma cena'),
    (19, 'de Phong (à direta)', 'de Phong (à direita)'),
    (19, 'é necessário supr que', 'é necessário supor que'),
    (19, 'AZEBEDO, E;', 'AZEVEDO, E.;'),
    (24, '(Vacuum-Cleaner Word)', '(Vacuum-Cleaner World)'),
    (24, 'Os ambientes pode estar', 'Os ambientes podem estar'),
    (24, 'identificação de sujeita', 'identificação de sujeira'),
    (24, 'O agente pode executas', 'O agente pode executar'),
    (24, 'comandos: direito, esquerda', 'comandos: direita, esquerda'),
    (25, 'O número de chamadas recursivas da Função F',
     'O número de chamadas recursivas da função F'),
    (25, 'É correto o que se afirma', 'É correto o que se afirma em'),
    (27, 'que possu duas', 'que possui duas'),
]
# "proposição verdade" aparece em varias questoes de assercao-razao. A borda
# de palavra evita casar dentro de "verdadeira".
CORRECAO_GLOBAL = [(r'é uma proposição verdade\b', 'é uma proposição verdadeira')]


def texto_paragrafo(p, rel, inline_usadas):
    """Como X.ptext, mas troca as imagens de INLINE pelo texto, no lugar."""
    o = []
    for n in p.iter():
        if n.tag == W + 't':
            o.append(n.text or '')
        elif n.tag == W + 'tab':
            o.append(' ')
        elif n.tag in (W + 'br', W + 'cr'):
            o.append('\n')
        elif n.tag == BLIP and n.get(R + 'embed'):
            nome = rel.get(n.get(R + 'embed'), '').replace('media/', '')
            if nome in INLINE:
                o.append(INLINE[nome])
                inline_usadas.add(nome)
    return re.sub(r'[ \t]+', ' ', ''.join(o)).strip()


def blocos(tc, rel, labels, inline_usadas):
    out = []
    for p in tc.iter(W + 'p'):
        t = texto_paragrafo(p, rel, inline_usadas)
        im = [rel.get(b.get(R + 'embed'), '').replace('media/', '')
              for b in p.iter(BLIP) if b.get(R + 'embed')]
        lb = labels.get(id(p))
        for nome in im:
            if nome not in INLINE:
                out.append({'tipo': 'figura', 'imagem_docx': nome})
        if not t:
            continue
        # continuacao de frase interrompida por uma formula (questao 15)
        if t[0] in ',;' and out and out[-1]['tipo'] == 'paragrafo':
            out[-1]['texto'] = out[-1]['texto'] + t
            continue
        if lb and lb['fmt'] == 'upperRoman':
            out.append({'tipo': 'item', 'rotulo': lb['rotulo'], 'texto': t})
        elif lb:
            out.append({'tipo': 'lista', 'rotulo': lb['rotulo'], 'texto': t})
        elif X.REF.search(t) and len(t) < 200:
            out.append({'tipo': 'referencia', 'texto': t})
        else:
            out.append({'tipo': 'paragrafo', 'texto': t})
    return out


def extrair(base):
    body, rel, labels = X.prep(base)
    quest = {}
    usadas = set()
    for t in body.findall(W + 'tbl'):
        rows = t.findall(W + 'tr')
        if not rows:
            continue
        if [X.ptext(c) for c in rows[0].findall(W + 'tc')][:2] != \
                ['Questão', 'Enunciado']:
            continue
        atual = None
        for r in rows:
            c = r.findall(W + 'tc')
            if len(c) < 2:
                continue
            c0 = X.ptext(c[0])
            if c0 == 'Questão':                    # nova questao na tabela
                atual = None
                continue
            if atual is None and c0.isdigit():
                atual = {'corpo': [], 'alternativas': []}
                quest[int(c0)] = atual
            if atual is None:
                continue
            bs = blocos(c[1], rel, labels, usadas)
            if X.LETRA.match(c0):
                figs = [b['imagem_docx'] for b in bs if b['tipo'] == 'figura']
                alt = {'letra': c0.lower(),
                       'texto': ' '.join(b['texto'] for b in bs
                                         if b.get('texto'))}
                if figs:
                    alt['imagem_docx'] = figs[0]
                atual['alternativas'].append(alt)
            else:
                atual['corpo'] += bs
    faltando = set(INLINE) - usadas
    if faltando:
        raise SystemExit('formulas inline nao encontradas: %s' % faltando)
    return quest, rel


def ler_gabarito(caminho):
    xml = zipfile.ZipFile(caminho).read('word/document.xml').decode('utf-8')
    gab = {}
    for linha in re.findall(r'<w:tr[ >].*?</w:tr>', xml, re.S):
        cel = [''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', c)).strip()
               for c in re.findall(r'<w:tc>.*?</w:tc>', linha, re.S)]
        if len(cel) == 2 and cel[0].isdigit() and X.LETRA.match(cel[1]):
            gab[int(cel[0])] = cel[1].lower()
    return gab


def corrigir_porque(corpo):
    """Questao 21: 'PORQUE' entrou na lista automatica e virou o item II."""
    saida, n = [], 0
    for b in corpo:
        if b['tipo'] == 'item' and b['texto'].strip().upper() == 'PORQUE':
            saida.append({'tipo': 'paragrafo', 'texto': 'PORQUE'})
            continue
        if b['tipo'] == 'item':
            n += 1
            b = dict(b, rotulo=X.roman(n))
        saida.append(b)
    return saida


def aplicar_correcoes(prova, q, alertas):
    def campos():
        for b in q['corpo']:
            if b.get('texto'):
                yield b
        for a in q['alternativas']:
            if a.get('texto'):
                yield a

    for p, velho, novo in CORRECOES:
        if p != prova:
            continue
        achou = False
        for b in campos():
            if velho in b['texto']:
                b['texto'] = b['texto'].replace(velho, novo)
                achou = True
        if not achou:
            alertas.append('prova %d: correcao nao aplicada, texto ausente: %r'
                           % (prova, velho))
    for padrao, novo in CORRECAO_GLOBAL:
        for b in campos():
            b['texto'] = re.sub(padrao, novo, b['texto'])


def comando(corpo):
    """O comando e o ultimo paragrafo antes das alternativas. A heuristica
    de extrair_questoes.py (verbos como "assinale" e "avalie") nao cobre
    comandos como "Ao final da execucao da funcao main, sera impresso", que
    sao frequentes nesta prova; nela todo enunciado termina no comando."""
    achado = X.achar_comando(corpo)
    if achado:
        return achado
    if corpo and corpo[-1]['tipo'] == 'paragrafo':
        return corpo[-1]['texto']
    return None


def montar():
    quest, rel = extrair(DOCX_EXTRAIDO)
    gab = ler_gabarito(GABARITO_DOCX)
    alertas = []
    if sorted(quest) != list(range(1, 28)):
        alertas.append('questoes encontradas: %s' % sorted(quest))
    if sorted(gab) != list(range(1, 28)):
        alertas.append('gabarito com questoes: %s' % sorted(gab))

    # figuras: nomeadas pela ordem de aparicao na questao (HANDOFF 5.3)
    os.makedirs(FIGURAS, exist_ok=True)
    zf = zipfile.ZipFile(QUESTOES_DOCX)
    manifesto = []

    saida = []
    for prova in sorted(quest):
        q = quest[prova]
        q['corpo'] = corrigir_porque(q['corpo'])
        aplicar_correcoes(prova, q, alertas)
        corpo = q['corpo']
        itens = [b for b in corpo if b['tipo'] == 'item']
        for b in itens:
            b['texto'] = X.limpar_prefixo(b['rotulo'], b['texto'], prova,
                                          alertas)
        rotulos = [b['rotulo'] for b in itens]
        if rotulos != [X.roman(i + 1) for i in range(len(rotulos))]:
            alertas.append('prova %d: rotulos nao contiguos %s'
                           % (prova, rotulos))

        n_fig = 0

        def registrar(nome, papel):
            nonlocal n_fig
            n_fig += 1
            arquivo = 'p%02d_fig%d.png' % (prova, n_fig)
            with open(os.path.join(FIGURAS, arquivo), 'wb') as f:
                f.write(zf.read('word/media/' + nome))
            manifesto.append({'arquivo': arquivo, 'origem_docx': nome,
                              'prova': prova, 'papel': papel})
            return 'figuras/presencial/' + arquivo

        figs = []
        for b in corpo:
            if b['tipo'] == 'figura':
                b['arquivo'] = registrar(b['imagem_docx'], 'enunciado')
                b['descricao_alt'] = None
                figs.append({'arquivo': b['arquivo'],
                             'imagem_docx': b['imagem_docx'],
                             'descricao_alt': None})
        alternativas = []
        for a in q['alternativas']:
            nova = {'letra': a['letra'], 'texto': a['texto']}
            if a.get('imagem_docx'):
                nova['figura'] = {
                    'arquivo': registrar(a['imagem_docx'],
                                         'alternativa ' + a['letra']),
                    'imagem_docx': a['imagem_docx'],
                    'descricao_alt': None}
            alternativas.append(nova)
        if [a['letra'] for a in alternativas] != ['a', 'b', 'c', 'd']:
            alertas.append('prova %d: alternativas %s'
                           % (prova, [a['letra'] for a in alternativas]))

        saida.append({
            'prova': prova, 'docx': prova,
            'origem': 'Enade 2017 - INEP/MEC',
            'tema': TEMAS.get(prova), 'tags': [],
            'blocos': corpo,
            'comando': comando(corpo), 'comando_inferido': True,
            'itens': [{'rotulo': i['rotulo'], 'texto': i['texto'],
                       'veredito': None} for i in itens],
            'itens_conferidos': False,
            'itens_origem': 'w:numPr + numbering.xml (rotulos reconstruidos '
                            'da lista automatica do Word)',
            'alternativas': alternativas,
            'gabarito': gab.get(prova), 'gabarito_docx': gab.get(prova),
            'gabarito_conferido_inep': False,
            'figuras': figs,
            'codigo': None,
            'resolucao': {'escrita': False}})

    with io.open(os.path.join(FIGURAS, 'manifesto_figuras.json'), 'w',
                 encoding='utf-8') as f:
        json.dump(manifesto, f, ensure_ascii=False, indent=1)
    return saida, alertas


def main():
    saida, alertas = montar()
    doc = {
        '_meta': {
            'avaliacao': 'presencial',
            'fase': '1 - estrutura extraida, sem resolucoes',
            'gerado_de': 'origem/presencial/enade2017_adaptado_questoes.docx '
                         'lido via word/document.xml; gabarito de '
                         'origem/presencial/enade2017_adaptado_gabarito.docx',
            'correcoes_de_digitacao': [
                {'prova': p, 'de': v, 'para': n} for p, v, n in CORRECOES] + [
                {'prova': 'todas', 'de': v, 'para': n}
                for v, n in CORRECAO_GLOBAL],
            'alertas': alertas},
        'questoes': saida}
    os.makedirs(os.path.dirname(DESTINO), exist_ok=True)
    with io.open(DESTINO, 'w', encoding='utf-8') as f:
        json.dump(doc, f, ensure_ascii=False, indent=1)
    print('questoes:', len(saida))
    print('figuras :', sum(len(q['figuras']) + sum(1 for a in q['alternativas']
                                                   if a.get('figura'))
                           for q in saida))
    print('alertas :', len(alertas))
    for a in alertas:
        print('  !', a)
    return 1 if alertas else 0


if __name__ == '__main__':
    sys.exit(main())
