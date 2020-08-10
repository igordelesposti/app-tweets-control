# app-tweets-control
[Documentação API](https://documenter.getpostman.com/view/10914414/T1LLDStq)<br/>
[Deploy](https://app-tweets-control.vercel.app/)

![tweet3](https://user-images.githubusercontent.com/56797122/89821419-ebd2fc80-db24-11ea-9e78-b1f97eb1aea1.gif)
![image](https://user-images.githubusercontent.com/56797122/89821590-36ed0f80-db25-11ea-999e-49962574b19b.png)

## Obs: O programa de captura de tela utilizado distorce o background-linear da aplicação.

## Teste da aplicação:
E-mail e password para login:
```
igor@gmail.com
123456
```
Ao clicar no botão "Admin" você será direcionado para tela de login, caso queira, clique em "Não possuo um usuário" para criar um novo usuário Administrador.

![image](https://user-images.githubusercontent.com/56797122/89821962-cf838f80-db25-11ea-8e73-cbf791f07d95.png)
![image](https://user-images.githubusercontent.com/56797122/89821987-db6f5180-db25-11ea-970f-d8f7e75008cb.png)

# Escopo do projeto
Essa é uma aplicação desenvolvida em mobile-first, com a funcionalidade de controlar e receber tweets com determinada hashtag configurável e moderando os tweets.
Tweets aprovados pelo administrador são mostrados na tela de Tweets.

# Principais linguagens, tecnologias e ferramentas utilizadas

## Frontend

* HTML
* CSS
* Javascript
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
* Lambda e API Gateway (para o backkend)

## Serviços Vercel
* Vercel (para o front)

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
