@charset "UTF-8";

/* Propriedades que se aplicam a todos os elementos da página. */
* {
	/* Remove a margem externa de todos os lados do elemento. */
	margin: 0;

	/* Remove o espaçamento interno de todos os lados do elemento. */
	padding: 0;

	/* Inclui o preenchimento e a borda na largura e altura. */
	box-sizing: border-box;

}

body {
	/* Exibição flexível.                          */
	/* Torna o elemento um flex container          */
	/* e os seus elementos internos em flex-itens. */
	display: flex;

	/* Quebra de linha quando os itens não couberem na largura da tela. */
	flex-wrap: wrap;

	/* Junção de flex-grow, flex-shrink e flex-basis.  */
	/* flex-grow – Habilidade de um flex item crescer. */
	/* flex-shrink - Capacidade de redução do item.    */
	/* flex-basis – Tamanho inicial do item.           */
	flex: 1 1 100vw;

	/* Margem de todos os lados. */
	margin: 0px;

	/*Imagem de fundo*/
	background-image: url("../img/home.jpg");
	/*Não repetir a imagem de fundo*/
	background-repeat: no-repeat;
	/*Cover: adapta a imagem para acompanhar a responsividade da imagem de fundo*/
	background-size: cover;
	/*Centraliza o meio da imagem com backgraund*/
	background-position: center;
	/* Faz com que o background permaneça fixo enquanto a página é rolada */
	background-attachment: fixed;

}

/* Formatação comum entre os elementos. */
header, nav, main, footer {
	/* Exibição flexível.                          */
	/* Torna o elemento um flex container          */
	/* e os seus elementos internos em flex-itens. */
	display: flex;

	/* Margem externa de todos os lados. */
	margin: 3px;
}

/* Seletores para formatação individual. */

header {
	/* Altura do elemento. */
	height: 100px;

	/* Junção de flex-grow, flex-shrink e flex-basis.  */
	/* flex-grow – Habilidade de um flex item crescer. */
	/* flex-shrink - Capacidade de redução do item.    */
	/* flex-basis – Tamanho inicial do item.           */
	flex: 1 1 100vw;
}

header #CCD {
	/* Exibição flexível.                          */
	/* Torna o elemento um flex container          */
	/* e os seus elementos internos em flex-itens. */
	display: flex;

	/* Junção de flex-grow, flex-shrink e flex-basis.  */
	/* flex-grow – Habilidade de um flex item crescer. */
	/* flex-shrink - Capacidade de redução do item.    */
	/* flex-basis – Tamanho inicial do item.           */
	flex: 0 1 200px;

	/* Alinha os itens na vertical. */
	justify-content: center;

	/* Alinha os itens na horizontal. */
	align-items: center;

	/*Ajuste da logo*/
#logo img {
	width: 100px; /* Defina o tamanho desejado */
	height: auto; /* Para manter a proporção original */
	margin: 10px; /* Adicione margens conforme necessário */
	}
}

#openMenu, #closeMenu {
	/* Remove a borda. */
	border: none;

	/* Remove a cor de fundo. */
	background: none;

	/* Tamanho do botão de 3 traços. */
	font-size: 25px;

	/* Espessura da forte. */
	font-weight: bold;

	/* Margem ao redor do elemento              */
	/* (superior, direito, inferior e esquerdo) */
	padding: 0px 5px 0px 5px;

	/* Muda o cursor do mouse para ponteiro.*/
	cursor: pointer;

	/* Oculta o elemento. */
	display: none;
}

nav {
	/* Alinha os itens na vertical. */
	justify-content: flex-end;

	/* Alinha os itens na horizontal. */
	align-items: center;

	/* Junção de flex-grow, flex-shrink e flex-basis.  */
	/* flex-grow – Habilidade de um flex item crescer. */
	/* flex-shrink - Capacidade de redução do item.    */
	/* flex-basis – Tamanho inicial do item.           */
	flex: 1 1 200px;
}

nav a {
	/* Margem de todos os lados. */
	margin: 0 3%;

	/* Tamanho da fonte. */
	font-size: 15pt;
}

main {
	/* Realizar a subtração de 100% da altura vertical menos a soma    */
	/* da altura dos elementos ( 400px ) com as suas margens ( 36px ). */
	height: calc(100vh - 224px);

	/* Junção de flex-grow, flex-shrink e flex-basis.  */
	/* flex-grow – Habilidade de um flex item crescer. */
	/* flex-shrink - Capacidade de redução do item.    */
	/* flex-basis – Tamanho inicial do item.           */
	flex: 20 1 500px;

/* Estilo do corpo da página index */
#content-body {
	max-width: 70%;
	margin: 0 auto;
	padding: 20px;
	flex-direction: column;
	display: flex;
	justify-content: center; /* Centralize verticalmente */

  }

/*Espaçamento entre as frases do body*/
#txtbody {
	text-align: center;
	white-space: pre-line;
	font-weight: bold;
	font-size: 25px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
  }

  .button-container-body {
	text-align: center;
	margin-bottom: 30%;
  }

  .button-container-body button {
	display: block;
	margin: 10px auto;
	padding: 10px 20px;
	font-size: 14px;
  }
}


footer {
	/* Altura do elemento. */
	height: 95px; /* Garanta que o footer ocupe toda a altura da janela */

	/* Junção de flex-grow, flex-shrink e flex-basis.  */
	/* flex-grow – Habilidade de um flex item crescer. */
	/* flex-shrink - Capacidade de redução do item.    */
	/* flex-basis – Tamanho inicial do item.           */
	flex: 1 1 100vw;

    justify-content: center;
    align-items: center;
	flex: 1 1 100vw;
	}

/* Estilize o elemento de menu do footer como vertical */
#footerMenu {
    display: flex;
    justify-content: center; /* Centralize os elementos verticalmente */
    align-items: center; /* Centralize os elementos horizontalmente */
    list-style: none; /* Remova os marcadores de lista */
    padding: 0; /* Remova o preenchimento padrão da lista */
}

/* Estilize os itens do menu do footer (links) */
#footerMenu li {
    margin: 50px 10px; /* Adicione margens para separar os links */
	font-size: 20px;


}

/* Estilize os links no menu do footer */
#footerMenu a {
    text-decoration: none; /* Remova sublinhados dos links */
    color: black; /* Defina a cor do texto */
}

a {
	/* Remove a decoração padrão do elemento. */
	text-decoration: none;

	/* Definir a cor da fonte para o padrão do elemento pai. */
	color: inherit;
}

/* Altera o estilo dos elementos para serem apresentados */ 
/* em telas menores que 717px. */
@media only screen and (max-width: 600px) {
	#openMenu, #closeMenu {
		/* Retorna a visibilidade padrão. */
		display: block;
	}

	#openMenu {
		/* Espaço a esquerda será preenchido automaticamente
		   colocando os itens a direita. */
		margin-left: auto;
	}

	#closeMenu {
		/* Torna a posição do elemento fixa. */
		position: fixed;

		/* Dispõe o elemento a 15px da esquerda. */
		right: 15px;

		/* Dispõe o elemento a 15px do topo. */
		top: 15px;
	}

	nav {
		/* Torna a posição do elemento fixa. */
		position: fixed;

		/* Ocupa 100% da largura da tela de exibição. */
		width: 100vw;

		/* Ocupa 100% da altura da tela de exibição. */
		height: 100vh;

		/* Cor em RGB, mais transparência. */
		background: #a1a1a13f;

		/* Dispõe os itens em coluna. */
		flex-direction: column;

		/* Alinha os itens na horizontal. */
		align-items: center;

		/* Alinha os itens na vertical. */
		justify-content: center;

		/* Remove a margem externa de todos os lados do elemento. */
		margin: 0;

		/* Oculta o elemento. */
		display: none;

		/* Invisivel */
		opacity: 0;

		/* Velocidade de transição de um estado para outro. */
		transition: 0.3s;
	}

	nav a {
		/* Margem de todos os lados. */
		margin: 3%;
	}

	main {
		/* Realizar a subtração de 100% da altura vertical menos a soma    */
		/* da altura dos elementos ( 300px ) com as suas margens ( 30px ). */
		height: calc(100vh - 330px);
	}

	#content-body {
		padding: 10px; /* Reduza o espaçamento interno para economizar espaço */
	  }

	/* Estilos adicionais para botões ou outros elementos quando a tela é menor */
	.button-container-body button {
		font-size: 14px;
	  }

}
