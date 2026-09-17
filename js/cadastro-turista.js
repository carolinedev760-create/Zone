document.addEventListener("DOMContentLoaded", function () {

    // Botão "Faça login"
    const botaoLogin = document.getElementById("facaLogin");

    botaoLogin.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "login-turista.html"; 
    });

    // Cadastro apenas exemplo
    const form = document.getElementById("formCadastro");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Cadastro realizado com sucesso!");
    });

});
