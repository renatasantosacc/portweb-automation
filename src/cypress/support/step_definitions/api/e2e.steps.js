import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import e2e from '../../api/pages/e2e-page'

Given('que eu faça uma requisição {string} para o endpoint {string}', (metodo,endpoint) => {
    e2e.requisicaoEndpoint(metodo,endpoint)
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