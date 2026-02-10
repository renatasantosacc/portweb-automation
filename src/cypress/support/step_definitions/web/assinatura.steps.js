import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import assinatura from '../../web/pages/assinatura-page'

When('escrolar até o final da página', () => {
    assinatura.escrolarBotão()
})

Then('a seção de assinatura deve estar visível', () => {
    assinatura.verificaAssinaturaVisivel()
})

Then('insero meu e-mail para assinar a newsletter', () => {
    assinatura.emailAssinatura()
})

Then('valido a mensagem de sucesso da assinatura', () => {
    assinatura.validaMensagemSucesso()
})
