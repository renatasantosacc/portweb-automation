import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import login from '../../web/pages/login-page'

Given('que acesso o pagina da Automation Exercise', () => {
  login.acessaPagina()
})

Given('acesso a pagina de login', () => {
  login.visitLoginPage()
})

When('efetuar login na pagina {string} {string}', (usuario_login, senha_login) => {
  login.preencherDadosLogin(usuario_login, senha_login)
})

When('o usuário clica no botão de logout', () => {
  login.clicarBotaoLogout()
})

Then('o usuário sera redirecionado para a página inicial', () => {
  login.validarRedirecionamentoPaginaInicial()
})

Then('o usuário sera redirecionado para a página de login novamente', () => {
  login.validarRedirecionamentoPaginalogin()
})

Then('o usuário verá uma mensagem de erro {string}', (mensagem_erro) => {
  cy.contains(mensagem_erro).should('be.visible')
})

When('informar os primeiros dados cadastrais {string} {string}', (nome_cadastro, email_cadastro) => {
  login.preencherDadosCadastro(nome_cadastro, email_cadastro)
})

When('excluir a conta cadastrada', () => {
  login.excluirContaCadastrada()
})

Then('verifico se estou logada na conta criada', () => {
  login.validarLoginContaCriada()
})  