# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

*Etapa 3* (_Sprint 3_):

## Título da Funcionalidade: Cadastro de usuário


Tela inicial: 

![1-1-Tela CCD](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/e287c6d1-cd7f-43fb-9671-1bf006fbf8ec)

Tela de cadastro:

![1-3-Tela Cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/7f928744-4549-4a99-b12e-b4c5ab403532)


Tela de login:

![1-0-Tela Login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/8f9fda42-ba2b-43d8-a232-4e9f3bf68a75)


Tela Contato:

![1-2-Tela Contato](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/b05824e5-2a26-42d0-8f37-5c9637b2d297)




#### Requisito atendido

RF-01: Permitir que os usuários criem e mantenham contas individuais; Coletar dados de usuário, como nome, senha, endereço de e-mail, etc.

#### Artefatos da funcionalidade
Os arquivos que correspondem à funcionalidade de cadastro estão presentes na pasta código-fonte, são eles: 
- cadastro.html,
- cadastro.css,
- cadastro.js,
- login.html,
- login.css,
- login.js,
- telausuario.html,
- telausuario.css e
- telausuario.js.

Os arquivos, que implementam as demais funcionalidades, estão na pasta código-fonte, quais sejam:
- telausuario.html,
- telausuario.css,
- telausuario.js,
- listaAssistidos.html,
- listaAssistidos.css,
- listaAssistidos.js,
- listaAssistir.html,
- listaAssistir.css,
- listaAssistir.js,
- recuperar.html,
- recuperar.css,
- recuperar.js.

  
#### Estrutura de Dados

Os dados que estão sendo salvos no localStorage que possibilitam o cadastro e login, apresentando a seguinte estrutura de dados:
- nomeCadastrado, 
- apelidoCadastrado, 
- emailCadastrado, 
- senhaCadastrado e 
- token

#### Instruções de acesso

Para o usuário utilizar o aplicativo CCD, deve, basicamente, seguir os seguintes passos:
- A partir da página inicial, usuário clica em "Cadastre-se" ou "Crie sua conta".
- Na Tela de Cadastro, irá preencher todos os campos disponíveis na página. São realizadas as devidas validações, logo que o usuário preencher cada campo.
- Após realizar o Cadastro, será dirigido, automaticamente, para a Tela de Login. Nessa tela, deverá preencher os dados, podendo utilizar o apelido ou o email cadastrado, seguido da senha.
- Caso necessite, o usuário poderá acessar a informações de FAQ (Perguntas frequentes do aplicativo), Termos e Condições de Uso, Política de Privacidade e requisitar Contato com suporte da página, disponibilizados em botões no Menu do Rodapé, constante nas páginas do aplicativo.

As telas de acesso, referenciadas, estão ilustradas acima, no início dessa Sessão.

Para o usuário cadastrar seus filmes deve realizar as seguintes operações:
- Realizar o login na Tela de login do CCD.
- Após login, o usuário já tem a diponibilidade de realizar buscas de filmes de sua preferência, digitando palavras-chaves na área de busca, clicar em Pesquisar.
- Após a lista de filmes/séries disponibilizadas, que aparecerá abaixo da caixa de busca, o usuário poderá escolher se irá incluir na lista de filmes/séries Assistidos ou A Assisitr, através de pop up que aparecerá com o sumário descritivo do filme/série.
- O usuário também pode acessar as listas de filmes Assistidos ou A Assistir para remover algum elemento adicionado. 

#### Responsáveis

Enzo Wilker, Márcia Miranda, Caio Costa.

*Etapa 4* (_Sprint 4_):

## Título da funcionalidade: Cadastro de filmes e séries, Manutenção, Edição e Exclusão de Conteúdo, Pesquisa e Filtragem, Listas de Fimles/Séries A Assistir e Assistidos, Avaliações e Comentários

Tela de usuário (onde está situada a barra de busca):

....... print da tela

Console do navegador (chamada à API)

..... print mostrando arrays da API

#### Requisito atendidos:

RF-02 Cadastro de filmes e séries. 
Permitir que os usuários cadastrem filmes e séries de suas preferências, que já assistiram, etc;
Coletar informações como título, ano de lançamento, gênero, diretor, elenco, sinopse e capa.

RF-03 Cadastro de filmes e séries. 
Permitir que os usuários que cadastraram filmes e séries possam editar ou excluir suas próprias entradas.

RF-04 Pesquisa e Filtragem.
- Oferecer uma função para encontrar filmes e séries por título, gênero, diretor, etc.
- Permitir que os usuários filtrem o conteúdo com base em critérios como gênero, ano, etc.

RF-05 Listas de Fimles/Séries A Assistir e Assistidos.
- Permitir que os usuários adicionem filmes e séries a listas de favoritos e assistidos.
- Possibilitar a visualização e gerenciamento dessas listas.

RF-06 Avaliações e Comentários.
- Permitir que os usuários avaliem filmes e séries através de uma escala (por exemplo, de 1 a 5 estrelas).
- Possibilitar que os usuários escrevam comentários e resenhas.


#### Artefatos da funcionalidade
Os arquivos que correspondem à funcionalidade de cadastro de filmes e séries estão presentes na pasta código-fonte, são eles: 
- telausuario.html,
- telausuario.css e
- telausuario.js.
- listaAssistidos.html,
- listaAssistidos.css,
- listagemAssistidos.js,
- listaAssistir.html,
- listaAssistir.css,
- listagemAssistir.js,
  
#### Estrutura de Dados

Os dados que estão servindo para fazer a consulta ao site do The Movie DataBase (TMDB) e sendo usados para mostrarem na tela as informações das obras audiovisuais são os seguintes:
- data-id, armazena o _id_ do filme ou série;
- tituloDoElemento, caso seja filme coleta o parâmetro _title_ do array, caso seja série coleta parâmetro _name_;
- avaliação, contendo o parâmetro trazido da API _vote-average_ 
- dataLancamento, armazenando ou o parâmetro _release-date_ ou _first-air-date_;
- overview, sinopse da obra;
- poster-path, capa da obra;
- media-type, tipo de mídia da obra (_movie_, _serie_,_tv_);
- original-title, título original da obra.

#### Instruções de acesso

Para o usuário utilizar o aplicativo CCD, deve, basicamente, seguir os seguintes passos:
- A partir da página inicial, usuário clica em "Cadastre-se" ou "Crie sua conta".
- Na Tela de Cadastro, irá preencher todos os campos disponíveis na página. São realizadas as devidas validações, logo que o usuário preencher cada campo.
- Após realizar o Cadastro, será dirigido, automaticamente, para a Tela de Login. Nessa tela, deverá preencher os dados, podendo utilizar o apelido ou o email cadastrado, seguido da senha.
- Caso necessite, o usuário poderá acessar a informações de FAQ (Perguntas frequentes do aplicativo), Termos e Condições de Uso, Política de Privacidade e requisitar Contato com suporte da página, disponibilizados em botões no Menu do Rodapé, constante nas páginas do aplicativo.

As telas de acesso, referenciadas, estão ilustradas acima, no início dessa Sessão.

Para o usuário cadastrar seus filmes deve realizar as seguintes operações:
- Realizar o login na Tela de login do CCD.
- Após login, o usuário já tem a diponibilidade de realizar buscas de filmes de sua preferência, digitando palavras-chaves na área de busca, clicar em Pesquisar.
- Após a lista de filmes/séries disponibilizadas, que aparecerá abaixo da caixa de busca, o usuário poderá escolher se irá incluir na lista de filmes/séries Assistidos ou A Assisitr, através de pop up que aparecerá com o sumário descritivo do filme/série.
- O usuário também pode acessar as listas de filmes Assistidos ou A Assistir para remover algum elemento adicionado. 
- Para o usuário remover alguma obra de qualquer lista, deve ir primeiro à lista pretendida, escolher a obra desejada e optar por removê-la.
- Na lista 'Para assistir', caso o usuário queira colocar a obra na lista 'Assistidos', é só escolher esta opção, que irá adicionar nesta lista e remover daquela.
- É possível adicionar comentários e uma avaliação do filme/série/desenho por estrelas, que estejam na lista 'Assistidos'.


#### Responsáveis

Enzo Wilker, Márcia Miranda, Caio Costa.



> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
