# utf-8
# language: pt

Funcionalidade: Login

  Cenário: Login com sucesso
    Dado que eu faça uma requisição "POST" para o endpoint "/searchProduct" com o produto "Top"
    Então o status HTTP da resposta deve ser 200
