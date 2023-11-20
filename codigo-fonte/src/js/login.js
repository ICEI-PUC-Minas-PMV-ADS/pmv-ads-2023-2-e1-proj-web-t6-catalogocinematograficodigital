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


//variável para botão  de entrar
const botaoEntrar = document.getElementById("loginButton");
//variável para id apelidoOuEmail
const apelidoOuEmail = document.getElementById("apelidoOuEmail");
//variável para id senha
const senha = document.getElementById("senha");
//variável  para preencher campo "usuário não cadastrado"
const naoCadastrado = document.getElementById("naoCadastrado");




botaoEntrar.addEventListener("click", function entrar(e) {
    //prevenir que formulário seja submetido - evitar push
    e.preventDefault();
    //array que trará os dados do local Storage
    let listaUsuario = [];
    //objeto vazio que servirá para achar os dados do local storage
    let listaObjeto = {
        apelidoCadastrado:  "",
        emailCadastrado: "",
        senhaCadastrado: "",
    }
    //constante para capturar o valor inserido no input da senha
    const senhaInput = senha.value.trim();
    //constante para capturar o valor inserido no input do apelido ou email 
    const apelidoOuEmailInput = apelidoOuEmail.value.trim();

    /*
        Essa função pega os valores que foram capturados pelas constantes acima.
        E os compara se o primeiro ou o segundo input estão vazios, caso algum deles esteja vazio,
        reutiliza a constante naoCadastrado e o style aplicado nela, para imprimir o texto solicitando
        que os campos sejam preenchidos.
    */
    if (senhaInput === '' || apelidoOuEmailInput === '') {
        naoCadastrado.setAttribute("style", "display: block");
        naoCadastrado.textContent = "Por favor, preencha todos os campos";
        return;
    }

    //trazendo o array de objetos que está no local storage
    listaUsuario = JSON.parse(localStorage.getItem("listaUsuario"));
    //para cada item dentro de cada objeto do array, procurará se a senha E o email OU o apelido estão cadastrados
    listaUsuario.forEach(item => {
        if ( senha.value == item.senhaCadastrado && (apelidoOuEmail.value == item.apelidoCadastrado || apelidoOuEmail.value == item.emailCadastrado)) {
            listaObjeto  = {
                apelidoCadastrado: item.apelidoCadastrado,
                emailCadastrado: item.emailCadastrado,
                senhaCadastrado: item.senhaCadastrado
            }
        };
    });



    //se os dados estão cadastrados, faça login
    if (senha.value == listaObjeto.senhaCadastrado && (apelidoOuEmail.value == listaObjeto.apelidoCadastrado || apelidoOuEmail.value == listaObjeto.emailCadastrado)) {
        //para haver o controle de que o usuário está logado ou não, utilizaremos um token que ficará guardado no local storage
        let token = Math.random().toString(16).substring(2)
        localStorage.setItem("token", token);
        //salva os dados do usuário logado no local storage
        localStorage.setItem("usuarioLogado", JSON.stringify(listaObjeto));
        // Redirecione para a página do perfil do usuário
        window.location.href = "./telausuario.html";
    } else {
        naoCadastrado.setAttribute("style", "display:  block");
        naoCadastrado.textContent = "Usuário não cadastrado"
        apelidoOuEmail.focus()
    }
})
