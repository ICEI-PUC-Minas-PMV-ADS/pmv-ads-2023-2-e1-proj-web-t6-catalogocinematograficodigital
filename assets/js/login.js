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


//página de login
// Verifica se o usuário está logado ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
        // Defina os valores dos campos com base no que está armazenado no local storage
        document.getElementById("username").value = storedUsername;
        document.getElementById("password").value = storedPassword;
    }
});

// Manipulador de evento para o botão de login
document.getElementById("loginButton").addEventListener("click", function (e) {
    e.preventDefault();

    // Obtenha os valores dos campos de entrada
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifique se o usuário e a senha correspondem ao que está armazenado no local storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        // Login bem-sucedido
        window.location.href = "perfil_do_usuario.html"; // Redirecione para a página do perfil do usuário
    } else {
        // Login falhou
        alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
});


//Para login

document.addEventListener("DOMContentLoaded", function () {
    // Capturando o elemento do botão de envio de login pelo seu ID "loginButton"
    const loginButton = document.getElementById("loginButton");

    // Adicionando um evento de clique ao botão de envio de login
    loginButton.addEventListener("click", function (event) {
        // Impedindo o comportamento padrão de envio do formulário
        event.preventDefault();

        // Capturando os valores dos campos de entrada
        const apelidoOuEmail = document.getElementById("apelidoOuEmail").value;
        const senha = document.getElementById("senha").value;

        // Recuperando o email cadastrado do Web Storage
        const registeredEmail = localStorage.getItem("registeredEmail");

        // Recuperando os dados do usuário do Web Storage
        const usuarioJSON = localStorage.getItem("usuario");
        const usuario = JSON.parse(usuarioJSON);

        // Verificando se o apelido ou email corresponde ao cadastrado
        if (apelidoOuEmail === usuario.apelido || apelidoOuEmail === registeredEmail) {
            // Verificando se a senha corresponde à senha cadastrada
            if (senha === usuario.senha) {
                // Senha e apelido/email corretos, exibir mensagem de sucesso
                document.getElementById("loginError").textContent = "Login bem-sucedido!";
				window.location.href = "telausuario.html"; // Redireciona para a página "telausuario.html"
            } else {
                document.getElementById("loginError").textContent = "Senha incorreta";
            }
        } else {
            document.getElementById("loginError").textContent = "Apelido ou E-mail não cadastrados";
        }
    });
});