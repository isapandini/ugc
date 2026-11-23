/* =====================================================================
   DADOS — É SÓ MEXER AQUI PRA TROCAR QUALQUER COISA DO PORTFÓLIO.
   Campo vazio ('') = aparece uma lacuna listrada com a dica no site.
   Caminhos de fotos e vídeos são relativos (ex.: 'midia/capa.jpg').
   ===================================================================== */
const DADOS = {
  // Seu nome completo. Aparece no menu, na capa (uma palavra por linha) e no rodapé.
  nome: 'Isadora Pandini',

  // Seu @ do Instagram, sem o @.
  instagram: 'isascopel',

  // Seu WhatsApp com DDD (só números ou do jeito que quiser). Vazio = os botões viram e-mail.
  whatsapp: '(48) 99103-2288',

  // Seu e-mail. Usado se o WhatsApp estiver vazio.
  email: 'isadorapandini1822@gmail.com',

  // Endereço do site depois de publicado (ex.: 'https://isadorapandini.vercel.app').
  // Se mudar, troque também as tags og: lá no <head>.
  site: 'https://isapandini.github.io/ugc/',

  // Endereço do formulário do Formspree (ex.: 'https://formspree.io/f/abcdwxyz').
  // Vazio = o formulário de orçamento não aparece, só os botões.
  formspree: 'https://formspree.io/f/mqpqdplj',

  // ID do site no Umami (ex.: '1a2b3c4d-...'). Vazio = nenhuma métrica é carregada.
  umami: 'e368663f-52dc-488d-b5ec-821920733478',

  // Seus nichos em uma linha, como aparece na capa ("UGC creator de ...").
  nichosResumo: 'lifestyle, beleza, saúde e pets',

  // Frase curta do que você faz pela marca.
  frase: 'Transformo a sua essência em conteúdo que vende.',

  // Os 3 números da capa (e da faixa preta). Deixe numero vazio até ter o número real.
  provas: [
    { numero: '',        rotulo: 'vídeos gravados',  dica: 'quantos?' },
    { numero: '',        rotulo: 'marcas atendidas', dica: 'quantas?' },
    { numero: '10 dias', rotulo: 'prazo de entrega' }
  ],

  // Suas fotos. Coloque os arquivos com esses nomes na pasta midia.
  fotoCapa: 'midia/capa.jpg',   // retrato com rosto, luz natural, ambiente real
  fotoSobre: 'midia/sobre.jpg', // você no dia a dia, trabalhando

  // Texto do "Sobre mim", em primeira pessoa. Para quebrar parágrafo, deixe uma linha em branco (\n\n).
  // Fale: quem você é, onde mora, sua rotina e por que as marcas do seu nicho combinam com você.
  sobreTexto: 'Tenho 23 anos, estou no último ano de medicina, sou noiva, mãe de pet e cristã. Sou fascinada por autocuidado, esporte, bem-estar e tudo o que envolve saúde e autoestima.\n\nCarrego um olhar cuidadoso e estratégico pra transformar experiências reais em conteúdo que gera identificação e vendas, de forma clara e natural. Conecto marcas alinhadas a esses valores com mulheres de 18 a 45 anos.',

  // Os 3 diferenciais (ícones disponíveis: 'alvo', 'roteiro', 'edicao').
  diferenciais: [
    { icone: 'alvo',    titulo: 'Estudo a dor do cliente',       texto: 'Antes de gravar, entendo quem compra da sua marca e o que trava a compra.' },
    { icone: 'roteiro', titulo: 'Roteiro meu, aprovado por você', texto: 'Eu escrevo o roteiro e a marca aprova antes de eu ligar a câmera.' },
    { icone: 'edicao',  titulo: 'Edição pronta pra anúncio',      texto: 'Gancho forte nos primeiros segundos e som tratado, pronto pra subir.' }
  ],

  // Os 3 MELHORES vídeos (não os mais recentes). O primeiro é o mais forte: fica maior e toca sozinho.
  // titulo: curto | nicho | formato: ADS, review, unboxing, tutorial ou nativo
  // video: arquivo .mp4 vertical 9:16 | capa: imagem opcional antes de tocar
  // res: resultado REAL, se tiver (ex.: '116 vendas'). Vazio = sem selo.
  destaques: [
    { titulo: '', nicho: '', formato: '', video: 'midia/destaques/1.mp4', capa: '', res: '' },
    { titulo: '', nicho: '', formato: '', video: 'midia/destaques/2.mp4', capa: '', res: '' },
    { titulo: '', nicho: '', formato: '', video: 'midia/destaques/3.mp4', capa: '', res: '' }
  ],

  // Uma aba por nicho na página inicial + uma página só dele (pagina: 'beleza.html' etc.).
  // Mínimo 3 vídeos em cada; na página do nicho aparecem TODOS os vídeos da lista (pode pôr mais).
  // Os vídeos ficam em midia/nichos/NOME-DO-NICHO/.
  // Link pra mandar pras marcas: seusite/beleza.html (ou seusite/?c=beleza pra abrir a aba).
  // descricao: 1 ou 2 frases que aparecem no topo da página do nicho.
  nichos: [
    { nome: 'Lifestyle', pagina: 'lifestyle.html',
      descricao: 'Rotina real, casa, estudo e momentos do dia a dia. Seu produto aparece no meio da vida, do jeito que a cliente vai usar.',
      videos: [
      { titulo: '', formato: '', video: 'midia/nichos/lifestyle/1.mp4' },
      { titulo: '', formato: '', video: 'midia/nichos/lifestyle/2.mp4' },
      { titulo: '', formato: '', video: 'midia/nichos/lifestyle/3.mp4' }
    ]},
    { nome: 'Beleza', pagina: 'beleza.html',
      descricao: 'Maquiagem, skincare, cabelo e autocuidado. Textura, aplicação e antes e depois mostrados de perto, com naturalidade.',
      videos: [
      { titulo: '', formato: '', video: 'midia/nichos/beleza/1.mp4' },
      { titulo: '', formato: '', video: 'midia/nichos/beleza/2.mp4' },
      { titulo: '', formato: '', video: 'midia/nichos/beleza/3.mp4' }
    ]},
    { nome: 'Saúde', pagina: 'saude.html',
      descricao: 'Bem-estar, esporte, suplementos e alimentação. Conteúdo claro e responsável, com o olhar de quem está terminando medicina.',
      videos: [
      { titulo: '', formato: '', video: 'midia/nichos/saude/1.mp4' },
      { titulo: '', formato: '', video: 'midia/nichos/saude/2.mp4' },
      { titulo: '', formato: '', video: 'midia/nichos/saude/3.mp4' }
    ]},
    { nome: 'Pets', pagina: 'pets.html',
      descricao: 'Petiscos, brinquedos, higiene e acessórios testados com o meu próprio pet, com reação de verdade.',
      videos: [
      { titulo: '', formato: '', video: 'midia/nichos/pets/1.mp4' },
      { titulo: '', formato: '', video: 'midia/nichos/pets/2.mp4' },
      { titulo: '', formato: '', video: 'midia/nichos/pets/3.mp4' }
    ]}
  ],

  // Depoimentos REAIS das marcas (nunca invente). texto: a frase | print: imagem opcional (ex.: 'midia/print1.jpg')
  // marca: nome da marca | detalhe: contexto (produto, campanha, resultado)
  elogios: [
    { texto: '', print: '', marca: '', detalhe: '' },
    { texto: '', print: '', marca: '', detalhe: '' },
    { texto: '', print: '', marca: '', detalhe: '' }
  ],

  // Marcas que você já atendeu. Pode ser só o nome: 'Marca X'
  // ou com logo: { nome: 'Marca X', logo: 'midia/logos/marca-x.png' }
  marcas: [],

  // VERSÃO EM INGLÊS (botão EN no topo). Mesma ordem dos campos acima.
  // Campo vazio ou que não está aqui = aparece o texto em português.
  en: {
    nichosResumo: 'lifestyle, beauty, health and pets',
    frase: 'I turn your brand’s essence into content that sells.',
    sobreTexto: 'I’m 23, in my final year of medical school, engaged, a pet mom and a Christian. I’m fascinated by self-care, sports, wellness and everything related to health and self-esteem.\n\nI bring a careful, strategic eye to turn real experiences into content that builds connection and drives sales, in a clear and natural way. I connect brands aligned with these values with women aged 18 to 45.',
    provas: [
      { rotulo: 'videos recorded' },
      { rotulo: 'brands served' },
      { numero: '10 days', rotulo: 'delivery time' }
    ],
    diferenciais: [
      { titulo: 'I study your customer’s pain',  texto: 'Before filming, I learn who buys from your brand and what holds them back.' },
      { titulo: 'My script, approved by you',    texto: 'I write the script and the brand approves it before I hit record.' },
      { titulo: 'Ad-ready editing',              texto: 'A strong hook in the first seconds and clean audio, ready to run.' }
    ],
    // Títulos dos vídeos em inglês (opcional), na mesma ordem dos destaques
    destaques: [ { titulo: '' }, { titulo: '' }, { titulo: '' } ],
    nichos: [
      { nome: 'Lifestyle', descricao: 'Real routines, home, study and everyday moments. Your product shows up in the middle of life, the way your customer will actually use it.' },
      { nome: 'Beauty',    descricao: 'Makeup, skincare, hair and self-care. Texture, application and before-and-after shown up close, naturally.' },
      { nome: 'Health',    descricao: 'Wellness, sports, supplements and nutrition. Clear, responsible content from someone finishing medical school.' },
      { nome: 'Pets',      descricao: 'Treats, toys, grooming and accessories tested with my own pet, with genuine reactions.' }
    ]
  }
};
