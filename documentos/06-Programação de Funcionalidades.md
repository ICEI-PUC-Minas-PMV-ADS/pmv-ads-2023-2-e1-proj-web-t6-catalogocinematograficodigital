# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

*Etapa 3* (_Sprint 3_):

## Título da Funcionalidade: Cadastro de usuário


Tela inicial: 

![1-1-Tela CCD](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/e287c6d1-cd7f-43fb-9671-1bf006fbf8ec)

Tela de cadastro:

![2-Tela Cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/7a214cba-968e-401a-8ee1-eeb384936d11)

Tela de login:

![3-Tela Login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/78d9d46a-43ee-4de2-918c-e3a492a7ed1b)

Tela Contato:

![8-Tela Contato](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/ffb5e286-b3e7-4d17-a2e5-66d9b757f895)



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

#### Responsáveis

Fábio Barros, Enzo Wilker, Márcia Miranda, Caio Costa.



> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
