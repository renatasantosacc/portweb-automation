
const elements = {
}

    class metodos {

    requisicaoEndpoint(metodo,endpoint) {
            return cy.request({
              method: metodo,
              url: `https://automationexercise.com/api${endpoint}`,
              failOnStatusCode: false, // se o status for 400/500 o teste falha, mas queremos validar isso, então desabilitamos essa falha automática
            }).as('productsListResponse')
          }
        
    validateStatusCode(statusCode){
          cy.get('@productsListResponse').its('status').should('eq', statusCode) // valida o status da resposta, garantindo que é o esperado (200, 400)
        }

    parseBody(body) {
            
            if (typeof body === 'object') return body // se já for objeto, retorna como está
            if (typeof body === 'string') return JSON.parse(body) // se vier string (json), converte pra objeto
          
            throw new Error(`Body em formato inesperado: ${typeof body}`) // se vier outro tipo (ex.: number, null, etc.), o teste quebra e retorna um erro claro.
          }
          
    validateProductsList() {
            cy.get('@productsListResponse').then((response) => {
              const body = this.parseBody(response.body) // garante que tem um objeto, seja ele string ou já como objeto. 
          
              expect(body).to.have.property('products') // garante que o body tem a propriedade products
              expect(body.products).to.be.an('array').and.not.be.empty // garante que 'products' é um array e que não está vazio, ou seja, temos produtos retornados na resposta.
            })
          }
          
    validateProductAttributes() {
            cy.get('@productsListResponse').then((response) => {
              const body = this.parseBody(response.body)
          
              expect(body).to.have.property('products')

              const products = body.products 
              // percorre por cada produto, validando a existência das chaves
              products.forEach((p) => {
                expect(p).to.have.property('id')
                expect(p).to.have.property('name')
                expect(p).to.have.property('price')
                expect(p).to.have.property('category')
                expect(p).to.have.property('brand')
              })
            })
    }

    validateResponseCode(responseCode) {
      cy.get('@productsListResponse').then((response) => {
        const body = this.parseBody(response.body)

        expect(body).to.have.property('responseCode')
        expect(body.responseCode).to.eq(responseCode) // garante que o responseCode do body é igual ao esperado (200, 400, etc.)
      })
    }

    validateMensagem(mensagemEsperada) {
      cy.get('@productsListResponse').then((response) => {
        const body = this.parseBody(response.body)
    
        expect(body).to.have.property('message')
        expect(body.message).to.include(mensagemEsperada) // garante que a mensagem do body inclui o texto esperado.
      })
    }

    validateMarcasList() {
      cy.get('@productsListResponse').then((response) => {
        const body = this.parseBody(response.body)
    
        expect(body).to.have.property('brands')
        expect(body.brands).to.be.an('array').and.not.be.empty // garante que 'brands' é um array e que não está vazio, ou seja, temos marcas retornadas na resposta.
      })
    }

    requisicaoEndpointComProduto(metodo, endpoint, productName) {
      return cy.request({
        method: metodo,
        url: `https://automationexercise.com/api${endpoint}`,
        failOnStatusCode: false,
        form: true,
        body: { search_product: productName },
      }).as('productsListResponse') 
    }

    validateProdutosPesquisa(productName) {
      cy.get('@productsListResponse').then((response) => {
        const body = this.parseBody(response.body)
    
        expect(body).to.have.property('products')
        expect(body.products).to.be.an('array').and.not.be.empty
    
        const productNameLower = productName.toLowerCase()

        body.products.forEach((p) => {
          const name = (p.name || '').toLowerCase()
          const category = (p.category?.category || '').toLowerCase()
          expect(
            name.includes(productNameLower) || category.includes(productNameLower),
            `Produto "${p.name}" não parece relacionado ao termo "${productName}"`
          ).to.eq(true)
      })
    })

  }

}
export default new metodos();