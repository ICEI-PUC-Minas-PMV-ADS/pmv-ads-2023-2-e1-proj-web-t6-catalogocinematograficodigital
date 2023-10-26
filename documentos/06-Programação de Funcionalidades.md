# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

*Etapa 3* (_Sprint 3_):

## Título da Funcionalidade: Cadastro de usuário
Tela inicial: 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/95872126/5a147d27-b3b9-4e6f-bdf7-db80d5b277ee)

Tela de cadastro:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/95872126/294b326d-3eee-457a-8a21-87560b63f027)

Tela de login:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/95872126/28740151-2989-4260-8315-cb70919fd97c)

Tela usuário:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/95872126/76c283c7-a0dc-49aa-b686-a35a24c76c30)

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

Fábio Barros e Enzo Wilker.



> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
