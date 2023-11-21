# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]


|Caso de Teste    | CT-01 - Funcionalidade do Cadastro do Usuário |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se, a partir dos dados preenchidos pelo usuário, a funcionalidade do cadastro é concluída corretamente. |
| Passos | 1. Na página inicial, usuário clica no botão  "Cadastre-se". |
| |2. Na Tela de Cadastro, preencher todos os campos do formulário, por exemplo: Nome, Apelido, Email, Senha. |
| |3. Clicar no botão “Cadastrar”. Após realizar o Cadastro, será redirecionado, automaticamente, para a Tela de Login.|
| Critérios de êxito | Cadastro concluído, aparecerá a mensagem “Cadastro concluído”, com perfil criado do usuário e possibilidade do usuário acessar à página. |
| Responsável pela elaborar do caso de Teste | Márcia  |


|Caso de Teste    | CT-02 - Funcionalidade do Login do Usuário |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se, a partir dos dados preenchidos pelo usuário na Tela de Login, a funcionalidade do Login/acesso à página é realizado com sucesso. |
| Passos | 1. Na página inicial, usuário clica no botão  "Login". |
| |2. Preencher todos os campos Apelido/E-Mail e Senha. |
| |3. Clicar no botão “Entrar”. Após realizar o Login, caso os dados estejam corretos, será redirecionado, automaticamente, para a Tela do Usuário. Caso contrário, aparecerá mensagem de Erro, para digitar os dados corretamente ou Recuperar senha.|
| Critérios de êxito | Login concluído, caso os dados estejam corretos, será redirecionado, automaticamente, para a Tela do Usuário. |
| Responsável pela elaborar do caso de Teste | Márcia  |



|Caso de Teste    | CT-03 - Funcionalidade Recuperar Senha do Usuário |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se, a partir do Email digitado na Tela Recuperar Senha, o usuário recebe mensagem no Email cadastrado com sucesso. |
| Passos | 1. Na página Login, usuário clica no botão "Recuperar Senha". |
| |2. Inserir informação do E-Mail Cadastrado.  |
| |3. Clicar no botão “Entrar E-mail Recuperação”. Caso e-mail informado esteja correto, o usuário receberá mensagem para recuperação da senha.|
| Critérios de êxito | Mensagem de recuperação de senha enviada para o Email informado pelo Usuário. |
| Responsável pela elaborar do caso de Teste | Márcia  |


	
|Caso de Teste    | CT-04 - Funcionalidade Sair da Página |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se o Botão "Sair" efetua o Logout do sistema com sucesso. |
| Passos | 1. Na página inicial, usuário clica no botão "Sair". |
| |2. Após Sair da página, será direcionado à Tela de Login.  |
| Critérios de êxito | Saída concluída, será redirecionado, automaticamente, para a Tela de Login. |
| Responsável pela elaborar do caso de Teste | Márcia  |


|Caso de Teste    | CT-05 - Funcionalidade Pesquisa de Filmes / Séries |
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Verificar se o sistema de busca e entrega o resultado esperado, a partir das palavras chaves informadas pelo usuário. |
| Passos | 1. Fazer Login no sistema. |
| |2. Após o Login, o usuário já está na Tela do Usuário, digitar palavras chaves do filme/série que deseja ser encontrada.  |
| |3. Após busca no banco de Dados da API utilizada (TMDb), mostra os resultados, em forma de imagens representativas dos filmes, na área de Busca. |
| Critérios de êxito | 	A(s) palavra(s) chave(s) pesquisadas foram entregues em forma de opções de filmes/séries no resultado da busca. |
| Responsável pela elaborar do caso de Teste | Márcia e Enzo |



|Caso de Teste    | CT-06 - Funcionalidade Cadastro de Filmes / Séries |
|:---|:---|
| Requisitos Associados | RF-02 |
| Objetivo do Teste | Verificar se o sistema de busca e entrega o resultado esperado, a partir das palavras chaves informadas pelo usuário. |
| Passos | 1. Fazer Login no sistema. |
| |2. Após o Login, o usuário realiza a busca do filmes/série, através da digitação de palavras-chaves, na linha de pesquisa.  |
| |3. Aparece, na tela de busca, o resultado da pesquisa. |
| |4. O usuário, clica no filme/série desejado.  |
| |5. Aparece um pop-up com as informações da escolha, como: sinopse, data, etc.  |
| |6. O usuário pode clicar em um dos botões para Opção Assistidos ou Para Assistir.  |
| |7. Aparece a mensagem de cadastro com Sucesso.  |
| Critérios de êxito | 	A(s) palavra(s) chave(s) pesquisadas foram entregues em forma de opções de filmes/séries no resultado da busca. |
| Responsável pela elaborar do caso de Teste | Márcia e Enzo |

 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
