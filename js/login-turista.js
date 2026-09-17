// Espera a página carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formLogin");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // impede de recarregar a página

        // Pega os valores digitados
        const email = form.querySelector("input[type='email']").value;
        const senha = form.querySelector("input[type='password']").value;

        // Aqui você pode colocar validação depois
        if (email !== "" && senha !== "") {

            // Redireciona para a home do turista
            window.location.href = "menu.html";

        } else {
            alert("Preencha todos os campos!");
        }
    });

});