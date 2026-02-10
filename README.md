# Automação PortWeb

Projeto de automação de testes Web e API utilizando Cypress + Cucumber (BDD).

-----------------------------------------------------------------------------------

## Sobre o Projeto

Este projeto tem como objetivo automatizar cenários de testes funcionais e de API, para garantir a qualidade das funcionalidades da aplicação PortWeb.
Testes escritos utilizando BDD (Gherkin):
- Given (Dado)
- When (Quando)
- Then (Então)
  

## Tecnologias Utilizadas

- Cypress
- Cucumber (BDD)
- Node.js
- JavaScript
- Gherkin

## Estrutura do projeto

src
- cypress
- - e2e
- - - api/web
- - fixtures
- - support
- - - commands
- - - step_definitions/pages
- cypress.config.js
- package.json

## Instalação do projeto

Clone o repositorio:
git clone URL_DO_REPOSITORIO

Entre na pasta do projeto: 
cd portweb

Instale as dependências:
npm install

## Executar os testes

abrir a interface do cypress:
npx cypress open

executar em modo headless
npx cypress run

## Boas práticas aplicadas

- Page Objects;
- Reutilização de métodos
- Separação Web e API
- Validações completas de respostas
- Uso de Fixtures quando necessário

## Autora

Renata Santos
QA Automation Engineer 
GitHub: https://github.com/renatasantosacc

## Observações
Este projeto tem fins de estudo, prática e evolução técnica em automação de testes. 



