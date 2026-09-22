document.addEventListener('DOMContentLoaded', () => {
    // 1. Mapeamento dos elementos
    const userMenu = document.querySelector('.user-menu');
    const avatarIcon = document.querySelector('.avatar');

    // 2. Carregar dados e Foto do Turista Logado
    const usuarioSalvoJSON = localStorage.getItem('usuarioLogado');

    if (usuarioSalvoJSON) {
        const usuario = JSON.parse(usuarioSalvoJSON);

        // Se o usuário tiver foto cadastrada, substitui o ícone do FontAwesome pela tag <img>
        if (usuario.foto && avatarIcon) {
            const imgAvatar = document.createElement('img');
            imgAvatar.src = usuario.foto;
            imgAvatar.alt = "Foto de Perfil";
            imgAvatar.id = "fotoPerfilHeader";
            imgAvatar.style.width = '30px';
            imgAvatar.style.height = '30px';
            imgAvatar.style.borderRadius = '50%';
            imgAvatar.style.objectFit = 'cover';
            imgAvatar.style.cursor = 'pointer';

            // Redireciona para perfil.html ao clicar DIRETO na foto de perfil
            imgAvatar.addEventListener('click', (e) => {
                e.stopPropagation(); // Impede de acionar o evento do menu pai
                window.location.href = 'perfil.html';
            });

            // Substitui o ícone padrão pela foto
            avatarIcon.replaceWith(imgAvatar);
        }
    }

    // Se o usuário ainda não enviou foto, o ícone de avatar padrão também leva ao perfil ao ser clicado
    const elementoAvatar = document.getElementById('fotoPerfilHeader') || document.querySelector('.avatar');
    if (elementoAvatar) {
        elementoAvatar.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = 'perfil.html';
        });
    }

    // Menu do Usuário (clique nas barrinhas ☰ ou na área em volta) -> Pergunta sobre Logout
    if (userMenu) {
        userMenu.addEventListener('click', () => {
            const acao = confirm("Deseja sair da sua conta?\n[OK] Sair | [Cancelar] Continuar navegando");
            if (acao) {
                localStorage.removeItem('usuarioLogado');
                window.location.href = 'login-turista.html';
            }
        });
    }

    // 3. Sistema de Filtro/Pesquisa de Guias
    const inputDestino = document.getElementById('destino');
    const selectIdioma = document.getElementById('idioma');
    const searchBtn = document.querySelector('.search-btn');
    const cards = document.querySelectorAll('.card');

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const termoDestino = inputDestino.value.trim().toLowerCase();
            const idiomaSelecionado = selectIdioma.value.toLowerCase();

            cards.forEach(card => {
                const titulo = card.querySelector('h3').textContent.toLowerCase();
                const idiomasTexto = card.querySelector('.guide-details').textContent.toLowerCase();

                let atendeIdioma = true;
                if (idiomaSelecionado === 'pt') {
                    atendeIdioma = idiomasTexto.includes('português');
                } else if (idiomaSelecionado === 'en') {
                    atendeIdioma = idiomasTexto.includes('inglês');
                } else if (idiomaSelecionado === 'es') {
                    atendeIdioma = idiomasTexto.includes('espanhol');
                }

                const atendeDestino = !termoDestino || titulo.includes(termoDestino);

                if (atendeDestino && atendeIdioma) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // 4. Funcionalidade dos Botões de Favoritar
    const heartBtns = document.querySelectorAll('.heart-btn');

    heartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('i');
            
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                icon.style.color = '#e74c3c';
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                icon.style.color = '';
            }
        });
    });

    // 5. Botões de Agendar
    const bookBtns = document.querySelectorAll('.book-btn');

    bookBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const tituloPasseio = card.querySelector('h3').textContent;
            
            alert(`Reserva iniciada para: "${tituloPasseio}".`);
        });
    });
});