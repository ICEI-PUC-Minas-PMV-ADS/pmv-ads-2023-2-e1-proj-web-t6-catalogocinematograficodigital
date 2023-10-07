<!-- Indica que o documento é um arquivo HTML. -->
<!DOCTYPE html>

<!-- Define a linguagem do conteúdo da página. -->
<html lang="pt-br">

<!-- Armazena informações sobre a página. -->
<head>

	<!-- Conjunto de caracteres que contém acentuação e ç. -->
	<meta charset="utf-8">

	<!-- Configuração da janela de visualização ( responsividade ). -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Importação do arquivo CSS. -->
	<link rel="stylesheet" type="text/css" href="assets/css/modelo.css">

	<!-- Título da aba do navegador -->
	<title>CCD - Welcome!</title>
</head>

<!-- Conteúdo apresentado na tela. -->
<body>

	<!-- Agrupa os elementos que compõe o cabeçalho. -->
	<header>
		<a href="./layout.html" id="logo"></a>
		<img src="assets/img/logo.png" alt="CCD">

		<!-- botão de 3 traços quando a tela ficar menor (ex: Celular), &#9776 é o código para este botão.-->
		<button id="openMenu" class="top-menu">&#9776;</button>

		<!-- Agrupa links de navegação no site. -->
	<nav id="menu">
    	<!-- botão para ocultar a exibição do menu de 3 traços.-->
    	<button id="closeMenu">X</button>
    	<a href="#">About</a>
   
	</nav>
	<!-- Colocar aqui o botão de busca-->
	</header>

	<!-- Agrupa o conteúdo principal (Meio da página) da página ou aplicação. -->
	<main>
	


	</main>

	<!-- Agrupa informações de autoria, direitos autorais, contato, mapa do site, links e documento relacionados. -->
	<footer>
		<!-- Agrupa links de navegação do rodapé. -->
		
		 <ul id="footerMenu">
			<li><a href="./layout.html">Home</a></li>
			<li><a href="#">Privacidade</a></li>
			<li><a href="#">Suporte</a></li>
			<li><a href="#">Contato</a></li>
		</ul>
	</footer>

	<!-- Importação do arquivo JavaScript. -->
	<script type="text/javascript" src="assets/js/modelo.js"></script>
</body>
