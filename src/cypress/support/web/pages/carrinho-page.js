
const elements = {
    verCarrinhoButton:'#cartModal a[href="/view_cart"]',
    carrinhoTable: '#cart_info_table',

    linhaProduto: (id) => `#cart_info_table tbody tr#product-${id}`,
  
    nomeProduto: '.cart_description',
    precoProduto: '.cart_price',
    quantidadeProduto: '.cart_quantity button.disabled',
    totalProduto: '.cart_total',
    deleteProdutoButton: '.cart_delete a',
    checkoutButton: 'a.btn.check_out',
    paginaCarrinho: '#header a[href="/view_cart"]'
}
  
class Metodos {
    validarCarrinho() {
        cy.get(elements.verCarrinhoButton).click()
        cy.url().should('eq', 'https://automationexercise.com/view_cart')
        cy.title().should('eq', 'Automation Exercise - Checkout')
    }

    validarProdutosNoCarrinho({ id, nome, preco, quantidade, total }) {
        cy.get(elements.linhaProduto(id)).within(() => {
      
          cy.get(elements.nomeProduto)
            .should('contain.text', nome)
      
          cy.get(elements.precoProduto)
            .should('contain.text', preco)
      
          cy.get(elements.quantidadeProduto)
            .should('have.text', String(quantidade))
      
          cy.get(elements.totalProduto)
            .should('contain.text', total)
      
        })
      }
     
    prosseguirParaCheckout() {
        cy.get(elements.checkoutButton).click()
        cy.url().should('eq', 'https://automationexercise.com/checkout')
        cy.title().should('eq', 'Automation Exercise - Checkout')
        
    }

    removerProdutoDoCarrinho(nomeProduto) {
        cy.get(elements.carrinhoTable).within(() => {
          cy.contains('tr', nomeProduto).within(() => {
            cy.get(elements.deleteProdutoButton).click()
          })
        })
      
        // Validar que o produto foi removido
        cy.get(elements.carrinhoTable).should('not.contain.text', nomeProduto)
        cy.contains('Cart is empty! Click here to buy products.').should('be.visible')

    }

    acessarPaginaCarrinho() {
        cy.get(elements.paginaCarrinho).click()
        cy.url().should('eq', 'https://automationexercise.com/view_cart')
        cy.title().should('eq', 'Automation Exercise - Checkout')
    } 
    
}   
export default new Metodos();