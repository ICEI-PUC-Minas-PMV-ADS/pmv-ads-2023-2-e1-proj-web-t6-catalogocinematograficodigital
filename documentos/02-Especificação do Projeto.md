# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Cinéfilo </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Possui interesse pelo cinema e conhecimento sobre o assunto.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>

- Ranquear as obras audiovisuais assistidas, listar e ter do que já foi ou não assistido.
- Buscar um recurso para acompanhar os lançamentos mais populares do cinema, como também para aqueles que não estão no radar dos principais veículos de notícia.
- Encontrar uma fonte confiável de avaliações e opiniões sobre os filmes e séries, para tomar decisões informadas sobre o que assistir.
- Criar lista de filmes e séries favoritos, classificações e divisões temáticas que ele mesmo possa controlar os critérios, além de listas referentes ao que já consumiu ou falta consumir.
- Compartilhar suas recomendações e opiniões com seus amigos e outras pessoas de gosto semelhante no ambiente online.
- Centralizar informações relevantes sobre cada filme ou série, incluindo sinopses, elenco, trailers e avaliações.
- Acessar às informações relativos aos conteúdos de filmes e séries a qualquer momento.
  
</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Engajadora social </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Trabalha com o uso de plataformas de redes sociais com foco em cinema e séries.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
- Criar listas temáticas para diversos públicos.
- Aumentar sua interação com seus seguidores.
- Incorporar às suas resenhas públicas links para suas plataformas sociais, aumentando a visibilidade de seus conteúdos.
- Acessar conteúdos cinematográficos a qualquer hora, sem perda de tempo e de forma simples.
- Acompanhar as críticas e recepções do público a filmes e séries.
- Pesquisar tendências e similaridades de gostos de novas obras.
  
</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Crítico de cinema </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Trabalha com editoriais de revistas e jornais, publicando sua análise a respeito de obras audiovisuais.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>

- Expor sua construção crítica de obras cinematográficas de modo que ela se torne acessível a um nicho social.  
- Encontrar análises críticas, sobre filmes e séries, elaboradas por pessoas que possuem um embasamento acadêmico respeitável.
- Formular listas temáticas específicas sobre variados temas, inclusive para fins acadêmicos.
- Buscar detalhes da produção dos filmes de forma direta e rápida.
  
</td>
</tr>
</tbody>
</table>




## Histórias de Usuários


[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Cinéfilo           | Compartilhar em um espaço online filmes e séries, com informações, e listas.| Fortalecimento do laço social entre pessoas próximas e facilitador de aproximação para pes-soas ainda não tão próximas.|
|                    | Listar filmes e séries que já foram assistidos ou os quais queira assistir.| Ter reunido em apenas um lugar várias informações que são encontradas dispersas em outras aplicações.|
|                    | Ranquear as obras audiovisuais de acordo com a própria experiência, com resenhas e notas.| Ter uma experiência completa, ao discorrer sobre o que já foi assistido.|
|                    | Acompanhar os lançamentos populares do cinema e dos streamings.| Estar integrado com as estreias do mundo audiovisual.|
|Engajadora social   | Compartilhar com seus seguidores seus gostos pessoais em relação a filmes e séries.| Interagir com seu público, facilitando o engajamento social.|
|                    | Fazer sua projeção profissional a respeito dos temas de produ-ções audiovisuais em destaque.| Expandir sua influência nos di-versos círculos sociais.|
| Crítico de Cinema  | Expor suas análises aprofunda-das sobre variadas obras cinematográficas.| Consolidar seu branding.|
|                    | Acompanhar informações sobre a produção de filmes, bem como acesso e produção de críticas profissionais.| Maior contato com elementos técnicos da área cinematográfica.|

## Requisitos do Projeto

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.


### Requisitos Funcionais



|  ID   | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  Cadastro de Usuário:   | Alta  | 
|       |  •	Permitir que os usuários criem e mantenham contas individuais.|     |
|       |  •	Coletar dados de usuário, como nome, senha, endereço de e-mail, etc.|       |
| RF-02 |  Cadastro de Filmes e Séries:   | Alta  | 
|       |  •	Permitir que os usuários cadastrem filmes e séries de suas preferências, que já assistiram, etc.|     |
|       |  •	Coletar informações como título, ano de lançamento, gênero, diretor, elenco, sinopse e capa.|       |
| RF-03 |  Manutenção, Edição e Exclusão de Conteúdo:| Alta   | 
|       |  •	Permitir que os usuários que cadastraram filmes e séries possam editar ou excluir suas próprias entradas.|       |
| RF-04 | Pesquisa e Filtragem:| Média | 
|       |  •	Oferecer uma função para encontrar filmes e séries por título, gênero, diretor, etc.|       |
|       |  •	Permitir que os usuários filtrem o conteúdo com base em critérios como gênero, ano, etc.|       |
| RF-05 |  Listas de Fimles/Séries A Assistir e Assistidos:| Média  | 
|       |  •	Permitir que os usuários adicionem filmes e séries a listas de favoritos e assistidos.|       |
|       |  •	Possibilitar a visualização e gerenciamento dessas listas.|       |
| RF-06 |  Avaliações e Comentários:| Média  | 
|       |  •	Permitir que os usuários avaliem filmes e séries através de uma escala (por exemplo, de 1 a 5 estrelas).|       |
|       |  •	Possibilitar que os usuários escrevam comentários e resenhas.|       |
| RF-07 |  Compartilhamento de informações:| Média  | 
|       |  •	Permitir que os usuários compartilhem suas listas, juntamente com comentários e avaliações.|       |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais



|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  Segurança:| Alta   | 
|       |  •	Implementar medidas de segurança, garantindo a segurança dos dados os quais o usuário não quer compartilhar.|       | 
| RNF-02 |  Aplicação Responsiva: | Alta   | 
|        |  •	Garantir que a página Web seja responsiva para diferentes dispositivos, como desktops, tablets e smartphones. |      | 
| RNF-03 |  Legal: | Alta  | 
|        |  •	Garantir a privacidade dos dados dos usuários em relação à Lei Geral de Proteção de Dados Pessoais - LGPD.|       | 
| RNF-04 |  Usabilidade: | Média | 
|        |  •	O site deve permitir que os usuários o utilizem sem necessidade de treinamento.|       | 
| RNF-05 |  Tempo de resposta para informações aparecerem na tela deve ser menor que 03 segundos em 90% dos casos. | Baixa | 
| RNF-06 |  Integração com Plataformas Externas:|Baixa | 
|        |  •	Utilizar APIs para integrar serviços, como IMDB, para obter informações adicionais e avaliações.|       | 

**Prioridade: Alta / Média / Baixa. 

