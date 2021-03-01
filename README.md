# Eureka Labs | Avaliação técnica - Projeto ViaCEP

### Instalações
Para executar os projetos é necessário:

1. [Node.js](https://nodejs.org/en/);
2. [Redis](https://redis.io/);
3. Gerenciador de pacotes [Yarn](https://yarnpkg.com/) (recomendado) ou NPM.

### Instruções para o projeto Node.js

Para executar os testes do projeto Node.js é necessário:

1. Acessar o diretório "backend" e executar o comando `yarn` ou `npm install --save` para instalar as dependências;
2. Executar o comando `yarn knex migrate:latest` ou `npx knex migrate:latest` para realizar a criação do banco;
3. Executar o Redis (redis-server);
3. Executar o comando `yarn test` ou `npm test` para rodar os testes automatizados.

### Instruções para o projeto ReactJS

Para executar o projeto ReactJS é necessário:

1. Executar o comando `yarn dev` ou `npm run dev` no diretório "backend" para inicializar a API;
2. Acessar o diretório "frontend" e executar o comando `yarn` ou `npm install --save` para instalar as dependências;
3. Executar o comando `yarn start` ou `npm start` para inicializar o projeto;
4. Aguardar o projeto abrir no navegador, informar o CEP no campo de busca e clicar no botão "Buscar".
