# utf-8
# language: pt

Funcionalidade: Obter a lista completa de produtos

    Cenário: Obter a lista completa de produtos
        Dado que eu faça uma requisição "GET" para o endpoint "/productsList"
        Então o status HTTP da resposta deve ser 200
        E a resposta deve conter uma lista de produtos
        E cada produto deve ter os atributos obrigatórios

    
    Cenário: Requisição POST para a lista de todos os produtos
        Dado que eu faça uma requisição "POST" para o endpoint "/productsList"
        Então o status HTTP da resposta deve ser 200
        E o responseCode deve ser 405
        E a mensagem deve conter "This request method is not supported." 


    Cenário: Pesquisar produtos
        Dado que eu faça uma requisição "POST" para o endpoint "/searchProduct" com o produto "Top"
        Então o status HTTP da resposta deve ser 200
        E a resposta deve conter uma lista de produtos relacionados à pesquisa "Top"

    Cenário: Requisição POST para busca de produtos sem o parâmetro search_product
        Dado que eu faça uma requisição "POST" para o endpoint "/searchProduct" 
        Então o responseCode deve ser 400
        E a mensagem deve conter "Bad request, search_product parameter is missing in POST request"

    