# utf-8
# language: pt

Funcionalidade: Formulário de Contato

    Cenário: Validar formulário de contato
      Dado que acesso o pagina da Automation Exercise
      E acesso a pagina de login
      Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
      E preencher o formulário para contato
      Então o formulário deve ser enviado com sucesso

