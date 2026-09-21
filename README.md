# ARTIGOS MILITARES E ESPORTIVOS

Sistema de loja virtual desenvolvido para uma loja de artigos militares e esportivos.

O projeto começou como uma aplicação frontend para apresentação do catálogo de produtos. Com o crescimento da quantidade de produtos e a necessidade de facilitar a manutenção do catálogo, a aplicação foi migrada para uma arquitetura com backend e banco de dados.

Atualmente, o sistema possui uma área administrativa própria para gerenciamento dos produtos, permitindo que o proprietário atualize o catálogo sem precisar alterar diretamente os arquivos do projeto.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Node.js
* Express
* MySQL
* MySQL2
* Cloudinary
* Railway
* Git
* GitHub

## Funcionalidades

### Loja

* Catálogo de produtos
* Pesquisa de produtos
* Filtros por categoria
* Seleção de tamanho
* Seleção de cor
* Seleção de time
* Carrinho de compras
* Integração com WhatsApp
* Layout responsivo
* Exibição dinâmica dos produtos

### Área administrativa

O sistema possui uma área administrativa destinada ao proprietário da loja.

Através do dashboard é possível:

* Cadastrar novos produtos
* Atualizar informações dos produtos
* Alterar preços
* Atualizar descrições
* Atualizar categorias
* Gerenciar informações utilizadas no catálogo
* Trabalhar com imagens dos produtos

A criação dessa área reduziu a necessidade de alterações manuais no código sempre que um produto precisa ser cadastrado ou atualizado.

## Arquitetura

O projeto utiliza uma arquitetura dividida entre frontend e backend.

O frontend é responsável pela interface da loja, apresentação dos produtos e interação com o cliente.

O backend foi desenvolvido utilizando Node.js e Express, sendo responsável pela comunicação entre a aplicação, o banco de dados e os serviços externos utilizados pelo sistema.

A estrutura permite que os produtos sejam carregados dinamicamente a partir do banco de dados.

## Backend

O backend foi desenvolvido com Node.js e Express.

A aplicação possui rotas responsáveis pelas operações relacionadas aos produtos e pela comunicação com o banco de dados MySQL.

A comunicação com o MySQL é realizada através do pacote `mysql2`.

Essa estrutura permite manter os dados dos produtos de forma persistente e facilita a expansão do sistema conforme a loja cresce.

## Banco de dados

O sistema utiliza MySQL para armazenar as informações dos produtos.

Entre os dados trabalhados pela aplicação estão:

* Nome do produto
* Descrição
* Preço
* Categoria
* Imagem
* Tamanho
* Cor
* Time
* Informações de estoque

A utilização do banco de dados substituiu a necessidade de manter todo o catálogo diretamente em arquivos JavaScript, tornando o gerenciamento dos produtos mais adequado para uma aplicação comercial em crescimento.

## Dashboard administrativo

Uma das principais evoluções do projeto foi a criação de um dashboard administrativo.

O dashboard funciona como uma interface de gerenciamento para o proprietário da loja, permitindo realizar alterações no catálogo através da própria aplicação.

Dessa forma, o proprietário consegue cadastrar e atualizar produtos sem precisar acessar o código-fonte ou modificar manualmente os arquivos do projeto.

## Imagens

As imagens dos produtos são armazenadas utilizando o Cloudinary.

O backend realiza a integração necessária para trabalhar com as imagens, enquanto o banco de dados mantém as informações relacionadas aos produtos.

Essa separação evita o armazenamento direto dos arquivos de imagem dentro do servidor da aplicação.

## Carrinho de compras

O sistema possui um carrinho desenvolvido em JavaScript.

O cliente pode adicionar produtos ao carrinho, selecionar as opções disponíveis e revisar os itens antes de finalizar o pedido.

A finalização é integrada ao WhatsApp, permitindo que as informações do pedido sejam encaminhadas diretamente para o atendimento da loja.

## Pesquisa e filtros

O catálogo possui recursos de pesquisa e filtragem para facilitar a localização dos produtos.

Os produtos são carregados dinamicamente e podem ser organizados de acordo com as categorias disponíveis no sistema.

## Responsividade

A interface foi desenvolvida considerando principalmente a utilização em dispositivos móveis.

O layout foi adaptado para diferentes tamanhos de tela, mantendo a navegação e a visualização dos produtos acessíveis em smartphones, tablets e computadores.

## Hospedagem

O backend e a infraestrutura do banco de dados utilizam Railway.

As imagens dos produtos são armazenadas no Cloudinary.

O código-fonte do projeto é versionado utilizando Git e GitHub.

## Evolução do projeto

O projeto passou por uma evolução de arquitetura conforme as necessidades da loja aumentaram.

### Versão inicial

A primeira versão utilizava principalmente:

* HTML
* CSS
* JavaScript
* Dados dos produtos mantidos no frontend

Essa estrutura funcionava para um catálogo menor, mas exigia alterações no código para atualizar ou cadastrar produtos.

### Versão atual

Com o crescimento do catálogo, o projeto passou a utilizar:

* Node.js
* Express
* MySQL
* Cloudinary
* Railway
* Dashboard administrativo
* Gerenciamento dinâmico de produtos

A migração tornou o sistema mais adequado para manutenção e expansão, além de permitir que o proprietário tenha maior autonomia sobre o catálogo.

## Próximos passos

Entre as possibilidades de evolução do projeto estão:

* Controle de estoque mais completo
* Histórico de pedidos
* Sistema de usuários administrativos
* Diferentes níveis de acesso
* Integração com formas de pagamento
* Notificações de novos produtos
* Melhorias no gerenciamento de pedidos

## Objetivo do projeto

O objetivo do projeto é fornecer uma plataforma própria para catálogo e vendas online, permitindo que a loja gerencie seus produtos através de uma estrutura centralizada e tenha maior autonomia sobre o conteúdo disponibilizado aos clientes.

O projeto também representa a evolução de uma aplicação frontend para uma solução full stack com persistência de dados, API, banco de dados, armazenamento externo de imagens e área administrativa.

## Desenvolvedor

**Tiago Oliveira de Castro**

Desenvolvedor Full Stack Júnior

GitHub: [Tiago029](https://github.com/Tiago029)
