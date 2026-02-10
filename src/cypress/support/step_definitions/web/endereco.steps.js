import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import endereco from '../../web/pages/endereco-page'

Then('será validado o endereço de entrega e cobrança', () => {
    cy.fixture('user').then((user) => {
    endereco.validarEnderecosCheckout(user)
    })
})