import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import carrinho from '../../web/pages/carrinho-page'

Then('a aplicação será direcionada para o carrinho de compras', () => {
    carrinho.validarCarrinho()
})

Then('será feito a validação dos produtos', () => {
    carrinho.validarProdutosNoCarrinho({
        id: 4,
        nome: 'Stylish Dress',
        preco: 'Rs. 1500',
        quantidade: 1,
        total: 'Rs. 1500'
    })
})

Then('seguirá para o checkout', () => {
    carrinho.prosseguirParaCheckout()
})

Then('o produto {string} será removido do carrinho', (nomeProduto) => {
    carrinho.removerProdutoDoCarrinho(nomeProduto)
})

When('acessar a página do carrinho', () => {
    carrinho.acessarPaginaCarrinho()
})
