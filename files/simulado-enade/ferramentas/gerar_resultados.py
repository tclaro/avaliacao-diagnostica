# -*- coding: utf-8 -*-
"""Gera site/resultados.js: o resultado individual da avaliacao presencial,
cifrado aluno a aluno, para a consulta em #/resultado.

O site e estatico e publico (GitHub Pages), entao nao existe login de
verdade. Cada aluno tem um registro cifrado com AES-256-GCM, cuja chave sai
de PBKDF2-SHA256 sobre "matricula|cpf|nascimento". O navegador refaz a
derivacao com o que o aluno digitou e so consegue abrir o registro dele. No
arquivo publico nao ha nome, CPF, matricula nem nota legivel.

Os 64 bytes derivados sao usados assim:
  [0:32]  chave AES do registro
  [32:48] identificador publico do registro (localiza sem testar todos)
  [48:64] token do aluno para registrar a disciplina na planilha. Nunca vai
          para o arquivo publico; a planilha guarda so o SHA-256 dele.

Entradas (NENHUMA vai para o Git; ficam fora do repositorio ou em privado/):
  - a planilha exportada do LMS (Quiz Format), uma linha por aluno, com as
    27 questoes na ordem da prova presencial;
  - o banco SQLite do Franciel-ia (tabelas Alunos, Matriculas e Aulas).

Saidas:
  - site/resultados.js            publico, so dados cifrados
  - privado/alunos_planilha.csv   para colar na aba "Alunos" da planilha
                                  Google (ver ferramentas/apps_script/)

O cruzamento planilha x banco e feito pelo nome. Linha que nao casar com
exatamente um aluno e listada e fica de fora, a menos que seja resolvida com
--vinculo LINHA=MATRICULA (LINHA e o numero da linha no Excel).

--sem-acrescimo MATRICULA marca o aluno que so confere o resultado: ele abre
a consulta normalmente, mas nao escolhe disciplina e fica fora do CSV.

Uso:
  python ferramentas/gerar_resultados.py PLANILHA.xlsx BANCO.db
         [--url-registro URL_DO_APPS_SCRIPT] [--vinculo 30=1234567890 ...]
         [--sem-acrescimo 1234567890 ...]
"""
import argparse
import base64
import csv
import hashlib
import io
import json
import math
import os
import re
import sqlite3
import unicodedata

import openpyxl
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESTINO_JS = os.path.join(RAIZ, 'site', 'resultados.js')
DESTINO_CSV = os.path.join(RAIZ, 'privado', 'alunos_planilha.csv')
QUESTOES = os.path.join(RAIZ, 'dados', 'presencial', 'questoes.json')

# Parametros da derivacao. Mudar qualquer um deles invalida os tokens ja
# cadastrados na planilha: regenere o CSV e cole a aba "Alunos" de novo.
ITERACOES = 600000
SAL = b'avaliacao-diagnostica-bcc:presencial:2026'
VERSAO = 1

# Componentes que nao podem receber o acrescimo, por prefixo do nome
# normalizado: Atividades Complementares nao tem nota numerica, e o TCC foi
# excluido por decisao do professor (I e II).
NAO_RECEBEM = ('ATIVIDADES COMPLEMENTARES', 'TRABALHO DE CONCLUSAO DE CURSO')

PONTO_MAXIMO = 1.0


def normalizar(texto):
    sem_acento = ''.join(c for c in unicodedata.normalize('NFKD', texto or '')
                         if not unicodedata.combining(c))
    return re.sub(r'\s+', ' ', sem_acento).strip().upper()


def so_digitos(texto):
    return re.sub(r'\D', '', texto or '')


def segredo(matricula, cpf, nascimento):
    """Mesma montagem do app.js (funcao segredoDoAluno)."""
    return '%s|%s|%s' % (so_digitos(matricula), so_digitos(cpf), nascimento)


def derivar(texto):
    return hashlib.pbkdf2_hmac('sha256', texto.encode('utf-8'), SAL,
                               ITERACOES, dklen=64)


def ponto(acertos, total):
    """Percentual de acerto vira ponto na media, de 0,1 em 0,1, sempre para
    cima, limitado a 1. A conta e feita em decimos inteiros para nao depender
    de arredondamento de ponto flutuante: 10/27 = 37,04% -> 0,4."""
    decimos = -(-acertos * 10 // total)          # teto de acertos*10/total
    return min(decimos / 10.0, PONTO_MAXIMO)


def ler_planilha(caminho, gabarito):
    ws = openpyxl.load_workbook(caminho, read_only=True).active
    linhas = ws.iter_rows(values_only=True)
    cabecalho = next(linhas)
    n = len(gabarito)
    esperado = ['#%d Student Response' % (i + 1) for i in range(n)]
    achado = [cabecalho[6 + 2 * i] for i in range(n)]
    if achado != esperado:
        raise SystemExit('ERRO: colunas de resposta inesperadas na planilha: '
                         '%r' % achado)

    saida = []
    for num, r in enumerate(linhas, 2):
        if not any(r):
            continue
        respostas = [(r[6 + 2 * i] or '').strip().upper() for i in range(n)]
        marcas = [(r[7 + 2 * i] or '').strip().upper() for i in range(n)]
        acertos = sum(1 for i in range(n) if respostas[i] == gabarito[i])

        # A planilha do LMS e o gabarito do projeto precisam concordar em
        # tudo; qualquer divergencia indica questao fora de ordem.
        for i in range(n):
            if (marcas[i] == 'C') != (respostas[i] == gabarito[i]):
                raise SystemExit('ERRO: linha %d, questao %d: LMS marcou %r '
                                 'para %r, gabarito %r' %
                                 (num, i + 1, marcas[i], respostas[i],
                                  gabarito[i]))
        if (float(r[3]), float(r[4])) != (float(acertos), float(n)):
            raise SystemExit('ERRO: linha %d: LMS diz %s/%s, recontagem deu '
                             '%d/%d' % (num, r[3], r[4], acertos, n))

        primeiro = (r[1] or '').strip()
        ultimo = (r[2] or '').strip()
        # Em alguns registros o LMS repete o nome completo nos dois campos.
        nome = primeiro if normalizar(primeiro) == normalizar(ultimo) \
            else ('%s %s' % (primeiro, ultimo)).strip()
        saida.append({'linha': num, 'nome_lms': nome, 'respostas': respostas,
                      'acertos': acertos, 'total': n,
                      'percentual_lms': float(r[5])})
    return saida


def ler_banco(caminho):
    con = sqlite3.connect('file:%s?mode=ro' % caminho, uri=True)
    periodo = con.execute("SELECT Valor FROM Configuracoes "
                          "WHERE Chave = 'safra_atual'").fetchone()[0]
    alunos = {}
    for (id_, nome, social, cpf, nasc) in con.execute(
            'SELECT IdAluno, Nome, NomeSocial, Cpf, DataNascimento '
            'FROM Alunos'):
        alunos[id_] = {'matricula': id_, 'nome': nome, 'social': social,
                       'cpf': so_digitos(cpf), 'nascimento': nasc,
                       'disciplinas': []}
    for (id_, num, nome) in con.execute(
            'SELECT m.IdAluno, a.NumAula, a.DescricaoLonga '
            'FROM Matriculas m JOIN Aulas a '
            '  ON a.NumAula = m.NumAula AND a.PeriodoLetivo = m.PeriodoLetivo '
            'WHERE m.PeriodoLetivo = ? ORDER BY a.DescricaoLonga', (periodo,)):
        if id_ in alunos and not normalizar(nome).startswith(NAO_RECEBEM):
            alunos[id_]['disciplinas'].append({'codigo': num, 'nome': nome})
    return alunos, periodo


def casar(linhas, alunos, vinculos):
    por_nome = {}
    for a in alunos.values():
        for n in {normalizar(a['nome']), normalizar(a['social'])} - {''}:
            por_nome.setdefault(n, []).append(a)

    casados, pendentes = [], []
    for ln in linhas:
        if ln['linha'] in vinculos:
            a = alunos.get(vinculos[ln['linha']])
            if not a:
                raise SystemExit('ERRO: --vinculo %d=%s: matricula nao existe '
                                 'no banco' % (ln['linha'],
                                               vinculos[ln['linha']]))
            candidatos = [a]
        else:
            candidatos = por_nome.get(normalizar(ln['nome_lms']), [])
        if len(candidatos) == 1:
            casados.append((ln, candidatos[0]))
        else:
            pendentes.append((ln, candidatos))

    usadas = [a['matricula'] for _, a in casados]
    repetidas = {m for m in usadas if usadas.count(m) > 1}
    if repetidas:
        raise SystemExit('ERRO: matricula casada com mais de uma linha: %s'
                         % sorted(repetidas))
    return casados, pendentes


def cifrar(ln, aluno, usa_ponto):
    if not aluno['cpf'] or not aluno['nascimento']:
        return None, 'sem CPF ou data de nascimento no banco'
    if len(aluno['cpf']) != 11 or \
            not re.match(r'^\d{2}/\d{2}/\d{4}$', aluno['nascimento']):
        return None, 'CPF ou data de nascimento em formato inesperado'

    bits = derivar(segredo(aluno['matricula'], aluno['cpf'],
                           aluno['nascimento']))
    chave, ident, token = bits[:32], bits[32:48], bits[48:64]

    conteudo = {
        'nome': aluno['social'] or aluno['nome'],
        'matricula': aluno['matricula'],
        'acertos': ln['acertos'],
        'total': ln['total'],
        'ponto': ponto(ln['acertos'], ln['total']),
        'respostas': ln['respostas'],
        'usa_ponto': usa_ponto,
        'disciplinas': aluno['disciplinas'] if usa_ponto else []
    }
    iv = os.urandom(12)
    cifrado = AESGCM(chave).encrypt(
        iv, json.dumps(conteudo, ensure_ascii=False).encode('utf-8'), None)
    registro = {'id': ident.hex(),
                'iv': base64.b64encode(iv).decode('ascii'),
                'dados': base64.b64encode(cifrado).decode('ascii')}
    planilha = {'token_sha256': hashlib.sha256(token.hex().encode('ascii'))
                .hexdigest(),
                'matricula': aluno['matricula'],
                'nome': conteudo['nome'],
                'ponto': ('%.1f' % conteudo['ponto']).replace('.', ','),
                'disciplinas': ' | '.join(d['nome']
                                          for d in aluno['disciplinas'])}
    return (registro, planilha if usa_ponto else None), None


def main():
    p = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    p.add_argument('planilha')
    p.add_argument('banco')
    p.add_argument('--url-registro', default='',
                   help='URL do app da web do Apps Script (termina em /exec)')
    p.add_argument('--vinculo', action='append', default=[],
                   metavar='LINHA=MATRICULA')
    p.add_argument('--sem-acrescimo', action='append', default=[],
                   metavar='MATRICULA',
                   help='aluno que so confere o resultado, sem usar o ponto')
    args = p.parse_args()

    vinculos = {}
    for v in args.vinculo:
        linha, _, matricula = v.partition('=')
        if not linha.isdigit() or not matricula.isdigit():
            raise SystemExit('ERRO: --vinculo espera LINHA=MATRICULA: %r' % v)
        vinculos[int(linha)] = matricula

    if args.url_registro and not re.match(
            r'^https://script\.google\.com/macros/s/[\w-]+/exec$',
            args.url_registro):
        raise SystemExit('ERRO: --url-registro deve ser a URL /exec do '
                         'Apps Script')

    doc = json.load(io.open(QUESTOES, encoding='utf-8'))
    questoes = doc['questoes']
    gabarito = [q['gabarito'].upper() for q in questoes]

    linhas = ler_planilha(args.planilha, gabarito)
    alunos, periodo = ler_banco(args.banco)
    casados, pendentes = casar(linhas, alunos, vinculos)

    sem_acrescimo = set(args.sem_acrescimo)
    desconhecidas = sem_acrescimo - {a['matricula'] for _, a in casados}
    if desconhecidas:
        raise SystemExit('ERRO: --sem-acrescimo com matricula que nao fez a '
                         'prova ou nao casou: %s' % sorted(desconhecidas))

    # O aluno so escolhe entre as disciplinas da lista; sem nenhuma, ele nao
    # teria onde usar o ponto. O professor decide: --sem-acrescimo.
    sem_lista = [a for _, a in casados
                 if not a['disciplinas'] and a['matricula'] not in sem_acrescimo]
    if sem_lista:
        raise SystemExit('ERRO: sem disciplina que receba o acrescimo em %s: %s.'
                         ' Use --sem-acrescimo ou confira o banco.' % (
                             periodo, ', '.join('%s (%s)' % (a['nome'],
                                                             a['matricula'])
                                                for a in sem_lista)))

    registros, para_planilha, fora = [], [], []
    for ln, aluno in casados:
        r, motivo = cifrar(ln, aluno, aluno['matricula'] not in sem_acrescimo)
        if r:
            registros.append(r[0])
            if r[1]:
                para_planilha.append(r[1])
        else:
            fora.append((ln, motivo))

    # A ordem dos registros nao pode denunciar a ordem alfabetica da planilha.
    registros.sort(key=lambda r: r['id'])

    publico = {
        'versao': VERSAO,
        'kdf': {'algoritmo': 'PBKDF2-SHA256', 'iteracoes': ITERACOES,
                'sal': base64.b64encode(SAL).decode('ascii')},
        'periodo': periodo,
        'url_registro': args.url_registro,
        'registros': registros
    }
    io.open(DESTINO_JS, 'w', encoding='utf-8', newline='\r\n').write(
        '/* GERADO por ferramentas/gerar_resultados.py. Nao edite a mao.\n'
        '   Resultado individual da avaliacao presencial, cifrado por aluno. */\n'
        'window.RESULTADOS = %s;\n' %
        json.dumps(publico, ensure_ascii=False, indent=1))

    os.makedirs(os.path.dirname(DESTINO_CSV), exist_ok=True)
    with io.open(DESTINO_CSV, 'w', encoding='utf-8', newline='') as f:
        w = csv.DictWriter(f, fieldnames=['token_sha256', 'matricula', 'nome',
                                          'ponto', 'disciplinas'])
        w.writeheader()
        w.writerows(sorted(para_planilha, key=lambda x: normalizar(x['nome'])))

    print('periodo letivo das disciplinas: %s' % periodo)
    print('linhas na planilha: %d | registros gerados: %d | no CSV: %d'
          % (len(linhas), len(registros), len(para_planilha)))
    for ln, aluno in casados:
        if aluno['matricula'] in sem_acrescimo:
            print('  - %s: so confere o resultado, sem acrescimo'
                  % ln['nome_lms'])
    for ln, candidatos in pendentes:
        print('  ! linha %d (%s, %d/%d): %s' % (
            ln['linha'], ln['nome_lms'] or 'SEM NOME', ln['acertos'],
            ln['total'],
            'nenhum aluno com esse nome' if not candidatos else
            'mais de um aluno: ' + ', '.join(a['matricula']
                                             for a in candidatos)))
    for ln, motivo in fora:
        print('  ! linha %d (%s): %s' % (ln['linha'], ln['nome_lms'], motivo))
    print('publico: %s' % os.path.relpath(DESTINO_JS, RAIZ))
    print('privado: %s  (NAO versionar)' % os.path.relpath(DESTINO_CSV, RAIZ))


if __name__ == '__main__':
    main()
