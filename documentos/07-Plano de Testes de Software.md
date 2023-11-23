# Plano de Testes de Software


Os testes funcionais a serem realizados na aplicação são descritos a seguir. 


|Caso de Teste    | CT-01 - Cadastro do Usuário |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se, a partir dos dados preenchidos pelo usuário, a funcionalidade do cadastro está operando corretamente. |
| Passos | 1. Na página inicial, usuário clica no botão  "Cadastre-se". <br> 2. Na Tela de Cadastro, o usuário deve preencher todos os campos do formulário: Nome, Apelido, Email, Senha. <br> 3. Clicar no botão “Cadastrar”.|
| Critérios de êxito | Cadastro concluído: aparecerá a mensagem “Cadastro concluído”, com perfil criado do usuário e permissão do usuário acessar à página. No Local Storage, aparecerá o perfil do usuário armazenado. |
| Responsável pela elaborar do caso de Teste | Márcia  |



|Caso de Teste    | CT-02 - Login do Usuário |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se, a partir dos dados preenchidos pelo usuário na Tela de Login, a funcionalidade do Login/acesso à página está operando corretamente. |
| Passos | 1. Na página inicial, usuário clica no botão  "Login". <br> 2. Preencher todos os campos Apelido/E-Mail e Senha. <br> 3. Clicar no botão “Entrar”. |
| Critérios de êxito | Login concluído, caso os dados estejam corretos, será redirecionado, automaticamente, para a Tela do Usuário. |
| Responsável pela elaborar do caso de Teste | Márcia  |



|Caso de Teste    | CT-03 - Recuperar Senha do Usuário |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se a Recuperação de Senha do Usuário está funcionando corretamente. |
| Passos | 1. Na página Login, usuário clica no botão "Recuperar Senha". <br> 2. Inserir informação do E-Mail Cadastrado.  <br> 3. Clicar no botão “Entrar E-mail Recuperação”. Caso e-mail informado esteja correto, o usuário receberá mensagem para recuperação da senha.|
| Critérios de êxito | Mensagem de recuperação de senha enviada para o Email informado pelo Usuário. |
| Responsável pela elaborar do caso de Teste | Márcia  |


	
|Caso de Teste    | CT-04 - Sair da Página |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se o Botão "Sair" efetua o Logout do sistema com sucesso. |
| Passos | 1. Na página inicial, usuário clica no botão "Sair". <br> 2. Após Sair da página, o usuário será direcionado à Tela de Login.  |
| Critérios de êxito | Saída concluída, o usuário será redirecionado, automaticamente, para a Tela de Login. |
| Responsável pela elaborar do caso de Teste | Márcia  |


|Caso de Teste    | CT-05 - Pesquisa de Filmes / Séries |
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Verificar se o sistema de Busca entrega o resultado esperado, a partir das palavras chaves informadas pelo usuário. |
| Passos | 1. Na página Inicial, o usuário, já logado, deve digitar palavras chaves do filme/série que deseja ser encontrada. <br> 2. Após busca no banco de Dados da API utilizada (TMDb), os resultados da busca são exibidos, em forma de imagens representativas dos filmes, na área de Busca.  |
| Critérios de êxito | 	A(s) palavra(s) chave(s) pesquisadas foram entregues em forma de opções de filmes/séries no resultado da busca. |
| Responsável pela elaborar do caso de Teste | Márcia e Enzo |



|Caso de Teste    | CT-06 - Cadastro de Filmes / Séries |
|:---|:---|
| Requisitos Associados | RF-02 |
| Objetivo do Teste | Verificar se o sistema armazena no Local Storage o filme/série selecionado pelo usuário, a partir do resultado da busca. |
| Passos | 1. Após o Login, o usuário realiza a busca do filmes/série, através da digitação de palavras-chaves, na linha de pesquisa.  <br> 2. Aparece, na tela de busca, o resultado da pesquisa. <br> 3. O usuário clica no filme/série desejado.  <br> 4. Aparece uma janela pop-up com as informações do filme escolhido, como: sinopse, data, etc.  <br> 5. O usuário pode clicar em um dos botões: Opção Assistidos ou Para Assistir.  <br> 6. Aparece a mensagem de cadastro com Sucesso.  |
| Critérios de êxito | No local Storage, aparecem os filmes cadastrados, conforme escolha do usuário na forma de filmes/séries Para Assistir e Assistidos. |
| Responsável pela elaborar do caso de Teste | Márcia e Enzo |

 
|Caso de Teste    | CT-07 - Inserir Filmes/Séries na Lista de Assistidos e Para Assistir |
|:---|:---|
| Requisitos Associados | RF-05 |
| Objetivo do Teste | Verificar se a ação de inserção de filmes/séries pesquisados na lista de Assistidos e A Assistir está funcionando corretamente. |
| Passos | 1. Após resultado da Busca, o usuário clica no filme de sua preferência. <br> 2. Uma janela pop-up aparecerá, com a sinopse do filme, data de lançamento, duração, etc.  <br> 3. O usuário pode escolher clicar no botão “Lista para Assistir” ou “Lista Assistidos”. <br> 4. Após clicar em um dos botões, aparecerá uma janela Pop-up, confirmando a operação realizada com sucesso.  |
| Critérios de êxito | 	O filme/série escolhido será armazenado no Local Storage na Lista de Assistidos ou A Assistir. |
| Responsável pela elaborar do caso de Teste | Márcia e Caio |


|Caso de Teste    | CT-08 - Listar Filmes/Séries Assistidos e Para Assistir |
|:---|:---|
| Requisitos Associados | RF-05 |
| Objetivo do Teste | Verificar se a lista de Filmes Assistidos e Para Assistir, do Local Storage, está correta. |
| Passos | 1. O usuário, já logado, poderá escolher em qual lista adicionar o filme, clicando no botão “Assistidos” ou “Para Assistir”. <br> 2. Se clicar no botão “Assistidos”, aparecerão as imagens dos filmes escolhidos como Assistidos, na busca realizada anteriormente.  <br> 3. Se clicar no botão “Para Assistir”, aparecerão as imagens dos filmes escolhidos como Para Assistir, na busca realizada anteriormente. |
| Critérios de êxito | 	A lista de filmes “Assistidos” ou “Para Assistir” exibem, corretamente, os filmes escolhidos. |
| Responsável pela elaborar do caso de Teste | Márcia e Caio |

  
|Caso de Teste    | CT-09 - Manutenção e Exclusão de Filmes/Séries na Lista Assistidos e Para Assistir |
|:---|:---|
| Requisitos Associados | RF-03 |
| Objetivo do Teste | Verificar se as funções de Manutenção, Inserção e Exclusão de filmes/séries na lista de Filmes Assistidos e Para Assistir está funcionando corretamente. |
| Passos | 1. Após Login, o usuário poderá escolher qual lista visualizar, clicando no botão “Assistidos” ou “Para Assistir”. <br> 2. Após exibição da lista de filmes selecionado, o usuário escolhe o filme desejado, clicando na sua imagem.  <br> 3. Uma janela pop-up aparecerá, contendo os dados do filme. <br> 3.1-Caso o usuário tenha clicado na lista “Para Assistir”, pode adicionar à lista de “Assistidos” ou “Remover”. <br> 3.2-Caso o usuário tenha clicado na lista “Assistidos”  poderá escolher “Remover” o filme da lista. <br>4. Aparecerá uma janela Pop-up, confirmando a execução da operação com sucesso. |
| Critérios de êxito | 	A lista de filmes “Assistidos” ou “Para Assistir” exibem, corretamente, os filmes escolhidos. |
| Responsável pela elaborar do caso de Teste | Márcia e Caio |

|Caso de Teste    | CT-10 - Inserção de Avaliações e Comentários em Filmes Assistidos |
|:---|:---|
| Requisitos Associados | RF-06 |
| Objetivo do Teste | Verificar se a ação de Avaliação e inserção em filmes Assistidos está funcionando corretamente. |
| Passos | 1. O usuário, já logado, acessa à Tela do Usuário. <br> 2. O usuário clica no botão “Assistidos” e aparece a lista de filmes assistidos e escolhe o filme de sua preferência. <br> 3. Abrirá uma janela pop-up com a sinopse do filme, data de lançamento, duração, etc., além de um espaço para inserir comentários a respeito do filme e de uma área para classificar o filme entre 1 a 5 estrelas. <br> 4. Após realizar o comentário e classificar o filmes, o usuário pode fechar a janela, clicando no “X”, no canto superior direito. |
| Critérios de êxito | 	No Local Storage da Lista de Assistidos, estarão armazenados os comentários e classificação do filme. |
| Responsável pela elaborar do caso de Teste | Márcia e Caio |

> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
