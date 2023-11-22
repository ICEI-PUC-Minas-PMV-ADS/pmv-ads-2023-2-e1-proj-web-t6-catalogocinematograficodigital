//variável  que chama botão SAIR
const sair = document.getElementById("sair");
//variável que vai receber objeto "usuário logado" do local storage
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

//variável que recebe id  #logado
const logado = document.getElementById("logado");
const image_path = "https://image.tmdb.org/t/p/w1280";
const movies_assis = document.querySelector(".movies-assis");
const modalContent = document.querySelector('.modal-content');
console.log(movies_assis);

var jsonString = localStorage.getItem("paraAssistir");

var listaFilmesAssistir = JSON.parse(jsonString);

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

if (localStorage.getItem("token") === null) {
	alert("Você precisa estar logado para acessar esta página");
	saia();
};

function adicionarFilmesParaAsssitirNaTela() {
	movies_assis.innerHTML = listaFilmesAssistir.map(elemento => {

		let tituloDoElemento;

        if(elemento.title){ //Se vier title no elemento do array ele atribui a variável o nome
            tituloDoElemento = elemento.title
        }
        else{ //Senão, for title será name e atribui o valor a variável
            tituloDoElemento = elemento.name
        }

		let avaliacao = elemento.vote_average
		let data_lancamento = elemento.first_air_date

		if (avaliacao === undefined || avaliacao === "") {

			avaliacao = "Não informado"
		}

		if (elemento.release_date) {

			data_lancamento	= elemento.release_date;
		}else{
            data_lancamento = elemento.first_air_date;
        }

		/* Campos preenchidos:
		  data-id - Apenas atribui campo o id do filme
		  tituloDoElemento - Variável que contém o nome do elemento
		  vote_avarage - Contém a nota do filme, tipo IMDB
		  Release_Date - Contém a data do lançamento do filme
		*/

        return `
            <div class="card" data-id="${elemento.id}" onClick="exibirPopUp(this)"> 
                <div class="img">
                    <img src="${image_path + elemento.poster_path}">
                </div>
            <div class="info">
                <h2>${tituloDoElemento}</h2>
                <div class="single-info">
                    <span>Avaliação: </span>
                    <span>${avaliacao} / 10</span>
                </div>
                <div class="single-info">
                    <span>Lançamento: </span>
                    <span>${data_lancamento}</span>
                </div>
            </div>
        </div>        
        ` 
	}).join('')
}

adicionarFilmesParaAsssitirNaTela();


function preencherModal(filme){
	const modalTitle = document.getElementById('modalTitle');
	const modalBody = document.getElementById('modalBody');
	const modalFooter = document.getElementById('modalFooter');
	const modalActions = document.getElementById("actions");
    
    if(filme.poster_path != null || ""){
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%), url(${image_path + filme.poster_path})`;    
    } else if (filme.backdrop_path != null || ""){
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%), url(${image_path + filme.backdrop_path})`;
    }else{
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%))`;
    }

	let titleDescricao;

	if(filme.name) {
		titleDescricao = filme.name
		console.log("Estou no primeiro if (name)") // verificar se estava agindo corretamente
	}
	
	if (filme.title) {
		titleDescricao = filme.title
		console.log("Estou no segundo if (title)") // verificar se estava agindo corretamente
	}

	// Preencher informações do filme no modal
	modalTitle.innerText = titleDescricao;
	modalBody.innerHTML = `
	  <p><strong>Sinopse: </strong> ${filme.overview}</p>
	`;
	modalActions.innerHTML = `
		<button class="btn-1" data-id="${filme.id}" onclick="removerDaAssistir(this)"> <strong>X</strong> Remover da lista</button>
		<button class="btn-2" data-id="${filme.id}" onclick="adicionarParaAssistidos(this)">Adicionar à lista assistidos</button>
	`;
  }

// Função que exibe o modal de cada filme
function exibirPopUp(card) {

	const movieId = card.getAttribute('data-id');

  // Encontrar o filme na lista de resultados da pesquisa pelo ID
  const filmeSelecionado = listaFilmesAssistir.find(filme => filme.id.toString() === movieId);

  if (filmeSelecionado) {
    // Preencher o modal com as informações do filme
    preencherModal(filmeSelecionado);

	abrirModal(); // abre pop-up pega a classe modal do HTML e exibe os filmes a assistir
  }
}

// Função para abrir o modal
function abrirModal() {
	const modal = document.getElementById('myModal');
	modal.style.display = 'block';
}

function adicionarEfeitoClickNoCard(cards) {

	cards.forEach(card => {
		card.addEventListener("click", () => {
			exibirPopUp(card);
		})
	})
}

// Encontrar o elemento do botão de fechar - X do modal
const closeBtn = document.querySelector('.close');

// Adicionar um evento de clique ao botão de fechar
closeBtn.addEventListener('click', fecharModal);

// Função para fechar o modal
function fecharModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    adicionarEfeitoClickNoCard(cards);
});

// Remover da listagem de filmes a assitir - chama a funcão removerFilmeParaAssistir

function removerDaAssistir(button) {
    // Lógica para remover da lista "para assistir"
    const movieId = button.getAttribute('data-id');

    // Verifica se o movieId está definido
    if (movieId) {
        const filmeSelecionado = listaFilmesAssistir.find(filme => filme.id.toString() === movieId);

        // Verifica se o filme foi encontrado
        if (filmeSelecionado) {
            removerFilmeParaAssistir(filmeSelecionado);
            exibirMensagemRemocao();

        } else {
            console.log(`Filme com ID ${movieId} não encontrado.`);
        }
    } else {
        console.log("Atributo 'data-id' não definido no botão.");
    }
}

// Função para remover o filme da lista "para assistir"
function removerFilmeParaAssistir(filme) {
    // Verifica se já existe a chave "paraAssistir" no localStorage
    let paraAssistirList = JSON.parse(localStorage.getItem("paraAssistir")) || [];

    // Filtra a lista para remover o filme com base no ID
    paraAssistirList = paraAssistirList.filter(item => item.id.toString() !== filme.id.toString());

    // Atualiza o localStorage com a nova lista
    localStorage.setItem("paraAssistir", JSON.stringify(paraAssistirList));

    // Atualiza a variável local
    listaFilmesAssistir = paraAssistirList;

    // Atualiza a tela removendo o filme da listagem
    adicionarFilmesParaAsssitirNaTela();

    console.log(`Removido da lista para assistir: ${filme.title}`);
}

// Exibe mensagem Filme Removido
function exibirMensagemRemocao() {
    const mensagem = `Filme removido da listagem com sucesso! :)`;
    alert(mensagem);
    fecharModal();
}

var paraAssistidosList

// Permite adicionar a lista de assistidos

function adicionarParaAssistidos(button) {
    // Lógica para adicionar à lista "para assistir"
    const movieId = button.getAttribute('data-id');

    // Verifica se o movieId está definido
    if (movieId) {
        const filmeSelecionado = listaFilmesAssistir.find(filme => filme.id.toString() === movieId);

        // Verifica se o filme foi encontrado
        if (filmeSelecionado) {
            adicionarFilmeParaAssistidos(filmeSelecionado);
			exibirMensagemAdicaoAssistidos();
            removerFilmeParaAssistir(filmeSelecionado);

        } else {
            console.log(`Filme com ID ${movieId} não encontrado.`);
        }
    } else {
        console.log("Atributo 'data-id' não definido no botão.");
    }
}

function adicionarFilmeParaAssistidos(filme) {
    // Verifica se já existe a chave "paraAssistir" no localStorage
    paraAssistidosList = JSON.parse(localStorage.getItem("paraAssistidos")) || [];

    // Verifica se o filme já está na lista
    if (!filmeEstaNaLista(paraAssistidosList, filme)) {
        // Adiciona o filme à lista
        paraAssistidosList.push(filme);

        // Atualiza o localStorage com a nova lista
        localStorage.setItem("paraAssistidos", JSON.stringify(paraAssistidosList));

        console.log(`Adicionado à lista para assistidos: ${filme.title}`);
    } else {
        console.log(`O filme ${filme.title} já está na lista para assistidos.`);
    }

    console.log(paraAssistidosList);
}

// Função auxiliar para verificar se o filme já está na lista
function filmeEstaNaLista(lista, filme) {
    return lista.some(item => item.id === filme.id);
}

function exibirMensagemAdicaoAssistidos() {
    const mensagem = `Filme adicionado na listagem de "filmes para assistidos" com sucesso! :)`;
    alert(mensagem);
    fecharModal();
}

function saia() {
	localStorage.removeItem("token");
	localStorage.removeItem("usuarioLogado");
	window.location.href="./login.html";
}


sair.addEventListener("click", saia);
