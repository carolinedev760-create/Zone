document.addEventListener('DOMContentLoaded', function() {
    // --- LÓGICA DE UPLOAD DE ARQUIVOS (Foto de Perfil e Certificação) ---

    function setupFileUpload(inputId, labelId, originalText) {
        const inputElement = document.getElementById(inputId);
        const labelElement = document.getElementById(labelId);

        if (inputElement && labelElement) {
            inputElement.addEventListener('change', function() {
                // Verifica se algum arquivo foi selecionado
                if (this.files && this.files.length > 0) {
                    // Atualiza o texto do label para o nome do arquivo
                    labelElement.textContent = this.files[0].name;
                } else {
                    // Se o usuário cancelou, volta ao texto original
                    labelElement.textContent = originalText;
                }
            });
        }
    }

    // Inicializa a lógica de upload para os dois campos
    setupFileUpload('profile-photo', 'label-profile-photo', 'Foto de perfil');
    setupFileUpload('certification-file', 'label-certification', 'Certificação profissional');


    // --- LÓGICA DE VALIDAÇÃO DE EXPERIÊNCIA (Opcional: Garante que é numérico) ---

    const inputExperiencia = document.querySelector('input[placeholder="Anos de Experiência"]');

    if (inputExperiencia) {
        inputExperiencia.addEventListener('input', function() {
            // Permite apenas números (necessário em alguns navegadores para input type="number")
            this.value = this.value.replace(/[^0-9]/g, ''); 
        });
    }
});


    