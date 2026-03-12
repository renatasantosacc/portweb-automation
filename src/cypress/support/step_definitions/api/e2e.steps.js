import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import e2e from '../../api/services/e2e-service'
let payload


Given('que eu faça uma requisição {string} para o endpoint {string}', (metodo,endpoint) => {
      e2e.requisicaoEndpoint(metodo, endpoint)  
})  

Then('o status HTTP da resposta deve ser {int}', (statusCode) => {
    e2e.validateStatusCode(statusCode)
  })

Then('a resposta deve conter uma lista de produtos', () => {
   e2e.validateProductsList()
  })

Then('cada produto deve ter os atributos obrigatórios', () => {
    e2e.validateProductAttributes()
  })

Then('o responseCode deve ser {int}', (responseCode) => {
    e2e.validateResponseCode(responseCode)
  })

Then('a mensagem deve conter {string}', (mensagem) => {
    e2e.validateMensagem(mensagem)
  })

Then('a resposta deve conter uma lista de marcas', () => {
    e2e.validateMarcasList()
})

Given('que eu faça uma requisição {string} para o endpoint {string} com o produto {string}', (metodo,endpoint,productName) => {
    e2e.requisicaoEndpointComProduto(metodo,endpoint,productName)
})

Then('a resposta deve conter uma lista de produtos relacionados à pesquisa {string}', (productName) => {
    e2e.validateProdutosPesquisa(productName)
})

Given('que eu faça uma requisição {string} para o endpoint {string} com o user {string} {string}', (metodo,endpoint,email,password) => {
    e2e.requisicaoEndpointComLogin(metodo,endpoint,email,password)
})

Given('que eu tenha os dados válidos para criar uma conta', () => {
    e2e.criarCadastro()
})

Given('que eu faça uma requisição {string} para o endpoint {string} com o payload {string}',(metodo, endpoint, payloadAlias) => {
    cy.get(`@${payloadAlias}`).then((payload) => {

      const updatedPayload = {
        ...payload,
        company: 'Empresa Atualizada',
        city: 'Rio de Janeiro'
      }
      cy.wrap(updatedPayload, { log: false }).as('updatedAccountPayload')
      e2e.requisicaoEndpoint(metodo, endpoint, updatedPayload)
    })
  }
)

When('que eu consulte os dados do usuário atualizado', () => {
    e2e.consultarDadosUsuario('createAccountPayload')
})

Then('o campo {string} deve ser {string}', (campo, valorEsperado) => {
    e2e.validarCampoUsuario(campo, valorEsperado)
})

When('deletar o usuario cadastrado', () => {
  e2e.deletarCadastro('createAccountPayload')
})

When('eu consultar os detalhes do usuário cadastrado', () => {
  e2e.consultarDadosUsuario('createAccountPayload')
})

Then('a resposta deve conter os detalhes do usuário cadastrado', () => {
    e2e.validarDetalhesUsuario('createAccountPayload')
})
