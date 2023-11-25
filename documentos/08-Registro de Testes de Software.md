# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-01 - Cadastro do Usuário |
|:---|:---|
| Resultados obtidos | Perfil do usuário armazenado no Local Storage  |
| Responsável pela execução do caso de Teste | Enzo |

<br>

A. Dentro da tela Cadastro.html, o campo nome poderá receber letras maiúsculas e minúsculas, porém nenhum caractere especial ou numérico. 
B. O campo email deve ter na estrutura os caracteres "@" e o "." após.
C. O campo senha deve conter no mínimo 1 algarismo numérico, 1 caractere especial, 1 letra maiúscula e 1 letra minúscula.
D. Se o campo confirmar senha estiver diferente do campo, não possibilita cadastro. 
E. Cadastro só é realizado se todas os requisitos foram cumpridos e não houver nenhum campo vazio.
F. Cadastro realizado, aparecerá mensagem "usuário cadastrado" e após 1 segundo será direcionado a página login.html automaticamente. Cadastro sendo salvo dentro do local storage.

<br>


|Caso de Teste    | CT-02 - Login do Usuário |
|:---|:---|
| Resultados obtidos | Login concluído, caso os dados estejam corretos, será redirecionado, automaticamente, para a Tela do Usuário.  |
| Responsável pela execução do caso de Teste | Enzo |
<br>

A. Login só será realizado se o apelido ou email e senha estiverem cadastrados para um usuário. Senhas e apelidos ou emails divergindo não será realizado o login. <br>
B. Se login for bem sucedido, será redirecionado automaticamente para a 'Tela usuário'. Apelido irá  aparecer como saudação na 'Tela usuário'. Um token randômico será salvo no local storage indicando que determinado usuário está logado.<br>
C. Caso usuário queira se deslogar, o token será  retirado do local storage. Caso não haja token salvo no local Storage não é possível acessar 'Tela usuário'.<br>

![Login sem sucesso](./img/login%20sem%20sucesso.png) <br>

Figura A: Login sem sucesso. <br>

![Login com sucesso](./img/login_com_sucesso.png) <br>

Figura B: Login com sucesso. Token salvo no local storage. <br>

![Acesso negado a Tela Usuário](./img/acesso_negado_tela_usuario.png) <br>
Figura C: Ao clicar no botão "sair" na tela de usuário, token é apagado do local storage, impossibilitando acesso a 'Tela usuário'. <br>

<br>

|Caso de Teste    | CT-05 - Pesquisa de Filmes / Séries |
|:---|:---|
| Resultados obtidos | A(s) palavra(s) chave(s) pesquisadas foram entregues em forma de opções de filmes/séries no resultado da busca.  |
| Responsável pela execução do caso de Teste | Enzo |

<br>

|Caso de Teste    | CT-06 - Cadastro de Filmes / Séries |
|:---|:---|
| Resultados obtidos | No local Storage, aparecem os filmes cadastrados, conforme escolha do usuário na forma de filmes/séries Para Assistir e Assistidos.  |
| Responsável pela execução do caso de Teste | Enzo |

<br>

|Caso de Teste    | CT-07 - Inserir Filmes/Séries na Lista de Assistidos e Para Assistir |
|:---|:---|
| Resultados obtidos | O filme/série pesquisado será armazenado no Local Storage da Lista de Assistidos ou A Assistir.  |
| Responsável pela execução do caso de Teste | Márcia Miranda |

<br>

Sequência de teste:



A.	Após resultado da Busca, na Tela do Usuário, clicar na imagem do filme de preferência.<br>
B.	Uma janela pop-up aparecerá, com informações relevantes sobre o filme.<br>
C.	O usuário pode escolher clicar no botão “Lista para Assistir” ou “Lista Assistidos”.<br>
D.	Após clicar em um dos botões, aparecerá uma janela Pop-up, confirmando a operação realizada com sucesso.

![CT-07](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/b85fb5df-569b-45fd-8c24-2c4c672d3615)

Figura: (A): resultado da busca; (B) Pop-up com informações do filme escolhido; (C) Pop-up com confirmação do filme adicionado à Lista Para Assistir; (D) Filme na lista do Local Storage.

<br>

|Caso de Teste    | CT-08 - Listar Filmes/Séries Assistidos e Para Assistir |
|:---|:---|
| Resultados obtidos | O filme/série pesquisado será armazenado no Local Storage da Lista de Assistidos ou A Assistir.  |
| Responsável pela execução do caso de Teste | Márcia Miranda |

Sequência de teste: <br>

A.	O usuário, já logado, poderá escolher em qual lista adicionar o filme, clicando no botão “Assistidos” ou “Para Assistir”.<br>
B.	Se clicar no botão “Assistidos”, aparecerão as imagens dos filmes escolhidos como Assistidos, na busca realizada anteriormente.<br>
C.	Se clicar no botão “Para Assistir”, aparecerão as imagens dos filmes escolhidos como Para Assistir, na busca realizada anteriormente.

![CT-08-A-OK](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/5b86192c-7091-419b-86d5-4e6157cc7e3d)

![CT-08](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/6a4ce4dc-001e-4cbd-b2ee-fd5d942e092a)

Figura: (A): Tela do Usuário; (B) Lista de Filmes da Lista Para Assistir; (C) Lista de Filmes Assistidos.

<br>

|Caso de Teste    | CT-09 - Manutenção e Exclusão de Filmes/Séries na Lista Assistidos e Para Assistir |
|:---|:---|
| Resultados obtidos | A lista de filmes “Assistidos” ou “Para Assistir” exibem, corretamente, os filmes inseridos ou excluídos.  |
| Responsável pela execução do caso de Teste | Caio Costa |

Sequência de teste: <br>

A. Após Login, o usuário escolhe qual lista visualizar, clicando no botão “Assistidos” ou “Para Assistir”.<br>
B. Após exibição da lista de filmes selecionado, o usuário escolhe o filme desejado, clicando na sua imagem.<br>
C. Uma janela pop-up aparecerá, contendo os dados do filme.<br>
    - Caso o usuário tenha clicado na lista “Para Assistir”, pode adicionar à lista de “Assistidos” ou “Remover”.<br>
    - Caso o usuário tenha clicado na lista “Assistidos” poderá escolher “Remover” o filme da lista.<br>
D.	Aparecerá uma janela Pop-up, confirmando a execução da operação com sucesso.

![CT-09-1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/3d768664-8ea4-453b-9d9e-087ee9a45630)

![CT-09-3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/77e4da1e-2fef-472a-8394-c1a7dbf614a4)

Figura: (A) e (B): Após login, Tela com lista de filmes “Assistidos” e seu armazenamento no Local Storage; (C) Janela Pop-up com informações do filme selecionado e botão para Remover filme da lista.

<br>

|Caso de Teste    | CT-10 - Inserção de Avaliações e Comentários em Filmes Assistidos |
|:---|:---|
| Resultados obtidos | No Local Storage da Lista de Assistidos, estarão armazenados os comentários e classificação do filme. |
| Responsável pela execução do caso de Teste | Caio Costa |

Sequência de teste: <br>

1.	O usuário clica no botão “Assistidos” e aparece a lista de filmes assistidos e escolhe o filme de sua preferência.<br>
2.	Abrirá uma janela pop-up com a sinopse do filme, data de lançamento, duração, etc., além de um espaço para inserir comentários a respeito do filme e de uma área para classificar o filme entre 1 a 5 estrelas.<br>
3.	Após realizar o comentário e classificar o filmes, o usuário pode fechar a janela, clicando no “X”, no canto superior direito.

![CT-10-1-OK](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/4d0ae571-59ce-4301-8e3e-c6ee261a12bf)

Figura: Após login, Tela com lista de filmes “Assistidos”.

![CT-10-2 e 3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/3990438c-525d-4734-aeb4-7abfc195b738)

Figura: Janela Pop-up do filme escolhido antes de efetuar a classificação e depois da classificação em 5 estrelas.

![CT-10-4 e 5](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/4723ac33-9429-44d3-9557-7179d8b5b415)

Figura: Janela Pop-up do filme escolhido antes do comentário e depois de digitar comentários.

![CT-10-6](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t6-catalogocinematograficodigital/assets/145228139/e3244aa2-0714-4d4b-9ec2-12c5f14aa45e)

Figura: Local Storage do filme com os comentários inseridos.

<br>


