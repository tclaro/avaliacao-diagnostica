# -*- coding: utf-8 -*-
"""Fase 1: gera dados/questoes.json a partir de word/document.xml.

Recupera os numerais romanos via w:numPr/w:ilvl + numbering.xml (HANDOFF 4.2)
e as figuras pela ordem de r:embed (HANDOFF 4.3). Nao escreve resolucoes.
"""
import json, re, sys
import xml.etree.ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
R = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
BLIP = '{http://schemas.openxmlformats.org/drawingml/2006/main}blip'

ROM = [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'),
       (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'),
       (5, 'V'), (4, 'IV'), (1, 'I')]


def roman(n):
    s = ''
    for v, l in ROM:
        while n >= v:
            s += l
            n -= v
    return s


def fmt_num(n, f):
    if f == 'upperRoman':
        return roman(n)
    if f == 'lowerRoman':
        return roman(n).lower()
    if f == 'upperLetter':
        return chr(65 + (n - 1) % 26)
    if f == 'lowerLetter':
        return chr(97 + (n - 1) % 26)
    if f == 'bullet':
        return '•'
    return str(n)


def load_numbering(path):
    try:
        root = ET.parse(path).getroot()
    except Exception:
        return {}
    abst = {}
    for a in root.findall(W + 'abstractNum'):
        lv = {}
        for l in a.findall(W + 'lvl'):
            fm = l.find(W + 'numFmt')
            st = l.find(W + 'start')
            lv[int(l.get(W + 'ilvl'))] = {
                'fmt': fm.get(W + 'val') if fm is not None else 'decimal',
                'start': int(st.get(W + 'val')) if st is not None else 1}
        abst[a.get(W + 'abstractNumId')] = lv
    out = {}
    for n in root.findall(W + 'num'):
        a = n.find(W + 'abstractNumId')
        if a is not None:
            out[n.get(W + 'numId')] = abst.get(a.get(W + 'val'), {})
    return out


def ptext(p):
    o = []
    for n in p.iter():
        if n.tag == W + 't':
            o.append(n.text or '')
        elif n.tag == W + 'tab':
            o.append(' ')
        elif n.tag in (W + 'br', W + 'cr'):
            o.append('\n')
    return re.sub(r'[ \t]+', ' ', ''.join(o)).strip()


def prep(base):
    """Retorna (body, rel, labels), com o rotulo de lista de cada paragrafo."""
    nums = load_numbering(base + '/word/numbering.xml')
    rel = {}
    try:
        for r in ET.parse(base + '/word/_rels/document.xml.rels').getroot():
            rel[r.get('Id')] = r.get('Target')
    except Exception:
        pass
    body = ET.parse(base + '/word/document.xml').getroot().find(W + 'body')
    counters = {}
    labels = {}
    for p in body.iter(W + 'p'):                      # ordem do documento
        pr = p.find(W + 'pPr')
        if pr is None:
            continue
        npr = pr.find(W + 'numPr')
        if npr is None:
            continue
        ni = npr.find(W + 'numId')
        if ni is None:
            continue
        numid = ni.get(W + 'val')
        il = npr.find(W + 'ilvl')
        ilvl = int(il.get(W + 'val')) if il is not None else 0
        lvl = nums.get(numid, {}).get(ilvl)
        if lvl is None:
            continue
        k = (numid, ilvl)
        counters[k] = counters.get(k, lvl['start'] - 1) + 1
        for kk in list(counters):                     # zera niveis mais fundos
            if kk[0] == numid and kk[1] > ilvl:
                del counters[kk]
        labels[id(p)] = {'rotulo': fmt_num(counters[k], lvl['fmt']),
                         'fmt': lvl['fmt']}
    return body, rel, labels


REF = re.compile(r'\(adaptado\)|Dispon[ií]vel em|\bed\.,|ISBN|Acesso em')
CMD = re.compile(r'avalie|assinale|analise|julgue|verifica-se|conclui-se|'
                 r'é correto|correto afirmar', re.I)
LETRA = re.compile(r'^[a-eA-E]$')
# numeral romano digitado a mao no inicio do item, alem do rotulo automatico
PREFIXO_ROMANO = re.compile(r'^([IVX]+)\s*[\.\)\-–]\s*')


def limpar_prefixo(rotulo, texto, prova, alertas):
    """Remove o numeral redigitado no texto do item, se houver.

    Divergencia entre o numeral digitado e o rotulo reconstruido significa que
    o contador de lista errou -- vira alerta em vez de correcao silenciosa.
    """
    m = PREFIXO_ROMANO.match(texto)
    if not m:
        return texto
    if m.group(1) == rotulo:
        return texto[m.end():]
    alertas.append('prova %s: item rotulado %s comeca com "%s" no texto - '
                   'numeracao reconstruida pode estar errada'
                   % (prova, rotulo, m.group(1)))
    return texto


def blocos(tc, rel, labels):
    out = []
    for p in tc.iter(W + 'p'):
        t = ptext(p)
        im = [rel.get(b.get(R + 'embed'), '').replace('media/', '')
              for b in p.iter(BLIP) if b.get(R + 'embed')]
        lb = labels.get(id(p))
        for nome in im:
            out.append({'tipo': 'figura', 'imagem_docx': nome})
        if not t:
            continue
        if lb and lb['fmt'] == 'upperRoman':
            out.append({'tipo': 'item', 'rotulo': lb['rotulo'], 'texto': t})
        elif lb:
            out.append({'tipo': 'lista', 'rotulo': lb['rotulo'], 'texto': t})
        elif REF.search(t) and len(t) < 200:
            out.append({'tipo': 'referencia', 'texto': t})
        else:
            out.append({'tipo': 'paragrafo', 'texto': t})
    return out


def extrair_enade(base):
    body, rel, labels = prep(base)
    quest = {}
    gab = {}
    for t in body.findall(W + 'tbl'):
        rows = t.findall(W + 'tr')
        if not rows:
            continue
        cells0 = rows[0].findall(W + 'tc')
        h = [ptext(c) for c in cells0]
        if h[:2] == ['Questão', 'Enunciado']:
            corpo, alts, num = [], [], None
            for r in rows[1:]:
                c = r.findall(W + 'tc')
                if len(c) < 2:
                    continue
                c0 = ptext(c[0])
                if num is None and c0.isdigit():
                    num = int(c0)
                if LETRA.match(c0):
                    alts.append({'letra': c0.lower(),
                                 'texto': ' '.join(b['texto'] for b
                                                   in blocos(c[1], rel, labels)
                                                   if b.get('texto'))})
                else:
                    corpo += blocos(c[1], rel, labels)   # linha de continuacao
            quest[num] = {'corpo': corpo, 'alternativas': alts}
        elif len(rows) == 1 and len(cells0) == 2:
            a, b = ptext(cells0[0]), ptext(cells0[1])
            if a.isdigit() and LETRA.match(b):
                gab[int(a)] = b.lower()
    return quest, gab


def extrair_compl(base):
    body, rel, labels = prep(base)
    paras = []
    for p in body.iter(W + 'p'):
        t = ptext(p)
        if t:
            paras.append((t, labels.get(id(p))))
    qs, cur = [], None
    for t, lb in paras:
        m = re.match(r'QUEST[ÃA]O COMPLEMENTAR\s*(\d+)\s*\((.+)\)', t)
        if m:
            cur = {'n': int(m.group(1)), 'area': m.group(2), 'corpo': [],
                   'alternativas': [], 'gabarito': None}
            qs.append(cur)
            continue
        if cur is None:
            continue
        mg = re.match(r'Gabarito:\s*([A-Ea-e])', t)
        if mg:
            cur['gabarito'] = mg.group(1).lower()
            continue
        ma = re.match(r'^([A-D])\)\s*(.+)$', t)
        if ma:
            cur['alternativas'].append({'letra': ma.group(1).lower(),
                                        'texto': ma.group(2)})
            continue
        if lb and lb['fmt'] == 'upperRoman':
            cur['corpo'].append({'tipo': 'item', 'rotulo': lb['rotulo'],
                                 'texto': t})
        elif lb:
            cur['corpo'].append({'tipo': 'lista', 'rotulo': lb['rotulo'],
                                 'texto': t})
        else:
            cur['corpo'].append({'tipo': 'paragrafo', 'texto': t})
    return qs


NOTA_DESEMP = ('Coorte contaminada por uso de IA. Ver secao 5 do HANDOFF.md. '
               'Nao exibir.')


def achar_comando(corpo):
    for b in reversed(corpo):
        if b['tipo'] == 'paragrafo' and CMD.search(b['texto']):
            return b['texto']
    return None


def montar(sp, proj):
    quest, gab = extrair_enade(sp + '/enade')
    compl = extrair_compl(sp + '/compl')
    mapa = {q['prova']: q for q in json.load(
        open(proj + '/dados/mapeamento_questoes.json',
             encoding='utf-8'))['questoes']}
    manif = json.load(open(proj + '/figuras/manifesto_figuras.json',
                           encoding='utf-8'))
    img2arq = {m['origem_docx']: m['arquivo'] for m in manif}

    saida, alertas = [], []
    for docx in sorted(quest):
        prova = docx - 8
        q = quest[docx]
        m = mapa[prova]
        corpo = q['corpo']
        itens = [b for b in corpo if b['tipo'] == 'item']
        for b in itens:
            b['texto'] = limpar_prefixo(b['rotulo'], b['texto'], prova, alertas)
        figs = []
        for b in corpo:
            if b['tipo'] == 'figura':
                arq = img2arq.get(b['imagem_docx'])
                if not arq:
                    alertas.append('prova %d: %s sem entrada no manifesto'
                                   % (prova, b['imagem_docx']))
                b['arquivo'] = 'figuras/' + arq if arq else None
                b['descricao_alt'] = None
                figs.append(b)
        g_docx, g_map = gab.get(docx), m['gabarito']
        if g_docx != g_map:
            alertas.append('prova %d (docx %d): gabarito docx=%s != '
                           'mapeamento=%s' % (prova, docx, g_docx, g_map))
        if len(q['alternativas']) != 4:
            alertas.append('prova %d: %d alternativas (esperado 4)'
                           % (prova, len(q['alternativas'])))
        saida.append({
            'prova': prova, 'docx': docx,
            'origem': 'Enade 2021 - INEP/MEC',
            'tema': m['tema'], 'tags': [],
            'blocos': corpo,
            'comando': achar_comando(corpo), 'comando_inferido': True,
            'itens': [{'rotulo': i['rotulo'], 'texto': i['texto'],
                       'veredito': None} for i in itens],
            'itens_conferidos': False,
            'itens_origem': 'w:numPr + numbering.xml (rotulos reconstruidos '
                            'da lista automatica do Word)',
            'alternativas': q['alternativas'],
            'gabarito': g_docx, 'gabarito_docx': g_docx,
            'gabarito_mapeamento': g_map, 'gabarito_conferido_inep': False,
            'figuras': [{'arquivo': f['arquivo'],
                         'imagem_docx': f['imagem_docx'],
                         'descricao_alt': None} for f in figs],
            'codigo': None,
            'resolucao': {'escrita': False},
            'desempenho_turma': {'acerto_teto': m['acerto_turma'],
                                 'usar_no_site': False,
                                 'nota': NOTA_DESEMP},
            'flag_lms': m['flag_lms'], 'tipo_lms': m['tipo_lms']})

    for c in compl:
        prova = 27 + c['n']
        m = mapa[prova]
        if c['gabarito'] != m['gabarito'].lower():
            alertas.append('prova %d (C%d): gabarito docx=%s != mapeamento=%s'
                           % (prova, c['n'], c['gabarito'],
                              m['gabarito'].lower()))
        itens = [b for b in c['corpo'] if b['tipo'] == 'item']
        for b in itens:
            b['texto'] = limpar_prefixo(b['rotulo'], b['texto'], prova, alertas)
        saida.append({
            'prova': prova, 'docx': 'C%d' % c['n'],
            'origem': 'Autoral do professor',
            'tema': m['tema'], 'tags': [], 'area_docx': c['area'],
            'blocos': c['corpo'],
            'comando': achar_comando(c['corpo']), 'comando_inferido': True,
            'itens': [{'rotulo': i['rotulo'], 'texto': i['texto'],
                       'veredito': None} for i in itens],
            'itens_conferidos': not itens,
            'itens_origem': 'sem itens em numeral romano neste docx',
            'alternativas': c['alternativas'],
            'gabarito': c['gabarito'], 'gabarito_docx': c['gabarito'],
            'gabarito_mapeamento': m['gabarito'].lower(),
            'gabarito_conferido_inep': None,
            'figuras': [], 'codigo': None,
            'resolucao': {'escrita': False},
            'desempenho_turma': {'acerto_teto': m['acerto_turma'],
                                 'usar_no_site': False,
                                 'nota': NOTA_DESEMP},
            'flag_lms': m['flag_lms'], 'tipo_lms': m['tipo_lms'],
            'posicao_inferida': True})
    return saida, alertas


if __name__ == '__main__':
    sp, proj = sys.argv[1], sys.argv[2]
    saida, alertas = montar(sp, proj)
    doc = {
        '_meta': {
            'fase': '1 - estrutura extraida, sem resolucoes',
            'gerado_de': 'origem/*.docx lidos via word/document.xml '
                         '(nao pela extracao de texto plano)',
            'itens_romanos': 'reconstruidos de w:numPr + numbering.xml; '
                             'conferir contra o docx antes de escrever a '
                             'resolucao (HANDOFF 4.2)',
            'figuras': 'ligadas pela ordem de r:embed via '
                       'figuras/manifesto_figuras.json (HANDOFF 4.3)',
            'pendencias': [
                'descricao_alt de todas as figuras',
                'veredito de cada item romano',
                'conferencia dos gabaritos contra a chave oficial do INEP',
                'transcricao do algoritmo da prova 24 (figuras/q24_fig1.png)',
                'tags de tema'],
            'alertas': alertas},
        'questoes': saida}
    with open(proj + '/dados/questoes.json', 'w', encoding='utf-8') as f:
        json.dump(doc, f, ensure_ascii=False, indent=1)
    print('questoes:', len(saida))
    print('alertas:', len(alertas))
    for a in alertas:
        print('  !', a)
