# app-tweets-control
[Documentação API](https://documenter.getpostman.com/view/10914414/T1LLDStq)

# Escopo do projeto
Essa é uma aplicação desenvolvida em mobile-first, com a funcionalidade de controlar e receber tweets com determinada hashtag configurável e moderando os tweets.
Tweets aprovados pelo administador são mostrados na tela de Tweets.

# Principais linguagens, tecnologias e ferramentas utilizadas

## Frontend

* HTML
* CSS
* Javascript
* Node
* React (principal biblioteca para construção do site)
* Redux (para gerenciamento de estados)
* Redux-Thunk (para integração do redux com requisições assíncronas)
* React Router (para aplicar múltiplas rotas)
* Uso de bibliotecas de UI (Material UI)
* Styled-components
* Formulários com validação
* Autenticação e autorização
* Responsividade e adaptação de aplicação web para front.

## Backend

* Node
* Typescript
* Arquitetura MVC
* MySQL (para construção do banco de dados)
* Knex (para conexão com o banco de dados)
* Express (para integração do código através do protocolo HTTP)
* Dotenv (para acessar informações sensíveis por meio de variáveis de ambiente)
* UUID (para geraração de id)
* Bcryptjs (para criptografar senhas)
* Jsonwebtoken (para gerar tokens de autenticação)

# Infraestrutura

## Serviços Cloud AWS

* EC2 (para o banco de dados)
* Lambda e API Gateway (para o banckend)
* AWS (para o front)

# Como rodar a aplicação

No terminal, clone seu projeto:
```
$ git clone https://github.com/igordelesposti/app-tweets-control.git
```
Entre na pasta do projeto:
```
$ cd /app-tweets-control/frontend
```

Instale as dependências:
```
$ npm install
```
Execute a aplicação:
```
$ npm run start
```
## Contact
Created by [Igor Delesposti](https://github.com/igordelesposti) - feel free to contact me!
