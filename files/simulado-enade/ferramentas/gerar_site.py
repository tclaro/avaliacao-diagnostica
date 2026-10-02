# -*- coding: utf-8 -*-
"""Gera site/dados.js a partir de dados/questoes.json (avaliacao online)
e de dados/presencial/questoes.json (avaliacao presencial).

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


# Cada avaliacao vira uma chave de window.AVALIACOES; a ordem e a do seletor.
AVALIACOES = [('online', 'dados/questoes.json'),
              ('presencial', 'dados/presencial/questoes.json')]


def figuras_de(questoes):
    """Figuras do enunciado e das alternativas (questao 1 da presencial)."""
    out = []
    for q in questoes:
        out += q['figuras']
        out += [a['figura'] for a in q['alternativas'] if a.get('figura')]
    return out


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

    avaliacoes = {}
    problemas = []
    for chave, origem in AVALIACOES:
        doc = json.load(io.open(os.path.join(RAIZ, origem), encoding='utf-8'))
        questoes = [enxugar(q) for q in doc['questoes']]

        # codigos citados pelas questoes, embutidos para render em <pre>
        codigos = {}
        for q in questoes:
            c = q.get('codigo')
            if not c:
                continue
            caminho = os.path.join(RAIZ, c['arquivo'])
            if os.path.exists(caminho):
                codigos[c['arquivo']] = io.open(caminho,
                                                encoding='utf-8').read()
            else:
                problemas.append('%s: codigo nao encontrado: %s'
                                 % (chave, c['arquivo']))

        figuras = figuras_de(questoes)
        faltando = [f['arquivo'] for f in figuras
                    if not os.path.exists(os.path.join(RAIZ, f['arquivo']))]
        sem_alt = [f['arquivo'] for f in figuras if not f.get('descricao_alt')]
        sem_res = [q['prova'] for q in questoes
                   if not q.get('resolucao', {}).get('escrita')]
        problemas += ['%s: figura ausente %s' % (chave, a) for a in faltando]
        problemas += ['%s: figura sem alt %s' % (chave, a) for a in sem_alt]
        problemas += ['%s: prova %d sem resolucao' % (chave, p)
                      for p in sem_res]

        avaliacoes[chave] = {'questoes': questoes, 'codigos': codigos}
        print('%-10s questoes: %d | figuras: %d | codigos: %d'
              % (chave, len(questoes), len(figuras), len(codigos)))

    destino = RAIZ + '/site/dados.js'
    with io.open(destino, 'w', encoding='utf-8') as f:
        f.write('/* Gerado por ferramentas/gerar_site.py a partir de\n'
                '   dados/questoes.json e dados/presencial/questoes.json.\n'
                '   Nao edite este arquivo a mao. */\n')
        f.write('window.AVALIACOES = ')
        json.dump(avaliacoes, f, ensure_ascii=False, indent=1)
        f.write(';\n')

    print('tamanho do dados.js: %.1f KB' % (os.path.getsize(destino) / 1024))
    print('problemas          :', problemas or 'nenhum')
    if problemas:
        raise SystemExit(1)


if __name__ == '__main__':
    main()
