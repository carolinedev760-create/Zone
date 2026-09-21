document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. REDIRECIONAMENTO DE PERFIS
  // ==========================================

  // Perfil Próprio do Turista (Menu do Usuário / Avatar)
  const userMenu = document.querySelector('.user-menu');
  if (userMenu) {
    userMenu.addEventListener('click', () => {
      window.location.href = 'perfilturista.html';
    });
  }

  // Visualização PÚBLICA do Perfil do Guia (Somente Leitura)
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const nomeGuia = card.querySelector('.guide-badge span')?.textContent.trim() || 'guia';
    const guiaId = encodeURIComponent(nomeGuia.toLowerCase().replace(/\s+/g, '-'));

    const abrirPerfilPublicoGuia = (e) => {
      e.stopPropagation();
      // Redireciona em modo de visualização pública
      window.location.href = `perfilguia.html?id=${guiaId}&mode=view`;
    };

    // Clique no selo/foto do guia
    const guideBadge = card.querySelector('.guide-badge');
    if (guideBadge) {
      guideBadge.addEventListener('click', abrirPerfilPublicoGuia);
    }

    // Clique no card completo (exceto botões de ação)
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.heart-btn') && !e.target.closest('.book-btn')) {
        abrirPerfilPublicoGuia(e);
      }
    });
  });

  // ==========================================
  // 2. SISTEMA DE FAVORITOS (CORAÇÃO)
  // ==========================================
  const heartButtons = document.querySelectorAll('.heart-btn');

  heartButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      const icon = btn.querySelector('i');

      if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        icon.style.color = '#ff385c';
      } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        icon.style.color = 'white';
      }
    });
  });

  // ==========================================
  // 3. FILTRO DE BUSCA POR DESTINO
  // ==========================================
  const searchBtn = document.querySelector('.search-btn');
  const inputDestino = document.getElementById('destino');

  function filtrarGuias() {
    const termoBusca = inputDestino.value.toLowerCase().trim();

    cards.forEach((card) => {
      const titulo = card.querySelector('.card-header h3').textContent.toLowerCase();
      const localizacao = card.querySelector('.card-image img').alt.toLowerCase();

      if (titulo.includes(termoBusca) || localizacao.includes(termoBusca)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', filtrarGuias);
  }

  if (inputDestino) {
    inputDestino.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        filtrarGuias();
      }
    });
  }

  // ==========================================
  // 4. AÇÃO DE AGENDAMENTO
  // ==========================================
  const bookButtons = document.querySelectorAll('.book-btn');

  bookButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();

      const card = btn.closest('.card');
      const nomeGuia = card.querySelector('.guide-badge span').textContent;
      const passeios = card.querySelector('.card-header h3').textContent;
      const preco = card.querySelector('.price strong').textContent;

      const confirmacao = confirm(
        `Deseja solicitar o agendamento com o ${nomeGuia}?\n\n` +
        `Passeio: ${passeios}\n` +
        `Valor: ${preco} / pessoa`
      );

      if (confirmacao) {
        alert(`Solicitação enviada com sucesso para o ${nomeGuia}! Ele entrará em contato em breve.`);
        btn.textContent = 'Solicitado';
        btn.style.backgroundColor = '#717171';
        btn.disabled = true;
      }
    });
  });

});