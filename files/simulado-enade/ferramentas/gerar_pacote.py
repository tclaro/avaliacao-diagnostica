# -*- coding: utf-8 -*-
"""Monta publicar/ — a pasta autocontida que vai para o servidor.

Levar a pasta do projeto inteira para o ar tem dois problemas:

1. O ponto de entrada ficaria em site/index.html, porque o site referencia
   ../figuras/ e precisa ser servido a partir da raiz do projeto. A URL
   ficaria dominio.com/site/index.html em vez de dominio.com/.
2. Iriam junto o HANDOFF.md, a analise de item do LMS e o mapeamento com o
   desempenho da turma — material interno, que inclui a observacao de que
   parte da turma usou IA na aplicacao. Nada disso deve ficar publico.

Este script resolve os dois: copia so o que o navegador precisa, poe o
index.html na raiz e ajusta o data-base para que figuras/ fique ao lado.

Uso:  python ferramentas/gerar_pacote.py
"""
import io
import os
import shutil

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESTINO = os.path.join(RAIZ, 'publicar')

# Arquivos do site que vao como estao.
ARQUIVOS = ['index.html', 'estilo.css', 'app.js', 'dados.js']
# Pastas copiadas inteiras: origem -> destino (relativo a publicar/).
PASTAS = [('site/imagens', 'imagens'), ('figuras', 'figuras')]


def main():
    if os.path.isdir(DESTINO):
        shutil.rmtree(DESTINO)
    os.makedirs(DESTINO)

    for nome in ARQUIVOS:
        origem = os.path.join(RAIZ, 'site', nome)
        if nome == 'index.html':
            # No pacote, figuras/ fica ao lado do index, e nao um nivel acima.
            # newline='' preserva o fim de linha do original (CRLF)
            html = io.open(origem, encoding='utf-8', newline='').read()
            antes = html
            html = html.replace('<body data-base="../">', '<body data-base="">')
            if html == antes:
                raise SystemExit('ERRO: nao achei data-base="../" no '
                                 'index.html; o site/index.html mudou?')
            io.open(os.path.join(DESTINO, nome), 'w', encoding='utf-8',
                    newline='').write(html)
        else:
            shutil.copy2(origem, os.path.join(DESTINO, nome))

    # So imagens: o manifesto_figuras.json e material interno e nao tem uso
    # no navegador.
    so_imagens = shutil.ignore_patterns('*.json', '*.md', '*.py')
    for de, para in PASTAS:
        shutil.copytree(os.path.join(RAIZ, de), os.path.join(DESTINO, para),
                        ignore=so_imagens)

    # --- conferencias antes de dar por pronto
    problemas = []

    html = io.open(os.path.join(DESTINO, 'index.html'), encoding='utf-8').read()
    if 'data-base=""' not in html:
        problemas.append('index.html do pacote sem data-base=""')

    # toda figura citada nos dados precisa existir no pacote
    dados = io.open(os.path.join(DESTINO, 'dados.js'), encoding='utf-8').read()
    import json
    import re
    m = re.search(r'window\.AVALIACOES = (.*);\s*$', dados, re.S)
    if not m:
        problemas.append('nao consegui ler window.AVALIACOES do dados.js')
    else:
        avaliacoes = json.loads(m.group(1))
        if sorted(avaliacoes) != ['online', 'presencial']:
            problemas.append('avaliacoes no dados.js: %s' % sorted(avaliacoes))
        for av in avaliacoes.values():
            for q in av['questoes']:
                figs = q['figuras'] + [a['figura'] for a in q['alternativas']
                                       if a.get('figura')]
                for f in figs:
                    if not os.path.exists(os.path.join(DESTINO, f['arquivo'])):
                        problemas.append('figura ausente no pacote: ' +
                                         f['arquivo'])

    # figuras/ (e figuras/presencial/) so pode conter imagens
    for raiz, _, nomes in os.walk(os.path.join(DESTINO, 'figuras')):
        for f in nomes:
            if not f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif',
                                       '.svg', '.webp')):
                problemas.append('arquivo nao-imagem em figuras/: ' +
                                 os.path.relpath(os.path.join(raiz, f),
                                                 DESTINO))

    # nada de material interno
    proibidos = ['HANDOFF.md', 'dados', 'ferramentas', 'origem', 'extracao']
    for nome in proibidos:
        if os.path.exists(os.path.join(DESTINO, nome)):
            problemas.append('material interno vazou para o pacote: ' + nome)

    total = sum(os.path.getsize(os.path.join(r, f))
                for r, _, fs in os.walk(DESTINO) for f in fs)
    n = sum(len(fs) for _, _, fs in os.walk(DESTINO))

    print('pacote em: %s' % DESTINO)
    print('arquivos: %d | tamanho: %.1f MB' % (n, total / 1024 / 1024))
    print('conferencias:', 'todas passaram' if not problemas else '')
    for p in problemas:
        print('  ! ' + p)
    if problemas:
        raise SystemExit(1)
    print()
    print('Para publicar: suba o CONTEUDO de publicar/ para a raiz do site.')
    print('O ponto de entrada e o index.html, na raiz. Nao precisa de PHP,')
    print('banco nem nada rodando no servidor — sao arquivos estaticos.')


if __name__ == '__main__':
    main()
