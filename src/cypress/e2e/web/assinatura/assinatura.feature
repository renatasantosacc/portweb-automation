# utf-8
# language: pt

Funcionalidade: Assinatura da pagina inicial

    Cenário: Validar assinatura da pagina inicial
      Dado que acesso o pagina da Automation Exercise
      E acesso a pagina de login
      Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
      E escrolar até o final da página
      Então a seção de assinatura deve estar visível
      E insero meu e-mail para assinar a newsletter
      E valido a mensagem de sucesso da assinatura


    Cenário: Verificar assinatura na página do carrinho
      Dado que acesso o pagina da Automation Exercise
      E acesso a pagina de login
      Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
      E acessar a página do carrinho
      Então a seção de assinatura deve estar visível
      E insero meu e-mail para assinar a newsletter
      E valido a mensagem de sucesso da assinatura

    