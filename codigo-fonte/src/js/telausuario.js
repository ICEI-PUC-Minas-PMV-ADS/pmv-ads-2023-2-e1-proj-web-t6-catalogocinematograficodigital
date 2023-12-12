//variável  que chama botão SAIR
const sair = document.getElementById("sair");
//variável que vai receber objeto "usuário logado" do local storage
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
//variável que recebe id  #logado
const logado = document.getElementById("logado");
//Constante com o método para pegar informações dos filmes e token de acesso da API
const options = {
	method: "GET",
	headers: {
	  accept: "application/json",
	  Authorization:
		"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTBkNzNmYWI0YTNlNDIxYzRhNjMwODQ4MDYwZjhkMiIsInN1YiI6IjY0ZTZjMWFlZTg5NGE2MDBjNzI3YWE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K_ji1absdehuuNaRRhOx8KzMr5mM-Hgx1slkGyBWHlo",
	},
};

const input = document.querySelector(".pesquisa input");
const btnPesquisar = document.querySelector(".pesquisa button");
const main_grid_title = document.querySelector(".assistidos h1");
const main_grid = document.querySelector(".assistidos .movies-grid");
const image_path = "https://image.tmdb.org/t/p/w1280";
const popup_container = document.querySelector('.popup-container');
const modalContent = document.querySelector('.modal-content');
var dados_filmes;


//Se não houver um token de usuário cadastrado no local storage, não deixa você entrar na página de usuário
if (localStorage.getItem("token") === null) {
	alert("Você precisa estar logado para acessar esta página");
	saia();
};

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

//mensagem de saudação ao usuário logado
if(logado) {
	logado.innerHTML = "Olá " + usuarioLogado.apelidoCadastrado + "!"

}

//função para sair da tela do usuário
function saia() {
	localStorage.removeItem("token");
	localStorage.removeItem("usuarioLogado");
	window.location.href="./login.html";
}

/*Função para realizar a pesquisa do filme. Ela recebe o que o usuário digitou
  Então na hora do fetch ele adiciona o item pesquisado e passa a chave de acesso da API.
  Então quando recebe o retorno da chamada chama uma função específica para exibir os filmes em tela.
*/
function getFilmesPesquisa(termo_pesquisado) {
	fetch(
	  `https://api.themoviedb.org/3/search/multi?query=${termo_pesquisado}&include_adult=false&language=pt-BR&page=1`,
	  options
	)
	  .then((response) => response.json())
	  .then(data => {
		dados_filmes = Array.isArray(data.results) ? data.results : [];

		console.log(dados_filmes);

		adicionarFilmesNaTela(data);
	  })
	  .catch((err) => console.error(err));
}

function adicionarEfeitoClickNoCard (cards) {
    cards.forEach(card => {
        card.addEventListener('click', () => exibirPopUp(card))
    })
}

if(btnPesquisar) {
	/*Adicionando funcionalidade ao botão pesquisar*/
	btnPesquisar.addEventListener('click', (e) =>{
    e.preventDefault();

    const termo_pesquisado = input.value; //Pega o valor digitado pelo usuário

    if(termo_pesquisado){ //Se houver alguma informação digitada ele chama a função de pesquisar
        getFilmesPesquisa(termo_pesquisado)
    }
})
}


/*Função para exibir os resultados da pesquisa feita pelo usuário e coloca os filmes como um card
  contendo as principais informações
*/

function adicionarFilmesNaTela (data){
	console.log(data);
	console.log(paraAssistirList);
    main_grid_title.innerHTML = `Resultado da Pesquisa...` //muda o título de Assistidos para Resultado da Pesquisa
    /*Pega o retorno da pesquisa, como o retorno é sempre um array, porque há sempre mais
	  de um filme com os mesmos principais termos pesquisados, ele vai percorrer elemento 
	  a elemento retornado e vai criar uma div, no caso um card com o nome, a avaliação 
	  que o site disponibiliza bem como sua data de lançamento
    */
	main_grid.innerHTML = data.results.map(elemento => { 
		/*Como podemos pesquisar por filmes e séries, o retorno desses tipo é diferente.
		Para filme temos o title como título a ser exibido, porém em séries, desenhos e
		animes o retorno aparece como name. Por isso foi necessário criar uma variável
		que armazenasse a informação do tipo do nome do resultado da pesquisa
		*/

        let tituloDoElemento; 
        if(elemento.title){ //Se vier title no elemento do array ele atribui a variável o nome
            tituloDoElemento = elemento.title
        }
        else{ //Senão, for title será name e atribui o valor a variável
            tituloDoElemento = elemento.name
        }

		let avaliacao = elemento.vote_average
		let data_lancamento;

		if (avaliacao === undefined || avaliacao === "") {

			avaliacao = "Não informado"
		}

        if (elemento.release_date) {
			data_lancamento	= elemento.release_date
		}else{
            data_lancamento = elemento.first_air_date
        }

		/* Campos preenchidos:
		  data-id - Apenas atribui campo o id do filme
		  tituloDoElemento - Variável que contém o nome do elemento
		  vote_avarage - Contém a nota do filme, tipo IMDB
		  Release_Date - Contém a data do lançamento do filme
		*/

        return `
            <div class="card" data-id="${elemento.id}" data-tipo-media="${elemento.media_type}" onClick="exibirPopUp(this)"> 
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

/*Função assíncrona, porque está precisa terminar primeiro
para que a função que a chame obtenha os resultados antes
dela ser efetivamente concluída.
Ela recebe dois parâmetros que são armazenados na div card,
o tipo da midia, tv ou movie e o id do mesmo.
*/
async function getItemPesquisadoPorId (tipoMidia,mediaId) {

	const url = `https://api.themoviedb.org/3/${tipoMidia}/${mediaId}?language=pt-BR`;
	/*Acima, há a declaração de uma constante que receberá a url. Tornamos a criação da
	pesquisa por ID mais simples, pois aproveitamos os parâmetros que nos são passados
	e já o usamos na criação da url, tornando-a dinâmica, já que toda vez que for chamada
	ela preencherá os campos com os valores passados.*/

    return fetch(url, options)
        .then(response => response.json())
        .catch(err => {
            console.error(err);
            throw err;
        });
	
	/**/
}

function preencherModal(filme){
	const modalTitle = document.getElementById('modalTitle');
	const modalBody = document.getElementById('modalBody');
	const modalFooter = document.getElementById('modalFooter');
	const modalActions = document.getElementById("actions");


	let titleDescricao;
    let status;
	
    titleDescricao = filme.title;

    if(filme.status == "Released"){
        status = "Lançado"
    }else{
        status = "Em Produção"
    }

    if(filme.poster_path != null || ""){
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%), url(${image_path + filme.poster_path})`;    
    } else if (filme.backdrop_path != null || ""){
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%), url(${image_path + filme.backdrop_path})`;
    }else{
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%))`;
	}

	// Preencher informações do filme no modal
	modalTitle.innerText = titleDescricao;
	modalBody.innerHTML = `
	  <p><strong>Sinopse: </strong> ${filme.overview}</p>
      <p><strong>Gênero: </strong> ${filme.genres.map(genre => genre.name).join(', ')}</p>
      <p><strong>Status: </strong> ${status}</p>
      <p><strong>Data de Laçamento: </strong> ${filme.release_date.split('-').reverse().join('/')}</p>
      <p><strong>Duração: </strong> ${filme.runtime} minutos</p>
	`;
    if(filme.belongs_to_collection != null || ""){
        modalBody.innerHTML += `<p><strong>Pertence a coleção: </strong> ${filme.belongs_to_collection.name}</p>`;
    } 

	modalActions.innerHTML = `
		<button class="btn-1" data-id="${filme.id}" onclick="adicionarParaAssistir(this)">Adicionar à lista para assistir</button>
		<button class="btn-2" data-id="${filme.id}" onclick="adicionarParaAssistidos(this)">Adicionar à lista assistidos</button>
	`;
  }

  function preencherModalSerie(serieAnimacao,valorBackup){
	const modalTitle = document.getElementById('modalTitle');
	const modalBody = document.getElementById('modalBody');
	const modalFooter = document.getElementById('modalFooter');
	const modalActions = document.getElementById("actions");

	let titleDescricao = serieAnimacao.name;
    let status;
    let overview;
    
    if(serieAnimacao.overview===""){
        overview=valorBackup.overview;
    }else{
        overview=serieAnimacao.overview;
    }
   
    if(serieAnimacao.status == "Ended"){
        status = "Finalizada"
    }else if(serieAnimacao.status == "Returning Series"){
        status = "Em exibição"
    }else{
        status = "Cancelada"
    }

    if(serieAnimacao.poster_path != null || ""){
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%), url(${image_path + serieAnimacao.poster_path})`;    
    } else if (serieAnimacao.backdrop_path != null || ""){
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%), url(${image_path + serieAnimacao.backdrop_path})`;
    }else{
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%))`;
    }
   
    
	// Preencher informações do série/animação no modal
	modalTitle.innerText = titleDescricao;
	modalBody.innerHTML = `	  
      <p><strong>Sinopse: </strong> ${overview}</p>
      <p><strong>Gênero: </strong> ${serieAnimacao.genres.map(genre => genre.name).join(', ')}</p>
      <p><strong>Status: </strong> ${status}</p>
      <p><strong>Data do primeiro episódio exibido: </strong> ${serieAnimacao.first_air_date.split('-').reverse().join('/')}</p>
	`;
    if(status == "Finalizada"){
        
        modalBody.innerHTML += `<p><strong>Data do último episódio exibido: </strong> ${serieAnimacao.last_air_date.split('-').reverse().join('/')}</p>`;
        modalBody.innerHTML += `<p><strong>Quantidade de temporadas: </strong> ${serieAnimacao.number_of_seasons}</p>`;
        modalBody.innerHTML += `<p><strong>Quantidade total de episódio: </strong> ${serieAnimacao.number_of_episodes}</p>`;
    }
	modalActions.innerHTML = `
		<button class="btn-1" data-id="${serieAnimacao.id}" onclick="adicionarParaAssistir(this)">Adicionar à lista para assistir</button>
		<button class="btn-2" data-id="${serieAnimacao.id}" onclick="adicionarParaAssistidos(this)">Adicionar à lista assistidos</button>
	`;
}

async function exibirPopUp(card) {

	const midiaId = card.getAttribute('data-id');
    const tipoMidia = card.getAttribute('data-tipo-media');
    const serieAnimacaoId = card.getAttribute('data-id');

  // Encontrar o filme na lista de resultados da pesquisa pelo ID
  const valorBackup = dados_filmes.find(item => item.id.toString() === serieAnimacaoId);
  const serieAnimacaoSelecionado = await getItemPesquisadoPorId(tipoMidia,midiaId)
  const filmeSelecionado = await getItemPesquisadoPorId (tipoMidia,midiaId)

  if(tipoMidia =='tv'){
    preencherModalSerie(serieAnimacaoSelecionado,valorBackup)
  }
  else{
    preencherModal(filmeSelecionado);
  }
    abrirModal();
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

// Encontrar o elemento do botão de fechar
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

//evento para sair da tela do usuário
sair.addEventListener("click", saia);

// Lógica para adicionar filmes



function adicionarParaAssistir(button) {
    // Lógica para adicionar à lista "para assistir"
    const movieId = button.getAttribute('data-id');

    // Verifica se o movieId está definido
    if (movieId) {
        const filmeSelecionado = dados_filmes.find(filme => filme.id.toString() === movieId);

        // Verifica se o filme foi encontrado
        if (filmeSelecionado) {
            adicionarFilmeParaAssistir(filmeSelecionado);
			exibirMensagemAdicaoAssistir();

        } else {
            console.log(`Filme com ID ${movieId} não encontrado.`);
        }
    } else {
        console.log("Atributo 'data-id' não definido no botão.");
    }
}

function adicionarParaAssistidos(button) {
    // Lógica para adicionar à lista "para assistir"
    const movieId = button.getAttribute('data-id');

    // Verifica se o movieId está definido
    if (movieId) {
        const filmeSelecionado = dados_filmes.find(filme => filme.id.toString() === movieId);

        // Verifica se o filme foi encontrado
        if (filmeSelecionado) {
            adicionarFilmeParaAssistidos(filmeSelecionado);
			exibirMensagemAdicaoAssistidos();

        } else {
            console.log(`Filme com ID ${movieId} não encontrado.`);
        }
    } else {
        console.log("Atributo 'data-id' não definido no botão.");
    }
}

var paraAssistirList;
var paraAssistidosList

function adicionarFilmeParaAssistir(filme) {
    const userId = usuarioLogado.apelidoCadastrado;
    let paraAssistirList = JSON.parse(localStorage.getItem(`paraAssistir_${userId}`)) || [];

    // Verifica se o filme já está na lista
    if (!filmeEstaNaLista(paraAssistirList, filme)) {
        // Adiciona o filme à lista
        paraAssistirList.push(filme);

        // Atualiza o localStorage com a nova lista específica do usuário
        localStorage.setItem(`paraAssistir_${userId}`, JSON.stringify(paraAssistirList));

        console.log(`Adicionado à lista para assistir: ${filme.title}`);
    } else {
        console.log(`O filme ${filme.title} já está na lista para assistir.`);
    }

    console.log(paraAssistirList);
}

function adicionarFilmeParaAssistidos(filme) {
    // Verifica se já existe a chave "paraAssistir" no localStorage
    const userId = usuarioLogado.apelidoCadastrado;
    paraAssistidosList = JSON.parse(localStorage.getItem(`paraAssistidos_${userId}`)) || [];

    // Verifica se o filme já está na lista
    if (!filmeEstaNaLista(paraAssistidosList, filme)) {
        // Adiciona o filme à lista
        paraAssistidosList.push(filme);

        // Atualiza o localStorage com a nova lista
        localStorage.setItem(`paraAssistidos_${userId}`, JSON.stringify(paraAssistidosList));

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


function exibirMensagemAdicaoAssistir() {
    const mensagem = `Filme adicionado na listagem de "filmes para assistir" com sucesso! :)`;
    alert(mensagem);
    fecharModal();
}

function exibirMensagemAdicaoAssistidos() {
    const mensagem = `Filme adicionado na listagem de "filmes para assistidos" com sucesso! :)`;
    alert(mensagem);
    fecharModal();
}
