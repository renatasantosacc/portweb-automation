# utf-8
# language: pt

Funcionalidade: Obter a lista completa de todas as marcas

    Cenário: Obter a lista completa de todas as marcas
        Dado que eu faça uma requisição "GET" para o endpoint "/brandsList"
        Então o status HTTP da resposta deve ser 200
        E a resposta deve conter uma lista de marcas
    
    Cenário: Enviar para a lista de todas as marcas
        Dado que eu faça uma requisição "PUT" para o endpoint "/brandsList"
        Então o status HTTP da resposta deve ser 200
        E o responseCode deve ser 405
        E a mensagem deve conter "This request method is not supported."