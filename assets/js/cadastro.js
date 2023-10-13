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

// Aguarde o carregamento completo da página antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Capturando o elemento do botão de envio pelo seu ID "submitButton"
    const submitButton = document.getElementById("submitButton");

    // Adicionando um evento de clique ao botão de envio
    submitButton.addEventListener("click", function (event) {
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

        // Armazenar o e-mail cadastrado no Web Storage com a chave "registeredEmail"
        localStorage.setItem("registeredEmail", email);

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

        // Armazenar os dados do usuário no Web Storage
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
        document.getElementById("cadastroForm").reset();
    });
});
