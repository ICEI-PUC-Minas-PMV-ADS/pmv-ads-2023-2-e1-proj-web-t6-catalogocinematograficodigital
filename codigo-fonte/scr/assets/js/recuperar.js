document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão de abertura do menu, botão de fechamento do menu e o elemento do menu principal.
    const openMenuButton = document.getElementById("openMenu");
    const closeMenuButton = document.getElementById("closeMenu");
    const menu = document.getElementById("menu");
    const footerMenu = document.getElementById("footerMenu"); // Elemento de menu do footer

    // Adiciona um ouvinte de evento para abrir o menu quando o botão é clicado.
    openMenuButton.addEventListener("click", function () {
        // Mostra o menu e move-o para a direita para torná-lo visível.
        menu.style.display = "flex";
        menu.style.right = "0";
        openMenuButton.style.display = "none";
        closeMenuButton.style.display = "block";

        // Move o elemento do menu do footer para dentro do menu principal.
        menu.appendChild(footerMenu);
    });

    // Adiciona um ouvinte de evento para fechar o menu quando o botão é clicado.
    closeMenuButton.addEventListener("click", function () {
        // Fecha o menu movendo-o para a esquerda e oculta-o.
        menu.style.right = "-100%";
        menu.style.display = "none";
        openMenuButton.style.display = "block";
        closeMenuButton.style.display = "none";

        // Move o elemento do menu do footer de volta para o footer.
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


document.addEventListener("DOMContentLoaded", function () {
    const passwordRecoveryForm = document.getElementById("recuperar");

    passwordRecoveryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const newPassword = generateRandomPassword(); // Gere uma senha aleatória

        // Salve a nova senha no Web Storage (localStorage)
        localStorage.setItem("recoveryPassword", newPassword);

        // Envie a senha por e-mail (neste exemplo, usaremos um alert)
        alert(`Uma nova senha foi enviada para o e-mail ${email}: ${newPassword}`);
        
        // Redirecione para a página de login
        window.location.href = "index.html";
    });

    // Função para gerar uma senha aleatória (pode ser mais robusta em produção)
    function generateRandomPassword() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*0123456789";
        let newPassword = "";
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters.charAt(randomIndex);
        }
        return newPassword;
    }
});