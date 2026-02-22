# utf-8
# language: pt

Funcionalidade: Login

  Cenário: Login com sucesso
    Dado que eu faça uma requisição "POST" para o endpoint "/verifyLogin" com o user "mariasilva1@teste.com" "12345678"
    Então o status HTTP da resposta deve ser 200
    E a mensagem deve conter "User exists!"

  Cenário: Login sem parâmetro de e-mail
    Dado que eu faça uma requisição "POST" para o endpoint "/verifyLogin" com o user "" "12345678"
    Então o responseCode deve ser 404
    E a mensagem deve conter "User not found!"

  Cenário: Deletar login
    Dado que eu faça uma requisição "DELETE" para o endpoint "/verifyLogin" com o user "mariasilva1@teste.com" "12345678"
    Então o responseCode deve ser 405
    E a mensagem deve conter "This request method is not supported"

  Cenário: login com dados inválidos
    Dado que eu faça uma requisição "POST" para o endpoint "/verifyLogin" com o user "mariasilvaERROR@teste.com" "ERROR12345678"
    Então o responseCode deve ser 404
    E a mensagem deve conter "User not found!"

  