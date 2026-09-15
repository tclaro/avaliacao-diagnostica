# -*- coding: utf-8 -*-
"""Regenera schema/questao.exemplo.json a partir da entrada real da questao 12.

O exemplo antigo era um molde com campos "PENDENTE", que deixou de refletir o
formato assim que as resolucoes foram escritas. Manter o exemplo derivado do
arquivo real evita que ele volte a divergir.

Uso:  python ferramentas/gerar_schema_exemplo.py
"""
import io
import json
import os

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LEIA = [
    "Formato de cada entrada de dados/questoes.json.",
    "O exemplo abaixo NAO e um molde a preencher: e a entrada real da questao 12,",
    "copiada do arquivo gerado. Serve para mostrar que campos existem e com que",
    "nivel de detalhe eles sao preenchidos.",
    "Este arquivo e gerado por ferramentas/gerar_schema_exemplo.py; nao edite a mao.",
    "Os campos _conferido registram o que foi validado: itens_conferidos (extracao",
    "dos numerais romanos revisada) e gabarito_conferido_inep (letra casada com a",
    "chave definitiva do INEP pelo texto da alternativa, nao pela letra).",
]


def main():
    doc = json.load(io.open(RAIZ + '/dados/questoes.json', encoding='utf-8'))
    q12 = [q for q in doc['questoes'] if q['prova'] == 12][0]
    io.open(RAIZ + '/schema/questao.exemplo.json', 'w', encoding='utf-8').write(
        json.dumps({'_leia': LEIA, 'exemplo': q12}, ensure_ascii=False, indent=1))
    print('schema/questao.exemplo.json regenerado')


if __name__ == '__main__':
    main()
