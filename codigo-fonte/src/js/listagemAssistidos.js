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

const userId = usuarioLogado.apelidoCadastrado;
var listaFilmesAssistidos = JSON.parse(localStorage.getItem(`paraAssistidos_${userId}`)) || [];

console.log(listaFilmesAssistidos);

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

// FACEBOOK29@03ri

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

function adicionarFilmesParaAsssitidosNaTela() {
	movies_assis.innerHTML = listaFilmesAssistidos.map(elemento => {

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
                    <span>${data_lancamento.split('-').reverse().join('/')}</span>
                    </div>
            </div>
        </div>        
        ` 
	}).join('')
}

adicionarFilmesParaAsssitidosNaTela();

// Preencher as informações do filme quando abre o Modal
function preencherModal(filme) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalActions = document.getElementById("actions");
    const modalRating = document.getElementById('modalRating');
    
    if(filme.poster_path != null || ""){
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%), url(${image_path + filme.poster_path})`;    
    } else if (filme.backdrop_path != null || ""){
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%), url(${image_path + filme.backdrop_path})`;
    }else{
        modalContent.style.background = `linear-gradient(to top, transparent 10%, #fff 90%))`;
    }

    modalTitle.innerText = filme.title || filme.name;
    modalBody.innerHTML = `<p><strong>Sinopse: </strong>${filme.overview}`;

    if (modalRating) {
        const movieId = modalRating.getAttribute('data-id');
        const savedRating = getRating(movieId) || 0;
        setRating(savedRating);
    }

    // Preencher o modal das estrelas e comentários
    modalActions.innerHTML = `
        <div id="rating-section">
            <p id="av_title"><strong>Dê uma nota:</strong></p>
            <div class="rating" id="modalRating" data-id="${filme.id}">
                <span onclick="setRating(5)" data-value="5">★</span>
                <span onclick="setRating(4)" data-value="4">★</span>
                <span onclick="setRating(3)" data-value="3">★</span>
                <span onclick="setRating(2)" data-value="2">★</span>
                <span onclick="setRating(1)" data-value="1">★</span>
            </div>
            <div id="modalComments">
            <h3>Comentários</h3>
            <div id="commentsContainer"></div>
            <textarea id="commentInput" placeholder="Adicione um comentário..."></textarea>
            <button id="sendComent" onclick="adicionarComentario()">Adicionar Comentário</button>
        </div>
        </div>
        <button class="btn-1" data-id="${filme.id}" onclick="removerDaAssistidos(this)"> <strong>X</strong> Remover da lista</button>
    `;

    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = carregarComentarios(filme.id);

}

function getRating(movieId) {
    const filmeSelecionado = listaFilmesAssistidos.find(filme => filme.id.toString() === movieId.toString());
    return filmeSelecionado ? filmeSelecionado.rating : null;
}

// Função para carregar os comentários já feitos do usuário
function carregarComentarios(movieId) {
    // Recupera os comentários do localStorage ou retorna uma string vazia se não houver comentários
    const savedComments = localStorage.getItem(`comments_${movieId}`) || '';
    return savedComments;
}

// Função para adicionar comentários do usuário
function adicionarComentario() {
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');

    const movieId = commentsContainer.getAttribute('data-id');
    const savedComments = carregarComentarios(movieId);

    // Adiciona o novo comentário aos comentários salvos
    const newComment = commentInput.value;
    const updatedComments = `${savedComments}<p>${newComment}</p>`;
    
    // Exibe os comentários atualizados
    commentsContainer.innerHTML = updatedComments;

    // Salva os comentários no localStorage
    localStorage.setItem(`comments_${movieId}`, updatedComments);

    // Limpa a caixa de entrada de comentários
    commentInput.value = '';
}

// Função que já carrega a classificação realizada
function setRating(rating) {
    const modalRating = document.getElementById('modalRating');

    if (modalRating) {
        const stars = modalRating.querySelectorAll('span');

        stars.forEach(star => star.classList.remove('selected'));

        for (let i = 1; i <= rating; i++) {
            const star = modalRating.querySelector(`[data-value="${i}"]`);
            if (star) {
                star.classList.add('selected');
            }
        }

        // Armazene a avaliação no localStorage
        const movieId = modalRating.getAttribute('data-id');
        const filmeSelecionado = listaFilmesAssistidos.find(filme => filme.id.toString() === movieId);

        if (filmeSelecionado) {
            filmeSelecionado.rating = rating;
            localStorage.setItem("paraAssistidos", JSON.stringify(listaFilmesAssistidos));
        }

        console.log(`Avaliação: ${rating}`);
    } else {
        console.error('Elemento modalRating não encontrado.');
    }
}

// Função que exibe o modal de cada filme
function exibirPopUp(card) {

	const movieId = card.getAttribute('data-id');

  // Encontrar o filme na lista de resultados da pesquisa pelo ID
  const filmeSelecionado = listaFilmesAssistidos.find(filme => filme.id.toString() === movieId);

  if (filmeSelecionado) {
    // Preencher o modal com as informações do filme
    preencherModal(filmeSelecionado);

	abrirModal(filmeSelecionado.id);
  }
}

// Função para abrir o modal
function abrirModal(movieId) {
	const modal = document.getElementById('myModal');
	modal.style.display = 'block';

    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.setAttribute('data-id', movieId);
    commentsContainer.innerHTML = carregarComentarios(movieId);
}

// quando clica no Card, abrir o Modal
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

// Remover da lista de Assistidos
function removerDaAssistidos(button) {
    // Lógica para remover da lista "para assistir"
    const movieId = button.getAttribute('data-id');

    // Verifica se o movieId está definido
    if (movieId) {
        const filmeSelecionado = listaFilmesAssistidos.find(filme => filme.id.toString() === movieId);

        // Verifica se o filme foi encontrado
        if (filmeSelecionado) {
            removerFilmeParaAssistidos(filmeSelecionado);
            exibirMensagemRemocao();

        } else {
            console.log(`Filme com ID ${movieId} não encontrado.`);
        }
    } else {
        console.log("Atributo 'data-id' não definido no botão.");
    }
}

// Função para remover o filme da lista "para assistir"
function removerFilmeParaAssistidos(filme) {
    // Verifica se já existe a chave "paraAssistir" no localStorage
    const userId = usuarioLogado.apelidoCadastrado;
    let paraAssistirList = JSON.parse(localStorage.getItem(`paraAssistidos_${userId}`)) || [];

    // Filtra a lista para remover o filme com base no ID
    paraAssistirList = paraAssistirList.filter(item => item.id.toString() !== filme.id.toString());

    // Atualiza o localStorage com a nova lista
    localStorage.setItem(`paraAssistidos_${userId}`, JSON.stringify(paraAssistirList));

    // Atualiza a variável local
    listaFilmesAssistidos = paraAssistirList;

    // Atualiza a tela removendo o filme da listagem
    adicionarFilmesParaAsssitidosNaTela();

    console.log(`Removido da lista para assistir: ${filme.title}`);
}

function exibirMensagemRemocao() {
    const mensagem = `Filme removido da listagem com sucesso! :)`;
    alert(mensagem);
    fecharModal();
}

function exibirMensagemAdicaoAssistidos() {
    const mensagem = `Filme adicionado na listagem de "filmes para assistidos" com sucesso! :)`;
    alert(mensagem);
    fecharModal();
}
