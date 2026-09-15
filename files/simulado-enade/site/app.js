/* Avaliacao Diagnostica - BCC (Bacharelado em Ciencia da Computacao, Senac SP)
   Aplicacao estatica de revisao do simulado. Le window.QUESTOES (dados.js), roteia pelo
   hash e guarda o progresso do aluno em localStorage.

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

  var DADOS = window.QUESTOES || { questoes: [] };
  var QUESTOES = DADOS.questoes;
  var CHAVE = 'simulado-enade:progresso:v1';
  var app = document.getElementById('app');

  /* ---------------------------------------------------------- progresso */

  function lerProgresso() {
    try {
      return JSON.parse(localStorage.getItem(CHAVE)) || {};
    } catch (e) {
      return {};
    }
  }

  function gravarProgresso(p) {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(p));
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

  /* Faixa de dificuldade do INEP -> classe css. Sao dados NACIONAIS, de
     todos os concluintes do pais; nao tem relacao com o desempenho da turma,
     que continua fora do site por estar contaminado.

     A dificuldade so aparece DEPOIS que o aluno responde, pela mesma razao
     que a resolucao so aparece depois: saber de antemao que a questao e
     "muito dificil" muda a forma como ele a encara e contamina a tentativa. */
  var FAIXA = {
    'Muito difícil': 'muito-dificil',
    'Difícil': 'dificil',
    'Médio': 'medio',
    'Fácil': 'facil'
  };

  function chipDificuldade(q) {
    var d = q.dificuldade_inep;
    if (!d) return null;
    return el('span', {
      class: 'dificuldade ' + (FAIXA[d.classe] || 'medio'),
      title: d.classe + ' no Enade 2021: ' + d.acerto_nacional +
             '% dos concluintes do país acertaram',
      texto: d.classe
    });
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
        if (window.confirm('Apagar suas respostas e recomeçar do zero?')) {
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
      var cartao = el('a', { class: classe, href: '#/q/' + q.prova }, [
        cabeca,
        el('div', { class: 'tema', texto: q.tema }),
        rodapeCartao
      ]);
      grade.appendChild(cartao);
    });

    limpar();
    app.appendChild(painel);
    app.appendChild(grade);
    app.appendChild(rodape());
    document.title = 'Avaliação Diagnóstica — BCC';
    window.scrollTo(0, 0);
  }

  function rodape() {
    return el('footer', { class: 'rodape' }, [
      el('p', {
        texto: 'As questões 1 a 27 são do Enade 2021, Ciência da Computação ' +
               '(bacharelado), INEP/MEC. As questões 28, 29 e 30 são autorais ' +
               'do professor.'
      }),
      el('p', {
        texto: 'Gabaritos conferidos contra o gabarito definitivo do INEP. ' +
               'Seu progresso fica salvo apenas neste navegador.'
      }),
      el('p', {
        texto: 'A dificuldade indicada em cada questão é o percentual de ' +
               'acerto de todos os concluintes do país no Enade 2021, e não ' +
               'o desempenho desta turma. Fonte: MEC/Inep/Daes, Relatório ' +
               'Síntese de Área.'
      })
    ]);
  }

  /* ------------------------------------------------------------ questao */

  function blocoEnunciado(q, comandoJaExibido) {
    var caixa = el('div', { class: 'enunciado' });
    var figs = {};
    (q.figuras || []).forEach(function (f) { figs[f.imagem_docx] = f; });

    /* Quando o codigo da questao existe so como imagem, o handoff manda
       renderizar a transcricao em <pre> no lugar do print: fica legivel no
       celular, selecionavel e permite citar numero de linha. */
    var fonte = q.codigo && window.CODIGOS && window.CODIGOS[q.codigo.arquivo];
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
        var f = figs[b.imagem_docx] || b;
        var fig = el('figure');
        fig.appendChild(el('img', {
          src: BASE + f.arquivo,
          alt: f.descricao_alt || 'Figura da questão ' + q.prova,
          loading: 'lazy'
        }));
        if (f.descricao_alt) {
          fig.appendChild(el('figcaption', { texto: f.descricao_alt }));
        }
        caixa.appendChild(fig);
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
        'O INEP anulou esta questão no gabarito definitivo do Enade 2021, ' +
        'então ela não tem resposta oficial. Ela foi mantida aqui porque o ' +
        'conteúdo continua valendo — e o motivo do cancelamento está ' +
        'explicado no fim da resolução. Vale pelo conceito, não pelo placar.'
      ])
    ]);
  }

  function telaQuestao(prova) {
    var q = achar(prova);
    if (!q) { location.hash = '#/'; return; }

    var prog = lerProgresso();
    var jaRespondeu = !!prog[q.prova];
    var escolhida = jaRespondeu ? prog[q.prova].resposta : null;

    limpar();
    app.appendChild(el('a', { class: 'voltar', href: '#/', texto: '← todas as questões' }));

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
      var rotulo = el('label', { class: 'alt' });
      var radio = el('input', { type: 'radio', name: 'alt' });
      radio.value = a.letra;
      var corpo = el('div', {}, [
        el('span', { class: 'letra', texto: a.letra + ') ' }),
        document.createTextNode(a.texto)
      ]);
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

    document.title = 'Questão ' + q.prova + ' — Avaliação Diagnóstica BCC';
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
          texto: 'no Enade 2021 — ' + dif.acerto_nacional + '% dos ' +
                 'concluintes do país acertaram esta questão.'
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
      ? el('a', { href: '#/q/' + anterior.prova, texto: '← questão ' + anterior.prova })
      : el('span'));
    nav.appendChild(proxima
      ? el('a', { href: '#/q/' + proxima.prova, texto: 'questão ' + proxima.prova + ' →' })
      : el('span'));
    return nav;
  }

  /* ------------------------------------------------------------ rotas */

  function desenhar() {
    var m = /^#\/q\/(\d+)$/.exec(location.hash);
    if (m) telaQuestao(parseInt(m[1], 10));
    else telaInicial();
  }

  window.addEventListener('hashchange', desenhar);
  desenhar();
})();
