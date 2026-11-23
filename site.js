/* =====================================================================
   MONTAGEM DA PÁGINA. Você não precisa mexer aqui:
   tudo o que muda fica no objeto DADOS, no arquivo dados.js.
   Este arquivo monta a página inicial (index.html) e as páginas de
   cada nicho (lifestyle.html, beleza.html, saude.html, pets.html).
   ===================================================================== */

/* Página de nicho? (o <body> dela tem data-nicho="beleza", por exemplo) */
const PAG_NICHO = (document.body && document.body.dataset.nicho) || '';
const BASE = PAG_NICHO ? 'index.html' : '';

const reduz =window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const temMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const IC = {
  foto:'<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="3.6"/><path d="M8.5 6l1.5-2.5h4L15.5 6"/></svg>',
  video:'<svg viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 9.5v5l4-2.5z"/></svg>',
  play:'<svg viewBox="0 0 24 24"><path d="M6 3.5v17l14-8.5z"/></svg>',
  zap:'<svg viewBox="0 0 24 24"><path d="M12 2.8a9.2 9.2 0 0 0-7.9 13.9L2.8 21.2l4.6-1.2A9.2 9.2 0 1 0 12 2.8z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M8.6 7.6c-.4 0-.9.4-.9 1.3 0 2.9 3.3 7 7.1 7.4.9.1 1.6-.6 1.6-1.1 0-.3-.1-.5-.3-.6l-1.8-.9c-.3-.1-.5 0-.7.2l-.6.8c-1.3-.5-2.6-1.7-3.2-3l.7-.7c.2-.2.2-.5.1-.7l-.8-1.9c-.1-.3-.4-.4-.7-.4z" fill="currentColor"/></svg>',
  insta:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5l8.5 7 8.5-7"/></svg>',
  alvo:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19"/><circle cx="24" cy="24" r="11.5"/><circle cx="24" cy="24" r="4"/><path d="M24 24l15-15M33 8.5l6.5.5.5 6.5"/></svg>',
  roteiro:'<svg viewBox="0 0 48 48"><path d="M11 5h19l8 8v30H11z"/><path d="M30 5v8h8M17 21h15M17 28h15M17 35h9"/><path d="M33 31l6 6-3 3-6-6z"/></svg>',
  edicao:'<svg viewBox="0 0 48 48"><rect x="13" y="4" width="22" height="40" rx="4"/><path d="M21 18v12l9-6z"/><path d="M4 16c2 2 2 14 0 16M44 16c-2 2-2 14 0 16"/></svg>'
};

/* ---------- idiomas: textos fixos da página em português e inglês ---------- */
let LANG = 'pt';
const T = {
  pt: {
    secoes:'Seções', sobre:'Sobre mim', destaques:'Destaques', nichos:'Nichos', marcasTit:'O que as marcas falam', contato:'Contato',
    falarComigo:'Falar comigo', menu:'Menu', fechar:'Fechar',
    linha:'UGC creator de ', verVideos:'Ver meus melhores vídeos',
    oie:'Oie, sou a ', metodo:'Formado no Método Profissão do Futuro · aluno da Rafa Chagas', circulo:'Aluno da Rafa Chagas · formado no método ✸ ',
    fazTit:'O que eu faço pela ', fazMao:'sua marca',
    destTit:'Meus melhores vídeos', destP:'Gancho forte, roteiro com estratégia e edição pronta pra anúncio. Clique no vídeo pra assistir com som.', querUm:'Quero um assim',
    nichosK:'Conteúdo por nichos', nichosTit:'Ache o vídeo do ', nichosMao:'seu nicho',
    depo:'Depoimentos', atend:'Marcas que já atendi', seloFeedback:'Feedback ✸ real ✸ feedback ✸ real ✸ ',
    ctTit:'Bora criar ', ctMao:'junto?', ctP:'Me conta do seu produto e eu te respondo com ideia de roteiro, formatos e prazo.',
    btnZap:'Chamar no WhatsApp', btnMail:'Mandar e-mail', assuntoMail:'Vídeos UGC pra minha marca',
    msgZap:'Oi, NOME! Vi seu portfólio e quero conversar sobre vídeos pra minha marca.',
    formTit:'Pede um orçamento rapidinho', fNome:'Seu nome', fEmpresa:'Empresa', fProduto:'Produto', fProdutoPh:'o que vamos divulgar?', fPrazo:'Prazo', fPrazoPh:'pra quando?', fZap:'WhatsApp',
    fEnviar:'Pedir orçamento', fErro:'Não consegui enviar agora. Me chama direto:', formOk:'Recebi! Te chamo em breve.',
    ctaTit:'Bora fazer um vídeo que ', ctaMao:'vende?', rodape:'UGC creator · aluno da Rafa Chagas', assistir:'Assistir com som',
    verPagina:'Ver página de ', nichoK:'Portfólio de nicho', queroNicho:'Quero um vídeo de ', voltar:'Ver portfólio completo',
    nichoVideosTit:'Vídeos de ', outrosK:'Outros nichos', outrosTit:'Veja também', descFalta:'1 ou 2 frases sobre o que você grava nesse nicho',
    nichoNaoAchado:'Nicho não encontrado em DADOS.nichos:'
  },
  en: {
    secoes:'Sections', sobre:'About me', destaques:'Highlights', nichos:'Niches', marcasTit:'What brands say', contato:'Contact',
    falarComigo:'Let’s talk', menu:'Menu', fechar:'Close',
    linha:'UGC creator for ', verVideos:'See my best videos',
    oie:'Hi, I’m ', metodo:'Graduate of the Profissão do Futuro Method · Rafa Chagas student', circulo:'Rafa Chagas student · method graduate ✸ ',
    fazTit:'What I do for ', fazMao:'your brand',
    destTit:'My best videos', destP:'Strong hook, strategic script and ad-ready editing. Click a video to watch it with sound.', querUm:'I want one like this',
    nichosK:'Content by niche', nichosTit:'Find the video for ', nichosMao:'your niche',
    depo:'Testimonials', atend:'Brands I’ve worked with', seloFeedback:'Real ✸ feedback ✸ real ✸ feedback ✸ ',
    ctTit:'Let’s create ', ctMao:'together?', ctP:'Tell me about your product and I’ll reply with a script idea, formats and timeline.',
    btnZap:'Message me on WhatsApp', btnMail:'Send an email', assuntoMail:'UGC videos for my brand',
    msgZap:'Hi, NOME! I saw your portfolio and would like to talk about videos for my brand.',
    formTit:'Get a quick quote', fNome:'Your name', fEmpresa:'Company', fProduto:'Product', fProdutoPh:'what are we promoting?', fPrazo:'Deadline', fPrazoPh:'when do you need it?', fZap:'WhatsApp',
    fEnviar:'Request a quote', fErro:'I couldn’t send it right now. Message me directly:', formOk:'Got it! I’ll reach out soon.',
    ctaTit:'Let’s make a video that ', ctaMao:'sells?', rodape:'UGC creator · Rafa Chagas student', assistir:'Watch with sound',
    verPagina:'See the page for ', nichoK:'Niche portfolio', queroNicho:'I want a video for ', voltar:'See full portfolio',
    nichoVideosTit:'Videos: ', outrosK:'Other niches', outrosTit:'See also', descFalta:'1 or 2 sentences about what you film in this niche',
    nichoNaoAchado:'Niche not found in DADOS.nichos:'
  }
};
function t(k){ const v = T[LANG] && T[LANG][k]; return v != null ? v : T.pt[k]; }
function traducao(){ return (LANG === 'en' && DADOS.en) ? DADOS.en : null; }
function d(campo){ const tr = traducao(); return (tr && tr[campo]) ? tr[campo] : DADOS[campo]; }
function lista(campo){
  const base = DADOS[campo] || [], tr = traducao(), extra = tr && tr[campo];
  if (!extra) return base;
  return base.map((x, i) => {
    const o = Object.assign({}, x), e = extra[i] || {};
    Object.keys(e).forEach(k => { if (e[k] !== '' && e[k] != null) o[k] = e[k]; });
    return o;
  });
}
function nomeNicho(i){ const tr = traducao(), e = tr && tr.nichos && tr.nichos[i]; return (e && e.nome) || DADOS.nichos[i].nome; }
function descNicho(i){ const tr = traducao(), e = tr && tr.nichos && tr.nichos[i]; return (e && e.descricao) || DADOS.nichos[i].descricao || ''; }
function paginaNicho(n){ return n.pagina || (slug(n.nome) + '.html'); }
function idiomaInicial(){
  let l = '';
  try { l = new URLSearchParams(location.search).get('lang') || ''; } catch (e) {}
  if (!l) { try { l = localStorage.getItem('idioma') || ''; } catch (e) {} }
  return l === 'en' ? 'en' : 'pt';
}

function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function slug(s){ return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,''); }
function primeiroNome(){ return (DADOS.nome || '').trim().split(/\s+/)[0] || ''; }
function seta(){ return ' <span aria-hidden="true">→</span>'; }

/* Link do WhatsApp com a mensagem pronta (ou e-mail, se não houver WhatsApp) */
function linkContato(){
  const msg = t('msgZap').replace('NOME', primeiroNome());
  let num = String(DADOS.whatsapp || '').replace(/\D/g,'');
  if (num) {
    if (num.length <= 11) num = '55' + num;
    return { tipo:'zap', href:'https://wa.me/' + num + '?text=' + encodeURIComponent(msg), rotulo:t('btnZap') };
  }
  if (DADOS.email) {
    return { tipo:'mail', href:'mailto:' + DADOS.email + '?subject=' + encodeURIComponent(t('assuntoMail')) + '&body=' + encodeURIComponent(msg), rotulo:t('btnMail') };
  }
  return { tipo:'mail', href:BASE + '#contato', rotulo:t('falarComigo') };
}
function btnContato(classe){
  const c = linkContato();
  const ext = c.tipo === 'zap' ? ' target="_blank" rel="noopener"' : '';
  const num = c.tipo === 'zap' ? numeroVisivel() : '';
  const rotulo = num ? '<span class="btn-2l"><span>' + esc(c.rotulo) + '</span><small>' + esc(num) + '</small></span>' : esc(c.rotulo);
  return '<a class="btn ' + classe + '" href="' + esc(c.href) + '"' + ext + '>' + (c.tipo === 'zap' ? IC.zap : IC.mail) + rotulo + seta() + '</a>';
}
/* Número do WhatsApp escrito bonito no botão: +55 (48) 99103-2288 */
function numeroVisivel(){
  let n = String(DADOS.whatsapp || '').replace(/\D/g,'');
  if (!n) return '';
  if (n.length <= 11) n = '55' + n;
  const m = n.match(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/);
  return m ? '+' + m[1] + ' (' + m[2] + ') ' + m[3] + '-' + m[4] : '+' + n;
}

/* Lacunas listradas: aparecem enquanto a foto/vídeo/texto não existe */
function lacuna(dica, arquivo, tipo){
  return '<div class="lacuna">' + (tipo === 'video' ? IC.video : IC.foto) +
    '<span>' + esc(dica) + '</span>' + (arquivo ? '<code>' + esc(arquivo) + '</code>' : '') + '</div>';
}
function lacTxt(dica, campo){
  return '<span class="lac-txt">' + esc(dica) + (campo ? ' <code>' + esc(campo) + '</code>' : '') + '</span>';
}
function lacMini(t){ return '<span class="lac-mini">' + esc(t) + '</span>'; }

function foto(src, alt, dica, arquivo){
  if (!src) return '<div class="foto">' + lacuna(dica, arquivo, 'foto') + '</div>';
  return '<div class="foto"><img src="' + esc(src) + '" alt="' + esc(alt) + '" data-dica="' + esc(dica) + '" data-arq="' + esc(src) + '" onerror="fotoFalhou(this)"></div>';
}
function fotoFalhou(img){
  const box = img.parentNode;
  box.innerHTML = lacuna(img.dataset.dica, img.dataset.arq, 'foto');
}

/* Link de Reels/TikTok/Drive não toca na tag video: vira lacuna e aviso no console */
const faltando = [];
function ehMp4(src){ return !/^https?:\/\//i.test(src) || /\.mp4(\?|#|$)/i.test(src); }

function cardVideo(v, o){
  v = v || {};
  const src = String(v.video || '').trim();
  const titulo = String(v.titulo || '').trim();
  let caixa;
  if (!src || !ehMp4(src)) {
    if (src) faltando.push(src);
    caixa = '<div class="vbox vazio">' + lacuna(src ? 'Esse link não toca aqui. Baixe o vídeo e coloque o .mp4 em ' + o.arq : o.dica, src ? '' : o.arq, 'video') + '</div>';
  } else {
    caixa = '<button type="button" class="vbox" data-src="' + esc(src) + '" data-titulo="' + esc(titulo || o.reserva) + '" aria-label="' + t('assistir') + ': ' + esc(titulo || o.reserva) + '">' +
      '<video muted playsinline loop preload="metadata"' + (v.capa ? ' poster="' + esc(v.capa) + '"' : '') +
      (o.auto && !reduz ? ' autoplay data-auto' : '') +
      ' src="' + esc(src) + '#t=0.1" data-dica="' + esc(o.dica) + '" data-arq="' + esc(src) + '" onerror="videoFalhou(this)"></video>' +
      '<span class="vplay" aria-hidden="true">' + IC.play + '</span>' +
      (v.res ? '<span class="vres">✸ ' + esc(v.res) + '</span>' : '') +
    '</button>';
  }
  const meta = [v.nicho || o.nicho, v.formato].filter(Boolean).map(esc);
  if (!v.formato) meta.push(lacMini('formato'));
  if (!(v.nicho || o.nicho)) meta.unshift(lacMini('nicho'));
  return '<figure class="vcard">' + caixa +
    '<figcaption><p class="vcap-t">' + (titulo ? esc(titulo) : lacMini('título curto')) + seta() + '</p>' +
    '<p class="vcap-m">' + meta.join(' · ') + '</p></figcaption></figure>';
}
function videoFalhou(video){
  const box = video.closest('.vbox');
  if (!box) return;
  const div = document.createElement('div');
  div.className = 'vbox vazio';
  div.innerHTML = lacuna(video.dataset.dica, video.dataset.arq, 'video');
  box.replaceWith(div);
  const painel = div.closest('.painel');
  if (painel) conferirMinimo(painel);
}
function conferirMinimo(painel){
  const aviso = painel.querySelector('.aviso');
  if (aviso) aviso.hidden = painel.querySelectorAll('video').length >= 3;
}

/* Selo redondo com texto girando em volta */
let seloN = 0;
function selo(texto, fundo, cor, estrela){
  const id = 'selo' + (++seloN);
  return '<svg viewBox="0 0 200 200" aria-hidden="true"><defs><path id="' + id + '" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/></defs>' +
    '<circle cx="100" cy="100" r="97" fill="' + fundo + '" stroke="#151515" stroke-width="3"/>' +
    '<text fill="' + cor + '"><textPath href="#' + id + '" textLength="448" lengthAdjust="spacing">' + esc(texto) + '</textPath></text>' +
    '<text x="100" y="124" text-anchor="middle" fill="' + estrela + '" style="font:900 64px var(--tx)">✸</text></svg>';
}
function sublinhado(){ return '<svg class="risco" viewBox="0 0 120 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9 C 20 2, 38 13, 58 7 S 96 3, 118 9"/></svg>'; }

/* ---------- partes da página ---------- */
function montarMenu(){
  const links = [[BASE + '#sobre', t('sobre')],[BASE + '#destaques', t('destaques')],[BASE + '#nichos', t('nichos')],[BASE + '#marcas', t('marcasTit')],['#contato', t('contato')]];
  document.getElementById('topo').innerHTML =
    '<div class="wrap topo-in">' +
      '<a class="logo" href="' + (BASE || '#capa') + '">' + esc(DADOS.nome) + ' <span class="est" aria-hidden="true">✸</span></a>' +
      '<div class="topo-dir">' +
        '<nav class="nav" id="nav" aria-label="' + t('secoes') + '">' +
          links.map(l => '<a class="l" href="' + l[0] + '">' + esc(l[1]) + '</a>').join('') +
          '<a class="btn btn-am" href="#contato">' + t('falarComigo') + seta() + '</a>' +
        '</nav>' +
        '<div class="idioma" role="group" aria-label="Idioma / Language">' +
          ['pt','en'].map(l => '<button type="button" data-lang="' + l + '" aria-pressed="' + (LANG === l) + '" aria-label="' + (l === 'en' ? 'English' : 'Português') + '">' + l.toUpperCase() + '</button>').join('') +
        '</div>' +
        '<button class="menu-bt" type="button" aria-expanded="false" aria-controls="nav">' + t('menu') + '</button>' +
      '</div>' +
    '</div>';
  const bt = document.querySelector('.menu-bt'), nav = document.getElementById('nav');
  bt.addEventListener('click', () => { const ab = nav.classList.toggle('aberto'); bt.setAttribute('aria-expanded', ab); bt.textContent = ab ? t('fechar') : t('menu'); });
  nav.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('aberto'); bt.setAttribute('aria-expanded', false); bt.textContent = t('menu'); } });
  document.querySelectorAll('.idioma button').forEach(b => b.addEventListener('click', () => trocarIdioma(b.dataset.lang)));
}

function numeroProva(p){
  return p.numero ? esc(p.numero) : lacMini(p.dica || 'número');
}

function montarCapa(){
  const palavras = (DADOS.nome || '').trim().split(/\s+/);
  document.getElementById('capa').innerHTML =
    '<div class="wrap capa-grid">' +
      '<div class="capa-txt">' +
        '<p class="kicker">UGC creator</p>' +
        '<div class="nome-wrap"><h1 class="nome">' + palavras.map(p => '<span>' + esc(p) + '</span>').join('') + '</h1>' +
          '<div class="selo" title="Aluno Rafa Chagas">' + selo('Brilho ✸ Aluno Rafa Chagas ✸ ', '#E5482A', '#FBF6EA', '#151515') + '</div></div>' +
        '<svg class="pincelada" viewBox="0 0 420 40" preserveAspectRatio="none" aria-hidden="true"><path d="M6 20 C 70 6, 170 3, 260 9 C 320 12, 380 7, 414 13 C 409 20, 404 24, 411 30 C 330 28, 240 35, 150 32 C 90 31, 40 37, 8 34 C 14 29, 1 25, 6 20 Z"/></svg>' +
        '<p class="linha">' + t('linha') + (d('nichosResumo') ? '<strong>' + esc(d('nichosResumo')) + '</strong>' : lacMini('seus nichos')) + '</p>' +
        '<p class="frase">' + (d('frase') ? esc(d('frase')) : lacMini('frase curta do que você faz pela marca')) + '</p>' +
        '<ul class="provas">' + lista('provas').map(p => '<li><strong>' + numeroProva(p) + '</strong><span>' + esc(p.rotulo) + '</span></li>').join('') + '</ul>' +
        '<div class="btns"><a class="btn btn-am" href="#destaques">' + t('verVideos') + seta() + '</a><a class="btn btn-ct" href="#contato">' + t('falarComigo') + seta() + '</a></div>' +
      '</div>' +
      '<div class="capa-foto">' +
        '<svg class="blob" viewBox="0 0 500 520" preserveAspectRatio="none" aria-hidden="true"><path d="M58 118 C 92 38, 214 8, 322 26 C 424 44, 494 112, 482 218 C 474 296, 502 372, 436 446 C 366 516, 244 506, 150 482 C 66 462, 8 396, 18 304 C 26 226, 24 182, 58 118 Z"/><path d="M470 120 C 490 140, 498 170, 492 196" fill="none" stroke="#F2B416" stroke-width="14" stroke-linecap="round"/></svg>' +
        '<svg class="pontos" viewBox="0 0 120 120" aria-hidden="true"><defs><pattern id="pt" width="15" height="15" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="2.4" fill="#151515"/></pattern></defs><rect width="120" height="120" fill="url(#pt)"/></svg>' +
        foto(DADOS.fotoCapa, 'Foto de ' + DADOS.nome, 'Retrato com rosto, luz natural e ambiente real. Sem selfie: a capa mostra o seu nível', DADOS.fotoCapa || 'midia/capa.jpg') +
        '<svg class="olho" viewBox="0 0 120 84" aria-hidden="true"><g stroke="#E5482A" stroke-width="4.5" stroke-linecap="round"><path d="M88 44 L97 44"/><path d="M84.2 58 L92 62.5"/><path d="M74 68.2 L78.5 76"/><path d="M60 72 L60 81"/><path d="M46 68.2 L41.5 76"/><path d="M35.8 58 L28 62.5"/><path d="M32 44 L23 44"/><path d="M35.8 30 L28 25.5"/><path d="M46 19.8 L41.5 12"/><path d="M60 16 L60 7"/><path d="M74 19.8 L78.5 12"/><path d="M84.2 30 L92 25.5"/></g><circle cx="60" cy="44" r="20" fill="#FBF6EA" stroke="#E5482A" stroke-width="4.5"/><circle cx="60" cy="44" r="11" fill="#E5482A"/><circle cx="64" cy="40" r="2.6" fill="#FBF6EA"/></svg>' +
        '<svg class="risco-pt" viewBox="0 0 200 70" aria-hidden="true"><path d="M10 50 C 50 20, 100 58, 190 18" stroke-width="13"/><path d="M30 64 C 70 48, 120 66, 170 46" stroke-width="5"/></svg>' +
      '</div>' +
    '</div>';
}

function montarSobre(){
  const sobre = d('sobreTexto');
  const texto = sobre
    ? sobre.split(/\n\s*\n/).map(p => '<p>' + esc(p.trim()) + '</p>').join('')
    : lacTxt('Escreva em primeira pessoa: quem você é, onde mora, sua rotina e por que as marcas de ' + (DADOS.nichosResumo || 'seu nicho') + ' combinam com você.', 'DADOS.sobreTexto');
  document.getElementById('sobre').innerHTML =
    '<div class="wrap sobre-grid">' +
      '<div class="sobre-foto">' +
        '<span class="faixa-lat" aria-hidden="true"></span>' +
        '<svg class="coroa" viewBox="0 0 104 64" aria-hidden="true"><path d="M10 52 L16 14 L36 38 L52 6 L68 38 L88 14 L94 52 Z"/><path d="M8 58 C 36 54, 70 62, 98 56"/><circle cx="16" cy="10" r="3"/><circle cx="52" cy="3" r="3"/><circle cx="88" cy="10" r="3"/></svg>' +
        foto(DADOS.fotoSobre, DADOS.nome + ' no dia a dia', 'Você no dia a dia: gravando, editando ou no seu cantinho de trabalho', DADOS.fotoSobre || 'midia/sobre.jpg') +
      '</div>' +
      '<div class="sobre-txt">' +
        '<p class="kicker">' + t('sobre') + '</p>' +
        '<h2 class="tit">' + t('oie') + '<span class="mao">Isa!' + sublinhado() + '</span></h2>' +
        '<div class="texto-sobre">' + texto + '</div>' +
        '<div class="assina"><p class="assinatura">' + esc(DADOS.nome) + '</p>' +
          '<svg class="circ-am" viewBox="0 0 200 200" aria-hidden="true"><defs><path id="ca" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"/></defs><circle cx="100" cy="100" r="96" fill="#F2B416" stroke="#151515" stroke-width="3"/><text fill="#151515"><textPath href="#ca" textLength="436" lengthAdjust="spacing">' + esc(t('circulo')) + '</textPath></text><text x="100" y="122" text-anchor="middle" fill="#E5482A" style="font:900 60px var(--tx)">✸</text></svg>' +
        '</div>' +
        '<p class="metodo"><span class="est" aria-hidden="true">✸</span> ' + t('metodo') + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="faz"><div class="wrap">' +
      '<h2 class="tit">' + t('fazTit') + '<span class="mao">' + t('fazMao') + sublinhado() + '</span></h2>' +
      '<div class="dif">' + lista('diferenciais').map(d => '<div>' + (IC[d.icone] || IC.alvo) + '<h3>' + esc(d.titulo) + '</h3><p>' + esc(d.texto) + '</p></div>').join('') + '</div>' +
      '<div class="nums">' + lista('provas').map(p => '<div><strong>' + numeroProva(p) + '</strong><span>' + esc(p.rotulo) + '</span></div>').join('') + '</div>' +
    '</div></div>';
}

function itemMarca(m){
  if (typeof m === 'string') m = { nome:m };
  return '<span class="faixa-item">' + (m.logo ? '<img src="' + esc(m.logo) + '" alt="' + esc(m.nome) + '" loading="lazy">' : esc(m.nome)) + '<span class="est" aria-hidden="true">✸</span></span>';
}
function montarFaixa(){
  const el = document.getElementById('faixa');
  const lista = (DADOS.marcas || []).filter(m => m && (typeof m === 'string' ? m.trim() : m.nome));
  if (!lista.length) {
    el.innerHTML = '<div class="wrap">' + lacTxt('Faixa das marcas que você já atendeu: escreva os nomes em DADOS.marcas (e, se quiser, os logos em midia/logos).', '') + '</div>';
    return;
  }
  let grupo = lista.map(itemMarca).join('');
  while (lista.length < 6 && grupo.length < 2000 && grupo.split('faixa-item').length < 8) grupo += lista.map(itemMarca).join('');
  el.innerHTML = '<div class="faixa-trilho"><div class="faixa-grupo">' + grupo + '</div><div class="faixa-grupo" aria-hidden="true">' + grupo + '</div></div>';
}

function montarDestaques(){
  const ds = lista('destaques').slice(0,3);
  while (ds.length < 3) ds.push({});
  document.getElementById('destaques').innerHTML =
    '<div class="wrap dest-grid">' +
      '<div class="dest-txt">' +
        '<p class="kicker">' + t('destaques') + '</p>' +
        '<h2 class="tit">' + t('destTit') + '</h2>' +
        '<svg class="ondas" viewBox="0 0 150 20" aria-hidden="true"><path d="M3 10 Q 15 1 27 10 T 51 10 T 75 10 T 99 10 T 123 10 T 147 10"/></svg>' +
        '<p>' + t('destP') + '</p>' +
        '<a class="btn btn-am" href="#contato">' + t('querUm') + seta() + '</a>' +
      '</div>' +
      '<div class="trilho">' + ds.map((v,i) => cardVideo(v, {
          auto: i === 0,
          reserva: 'destaque ' + (i+1),
          arq: 'midia/destaques/' + (i+1) + '.mp4',
          dica: i === 0 ? 'Seu vídeo mais forte. Os melhores na frente, não os mais recentes' : 'Os melhores na frente, não os mais recentes'
        })).join('') + '</div>' +
    '</div>';
}

function montarNichos(){
  const ns = DADOS.nichos || [];
  document.getElementById('nichos').innerHTML =
    '<div class="wrap">' +
      '<p class="kicker">' + t('nichosK') + '</p>' +
      '<h2 class="tit">' + t('nichosTit') + '<span class="mao">' + t('nichosMao') + sublinhado() + '</span></h2>' +
      '<div class="abas" role="tablist" aria-label="Nichos">' + ns.map((n,i) =>
        '<button class="aba" type="button" role="tab" id="aba-' + slug(n.nome) + '" aria-controls="painel-' + slug(n.nome) + '" aria-selected="' + (i===0) + '" tabindex="' + (i===0?0:-1) + '">' + esc(nomeNicho(i)) + '</button>').join('') + '</div>' +
      ns.map((n,i) => {
        const pasta = 'midia/nichos/' + slug(n.nome) + '/';
        const vs = n.videos || [];
        const cards = vs.map((v,j) => cardVideo(v, { nicho:nomeNicho(i), reserva: n.nome + ' ' + (j+1), arq: pasta + (j+1) + '.mp4', dica: 'Vídeo de ' + n.nome })).join('');
        const vazios = vs.length ? '' : [1,2,3].map(j => cardVideo({}, { nicho:nomeNicho(i), arq: pasta + j + '.mp4', dica: 'Vídeo de ' + n.nome })).join('');
        return '<div class="painel" role="tabpanel" id="painel-' + slug(n.nome) + '" aria-labelledby="aba-' + slug(n.nome) + '"' + (i===0 ? '' : ' hidden') + '>' +
          '<p class="aviso">mínimo 3 vídeos: com menos, tire o nicho</p>' +
          '<div class="grade">' + cards + vazios + '</div>' +
          '<a class="btn btn-pt ver-nicho" href="' + esc(paginaNicho(n)) + '">' + t('verPagina') + esc(nomeNicho(i)) + seta() + '</a></div>';
      }).join('') +
    '</div>';
  document.querySelectorAll('#nichos .painel').forEach(conferirMinimo);

  const abas = [...document.querySelectorAll('#nichos .aba')];
  abas.forEach((a,i) => {
    a.addEventListener('click', () => selecionarNicho(i));
    a.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + abas.length) % abas.length;
      selecionarNicho(n); abas[n].focus();
    });
  });
}
function selecionarNicho(i){
  document.querySelectorAll('#nichos .aba').forEach((a,j) => { a.setAttribute('aria-selected', i===j); a.tabIndex = i===j ? 0 : -1; });
  document.querySelectorAll('#nichos .painel').forEach((p,j) => {
    p.hidden = i !== j;
    if (i !== j) p.querySelectorAll('video').forEach(v => v.pause());
  });
}

function montarElogios(){
  const es = (DADOS.elogios || []).slice(0,3);
  while (es.length < 3) es.push({});
  const lista = (DADOS.marcas || []).map(m => typeof m === 'string' ? m : (m && m.nome)).filter(Boolean);
  document.getElementById('marcas').innerHTML =
    '<div class="selo selo-branco">' + selo(t('seloFeedback'), '#FBF6EA', '#E5482A', '#E5482A') + '</div>' +
    '<div class="wrap">' +
      '<p class="kicker">' + t('depo') + '</p>' +
      '<h2 class="tit"><span class="aspas" aria-hidden="true">“</span><span>' + t('marcasTit') + '</span></h2>' +
      '<div class="depo">' + es.map(e => '<article>' +
        (e.texto ? '<blockquote>“' + esc(e.texto) + '”</blockquote>' : '') +
        (e.print ? '<div class="print"><img src="' + esc(e.print) + '" alt="Print do depoimento de ' + esc(e.marca || 'marca') + '" loading="lazy"></div>' : '') +
        (!e.texto && !e.print ? lacTxt('Cole aqui a frase ou o print real da marca', 'DADOS.elogios') : '') +
        '<div class="quem"><b>' + (e.marca ? esc(e.marca) : lacMini('nome da marca')) + '</b><small>' + (e.detalhe ? esc(e.detalhe) : 'contexto: produto, campanha ou resultado') + '</small></div>' +
      '</article>').join('') + '</div>' +
      '<div class="atend"><p class="kicker">' + t('atend') + '</p>' +
        (lista.length ? '<ul class="atend-lista">' + lista.map((m,i) => (i ? '<li class="est" aria-hidden="true">✸</li>' : '') + '<li>' + esc(m) + '</li>').join('') + '</ul>'
                      : '<div style="margin-top:14px">' + lacTxt('Liste aqui as marcas que você já atendeu', 'DADOS.marcas') + '</div>') +
      '</div>' +
    '</div>';
}

function montarContato(){
  const temForm = !!String(DADOS.formspree || '').trim();
  const insta = String(DADOS.instagram || '').replace(/^@/,'').trim();
  const contato = linkContato();
  document.getElementById('contato').innerHTML =
    '<div class="wrap">' +
      '<div class="ct-grid' + (temForm ? '' : ' so') + '">' +
        '<div class="ct-txt">' +
          '<p class="kicker">' + t('contato') + '</p>' +
          '<h2 class="tit">' + t('ctTit') + '<span class="mao">' + t('ctMao') + sublinhado() + '</span></h2>' +
          '<p>' + t('ctP') + '</p>' +
          '<div class="btns">' + btnContato('btn-pt') +
            (insta ? '<a class="btn btn-ct" href="https://instagram.com/' + esc(insta) + '" target="_blank" rel="noopener">' + IC.insta + '@' + esc(insta) + seta() + '</a>' : '') +
          '</div>' +
        '</div>' +
        (temForm ?
        '<div class="form" id="orcamento">' +
          '<h3>' + t('formTit') + '</h3>' +
          '<form novalidate>' +
            '<div class="campos">' +
              '<div><label for="f-nome">' + t('fNome') + '</label><input id="f-nome" name="nome" required autocomplete="name"></div>' +
              '<div><label for="f-empresa">' + t('fEmpresa') + '</label><input id="f-empresa" name="empresa" required autocomplete="organization"></div>' +
              '<div class="cheio"><label for="f-produto">' + t('fProduto') + '</label><input id="f-produto" name="produto" required placeholder="' + t('fProdutoPh') + '"></div>' +
              '<div><label for="f-prazo">' + t('fPrazo') + '</label><input id="f-prazo" name="prazo" required placeholder="' + t('fPrazoPh') + '"></div>' +
              '<div><label for="f-zap">' + t('fZap') + '</label><input id="f-zap" name="whatsapp" type="tel" required autocomplete="tel" placeholder="(00) 00000-0000"></div>' +
            '</div>' +
            '<div class="gotcha" aria-hidden="true"><label>Não preencha<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>' +
            '<button class="btn btn-am" type="submit">' + t('fEnviar') + seta() + '</button>' +
            '<div class="form-erro" hidden><p>' + t('fErro') + '</p>' + btnContato('btn-pt') + '</div>' +
          '</form>' +
        '</div>' : '') +
      '</div>' +
    '</div>';

  if (temForm) ligarFormulario();
  else console.info('[portfólio] DADOS.formspree está vazio: o formulário de orçamento não aparece. Crie um formulário em formspree.io e cole o endereço em DADOS.formspree.');

  const zap = document.getElementById('zap');
  zap.href = contato.href;
  zap.innerHTML = contato.tipo === 'zap' ? IC.zap : IC.mail;
  zap.setAttribute('aria-label', contato.rotulo);
  if (contato.tipo !== 'zap') { zap.removeAttribute('target'); }
}
function pontosExplosao(){
  const p = [], n = 18;
  for (let i = 0; i < n * 2; i++) {
    const a = (Math.PI * i) / n, r = i % 2 ? 58 + (i % 3) * 6 : 96 - (i % 5) * 4;
    p.push((100 + r * Math.cos(a)).toFixed(1) + ',' + (100 + r * Math.sin(a)).toFixed(1));
  }
  return p.join(' ');
}

function ligarFormulario(){
  const caixa = document.getElementById('orcamento');
  const form = caixa.querySelector('form');
  const erro = form.querySelector('.form-erro');
  const bt = form.querySelector('button[type=submit]');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    bt.disabled = true; erro.hidden = true;
    try {
      const r = await fetch(DADOS.formspree, { method:'POST', body:new FormData(form), headers:{ 'Accept':'application/json' } });
      if (!r.ok) throw new Error('falhou');
      caixa.innerHTML = '<p class="form-ok">' + t('formOk') + '</p>';
    } catch (err) {
      erro.hidden = false; bt.disabled = false;
    }
  });
}

function montarRodape(){
  document.getElementById('rodape').innerHTML =
    '<div class="wrap"><p class="logo">' + esc(DADOS.nome) + ' <span class="est" aria-hidden="true">✸</span></p>' +
    '<p>' + t('rodape') + ' · ' + new Date().getFullYear() + '</p></div>';
}

/* ---------- vídeos: hover, autoplay do 1º destaque, player ---------- */
function nomeEvento(t){ return ('video-' + slug(t || 'sem-titulo')).slice(0,50).replace(/-+$/,''); }
function medir(titulo){
  try { if (window.umami && typeof window.umami.track === 'function') window.umami.track(nomeEvento(titulo)); } catch (e) {}
}

let ultimoFoco = null;
function abrirPlayer(src, titulo){
  const player = document.getElementById('player'), pv = document.getElementById('player-video');
  document.querySelectorAll('main video').forEach(v => v.pause());
  ultimoFoco = document.activeElement;
  pv.src = src;
  pv.muted = false;
  document.getElementById('player-tit').textContent = titulo || '';
  player.hidden = false;
  document.body.classList.add('travado');
  pv.play().catch(() => {});
  document.getElementById('player-x').focus();
  medir(titulo);
}
function fecharPlayer(){
  const player = document.getElementById('player'), pv = document.getElementById('player-video');
  if (player.hidden) return;
  pv.pause(); pv.removeAttribute('src'); pv.load();
  player.hidden = true;
  document.body.classList.remove('travado');
  const auto = document.querySelector('video[data-auto]');
  if (auto && autoVisivel) auto.play().catch(() => {});
  if (ultimoFoco) ultimoFoco.focus();
}

let autoVisivel = false;
let obsAuto = null;
function ligarPlayer(){
  document.addEventListener('click', e => {
    const box = e.target.closest('button.vbox');
    if (box) abrirPlayer(box.dataset.src, box.dataset.titulo);
  });
  const player = document.getElementById('player');
  document.getElementById('player-x').addEventListener('click', fecharPlayer);
  player.addEventListener('click', e => { if (e.target === player) fecharPlayer(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharPlayer(); });
}
function ligarVideos(){
  if (obsAuto) { obsAuto.disconnect(); obsAuto = null; }
  if (temMouse) {
    document.querySelectorAll('button.vbox').forEach(box => {
      const v = box.querySelector('video');
      if (!v || v.hasAttribute('data-auto')) return;
      box.addEventListener('mouseenter', () => { v.muted = true; v.play().then(() => box.classList.add('tocando')).catch(() => {}); });
      box.addEventListener('mouseleave', () => { v.pause(); box.classList.remove('tocando'); });
    });
  }
  const auto = document.querySelector('video[data-auto]');
  if (auto) {
    auto.closest('.vbox').classList.add('tocando');
    if ('IntersectionObserver' in window) {
      obsAuto = new IntersectionObserver(ent => {
        ent.forEach(x => {
          autoVisivel = x.isIntersecting;
          if (x.isIntersecting && document.getElementById('player').hidden) auto.play().catch(() => {});
          else auto.pause();
        });
      }, { threshold:.35 });
      obsAuto.observe(auto);
    }
  }
}

/* ---------- métricas (Umami): só entra se DADOS.umami tiver o ID ---------- */
function ligarMetricas(){
  const id = String(DADOS.umami || '').trim();
  if (!id) return;
  const s = document.createElement('script');
  s.src = 'https://cloud.umami.is/script.js';
  s.setAttribute('data-website-id', id);
  s.defer = true;
  document.head.appendChild(s);
}

/* ---------- link com ?c=nicho abre direto na aba ---------- */
function abrirNichoDoLink(){
  let c = '';
  try { c = new URLSearchParams(location.search).get('c') || ''; } catch (e) {}
  if (!c) return;
  const i = (DADOS.nichos || []).findIndex(n => slug(n.nome) === slug(c));
  if (i < 0) return;
  selecionarNicho(i);
  setTimeout(() => document.getElementById('nichos').scrollIntoView({ behavior: reduz ? 'auto' : 'smooth', block:'start' }), 60);
}

/* ---------- página de um nicho só (lifestyle.html, beleza.html...) ---------- */
function indiceNichoDaPagina(){
  return (DADOS.nichos || []).findIndex(n => slug(n.nome) === slug(PAG_NICHO) || paginaNicho(n) === PAG_NICHO + '.html');
}
function montarNichoPagina(){
  const ns = DADOS.nichos || [];
  const i = indiceNichoDaPagina();
  const capa = document.getElementById('nicho-capa');
  if (i < 0) {
    capa.innerHTML = '<div class="wrap">' + lacTxt(t('nichoNaoAchado') + ' ' + PAG_NICHO, 'dados.js') + '</div>';
    return;
  }
  const n = ns[i], nome = nomeNicho(i), desc = descNicho(i);
  const pasta = 'midia/nichos/' + slug(n.nome) + '/';
  document.title = nome + ' · ' + DADOS.nome + ' · UGC';

  capa.innerHTML =
    '<div class="wrap nh-grid">' +
      '<div>' +
        '<p class="kicker">' + t('nichoK') + '</p>' +
        '<div class="nome-wrap"><h1 class="nome nh-nome">' + esc(nome) + '</h1>' +
          '<div class="selo" aria-hidden="true">' + selo(nome + ' ✸ UGC ✸ ' + nome + ' ✸ UGC ✸ ', '#F2B416', '#151515', '#E5482A') + '</div></div>' +
        '<svg class="pincelada" viewBox="0 0 420 40" preserveAspectRatio="none" aria-hidden="true"><path d="M6 20 C 70 6, 170 3, 260 9 C 320 12, 380 7, 414 13 C 409 20, 404 24, 411 30 C 330 28, 240 35, 150 32 C 90 31, 40 37, 8 34 C 14 29, 1 25, 6 20 Z"/></svg>' +
        '<p class="frase nh-desc">' + (desc ? esc(desc) : lacMini(t('descFalta'))) + '</p>' +
        '<p class="linha nh-quem">' + t('linha') + '<strong>' + esc(d('nichosResumo') || '') + '</strong> · ' + esc(DADOS.nome) + '</p>' +
        '<div class="btns" style="margin-top:28px"><a class="btn btn-am" href="#contato">' + t('queroNicho') + esc(nome.toLowerCase()) + seta() + '</a>' +
          '<a class="btn btn-ct" href="index.html">' + t('voltar') + seta() + '</a></div>' +
      '</div>' +
    '</div>';

  const vs = n.videos || [];
  const cards = vs.map((v,j) => cardVideo(v, { auto: j === 0, nicho:nome, reserva: nome + ' ' + (j+1), arq: pasta + (j+1) + '.mp4', dica: 'Vídeo de ' + n.nome })).join('');
  const vazios = vs.length ? '' : [1,2,3].map(j => cardVideo({}, { nicho:nome, arq: pasta + j + '.mp4', dica: 'Vídeo de ' + n.nome })).join('');
  document.getElementById('nicho-videos').innerHTML =
    '<div class="wrap">' +
      '<h2 class="tit">' + t('nichoVideosTit') + '<span class="mao">' + esc(nome.toLowerCase()) + sublinhado() + '</span></h2>' +
      '<div class="grade nh-grade">' + cards + vazios + '</div>' +
    '</div>';

  const outros = ns.map((x,j) => j === i ? '' : '<a class="aba" href="' + esc(paginaNicho(x)) + '">' + esc(nomeNicho(j)) + seta() + '</a>').join('');
  document.getElementById('outros').innerHTML =
    '<div class="wrap">' +
      '<p class="kicker">' + t('outrosK') + '</p>' +
      '<h2 class="tit">' + t('outrosTit') + '</h2>' +
      '<div class="abas">' + outros + '</div>' +
    '</div>';
}

function montarPagina(){
  faltando.length = 0;
  montarMenu();
  if (PAG_NICHO) {
    montarNichoPagina(); montarContato(); montarRodape();
  } else {
    montarCapa(); montarSobre(); montarFaixa(); montarDestaques();
    montarNichos(); montarElogios(); montarContato(); montarRodape();
  }
  ligarVideos();
}
function aplicarIdioma(l){
  LANG = l === 'en' ? 'en' : 'pt';
  document.documentElement.lang = LANG === 'en' ? 'en' : 'pt-BR';
}
/* Botões PT / EN: remonta a página no outro idioma, no mesmo lugar */
function trocarIdioma(l){
  if (l === LANG) return;
  const aba = [...document.querySelectorAll('#nichos .aba')].findIndex(a => a.getAttribute('aria-selected') === 'true');
  const y = window.scrollY;
  aplicarIdioma(l);
  try { localStorage.setItem('idioma', LANG); } catch (e) {}
  montarPagina();
  if (aba > 0) selecionarNicho(aba);
  window.scrollTo({ top: y, behavior: 'instant' });
  const b = document.querySelector('.idioma [data-lang="' + LANG + '"]');
  if (b) b.focus();
}
function montar(){
  aplicarIdioma(idiomaInicial());
  montarPagina();
  ligarPlayer(); ligarMetricas();
  if (!PAG_NICHO) abrirNichoDoLink();
  if (faltando.length) console.warn('[portfólio] Estes links não tocam na tag video. Baixe o .mp4 e coloque na pasta midia:', faltando);
}
document.addEventListener('DOMContentLoaded', montar);
