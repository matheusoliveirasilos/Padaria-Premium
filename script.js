/* ==========================================================================
   DADOS DO CARDÁPIO
   Fonte única de verdade: usada tanto no modal do cardápio quanto na seção
   "Produtos em Destaque" e no rodapé, para manter tudo sincronizado.
   ========================================================================== */
const CARDAPIO = {
  "Pães": {
    destaque: true,
    resumo: "Nossos clássicos de todo dia, de fermentação natural e casca crocante.",
    icone: "pao",
    itens: [
      { nome: "Pão Francês", desc: "O clássico crocante por fora e macio por dentro, assado em fornadas frescas.", preco: "R$ 1,20 / un" },
      { nome: "Pão Italiano", desc: "Casca dourada e miolo aerado, ótimo para acompanhar queijos e azeite.", preco: "R$ 14,90" },
      { nome: "Pão de Fermentação Natural", desc: "24h de fermentação lenta com fermento selvagem, casca rústica e sabor intenso.", preco: "R$ 24,90" },
      { nome: "Pão de Forma Artesanal", desc: "Macio, levemente adocicado, perfeito para sanduíches e torradas.", preco: "R$ 18,50" },
    ]
  },
  "Pães Especiais": {
    resumo: "Receitas exclusivas com grãos, ervas e ingredientes selecionados.",
    icone: "pao-especial",
    itens: [
      { nome: "Pão de Fermentação com Nozes e Mel", desc: "Miolo úmido com pedaços de noz e um toque de mel silvestre.", preco: "R$ 29,90" },
      { nome: "Pão Multigrãos", desc: "Mistura de aveia, linhaça, gergelim e girassol para um pão nutritivo e saboroso.", preco: "R$ 22,90" },
      { nome: "Pão de Azeitona e Alecrim", desc: "Azeitonas pretas e alecrim fresco em massa macia com azeite extra virgem.", preco: "R$ 26,50" },
      { nome: "Foccacia da Casa", desc: "Alta hidratação, tomate cereja, alecrim e flor de sal por cima.", preco: "R$ 32,00" },
    ]
  },
  "Bolos": {
    destaque: true,
    resumo: "Fofinhos, generosos e perfeitos para qualquer celebração.",
    icone: "bolo",
    itens: [
      { nome: "Bolo de Cenoura com Cobertura de Chocolate", desc: "Massa fofinha de cenoura com cobertura cremosa de chocolate meio amargo.", preco: "R$ 34,90" },
      { nome: "Bolo Red Velvet", desc: "Massa aveludada com cream cheese batido na medida certa.", preco: "R$ 42,00" },
      { nome: "Bolo de Fubá Cremoso", desc: "Receita de família, com aquele centro cremoso irresistível.", preco: "R$ 28,90" },
      { nome: "Bolo de Aniversário Personalizado", desc: "Recheios e decoração sob encomenda para a sua data especial.", preco: "a partir de R$ 120,00" },
    ]
  },
  "Tortas": {
    resumo: "Doces e salgadas, em fatias generosas ou inteiras para compartilhar.",
    icone: "torta",
    itens: [
      { nome: "Torta de Limão Siciliano", desc: "Base amanteigada, creme de limão e merengue maçaricado.", preco: "R$ 16,90 (fatia)" },
      { nome: "Torta Holandesa", desc: "Camadas de biscoito, doce de leite e chocolate, geladinha.", preco: "R$ 15,90 (fatia)" },
      { nome: "Torta de Frango com Catupiry", desc: "Massa amanteigada com recheio cremoso, ideal para o almoço.", preco: "R$ 19,90 (fatia)" },
      { nome: "Torta de Palmito", desc: "Recheio suculento de palmito com toque de azeitona.", preco: "R$ 18,90 (fatia)" },
    ]
  },
  "Doces": {
    destaque: true,
    resumo: "Pequenos mimos artesanais para adoçar o dia.",
    icone: "doce",
    itens: [
      { nome: "Brigadeiro Gourmet", desc: "Chocolate belga 70% cacau, enrolado na hora.", preco: "R$ 4,50 / un" },
      { nome: "Bomba de Chocolate", desc: "Massa choux recheada com creme e cobertura de ganache.", preco: "R$ 9,90" },
      { nome: "Palha Italiana", desc: "Biscoito, chocolate e um toque crocante de castanhas.", preco: "R$ 8,50" },
      { nome: "Croissant Amêndoas e Doce de Leite", desc: "Massa folhada amanteigada com recheio generoso.", preco: "R$ 13,90" },
    ]
  },
  "Salgados": {
    destaque: true,
    resumo: "Perfeitos para o lanche da tarde ou aquele café reforçado.",
    icone: "salgado",
    itens: [
      { nome: "Coxinha de Frango Artesanal", desc: "Massa lisinha e recheio cremoso de frango desfiado.", preco: "R$ 8,90" },
      { nome: "Empada de Palmito", desc: "Massa amanteigada crocante com recheio suculento.", preco: "R$ 9,50" },
      { nome: "Quiche de Alho-Poró", desc: "Massa amanteigada com creme de leite e queijo gratinado.", preco: "R$ 12,90" },
      { nome: "Pastel Assado de Queijo", desc: "Crocante por fora, com recheio de queijos nobres derretidos.", preco: "R$ 9,90" },
    ]
  },
  "Sanduíches": {
    resumo: "Montados na hora, com pães frescos do próprio forno.",
    icone: "sanduiche",
    itens: [
      { nome: "Sanduíche de Presunto Cru e Brie", desc: "Pão italiano, presunto cru, brie e geleia de figo.", preco: "R$ 26,90" },
      { nome: "Baguete de Frango com Rúcula", desc: "Frango grelhado, rúcula fresca e maionese de ervas.", preco: "R$ 24,90" },
      { nome: "Croissant com Ovos e Bacon", desc: "Croissant amanteigado, ovos mexidos cremosos e bacon crocante.", preco: "R$ 22,90" },
      { nome: "Sanduíche Vegetariano", desc: "Pão multigrãos, homus, legumes grelhados e queijo de cabra.", preco: "R$ 23,90" },
    ]
  },
  "Cafés": {
    destaque: true,
    resumo: "Grãos selecionados, torra própria e o preparo perfeito para cada método.",
    icone: "cafe",
    itens: [
      { nome: "Espresso", desc: "Extração curta e encorpada, com nossos grãos de torra média.", preco: "R$ 6,50" },
      { nome: "Cappuccino Cremoso", desc: "Espresso, leite vaporizado e uma camada generosa de espuma.", preco: "R$ 10,90" },
      { nome: "Café Coado na Hora", desc: "Método filtro, servido em xícara de porcelana.", preco: "R$ 8,00" },
      { nome: "Latte com Canela", desc: "Leite vaporizado, espresso duplo e um toque aromático de canela.", preco: "R$ 12,50" },
    ]
  },
  "Bebidas": {
    destaque: true,
    resumo: "Sucos naturais, chás e opções geladas para refrescar.",
    icone: "bebida",
    itens: [
      { nome: "Suco de Laranja Natural", desc: "Espremido na hora, sem adição de açúcar.", preco: "R$ 9,90" },
      { nome: "Chá Gelado de Frutas Vermelhas", desc: "Preparo artesanal com frutas frescas da estação.", preco: "R$ 11,50" },
      { nome: "Limonada Suíça", desc: "Receita cremosa e refrescante, feita na hora.", preco: "R$ 10,90" },
      { nome: "Água com Gás e Limão Siciliano", desc: "Opção leve e refrescante para acompanhar qualquer prato.", preco: "R$ 7,00" },
    ]
  },
  "Combos": {
    resumo: "As melhores combinações da casa, com preço especial.",
    icone: "combo",
    itens: [
      { nome: "Combo Café da Manhã", desc: "Café coado, pão na chapa e suco natural do dia.", preco: "R$ 24,90" },
      { nome: "Combo Tarde Doce", desc: "Fatia de bolo do dia + café espresso ou chá.", preco: "R$ 19,90" },
      { nome: "Combo Executivo", desc: "Sanduíche à escolha + suco natural + salgado pequeno.", preco: "R$ 32,90" },
      { nome: "Combo Família", desc: "6 pães franceses + 4 salgados + bolo pequeno + 1 garrafa de suco.", preco: "R$ 79,90" },
    ]
  }
};

/* Fotos reais usadas nos cartões de "Produtos em Destaque" */
const IMAGENS_PRODUTO = {
  pao:     { src: "https://images.unsplash.com/photo-1774669081553-4ef841520c05?auto=format&fit=crop&w=800&q=80", alt: "Cesta com pães artesanais de casca crocante" },
  bolo:    { src: "https://images.unsplash.com/photo-1564844536308-75c540dbf14e?auto=format&fit=crop&w=800&q=80", alt: "Fatia de bolo de chocolate em um prato" },
  doce:    { src: "https://images.unsplash.com/photo-1710077717714-976db5604dd7?auto=format&fit=crop&w=800&q=80", alt: "Variedade de doces e confeitos artesanais" },
  salgado: { src: "https://images.unsplash.com/photo-1550005399-c95f859c0fc7?auto=format&fit=crop&w=800&q=80", alt: "Cesta de salgados e pães amanteigados" },
  cafe:    { src: "https://images.unsplash.com/photo-1531441802565-2948024f1b22?auto=format&fit=crop&w=800&q=80", alt: "Xícara de café com arte em leite" },
  bebida:  { src: "https://images.unsplash.com/photo-1555766720-1e727844cc8f?auto=format&fit=crop&w=800&q=80", alt: "Copo de suco natural de laranja" }
};

/* ==========================================================================
   RENDERIZAÇÃO: PRODUTOS EM DESTAQUE (a partir do CARDAPIO)
   ========================================================================== */
function renderProdutosDestaque(){
  const grid = document.getElementById('produtosGrid');
  let html = '';
  Object.keys(CARDAPIO).forEach(categoria => {
    const cat = CARDAPIO[categoria];
    if(!cat.destaque) return;
    const imagem = IMAGENS_PRODUTO[cat.icone] || IMAGENS_PRODUTO.pao;
    html += `
      <article class="produto-card">
        <div class="produto-media">
          <span class="produto-tag">${categoria}</span>
          <img src="${imagem.src}" alt="${imagem.alt}" loading="lazy">
        </div>
        <div class="produto-body">
          <h3>${categoria}</h3>
          <p>${cat.resumo}</p>
          <a href="#" class="ver-mais" data-open-cardapio data-categoria="${categoria}">
            Ver no cardápio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </article>`;
  });
  grid.innerHTML = html;
}

/* ==========================================================================
   RENDERIZAÇÃO: RODAPÉ — LISTA DE CATEGORIAS
   ========================================================================== */
function renderFooterCategorias(){
  const ul = document.getElementById('footerCategorias');
  const categorias = Object.keys(CARDAPIO).slice(0, 5);
  ul.innerHTML = categorias.map(c => `<li><a href="#" data-open-cardapio data-categoria="${c}">${c}</a></li>`).join('');
}

/* ==========================================================================
   RENDERIZAÇÃO: MODAL DO CARDÁPIO (abas + itens)
   ========================================================================== */
function renderCardapioModal(){
  const tabsEl = document.getElementById('cardapioTabs');
  const bodyEl = document.getElementById('cardapioBody');
  const categorias = Object.keys(CARDAPIO);

  tabsEl.innerHTML = categorias.map((cat, i) => `
    <button class="tab-btn${i === 0 ? ' is-active' : ''}" role="tab" aria-selected="${i === 0}" data-tab="${cat}">${cat}</button>
  `).join('');

  bodyEl.innerHTML = categorias.map((cat, i) => {
    const dados = CARDAPIO[cat];
    const itensHtml = dados.itens.map(item => `
      <div class="menu-item">
        <div class="item-info">
          <h4>${item.nome}</h4>
          <p>${item.desc}</p>
        </div>
        <div class="item-price">${item.preco}</div>
      </div>
    `).join('');
    return `
      <div class="cardapio-categoria${i === 0 ? ' is-active' : ''}" data-categoria-painel="${cat}" role="tabpanel">
        <p class="categoria-intro">${dados.resumo}</p>
        <div class="item-list">${itensHtml}</div>
      </div>`;
  }).join('');

  tabsEl.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => ativarCategoria(btn.dataset.tab));
  });
}

function ativarCategoria(categoria){
  document.querySelectorAll('.tab-btn').forEach(b => {
    const ativo = b.dataset.tab === categoria;
    b.classList.toggle('is-active', ativo);
    b.setAttribute('aria-selected', ativo);
  });
  document.querySelectorAll('.cardapio-categoria').forEach(p => {
    p.classList.toggle('is-active', p.dataset.categoriaPainel === categoria);
  });
  document.getElementById('cardapioBody').scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   RENDERIZAÇÃO: HORÁRIO DE FUNCIONAMENTO (destaca o dia de hoje)
   ========================================================================== */
function renderHorario(){
  const dias = [
    { nome: "Segunda-feira", horario: "07:00 – 20:00" },
    { nome: "Terça-feira",   horario: "07:00 – 20:00" },
    { nome: "Quarta-feira",  horario: "07:00 – 20:00" },
    { nome: "Quinta-feira",  horario: "07:00 – 20:00" },
    { nome: "Sexta-feira",   horario: "07:00 – 21:00" },
    { nome: "Sábado",        horario: "07:00 – 21:00" },
    { nome: "Domingo",       horario: "08:00 – 14:00" },
  ];
  const hojeIndex = (new Date().getDay() + 6) % 7; // 0 = segunda
  const tbody = document.getElementById('horarioBody');
  tbody.innerHTML = dias.map((d, i) => `
    <tr class="${i === hojeIndex ? 'hoje' : ''}">
      <td>${d.nome}${i === hojeIndex ? ' (hoje)' : ''}</td>
      <td>${d.horario}</td>
    </tr>
  `).join('');
}

/* ==========================================================================
   INTERAÇÕES: HEADER, MENU MOBILE, MODAL DO CARDÁPIO
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderProdutosDestaque();
  renderFooterCategorias();
  renderCardapioModal();
  renderHorario();
  document.getElementById('anoAtual').textContent = new Date().getFullYear();

  /* Header muda de aparência ao rolar a página */
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Menu mobile (drawer + overlay) */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');

  function openDrawer(){
    drawer.classList.add('is-open');
    overlay.classList.add('is-visible');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    hamburgerBtn.setAttribute('aria-label', 'Fechar menu');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer(){
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.setAttribute('aria-label', 'Abrir menu');
    if(!document.getElementById('cardapioOverlay').classList.contains('is-open')){
      document.body.style.overflow = '';
    }
  }
  hamburgerBtn.addEventListener('click', () => {
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
  });
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('[data-close-drawer]').forEach(el => {
    el.addEventListener('click', () => closeDrawer());
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeDrawer();
  });

  /* Modal do Cardápio: abrir / fechar / clicar fora / Esc */
  const cardapioOverlay = document.getElementById('cardapioOverlay');
  const cardapioModal = document.getElementById('cardapioModal');
  let ultimoFocoAntesDoModal = null;

  function abrirCardapio(categoria){
    ultimoFocoAntesDoModal = document.activeElement;
    closeDrawer();
    cardapioOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if(categoria) ativarCategoria(categoria);
    document.getElementById('cardapioCloseBtn').focus();
  }
  function fecharCardapio(){
    cardapioOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if(ultimoFocoAntesDoModal && ultimoFocoAntesDoModal.focus){
      ultimoFocoAntesDoModal.focus();
    }
  }

  document.querySelectorAll('[data-open-cardapio]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      abrirCardapio(el.dataset.categoria);
    });
  });
  document.getElementById('cardapioCloseBtn').addEventListener('click', fecharCardapio);
  document.getElementById('cardapioBackBtn').addEventListener('click', fecharCardapio);

  /* Fecha ao clicar fora do cartão do modal (na área escura do overlay) */
  cardapioOverlay.addEventListener('click', (e) => {
    if(e.target === cardapioOverlay) fecharCardapio();
  });
  cardapioModal.addEventListener('click', (e) => e.stopPropagation());

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && cardapioOverlay.classList.contains('is-open')) fecharCardapio();
  });

  /* Fecha o drawer/menu automaticamente se a tela crescer para desktop */
  window.addEventListener('resize', () => {
    if(window.innerWidth > 980) closeDrawer();
  });
});