import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import contato from '../../web/pages/contato-page'

When('preencho o formulário de contato', () => {
    contato.preencherFormularioContato()    
})

When('adiciono o arquivo para upload', () => {
    contato.adicionarArquivoUpload()
})

Then('valido que a mensagem de sucesso de contato foi exibida', () => {
    contato.validarMensagemSucessoContato()
})