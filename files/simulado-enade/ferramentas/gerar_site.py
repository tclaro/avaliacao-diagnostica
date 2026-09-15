# -*- coding: utf-8 -*-
"""Gera site/dados.js a partir de dados/questoes.json.

Os dados vao EMBUTIDOS num .js em vez de serem lidos por fetch porque assim o
site abre direto do disco (file://), sem precisar de servidor. fetch em
file:// e bloqueado por CORS na maioria dos navegadores.

Uso:  python ferramentas/gerar_site.py
"""
import io
import json
import os
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Campos que so interessam ao professor e nao precisam viajar para o navegador.
DESCARTAR = {'desempenho_turma', 'flag_lms', 'tipo_lms', 'acerto_teto',
             'gabarito_docx', 'gabarito_mapeamento', 'itens_origem',
             'conferencia_inep', 'itens_conferidos_por', 'comando_inferido',
             'posicao_inferida', 'docx', 'area_docx'}


def enxugar(q):
    saida = {k: v for k, v in q.items() if k not in DESCARTAR}
    r = saida.get('resolucao') or {}
    saida['resolucao'] = {k: v for k, v in r.items()
                          if k != 'nota_professor'}
    return saida


def main():
    # O material pre-resposta (legendas e blocos de codigo) ja entregou a
    # resposta das questoes 8 e 24 uma vez. Nao gera site sem auditar.
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from auditar_vazamento import main as auditar
    if auditar() != 0:
        raise SystemExit('site NAO gerado: corrija o vazamento acima.')
    print()

    doc = json.load(io.open(RAIZ + '/dados/questoes.json', encoding='utf-8'))
    questoes = [enxugar(q) for q in doc['questoes']]

    # codigos citados pelas questoes, embutidos para render em <pre>
    codigos = {}
    for q in questoes:
        c = q.get('codigo')
        if not c:
            continue
        caminho = os.path.join(RAIZ, c['arquivo'])
        if os.path.exists(caminho):
            codigos[c['arquivo']] = io.open(caminho, encoding='utf-8').read()
        else:
            print('AVISO: codigo nao encontrado:', c['arquivo'])

    destino = RAIZ + '/site/dados.js'
    with io.open(destino, 'w', encoding='utf-8') as f:
        f.write('/* Gerado por ferramentas/gerar_site.py a partir de\n'
                '   dados/questoes.json. Nao edite este arquivo a mao. */\n')
        f.write('window.QUESTOES = ')
        json.dump({'questoes': questoes}, f, ensure_ascii=False, indent=1)
        f.write(';\n')
        f.write('window.CODIGOS = ')
        json.dump(codigos, f, ensure_ascii=False, indent=1)
        f.write(';\n')

    faltando = [f['arquivo'] for q in questoes for f in q['figuras']
                if not os.path.exists(os.path.join(RAIZ, f['arquivo']))]
    sem_alt = [f['arquivo'] for q in questoes for f in q['figuras']
               if not f.get('descricao_alt')]
    sem_res = [q['prova'] for q in questoes
               if not q.get('resolucao', {}).get('escrita')]

    print('questoes embutidas :', len(questoes))
    print('codigos embutidos  :', list(codigos))
    print('tamanho do dados.js: %.1f KB' % (os.path.getsize(destino) / 1024))
    print('figuras ausentes   :', faltando or 'nenhuma')
    print('figuras sem alt    :', sem_alt or 'nenhuma')
    print('sem resolucao      :', sem_res or 'nenhuma')


if __name__ == '__main__':
    main()
