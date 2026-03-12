
const elements = {
}

    class metodos {

      requisicaoEndpoint(metodo, endpoint, body) {
        const method = metodo.toUpperCase()
      
        const options = {
          method,
          url: `https://automationexercise.com/api${endpoint}`,
          failOnStatusCode: false, // se o status for 400/500 o teste falha, mas queremos validar isso, então desabilitamos essa falha automática
        }
      
          if (body && method !== 'GET') { // só inclui o body se ele for fornecido e se o método não for GET, já que GET normalmente não tem body. 
          options.form = true
          options.body = body
        }
          return cy.request(options).as('apiResponse')
      }

    validateStatusCode(statusCode){
          cy.get('@apiResponse').its('status').should('eq', statusCode) // valida o status da resposta, garantindo que é o esperado (200, 400)
        }

    parseBody(body) {
            
            if (typeof body === 'object') return body // se já for objeto, retorna como está
            if (typeof body === 'string') return JSON.parse(body) // se vier string (json), converte pra objeto
          
            throw new Error(`Body em formato inesperado: ${typeof body}`) // se vier outro tipo (ex.: number, null, etc.), o teste quebra e retorna um erro claro.
          }
          
    validateProductsList() {
            cy.get('@apiResponse').then((response) => {
              const body = this.parseBody(response.body) // garante que tem um objeto, seja ele string ou já como objeto. 
          
              expect(body).to.have.property('products') // garante que o body tem a propriedade products
              expect(body.products).to.be.an('array').and.not.be.empty // garante que 'products' é um array e que não está vazio, ou seja, temos produtos retornados na resposta.
            })
          }
          
    validateProductAttributes() {
            cy.get('@apiResponse').then((response) => {
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
      cy.get('@apiResponse').then((response) => {
        const body = this.parseBody(response.body)

        expect(body).to.have.property('responseCode')
        expect(body.responseCode).to.eq(responseCode) // garante que o responseCode do body é igual ao esperado (200, 400, etc.)
      })
    }

    validateMensagem(mensagemEsperada) {
      cy.get('@apiResponse').then((response) => {
        const body = this.parseBody(response.body)
    
        expect(body).to.have.property('message')
        expect(body.message).to.include(mensagemEsperada) // garante que a mensagem do body inclui o texto esperado.
      })
    }

    validateMarcasList() {
      cy.get('@apiResponse').then((response) => {
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
        form: true, // indica que o body deve ser enviado como form data (application/x-www-form-urlencoded) em vez de JSON, o que é comum em endpoints de busca ou pesquisa.
        body: { search_product: productName }, // envia o nome do produto como parte do corpo da requisição, usando a chave 'search_product' que é esperada pelo endpoint de pesquisa para filtrar os produtos com base nesse termo.
      }).as('apiResponse') 
    }

    validateProdutosPesquisa(productName) {
      cy.get('@apiResponse').then((response) => {
        const body = this.parseBody(response.body)
    
        expect(body).to.have.property('products')
        expect(body.products).to.be.an('array').and.not.be.empty
    
        const productNameLower = productName.toLowerCase()

        body.products.forEach((p) => { // percorre cada produto retornado na resposta e valida se o nome ou a categoria do produto inclui o termo de pesquisa, garantindo que os resultados da pesquisa são relevantes para o termo fornecido.
          const name = (p.name || '').toLowerCase()
          const category = (p.category?.category || '').toLowerCase()
          expect(
            name.includes(productNameLower) || category.includes(productNameLower),
            `Produto "${p.name}" não parece relacionado ao termo "${productName}"`
          ).to.eq(true)
      })
    })

   }

    requisicaoEndpointComLogin(metodo,endpoint,email,password) {
      return cy.request({
        method: metodo,
        url: `https://automationexercise.com/api${endpoint}`,
        failOnStatusCode: false,
        form: true,
        body: { email, password },
      }).as('apiResponse')
    }

  
    criarCadastro() {
     cy.fixture("api/createAccount.payload.json").then((base) => {
      const payload = {
         ...base, // spread: pega todas as chaves e valores do objeto base e os inclui no novo objeto payload
         email: `renat_${Date.now()}@test.com`, // Gera um email único usando o timestamp atual para evitar conflitos de email já existente.
         name: base.name || `${base.firstname} ${base.lastname}` // garantia extra para o campo name, caso o fixture não tenha a chave 'name', ele tenta construir usando 'firstname' e 'lastname'.
        }
        cy.wrap(payload, { log: false }).as('createAccountPayload') // armazena o payload criado como um alias para ser usado posteriormente nos testes, evitando que o email seja exposto nos logs do Cypress.
      })
    }

    consultarDadosUsuario(payloadAlias = 'createAccountPayload') {
      cy.get(`@${payloadAlias}`).then((payload) => { 
        
        const email = encodeURIComponent(payload.email) // encodeURIComponent é usado para garantir que o email seja formatado corretamente para ser incluído na URL, evitando problemas com caracteres especiais.
       
        this.requisicaoEndpoint('GET', `/getUserDetailByEmail?email=${email}`) // faz a requisição para o endpoint de consulta de usuário, passando o email como query parameter para obter os detalhes do usuário criado ou atualizado.
      })
    }

    validarCampoUsuario(campo, valorEsperado) {
      cy.get('@apiResponse').then((response) => {

        const body = this.parseBody(response.body)
    
        expect(body).to.have.property('user')
        expect(body.user).to.have.property(campo)
        expect(body.user[campo]).to.eq(valorEsperado)
      })
    }

    deletarCadastro(payloadAlias = 'createAccountPayload') {
      cy.get(`@${payloadAlias}`).then((payload) => { 
        
        const deleteBody = {
          email: payload.email,
          password: payload.password,
        }
    
        this.requisicaoEndpoint('DELETE', '/deleteAccount', deleteBody)
      })
    }

    validarDetalhesUsuario(payloadAlias = 'createAccountPayload') {
      cy.get(`@${payloadAlias}`).then((payload) => {
        cy.get('@apiResponse').then((response) => {

          const body = this.parseBody(response.body)
    
          expect(body).to.have.property('user')
          expect(body.user.email).to.eq(payload.email)
          expect(body.user.name).to.eq(payload.name)
        })
      })
    }

}

export default new metodos();