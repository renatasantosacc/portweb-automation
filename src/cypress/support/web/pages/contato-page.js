
const elements = {
    nameForm:'input[data-qa="name"]',
    emailForm:'input[data-qa="email"]',
    subjectForm:'input[data-qa="subject"]',
    messageForm:'textarea[data-qa="message"]',
    submitButtonForm: 'input[data-qa="submit-button"]',
    homeButton: 'a.btn.btn-success'


}

class Metodos {
    
    preencherFormularioContato() {
        cy.get(elements.nameForm).type('Teste teste')
        cy.get(elements.emailForm).type('teste@teste.com')
        cy.get(elements.subjectForm).type('Teste Contato')
        cy.get(elements.messageForm).type('Teste realizado com sucesso!')
    }
    
    adicionarArquivoUpload() {
            const file = 'cypress/fixtures/document.pdf'
            cy.get('input[type="file"]').selectFile(file)

            cy.get(elements.submitButtonForm).click()
            cy.on('window:confirm', () => true) // Aceita o alerta de confirmação
    }

    validarMensagemSucessoContato() {
        cy.get('.status').should('be.visible').and('contain', 'Success! Your details have been submitted successfully.')
        cy.get(elements.homeButton).should('be.visible').click()
    }
}


export default new Metodos()
