// Espera a página carregar
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formLogin");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // impede de recarregar

        const email = form.querySelector("input[type='email']").value;
        const senha = form.querySelector("input[type='password']").value;

        if (email !== "" && senha !== "") {

            // Redireciona para a tela do guia
            window.location.href = "home-guia.html";

        } else {
            alert("Preencha todos os campos!");
        }
    });

});