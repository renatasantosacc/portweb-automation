# utf-8
# language: pt

Funcionalidade: Login no sistema web

  Cenário: Login bem-sucedido com credenciais válidas
    Dado que acesso o pagina da Automation Exercise
    E acesso a pagina de login
    Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
    Então o usuário sera redirecionado para a página inicial

  Cenário: logout bem-sucedido
    Dado que acesso o pagina da Automation Exercise
    E acesso a pagina de login
    Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
    E o usuário clica no botão de logout
    Então o usuário sera redirecionado para a página de login novamente

  Cenário: Tentativa de login com credenciais inválidas
    Dado que acesso o pagina da Automation Exercise
    E acesso a pagina de login
    Quando efetuar login na pagina "mari@teste.com" "12345678"
    Então o usuário verá uma mensagem de erro "Your email or password is incorrect!"
