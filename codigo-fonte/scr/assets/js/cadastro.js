// Evento que aguarda o carregamento do DOM antes de executar as ações.
document.addEventListener("DOMContentLoaded", function () {
    // Captura os elementos do botão de abrir menu, fechar menu, menu e menu do footer.
    const openMenuButton = document.getElementById("openMenu");
    const closeMenuButton = document.getElementById("closeMenu");
    const menu = document.getElementById("menu");
    const footerMenu = document.getElementById("footerMenu"); // Elemento de menu do footer

    // Adiciona um ouvinte de evento para o botão de abrir o menu.
    openMenuButton.addEventListener("click", function () {
        // Exibe o menu e move-o para a posição certa.
        menu.style.display = "flex";
        menu.style.right = "0";
        openMenuButton.style.display = "none";
        closeMenuButton.style.display = "block";

        // Move o elemento de menu do footer para dentro do menu principal.
        menu.appendChild(footerMenu);
    });

    // Adiciona um ouvinte de evento para o botão de fechar o menu.
    closeMenuButton.addEventListener("click", function () {
        // Fecha o menu movendo-o para a esquerda e oculta-o.
        menu.style.right = "-100%";
        menu.style.display = "none";
        openMenuButton.style.display = "block";
        closeMenuButton.style.display = "none";

        // Move o elemento de menu do footer de volta para o footer.
        document.querySelector("footer").appendChild(footerMenu);
    });
});

/* Ação de eventos sobre o botão menu da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
openMenu.addEventListener('click', () => {
    /* Sobrepõe a propriedade display: none aplicada no
       CSS por display: flex que o torna visível. */
    menu.style.display = "flex"

    /* Captura o tamanho do menu nav e aplica na posição. */
    menu.style.right = (menu.offsetWidth * -1) + 'px'

    /* Após 10 milésimos de segundo, adiciona o atributo style, */
    /* e adiciona as propriedades CSS.*/
    setTimeout(()=> {
        /* Faz o menu nav aparecer na velocidade em que foi
           determinado na propriedade transition no CSS.*/
        menu.style.opacity = '1'

        /* Move o menu nav para a posição 0 a direita. Utiliza 
           também a velocidade definida, na propriedade transition 
           no CSS para realizar o movimento mais suave.*/
        menu.style.right = "0"

        /* Oculta o botão que torna visível o elemento nav.*/
        openMenu.style.display = 'none'
    }, 10);
})

/* Ação de eventos sobre o botão X da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
closeMenu.addEventListener('click', () => {
    /* Faz o menu nav desaparecer na velocidade em que foi
       determinado na propriedade transition no CSS. */
    menu.style.opacity = '0'

    /* Captura o tamanho do menu nav e aplica na posição. */
    menu.style.right = (menu.offsetWidth * -1) + 'px'

    /* Torna visível o botão que apresenta o menu nav. */
    /* openMenu.style.display = 'block'*/
    
    /* Após 200 milésimos de 1 segundo, remove o atributo style. */
    setTimeout(()=> {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    }, 200);
})

// Capturando o elemento de formulário pelo seu ID "cadastroForm"
const form = document.getElementById("cadastroForm");

// Adicionando um evento de "submit" ao formulário
form.addEventListener("submit", function (event) {
    // Impedindo o comportamento padrão de envio do formulário
    event.preventDefault();

    // Capturando os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const apelido = document.getElementById("apelido").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // Validar nome
    const nomeRegex = /^[A-Za-z\s]+$/;
    // Verificando se o nome não corresponde ao padrão definido na expressão regular
    if (!nome.match(nomeRegex)) {
        // Exibindo uma mensagem de erro abaixo do campo "nome"
        document.getElementById("nomeError").textContent = "Nome inválido";
        return; // Saindo da função para impedir o envio do formulário
    }
    // Limpando a mensagem de erro se o nome for válido
    document.getElementById("nomeError").textContent = "";

    // Validar apelido
    // Verificando se o apelido é apenas espaços em branco
    if (apelido.trim() === "") {
        document.getElementById("apelidoError").textContent = "Apelido inválido";
        return;
    }
    document.getElementById("apelidoError").textContent = "";

    // Validar email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Verificando se o email não corresponde ao padrão definido na expressão regular
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").textContent = "E-mail inválido";
        return;
    }
    document.getElementById("emailError").textContent = "";

    // Validar senha
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{5,}$/;
    // Verificando se a senha não corresponde ao padrão definido na expressão regular
    if (!senha.match(senhaRegex)) {
        document.getElementById("senhaError").textContent = "Senha inválida";
        return;
    }
    document.getElementById("senhaError").textContent = "";

    // Confirmar senha
    // Verificando se a senha e a confirmação de senha são iguais
    if (senha !== confirmarSenha) {
        document.getElementById("confirmarSenhaError").textContent = "Senhas não coincidem";
        return;
    }
    document.getElementById("confirmarSenhaError").textContent = "";

    // Armazenar os dados no Web Storage
    const usuario = {
        nome,
        apelido,
        email,
        senha
    };
    // Convertendo o objeto "usuario" em uma string JSON e armazenando no Web Storage com a chave "usuario"
    localStorage.setItem("usuario", JSON.stringify(usuario));
    // Exibindo um alerta de sucesso
    alert("Cadastro realizado com sucesso!");
    // Resetando o formulário para limpar os campos
    form.reset();
});
