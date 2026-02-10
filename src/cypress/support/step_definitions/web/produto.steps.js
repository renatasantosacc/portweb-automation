import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import produto from '../../web/pages/produto-page'

When('acessar a lista de produtos', () => {
    produto.acessarListaProdutos()
})

When('escolher a categoria', () => {
    produto.escolherCategoria()
})

When('escolher o tipo de produto', () => {
    produto.escolherTipoProduto()
})

When('escolher o produto {string}', (produtoNome) => {
    produto.escolherProduto(produtoNome)
})

Then('o produto será adicionado ao carrinho', () => {
    produto.adicionarProdutoAoCarrinho()
}) 

When('escolher a marca {string}', (marcaNome) => {
    produto.escolherMarca(marcaNome)
})

Then('irei adicionar uma avaliação sobre o produto', () => {
    produto.adicionarAvaliacao()
})

When('adicionar a quantidade {string} do produto', (quantidade) => {
    produto.adicionarQuantidadeProduto(quantidade)
})

When('pesquisar o produto {string}', (produtoNome) => {
    produto.pesquisarProduto(produtoNome)
})

Then('o produto será adicionado ao carrinho com sucesso', () => {
    produto.adicionarProdutoAoCarrinhoModal()
})