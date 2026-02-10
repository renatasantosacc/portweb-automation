
const elements = {
    categoriaWomen: '.category-products a[href="#Women"]',
    tipoDeProduto: 'a[href="/category_products/1"]',
    marcaProduto: '.brands_products ul',
    campoPesquisa: '#search_product',
    botaoPesquisa: '#submit_search',
    produto: '.product-information',
    nomeProduto: 'h2:contains("Sleeveless Dress")',
    disponibilidadeProduto: 'p:contains("Availability:")',
    condicaoProduto: 'p:contains("Condition:")',
    addToCartButton: 'button:contains("Add to cart")',
    addToCartButtonModal: 'a.add-to-cart',
    AddedToCartModal: '#cartModal',
    nomeAvaliador: '#name',
    emailAvaliador: '#email',
    reviewAvaliador: '#review',
    submitAvaliador: '#button-review',
    quantityProductInput: 'input[id="quantity"]',


    verProdutoButton: (produtoNome) =>
    cy.contains(produtoNome)
    .closest('.product-image-wrapper')
    .contains('View Product')

}

class Metodos {

    acessarListaProdutos() {
        cy.visit('https://automationexercise.com/products')
    }

    escolherCategoria() {
        cy.get(elements.categoriaWomen).click()
    }

    escolherTipoProduto() {
        cy.get(elements.tipoDeProduto).click()
    }

    escolherProduto(produtoNome) {
        elements.verProdutoButton(produtoNome).click()
    }

    adicionarProdutoAoCarrinho() {
        cy.get(elements.addToCartButton).click()
        cy.get(elements.AddedToCartModal).should('be.visible')
      }

    escolherMarca(marcaNome) {
        cy.get(elements.marcaProduto).contains(marcaNome).click()
    }   

    adicionarAvaliacao() {
        cy.get(elements.nomeAvaliador).type('Maria Silva')
        cy.get(elements.emailAvaliador).type('mariasilva1@teste.com')
        cy.get(elements.reviewAvaliador).type('Ótimo produto, qualidade excelente e entrega rápida!')
        cy.get(elements.submitAvaliador).click()
    }

    adicionarQuantidadeProduto(quantidade) {
        cy.get(elements.quantityProductInput).clear().type(quantidade)
    }

    pesquisarProduto(produtoNome) {
        cy.get(elements.campoPesquisa).type(produtoNome)
        cy.get(elements.botaoPesquisa).click()
    }   

    adicionarProdutoAoCarrinhoModal() {
        cy.get(elements.addToCartButtonModal).first().click()
        cy.get(elements.AddedToCartModal).should('be.visible')
    }
}  

export default new Metodos()