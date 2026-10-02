/* Avaliacao Diagnostica - BCC (Bacharelado em Ciencia da Computacao, Senac SP)
   Aplicacao estatica de revisao do simulado. Le window.AVALIACOES (dados.js),
   roteia pelo hash e guarda o progresso do aluno em localStorage.

   Ha duas avaliacoes, escolhidas pelo seletor do cabecalho: a online
   (Enade 2021 + 3 autorais) e a presencial (Enade 2017 adaptado). Cada uma
   tem rotas, progresso e estatisticas proprios:
     #/online, #/online/q/7, #/online/estatisticas
     #/presencial, #/presencial/q/7, #/presencial/estatisticas
   Os enderecos antigos (#/q/7, #/estatisticas) continuam levando a online.

   Regra pedagogica que orienta esta tela: a resolucao NAO aparece junto com
   a questao. O aluno responde de novo e so entao o comentario abre. Ler o
   comentario ja sabendo a resposta produz a sensacao enganosa de "eu sabia". */

(function () {
  'use strict';

  /* Onde estao figuras/ em relacao a esta pagina. No repositorio o site vive
     em site/ e as figuras um nivel acima; no pacote publicado tudo fica lado a
     lado. Quem decide e o data-base do <body>, escrito pelo gerar_pacote.py. */
  var _base = document.body.getAttribute('data-base');
  var BASE = _base === null ? '../' : _base;   /* "" e valor valido: a raiz */

  var DADOS = window.AVALIACOES || {};
  var app = document.getElementById('app');

  /* ------------------------------------------------------- avaliacoes */

  /* Agrupamento das questoes em areas amplas, para a leitura "onde o pais
     foi pior". Os temas em questoes.json sao finos demais (muitas areas com
     uma questao so). Toda questao precisa estar em exatamente um grupo; o
     aviso no console pega o caso de uma questao nova ficar de fora. */
  var CONFIG = {
    online: {
      nome: 'Avaliação Online',
      edicao: 2021,
      /* chave original, de antes de existir a presencial: preserva o
         progresso de quem ja respondeu */
      chave: 'simulado-enade:progresso:v1',
      grupos: [
        { nome: 'Algoritmos e Estruturas de Dados', provas: [2, 12, 15, 24, 26] },
        { nome: 'Sistemas Operacionais, Arquitetura e Circuitos',
          provas: [1, 6, 8, 9, 20] },
        { nome: 'Engenharia de Software e IHC', provas: [5, 7, 11, 18] },
        { nome: 'Banco de Dados e Estatística', provas: [14, 19, 28, 29] },
        { nome: 'Redes, Nuvem e Segurança', provas: [13, 16, 17, 27] },
        { nome: 'IA, Teoria e Linguagens', provas: [3, 10, 21, 22, 23, 25] },
        { nome: 'Legislação (LGPD)', provas: [4, 30] }
      ],
      rodape: function () {
        return [
          'As questões 1 a 27 são do Enade 2021, Ciência da Computação ' +
          '(bacharelado), INEP/MEC. As questões 28, 29 e 30 são autorais ' +
          'do professor.',
          'Gabaritos conferidos contra o gabarito definitivo do INEP. ' +
          'Seu progresso fica salvo apenas neste navegador.',
          'A dificuldade indicada em cada questão é o percentual de ' +
          'acerto de todos os concluintes do país no Enade 2021, e não ' +
          'o desempenho desta turma. Fonte: MEC/Inep/Daes, Relatório ' +
          'Síntese de Área.'
        ];
      }
    },
    presencial: {
      nome: 'Avaliação Presencial',
      edicao: 2017,
      chave: 'simulado-enade:presencial:progresso:v1',
      grupos: [
        { nome: 'Algoritmos, Programação e Estruturas de Dados',
          provas: [1, 3, 10, 14, 16] },
        { nome: 'Sistemas Operacionais, Arquitetura e Circuitos',
          provas: [4, 5, 21, 27] },
        { nome: 'Engenharia de Software', provas: [2, 20] },
        { nome: 'Banco de Dados', provas: [11, 26] },
        { nome: 'Redes, Segurança e Sistemas Distribuídos',
          provas: [7, 8, 12, 23] },
        { nome: 'Teoria da Computação, Lógica e Compiladores',
          provas: [6, 13, 15, 17, 22, 25] },
        { nome: 'Inteligência Artificial', provas: [9, 24] },
        { nome: 'Computação Gráfica e Imagens', provas: [18, 19] }
      ],
      rodape: function (questoes) {
        var sem = questoes.filter(function (q) { return q.desconsiderada_inep; })
                          .map(function (q) { return q.prova; });
        return [
          'As ' + questoes.length + ' questões são do Enade 2017, Ciência da ' +
          'Computação (bacharelado), INEP/MEC, adaptadas pelo professor ' +
          'para quatro alternativas.',
          'Gabaritos conferidos contra o gabarito definitivo do INEP. ' +
          'Seu progresso fica salvo apenas neste navegador, separado do da ' +
          'avaliação online.',
          'A dificuldade indicada em cada questão é o percentual de ' +
          'acerto de todos os concluintes do país no Enade 2017, e não ' +
          'o desempenho desta turma.' +
          (sem.length ? ' As questões ' + juntar(sem) + ' foram ' +
            'desconsideradas pelo INEP no cálculo da nota e não têm índice.'
            : '') +
          ' Fonte: MEC/Inep, Relatório de Curso do Enade 2017.'
        ];
      }
    }
  };

  var ORDEM = ['online', 'presencial'].filter(function (k) { return DADOS[k]; });
  var PADRAO = 'online';
  var CHAVE_ULTIMA = 'simulado-enade:avaliacao';

  var atual = null;      /* chave da avaliacao em exibicao */
  var AV = null;         /* CONFIG[atual] */
  var QUESTOES = [];
  var CODIGOS = {};

  function usar(chave) {
    atual = chave;
    AV = CONFIG[chave];
    QUESTOES = DADOS[chave].questoes;
    CODIGOS = DADOS[chave].codigos || {};
    try {
      localStorage.setItem(CHAVE_ULTIMA, chave);
    } catch (e) {
      /* sem armazenamento: o seletor continua funcionando pela URL */
    }
  }

  function ultimaUsada() {
    try {
      var c = localStorage.getItem(CHAVE_ULTIMA);
      return DADOS[c] ? c : null;
    } catch (e) {
      return null;
    }
  }

  /* Endereco de uma tela da avaliacao atual (ou de outra, se informada). */
  function link(tela, prova, chave) {
    var base = '#/' + (chave || atual);
    if (tela === 'questao') return base + '/q/' + prova;
    if (tela === 'estatisticas') return base + '/estatisticas';
    return base;
  }

  /* ---------------------------------------------------------- progresso */

  function lerProgresso() {
    try {
      return JSON.parse(localStorage.getItem(AV.chave)) || {};
    } catch (e) {
      return {};
    }
  }

  function gravarProgresso(p) {
    try {
      localStorage.setItem(AV.chave, JSON.stringify(p));
    } catch (e) {
      /* modo privativo ou armazenamento bloqueado: segue sem persistir */
    }
  }

  function registrar(prova, resposta, correto) {
    var p = lerProgresso();
    p[prova] = { resposta: resposta, correto: correto, quando: Date.now() };
    gravarProgresso(p);
  }

  /* ------------------------------------------------------------ helpers */

  function el(tag, attrs, filhos) {
    var n = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'texto') n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (filhos || []).forEach(function (f) {
      if (f) n.appendChild(typeof f === 'string' ? document.createTextNode(f) : f);
    });
    return n;
  }

  function achar(prova) {
    for (var i = 0; i < QUESTOES.length; i++) {
      if (QUESTOES[i].prova === prova) return QUESTOES[i];
    }
    return null;
  }

  function limpar() {
    while (app.firstChild) app.removeChild(app.firstChild);
  }

  /* "2, 12 e 15" */
  function juntar(lista) {
    if (lista.length < 2) return lista.join('');
    return lista.slice(0, -1).join(', ') + ' e ' + lista[lista.length - 1];
  }

  /* Faixa de dificuldade do INEP -> classe css. Sao dados NACIONAIS, de
     todos os concluintes do pais; nao tem relacao com o desempenho da turma,
     que continua fora do site por estar contaminado.

     Na grade principal e na pagina da questao, a dificuldade so aparece
     DEPOIS que o aluno responde, pela mesma razao que a resolucao so aparece
     depois: saber de antemao que a questao e "muito dificil" muda a forma
     como ele a encara e contamina a tentativa.

     A tela de estatisticas (#/<avaliacao>/estatisticas) e a excecao, por
     decisao do professor: ela mostra o percentual de TODAS as questoes a
     qualquer momento, mas nunca o gabarito nem a resolucao. */
  var FAIXA = {
    'Muito difícil': 'muito-dificil',
    'Difícil': 'dificil',
    'Médio': 'medio',
    'Fácil': 'facil',
    'Muito fácil': 'facil'
  };

  function chipDificuldade(q) {
    var d = q.dificuldade_inep;
    if (!d) return null;
    return el('span', {
      class: 'dificuldade ' + (FAIXA[d.classe] || 'medio'),
      title: d.classe + ' no Enade ' + AV.edicao + ': ' + d.acerto_nacional +
             '% dos concluintes do país acertaram',
      texto: d.classe
    });
  }

  /* --------------------------------------------------------- cabecalho */

  /* Seletor Online/Presencial. Leva para a mesma tela na outra avaliacao;
     de dentro de uma questao, leva para a grade, porque a questao 7 de uma
     nao tem relacao com a questao 7 da outra. */
  function desenharCabecalho(tela) {
    var nav = document.getElementById('seletor-avaliacao');
    if (nav) {
      while (nav.firstChild) nav.removeChild(nav.firstChild);
      ORDEM.forEach(function (chave) {
        var destino = tela === 'estatisticas' ? 'estatisticas' : 'inicio';
        var a = el('a', { href: link(destino, null, chave),
                          texto: CONFIG[chave].nome });
        if (chave === atual) a.setAttribute('aria-current', 'page');
        nav.appendChild(a);
      });
    }
    var sub = document.querySelector('.topo .sub');
    if (sub) {
      sub.textContent = AV.nome + ' · revisão comentada das ' +
                        QUESTOES.length + ' questões';
    }
  }

  /* --------------------------------------------------------------- home */

  function telaInicial() {
    var prog = lerProgresso();
    var respondidas = 0;
    var acertos = 0;
    QUESTOES.forEach(function (q) {
      if (prog[q.prova]) {
        respondidas++;
        if (prog[q.prova].correto) acertos++;
      }
    });

    var pct = QUESTOES.length ? Math.round((respondidas / QUESTOES.length) * 100) : 0;

    var barra = el('div', { class: 'barra' });
    var preenchimento = el('i');
    preenchimento.style.width = pct + '%';
    barra.appendChild(preenchimento);

    var painel = el('section', { class: 'progresso' }, [
      el('div', { class: 'bloco' }, [
        el('div', { class: 'numero', texto: respondidas + '/' + QUESTOES.length }),
        el('div', { class: 'rotulo', texto: 'respondidas' })
      ]),
      el('div', { class: 'bloco' }, [
        el('div', { class: 'numero', texto: String(acertos) }),
        el('div', { class: 'rotulo', texto: 'acertos' })
      ]),
      barra
    ]);

    if (respondidas > 0) {
      var limpando = el('button', { class: 'discreto', texto: 'zerar meu progresso' });
      limpando.addEventListener('click', function () {
        if (window.confirm('Apagar suas respostas da ' + AV.nome +
                           ' e recomeçar do zero?')) {
          gravarProgresso({});
          desenhar();
        }
      });
      painel.appendChild(limpando);
    }

    var grade = el('div', { class: 'grade' });
    QUESTOES.forEach(function (q) {
      var reg = prog[q.prova];
      var classe = 'cartao';
      var selo = 'não respondida';
      if (reg) {
        classe += reg.correto ? ' acertou' : ' errou';
        selo = reg.correto ? 'acertou' : 'errou';
      } else if (q.anulada_inep) {
        classe += ' anulada';
      }
      var cabeca = el('div', { class: 'num' }, [
        document.createTextNode('Questão ' + q.prova)
      ]);
      if (q.anulada_inep) {
        cabeca.appendChild(el('span', { class: 'tag-cancelada', texto: 'cancelada' }));
      }
      var rodapeCartao = el('div', { class: 'rodape-cartao' }, [
        el('span', { class: 'selo', texto: selo }),
        reg ? chipDificuldade(q) : null
      ]);
      var cartao = el('a', { class: classe, href: link('questao', q.prova) }, [
        cabeca,
        el('div', { class: 'tema', texto: q.tema }),
        rodapeCartao
      ]);
      grade.appendChild(cartao);
    });

    var linkEstatisticas = el('a', {
      class: 'link-estatisticas',
      href: link('estatisticas'),
      texto: 'Ver o percentual de acerto de cada questão e de cada área →'
    });

    limpar();
    app.appendChild(painel);
    app.appendChild(linkEstatisticas);
    app.appendChild(grade);
    app.appendChild(rodape());
    document.title = AV.nome + ' — Avaliação Diagnóstica BCC';
    window.scrollTo(0, 0);
  }

  /* ------------------------------------------------------- estatisticas */

  function acertoNacional(q) {
    var d = q.dificuldade_inep;
    return d && typeof d.acerto_nacional === 'number' ? d.acerto_nacional : null;
  }

  function motivoSemIndice(q) {
    if (q.motivo_sem_indice) return q.motivo_sem_indice;
    return q.anulada_inep
      ? 'sem índice: cancelada pelo INEP'
      : 'sem índice: questão autoral';
  }

  function barraPercentual(pct) {
    var barra = el('div', { class: 'barra' });
    var preenchimento = el('i');
    preenchimento.style.width = pct + '%';
    barra.appendChild(preenchimento);
    return barra;
  }

  /* "2, 12 e 15" com cada numero levando para a questao. */
  function listaDeQuestoes(provas) {
    var p = el('p', { class: 'questoes-do-grupo' }, ['Questões ']);
    provas.forEach(function (n, i) {
      if (i > 0) p.appendChild(document.createTextNode(i === provas.length - 1 ? ' e ' : ', '));
      p.appendChild(el('a', { href: link('questao', n), texto: String(n) }));
    });
    return p;
  }

  function cartaoEstatistica(q, reg) {
    var pct = acertoNacional(q);
    var classe = 'cartao estatistica';
    var esquerda = el('span', {}, [document.createTextNode('Questão ' + q.prova)]);
    if (q.anulada_inep) {
      esquerda.appendChild(el('span', { class: 'tag-cancelada', texto: 'cancelada' }));
    }
    var cabeca = el('div', { class: 'num' }, [esquerda]);

    /* O icone so existe para quem ja respondeu; "abrir a resolucao" sem
       responder nao grava registro, entao tambem nao gera icone. */
    if (reg) {
      classe += reg.correto ? ' acertou' : ' errou';
      cabeca.appendChild(el('span', {
        class: 'resultado ' + (reg.correto ? 'ok' : 'nao'),
        role: 'img',
        'aria-label': reg.correto ? 'você acertou' : 'você errou',
        title: reg.correto ? 'Você acertou' : 'Você errou',
        texto: reg.correto ? '✓' : '✗'
      }));
    }

    var corpo = [cabeca, el('div', { class: 'tema', texto: q.tema })];
    if (pct === null) {
      classe += ' sem-indice';
      corpo.push(el('p', { class: 'motivo-sem-indice', texto: motivoSemIndice(q) }));
    } else {
      corpo.push(el('div', { class: 'percentual' }, [
        el('span', { class: 'valor', texto: pct + '%' }),
        el('span', { class: 'de-acerto', texto: 'de acerto' })
      ]));
      corpo.push(barraPercentual(pct));
      corpo.push(el('div', { class: 'rodape-cartao' }, [chipDificuldade(q)]));
    }
    return el('a', { class: classe, href: link('questao', q.prova) }, corpo);
  }

  function resumoDoGrupo(g) {
    var membros = g.provas.map(achar).filter(Boolean);
    var valores = membros.map(acertoNacional).filter(function (v) { return v !== null; });
    var media = valores.length
      ? Math.round(valores.reduce(function (a, b) { return a + b; }, 0) / valores.length)
      : null;
    return { nome: g.nome, provas: g.provas, total: membros.length,
             comIndice: valores.length, media: media };
  }

  function secaoGrupos() {
    var resumos = AV.grupos.map(resumoDoGrupo).sort(function (a, b) {
      if (a.media === null) return 1;
      if (b.media === null) return -1;
      return a.media - b.media;
    });

    var secao = el('section', { class: 'grupos' }, [
      el('h3', { texto: 'Por área' }),
      el('p', { class: 'sub-secao',
                texto: 'Da área em que o país foi pior para a que foi melhor. ' +
                       'A média é simples, só com as questões que têm índice.' })
    ]);

    resumos.forEach(function (r) {
      var cabeca = el('div', { class: 'cabeca-grupo' }, [
        el('h4', { texto: r.nome }),
        el('span', { class: 'media', texto: r.media === null ? '—' : r.media + '%' })
      ]);
      var detalhe = r.media === null
        ? 'nenhuma questão da área tem índice'
        : 'média de acerto' + (r.comIndice < r.total
            ? ' de ' + r.comIndice + ' das ' + r.total + ' questões (as demais não têm índice)'
            : ' de ' + r.total + (r.total === 1 ? ' questão' : ' questões'));
      var artigo = el('article', { class: 'grupo' }, [
        cabeca,
        r.media === null ? null : barraPercentual(r.media),
        listaDeQuestoes(r.provas),
        el('p', { class: 'detalhe-grupo', texto: detalhe })
      ]);
      secao.appendChild(artigo);
    });
    return secao;
  }

  function telaEstatisticas() {
    var prog = lerProgresso();

    var fora = QUESTOES.filter(function (q) {
      return !AV.grupos.some(function (g) { return g.provas.indexOf(q.prova) !== -1; });
    });
    if (fora.length && window.console) {
      console.warn('Questões da ' + AV.nome + ' fora de qualquer grupo de área:',
                   fora.map(function (q) { return q.prova; }));
    }

    var grade = el('div', { class: 'grade' });
    QUESTOES.forEach(function (q) {
      grade.appendChild(cartaoEstatistica(q, prog[q.prova]));
    });

    limpar();
    app.appendChild(el('a', { class: 'voltar', href: link('inicio'),
                              texto: '← todas as questões' }));
    app.appendChild(el('div', { class: 'cabecalho-questao' }, [
      el('h2', { texto: 'Estatísticas de acerto' }),
      el('p', { class: 'tema',
                texto: 'Percentual dos concluintes do país que acertaram cada ' +
                       'questão no Enade ' + AV.edicao + '. Não é o desempenho ' +
                       'desta turma.' })
    ]));
    app.appendChild(grade);
    app.appendChild(secaoGrupos());
    app.appendChild(rodape());
    document.title = 'Estatísticas — ' + AV.nome + ' — Avaliação Diagnóstica BCC';
    window.scrollTo(0, 0);
  }

  function rodape() {
    return el('footer', { class: 'rodape' }, AV.rodape(QUESTOES).map(function (t) {
      return el('p', { texto: t });
    }));
  }

  /* ------------------------------------------------------------ questao */

  function figura(f, prova) {
    var fig = el('figure');
    fig.appendChild(el('img', {
      src: BASE + f.arquivo,
      alt: f.descricao_alt || 'Figura da questão ' + prova,
      loading: 'lazy'
    }));
    if (f.descricao_alt) {
      fig.appendChild(el('figcaption', { texto: f.descricao_alt }));
    }
    return fig;
  }

  function blocoEnunciado(q, comandoJaExibido) {
    var caixa = el('div', { class: 'enunciado' });
    var figs = {};
    (q.figuras || []).forEach(function (f) { figs[f.imagem_docx] = f; });

    /* Quando o codigo da questao existe so como imagem, o handoff manda
       renderizar a transcricao em <pre> no lugar do print: fica legivel no
       celular, selecionavel e permite citar numero de linha. */
    var fonte = q.codigo && CODIGOS[q.codigo.arquivo];
    var codigoPendente = !!fonte;

    q.blocos.forEach(function (b) {
      if (b.tipo === 'figura') {
        if (codigoPendente) {
          codigoPendente = false;
          if (q.codigo.legenda) {
            caixa.appendChild(el('p', { texto: q.codigo.legenda }));
          }
          caixa.appendChild(el('pre', { class: 'codigo' }, [fonte]));
          return;
        }
        caixa.appendChild(figura(figs[b.imagem_docx] || b, q.prova));
      } else if (b.tipo === 'paragrafo' && b.texto === comandoJaExibido) {
        /* o comando e destacado logo acima das alternativas; nao repetir */
      } else if (b.tipo === 'item') {
        caixa.appendChild(el('div', { class: 'item-romano' }, [
          el('span', { class: 'rot', texto: b.rotulo + '.' }),
          el('p', { class: 'txt', texto: b.texto })
        ]));
      } else if (b.tipo === 'referencia') {
        caixa.appendChild(el('p', { class: 'referencia', texto: b.texto }));
      } else if (b.tipo === 'lista') {
        caixa.appendChild(el('p', { class: 'lista' },
          [b.rotulo + '. ' + b.texto]));
      } else {
        caixa.appendChild(el('p', { texto: b.texto }));
      }
    });

    if (codigoPendente) {
      caixa.appendChild(el('pre', { class: 'codigo' }, [fonte]));
    }
    return caixa;
  }

  function avisoAnulada(q) {
    return el('div', { class: 'aviso' }, [
      el('p', {}, [
        el('strong', { texto: 'Questão cancelada pelo INEP. ' }),
        'O INEP anulou esta questão no gabarito definitivo do Enade ' +
        AV.edicao + ', então ela não tem resposta oficial. Ela foi mantida ' +
        'aqui porque o conteúdo continua valendo — e o motivo do ' +
        'cancelamento está explicado no fim da resolução. Vale pelo ' +
        'conceito, não pelo placar.'
      ])
    ]);
  }

  function telaQuestao(prova) {
    var q = achar(prova);
    if (!q) { location.hash = link('inicio'); return; }

    var prog = lerProgresso();
    var jaRespondeu = !!prog[q.prova];
    var escolhida = jaRespondeu ? prog[q.prova].resposta : null;

    limpar();
    app.appendChild(el('a', { class: 'voltar', href: link('inicio'),
                              texto: '← todas as questões' }));

    var titulo = el('h2', {}, [document.createTextNode('Questão ' + q.prova)]);
    if (q.anulada_inep) {
      titulo.appendChild(el('span', { class: 'tag-cancelada grande',
                                      texto: 'cancelada' }));
    }
    app.appendChild(el('div', { class: 'cabecalho-questao' }, [
      titulo,
      el('p', { class: 'tema', texto: q.tema })
    ]));

    if (q.anulada_inep) app.appendChild(avisoAnulada(q));

    app.appendChild(blocoEnunciado(q, q.comando));

    if (q.comando) {
      app.appendChild(el('p', { class: 'comando', texto: q.comando }));
    }

    var lista = el('div', { class: 'alternativas' });
    var entradas = {};

    q.alternativas.forEach(function (a) {
      var rotulo = el('label', { class: 'alt' + (a.figura ? ' com-figura' : '') });
      var radio = el('input', { type: 'radio', name: 'alt' });
      radio.value = a.letra;
      var corpo = el('div', {}, [
        el('span', { class: 'letra', texto: a.letra + ') ' }),
        a.texto ? document.createTextNode(a.texto) : null
      ]);
      /* alternativa desenhada (questao 1 da presencial: arvores) */
      if (a.figura) {
        corpo.appendChild(el('img', {
          class: 'figura-alternativa',
          src: BASE + a.figura.arquivo,
          alt: a.figura.descricao_alt || 'Alternativa ' + a.letra,
          loading: 'lazy'
        }));
      }
      entradas[a.letra] = { radio: radio, rotulo: rotulo, corpo: corpo };
      rotulo.appendChild(radio);
      rotulo.appendChild(corpo);
      lista.appendChild(rotulo);
    });

    app.appendChild(lista);

    var botao = el('button', { texto: 'Confirmar resposta' });
    botao.disabled = true;
    var pular = el('button', {
      class: 'discreto',
      texto: 'não sei responder, abrir a resolução'
    });
    var acoes = el('div', { class: 'acoes' }, [botao, pular]);
    app.appendChild(acoes);

    var caixaResolucao = el('div');
    app.appendChild(caixaResolucao);

    app.appendChild(navegacao(q.prova));
    window.scrollTo(0, 0);

    function marcar(letra) {
      Object.keys(entradas).forEach(function (L) {
        entradas[L].rotulo.classList.toggle('marcada', L === letra);
      });
      botao.disabled = false;
    }

    Object.keys(entradas).forEach(function (L) {
      entradas[L].radio.addEventListener('change', function () { marcar(L); });
    });

    function revelar(resposta, registrarResultado) {
      var correto = resposta === q.gabarito;
      lista.classList.add('respondida');
      Object.keys(entradas).forEach(function (L) {
        entradas[L].radio.disabled = true;
        entradas[L].rotulo.classList.remove('marcada');
        if (L === q.gabarito) {
          entradas[L].rotulo.classList.add('certa');
          entradas[L].corpo.appendChild(
            el('span', { class: 'marcador ok', texto: 'correta' }));
        } else if (L === resposta) {
          entradas[L].rotulo.classList.add('escolhida-errada');
          entradas[L].corpo.appendChild(
            el('span', { class: 'marcador nao', texto: 'sua resposta' }));
        }
      });
      acoes.parentNode.removeChild(acoes);
      if (registrarResultado) registrar(q.prova, resposta, correto);
      caixaResolucao.appendChild(montarResolucao(q, resposta, correto));
      caixaResolucao.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    botao.addEventListener('click', function () {
      var sel = null;
      Object.keys(entradas).forEach(function (L) {
        if (entradas[L].radio.checked) sel = L;
      });
      if (sel) revelar(sel, true);
    });

    pular.addEventListener('click', function () {
      revelar(null, false);
    });

    if (jaRespondeu) {
      if (escolhida && entradas[escolhida]) entradas[escolhida].radio.checked = true;
      revelar(escolhida, false);
    }

    document.title = 'Questão ' + q.prova + ' — ' + AV.nome +
                     ' — Avaliação Diagnóstica BCC';
  }

  /* ---------------------------------------------------------- resolucao */

  function montarResolucao(q, resposta, correto) {
    var r = q.resolucao || {};
    var caixa = el('section', { class: 'resolucao' });

    var classe, texto;
    if (resposta === null) {
      classe = 'neutro';
      texto = 'Resolução aberta sem resposta. A questão continua marcada como ' +
              'não respondida.';
    } else if (correto) {
      classe = 'ok';
      texto = 'Você acertou. A resposta é a alternativa ' + q.gabarito + '.';
    } else {
      classe = 'nao';
      texto = 'Você marcou ' + resposta + '. A resposta é a alternativa ' +
              q.gabarito + '.';
    }
    caixa.appendChild(el('p', { class: 'veredito ' + classe, texto: texto }));

    var dif = q.dificuldade_inep;
    if (dif) {
      caixa.appendChild(el('p', { class: 'linha-dificuldade' }, [
        chipDificuldade(q),
        el('span', {
          class: 'detalhe',
          texto: 'no Enade ' + AV.edicao + ' — ' + dif.acerto_nacional +
                 '% dos concluintes do país acertaram esta questão.'
        })
      ]));
      if (dif.descartada_ponto_bisserial) {
        caixa.appendChild(el('p', {
          class: 'nota-descartada',
          texto: 'O INEP descartou esta questão do cálculo da nota nacional: ' +
                 'ela não separou bem quem domina o conteúdo de quem não ' +
                 'domina.'
        }));
      }
    } else if (q.desconsiderada_inep) {
      caixa.appendChild(el('p', {
        class: 'nota-descartada',
        texto: 'O INEP desconsiderou esta questão no cálculo da nota ' +
               'nacional do Enade ' + AV.edicao + ' e não divulgou o ' +
               'percentual de acerto dela.'
      }));
    }

    if (r.aviso_anulada) {
      caixa.appendChild(el('div', { class: 'aviso' }, [
        el('p', {}, [
          el('strong', { texto: 'Por que foi cancelada. ' }),
          r.aviso_anulada
        ])
      ]));
    }

    if (r.verificado) {
      caixa.appendChild(el('div', { class: 'selo-verificado' },
        ['Verificado por execução: ' + r.verificado]));
    }

    var vereditos = r.veredito_por_item || {};
    var rotulos = Object.keys(vereditos);
    if (rotulos.length) {
      caixa.appendChild(el('h3', { texto: 'Cada afirmação, uma a uma' }));
      q.itens.forEach(function (it) {
        var txt = vereditos[it.rotulo];
        if (!txt) return;
        var v = it.veredito === true ? 'v' : (it.veredito === false ? 'f' : '');
        caixa.appendChild(el('div', { class: 'julgamento ' + v }, [
          el('span', { class: 'rot', texto: it.rotulo }),
          el('p', { texto: txt })
        ]));
      });
    }

    if (r.por_que_a_correta_esta_certa) {
      caixa.appendChild(el('h3', {
        texto: 'Por que a alternativa ' + q.gabarito + ' está certa'
      }));
      caixa.appendChild(el('p', { texto: r.por_que_a_correta_esta_certa }));
    }

    var d = r.por_que_cada_distrator_cai || {};
    var letras = Object.keys(d).sort();
    if (letras.length) {
      caixa.appendChild(el('h3', { texto: 'Por que cada uma das outras cai' }));
      letras.forEach(function (L) {
        caixa.appendChild(el('div', { class: 'distrator' }, [
          el('span', { class: 'letra', texto: L + ')' }),
          el('p', { texto: d[L] })
        ]));
      });
    }

    if (r.conceito_chave) {
      caixa.appendChild(el('h3', { texto: 'Conceito-chave' }));
      caixa.appendChild(el('div', { class: 'destaque' },
        [el('p', { texto: r.conceito_chave })]));
    }

    if (r.pegadinha) {
      caixa.appendChild(el('h3', { texto: 'A armadilha' }));
      caixa.appendChild(el('div', { class: 'destaque armadilha' },
        [el('p', { texto: r.pegadinha })]));
    }

    if (r.referencia) {
      caixa.appendChild(el('p', { class: 'nota-fonte', texto: r.referencia }));
    }

    return caixa;
  }

  /* --------------------------------------------------------- navegacao */

  function navegacao(prova) {
    var nav = el('nav', { class: 'navegacao' });
    var anterior = achar(prova - 1);
    var proxima = achar(prova + 1);
    nav.appendChild(anterior
      ? el('a', { href: link('questao', anterior.prova), texto: '← questão ' + anterior.prova })
      : el('span'));
    nav.appendChild(proxima
      ? el('a', { href: link('questao', proxima.prova), texto: 'questão ' + proxima.prova + ' →' })
      : el('span'));
    return nav;
  }

  /* ------------------------------------------------------------ rotas */

  /* Le o hash em {avaliacao, tela, prova}. Sem avaliacao no endereco:
     "#/" e "" abrem a ultima usada; os enderecos antigos de questao e de
     estatisticas, de antes da presencial existir, sao da online. */
  function lerRota() {
    var h = location.hash.replace(/^#\/?/, '');
    var partes = h ? h.split('/') : [];
    var chave = null;
    if (partes.length && DADOS[partes[0]]) chave = partes.shift();

    var tela = 'inicio';
    var prova = null;
    if (partes[0] === 'q' && /^\d+$/.test(partes[1] || '')) {
      tela = 'questao';
      prova = parseInt(partes[1], 10);
    } else if (partes[0] === 'estatisticas') {
      tela = 'estatisticas';
    }

    if (!chave) {
      chave = (tela === 'inicio' && ultimaUsada()) || PADRAO;
    }
    if (!DADOS[chave]) chave = ORDEM[0];
    return { chave: chave, tela: tela, prova: prova };
  }

  function desenhar() {
    if (!ORDEM.length) return;
    var r = lerRota();
    usar(r.chave);
    desenharCabecalho(r.tela);
    if (r.tela === 'questao') telaQuestao(r.prova);
    else if (r.tela === 'estatisticas') telaEstatisticas();
    else telaInicial();
  }

  window.addEventListener('hashchange', desenhar);
  desenhar();
})();
