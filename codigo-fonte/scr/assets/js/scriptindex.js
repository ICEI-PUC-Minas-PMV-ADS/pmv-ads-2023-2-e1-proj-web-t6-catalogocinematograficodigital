document.addEventListener("DOMContentLoaded", function () {
    const openMenuButton = document.getElementById("openMenu");
    const closeMenuButton = document.getElementById("closeMenu");
    const menu = document.getElementById("menu");
    const footerMenu = document.getElementById("footerMenu"); // Elemento de menu do footer

    openMenuButton.addEventListener("click", function () {
        menu.style.display = "flex";
        menu.style.right = "0";
        openMenuButton.style.display = "none";
        closeMenuButton.style.display = "block";

        // Move o elemento de menu do footer para dentro do menu principal.
        menu.appendChild(footerMenu);
    });

    closeMenuButton.addEventListener("click", function () {
        menu.style.right = "-100%"; // Fecha o menu movendo para a esquerda.
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

/* Config dos botões*/
function createButtons() {
	// Cria um contêiner para os botões e alinha à direita
	var buttonContainer = document.createElement('div');
	buttonContainer.style.textAlign = 'right';
  
	// Adiciona a classe "button-container" ao contêiner
	buttonContainer.classList.add('button-container-body');
  
	// Cria o primeiro botão
	var btn1 = document.createElement('button');
	var lbl1 = document.createTextNode("LOGIN");
	btn1.appendChild(lbl1);
	btn1.onclick = function() {
		window.location.href = "login.html";
	}
	buttonContainer.appendChild(btn1);
  
	// Cria o segundo botão
	var btn2 = document.createElement('button');
	var lbl2 = document.createTextNode("CADASTRE-SE");
	btn2.appendChild(lbl2);
	btn2.onclick = function() {
		window.location.href = "cadastro.html";
	}
	buttonContainer.appendChild(btn2);
  }
  
  createButtons();
  
