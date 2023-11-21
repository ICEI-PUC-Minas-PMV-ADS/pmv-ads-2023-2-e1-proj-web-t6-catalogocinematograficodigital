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



> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
