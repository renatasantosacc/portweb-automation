import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import cadastro from '../../web/pages/cadastro-page'

When('preencher as demais informações cadastrais', () => {
    cadastro.preencherFormularioCadastro()
})

Then('o usuario sera direcionado para a pagina de conta criada com sucesso', () => {
    cadastro.validarContaCriadaComSucesso()
})

Then('o usuario sera direcionado para a pagina de conta excluida com sucesso', () => {
    cadastro.validarContaExcluidaComSucesso()
    
})   

Then('o usuário verá a mensagem de erro {string}', (erro) => {
    cy.contains(erro).should('be.visible')
})