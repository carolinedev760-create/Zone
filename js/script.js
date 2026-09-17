document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona os botões pelo seu seletor de classe
    const botaoTurista = document.querySelector('.button.turista');
    const botaoGuia = document.querySelector('.button.guia');

    // 2. Define a função de redirecionamento para o Turista
    botaoTurista.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link de âncora (#)
        event.preventDefault(); 
        
        // Redireciona para a tela de cadastro de Turista
        console.log("Redirecionando para cadastro de Guia Turístico...");
        window.location.href = 'cadastro-guia.html'; 
        
        // *** IMPORTANTE: SUBSTITUA 'cadastro-turista.html' PELA SUA URL REAL ***
    });

    // 3. Define a função de redirecionamento para o Guia Turístico
    botaoGuia.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link de âncora (#)
        event.preventDefault(); 
        
        // Redireciona para a tela de cadastro de Guia
        console.log("Redirecionando para cadastro de Turista...");
        window.location.href = 'cadastro-turista.html'; 
        
       
    });
});