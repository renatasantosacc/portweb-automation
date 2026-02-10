
 const elements = {
    sessionSubscribe: 'h2:contains("Subscription")',
    subscribeEmailInput: 'input#susbscribe_email',
    subscribeButton: 'button#subscribe',
    alertaSucesso: '.alert-success'

}

 class Metodos {

    escrolarBotão() {
        cy.scrollTo('bottom')
    }

    verificaAssinaturaVisivel() {
        cy.get(elements.sessionSubscribe).should('be.visible')
    }

    emailAssinatura() {
        const email = `user${Date.now()}@example.com` //criação de email unico
        cy.get(elements.subscribeEmailInput).type(email)
        cy.get(elements.subscribeButton).click()
    }  

    validaMensagemSucesso() {
        cy.get(elements.alertaSucesso).should('contain.text', 'You have been successfully subscribed!')
    }

                

}
export default new Metodos()