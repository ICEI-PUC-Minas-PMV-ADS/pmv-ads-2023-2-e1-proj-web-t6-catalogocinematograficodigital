// Capturando o elemento do botão de envio pelo seu ID "submitButton"
const submitButton = document.getElementById("submitButton");
// Capturando os valores dos campos de entrada
const nome = document.getElementById("nome");
const apelido = document.getElementById("apelido");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
//validação de todos os campos
let validNome = validApelido = validEmail = validSenha = validConfirmarSenha = false;
//inserção de mensagem "usuário cadastrado" ou  "erro no cadastro"
const cadastrado = document.getElementById("cadastrado");
const naoCadastrado = document.getElementById("naoCadastrado");


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

nome.addEventListener("keyup", () => {
    // Validar nome
    const nomeRegex = /^[A-Za-z\s]+$/;
    // Verificando se o nome não corresponde ao padrão definido na expressão regular
    if (!nome.value.match(nomeRegex)) {
        // Exibindo uma mensagem de erro abaixo do campo "nome"
        document.getElementById("nomeError").textContent = "Nome inválido";
        validNome = false;
    } else {
        document.getElementById("nomeError").textContent = "";
        validNome = true;
    }
})

// Validar apelido
// Verificando se o apelido é apenas espaços em branco
apelido.addEventListener("keyup", () => {
    if (apelido.value.trim() === "") {
        document.getElementById("apelidoError").textContent = "Apelido inválido";
        validApelido = false;
    } else {
        document.getElementById("apelidoError").textContent = "";
        validApelido = true;
    }  
})

//validar email
email.addEventListener("keyup", () => {
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     //Verificando se o email não corresponde ao padrão definido na expressão regular
    if (!email.value.match(emailRegex)) {
        document.getElementById("emailError").textContent = "E-mail inválido";
        validEmail = false;
    } else {
        document.getElementById("emailError").textContent = "";
        validEmail = true;
    }
    // Armazenar o e-mail cadastrado no Web Storage com a chave "registeredEmail"
    localStorage.setItem("registeredEmail", email.value);
})

//validar senha
senha.addEventListener("keyup", () => {
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{5,}$/;
    // Verificando se a senha não corresponde ao padrão definido na expressão regular
    if (!senha.value.match(senhaRegex)) {
        document.getElementById("senhaError").textContent = "A senha deve conter no mínimo 1 algarismo numérico, 1 símbolo, 1 letra maiúscula e 1 letra minúscula";
        validSenha = false;
    } else {
        document.getElementById("senhaError").textContent = "";
        validSenha = true;
    }
})

// Verificando se a senha e a confirmação de senha são iguais
confirmarSenha.addEventListener("change", () => {
    if (senha.value !== confirmarSenha.value) {
        document.getElementById("confirmarSenhaError").textContent ="Senhas não coincidem";
        validConfirmarSenha = false;
    } else  {
        document.getElementById("confirmarSenhaError").textContent = "";
        validConfirmarSenha = true;
    }
})
//cadastrar usuario
submitButton.addEventListener("click", function cadastrar(e) {
    //caso todos os campos estejam corretos, cadastra usuário
    if (validNome && validApelido && validEmail && validSenha && validConfirmarSenha) {
        //cria lista de usuarios utilizando um array
        let listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");
       //atualiza lista de usuarios, com um array de objetos
        listaUsuario.push(
            {
                nomeCadastrado: nome.value,
                apelidoCadastrado: apelido.value,
                emailCadastrado: email.value,
                senhaCadastrado: senha.value,
            }
        );
        //adiciona o usuario ao localStorage
        localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario));
        //Aviso de "usuário cadastrado"
        cadastrado.setAttribute("style", "display: block");
        cadastrado.innerText = "Usuário  Cadastrado";
        naoCadastrado.innerText = "";
        naoCadastrado.setAttribute("style", "display:none");
    } else { //quando algum campo está incorreto
        naoCadastrado.setAttribute("style", "display: block");
        naoCadastrado.innerText = "Erro, campo preenchido incorretamente";
        cadastrado.innerText = "";
        cadastrado.setAttribute("style", "display:none");
    }
    //previne o push do formulário
    e.preventDefault();
});
