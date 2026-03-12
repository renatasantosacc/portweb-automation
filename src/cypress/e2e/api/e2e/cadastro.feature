# utf-8
# language: pt

Funcionalidade: Cadastro

  Cenário: Cadastro com sucesso
    Dado que eu tenha os dados válidos para criar uma conta
    E que eu faça uma requisição "POST" para o endpoint "/createAccount" com o payload "createAccountPayload"
    Então o status HTTP da resposta deve ser 200
    E a mensagem deve conter "User created!"

  Cenário: Atualizar cadastro com sucesso
    Dado que eu tenha os dados válidos para criar uma conta
    E que eu faça uma requisição "POST" para o endpoint "/createAccount" com o payload "createAccountPayload"
    Quando que eu faça uma requisição "PUT" para o endpoint "/updateAccount" com o payload "createAccountPayload"
    E que eu consulte os dados do usuário atualizado
    Então o status HTTP da resposta deve ser 200
    E o campo "city" deve ser "Rio de Janeiro"

  Cenário: Excluir cadastro com sucesso
    Dado que eu tenha os dados válidos para criar uma conta
    E que eu faça uma requisição "POST" para o endpoint "/createAccount" com o payload "createAccountPayload"
    Quando deletar o usuario cadastrado
    Então o status HTTP da resposta deve ser 200
    E a mensagem deve conter "Account deleted!"

  Cenário: Obter detalhes do cadastro com sucesso
    Dado que eu tenha os dados válidos para criar uma conta
    E que eu faça uma requisição "POST" para o endpoint "/createAccount" com o payload "createAccountPayload"
    Quando eu consultar os detalhes do usuário cadastrado
    Então o status HTTP da resposta deve ser 200
    E a resposta deve conter os detalhes do usuário cadastrado