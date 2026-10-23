/* Registro da disciplina escolhida para o acrescimo da avaliacao presencial.

   Publicado como "app da web" do Google Apps Script, ligado a uma planilha
   PRIVADA do professor. O site estatico (#/resultado) chama este endpoint
   por POST; a planilha nunca fica publica.

   Abas da planilha:
     Alunos     colada a partir de privado/alunos_planilha.csv (gerado por
                ferramentas/gerar_resultados.py). Colunas: token_sha256,
                matricula, nome, ponto, disciplinas.
     Escolhas   criada aqui. Uma linha por aluno, com a escolha vigente.
     Historico  criada aqui. Toda gravacao, inclusive as trocas.

   Autenticacao: o navegador so obtem o token do aluno derivando-o de
   matricula, CPF e data de nascimento (ver gerar_resultados.py). A aba Alunos
   guarda apenas o SHA-256 do token, entao nem quem ler a planilha consegue
   se passar por um aluno.

   Configuracao: PRAZO (abaixo). Depois dele, consultas continuam
   funcionando, mas novas escolhas sao recusadas. null = sem prazo. */

var PRAZO = null;            /* ex.: '2026-11-30T23:59:59-03:00' */
var TAMANHO_MAXIMO = 150;

var ABA_ALUNOS = 'Alunos';
var ABA_ESCOLHAS = 'Escolhas';
var ABA_HISTORICO = 'Historico';
var CABECALHO = ['atualizado_em', 'matricula', 'nome', 'ponto', 'disciplina',
                 'da_lista'];

function doGet() {
  return responder({ ok: true, servico: 'registro-disciplina' });
}

function doPost(e) {
  var corpo;
  try {
    corpo = JSON.parse(e.postData.contents);
  } catch (erro) {
    return responder({ ok: false, erro: 'requisicao_invalida' });
  }

  var token = String(corpo.token || '');
  if (!/^[0-9a-f]{32}$/.test(token)) {
    return responder({ ok: false, erro: 'nao_autorizado' });
  }
  var aluno = acharAluno(sha256(token));
  if (!aluno) return responder({ ok: false, erro: 'nao_autorizado' });

  if (corpo.acao === 'consultar') {
    return responder({ ok: true, escolha: escolhaAtual(aluno.matricula),
                       prazo: PRAZO, aberto: dentroDoPrazo() });
  }

  if (corpo.acao === 'registrar') {
    if (!dentroDoPrazo()) return responder({ ok: false, erro: 'prazo_encerrado' });
    var disciplina = String(corpo.disciplina || '').replace(/\s+/g, ' ').trim();
    if (!disciplina || disciplina.length > TAMANHO_MAXIMO) {
      return responder({ ok: false, erro: 'disciplina_invalida' });
    }
    if (naoRecebe(disciplina)) {
      return responder({ ok: false, erro: 'disciplina_nao_permitida' });
    }
    var trava = LockService.getScriptLock();
    trava.waitLock(10000);
    try {
      var escolha = gravar(aluno, disciplina);
      return responder({ ok: true, escolha: escolha, prazo: PRAZO,
                         aberto: true });
    } finally {
      trava.releaseLock();
    }
  }

  return responder({ ok: false, erro: 'acao_desconhecida' });
}

/* ------------------------------------------------------------- planilha */

function acharAluno(hash) {
  var folha = SpreadsheetApp.getActive().getSheetByName(ABA_ALUNOS);
  if (!folha) throw new Error('Aba "' + ABA_ALUNOS + '" nao existe.');
  var valores = folha.getDataRange().getDisplayValues();
  for (var i = 1; i < valores.length; i++) {
    if (valores[i][0] === hash) {
      return {
        matricula: valores[i][1],
        nome: valores[i][2],
        ponto: valores[i][3],
        disciplinas: valores[i][4] ? valores[i][4].split(' | ') : []
      };
    }
  }
  return null;
}

function aba(nome) {
  var planilha = SpreadsheetApp.getActive();
  var a = planilha.getSheetByName(nome);
  if (!a) {
    a = planilha.insertSheet(nome);
    a.appendRow(CABECALHO);
    a.setFrozenRows(1);
    /* matricula como texto, para nao virar numero nem perder zeros */
    a.getRange('B:B').setNumberFormat('@');
  }
  return a;
}

function escolhaAtual(matricula) {
  var valores = aba(ABA_ESCOLHAS).getDataRange().getDisplayValues();
  for (var i = 1; i < valores.length; i++) {
    if (valores[i][1] === matricula) {
      return { disciplina: valores[i][4], quando: valores[i][0] };
    }
  }
  return null;
}

function gravar(aluno, disciplina) {
  var agora = Utilities.formatDate(new Date(), 'America/Sao_Paulo',
                                   'dd/MM/yyyy HH:mm:ss');
  var linha = [agora, aluno.matricula, aluno.nome, aluno.ponto,
               semFormula(disciplina),
               aluno.disciplinas.indexOf(disciplina) !== -1 ? 'sim' : 'nao'];

  var escolhas = aba(ABA_ESCOLHAS);
  var valores = escolhas.getDataRange().getDisplayValues();
  var alvo = 0;
  for (var i = 1; i < valores.length; i++) {
    if (valores[i][1] === aluno.matricula) { alvo = i + 1; break; }
  }
  if (alvo) {
    escolhas.getRange(alvo, 1, 1, linha.length).setValues([linha]);
  } else {
    escolhas.appendRow(linha);
  }
  aba(ABA_HISTORICO).appendRow(linha);
  return { disciplina: disciplina, quando: agora };
}

/* Texto digitado pelo aluno comecando com = + - @ seria lido pela planilha
   como formula. O apostrofo o mantem como texto. */
function semFormula(texto) {
  return /^[=+\-@]/.test(texto) ? "'" + texto : texto;
}

/* --------------------------------------------------------------- apoio */

/* Atividades Complementares (sem nota) e TCC nao recebem o acrescimo. A lista
   do aluno ja vem sem eles; isto barra quem digita em "Outra". Mesma regra
   do naoRecebe() do app.js. */
function naoRecebe(texto) {
  var t = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  return /\bTCC\b|TRABALHO DE CONCLUSAO|ATIVIDADES? COMPLEMENTAR/.test(t);
}

function dentroDoPrazo() {
  return !PRAZO || new Date() <= new Date(PRAZO);
}

function sha256(texto) {
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,
                                      texto, Utilities.Charset.UTF_8);
  return bytes.map(function (b) {
    return ('0' + (b & 0xff).toString(16)).slice(-2);
  }).join('');
}

function responder(objeto) {
  return ContentService.createTextOutput(JSON.stringify(objeto))
    .setMimeType(ContentService.MimeType.JSON);
}
