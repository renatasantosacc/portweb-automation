# utf-8
# language: pt

Funcionalidade: Cadastro no sistema web

  # Cenário: Cadastro bem-sucedido com credenciais válidas
  #   Dado que acesso o pagina da Automation Exercise
  #   E acesso a pagina de login
  #   Quando informar os primeiros dados cadastrais "Mery Silva" "mery@teste.com"
  #   E preencher as demais informações cadastrais
  #   Então o usuario sera direcionado para a pagina de conta criada com sucesso

  Cenário: Exclusão de cadastro
    Dado que acesso o pagina da Automation Exercise
    E acesso a pagina de login
    Quando efetuar login na pagina "mery@teste.com" "senha123"
    E excluir a conta cadastrada
    Então o usuario sera direcionado para a pagina de conta excluida com sucesso


  # Cenário: Validar mensagem de erro ao tentar cadastrar com email já existente
  #   Dado que acesso o pagina da Automation Exercise
  #   E acesso a pagina de login
  #   Quando informar os primeiros dados cadastrais "Renata Teste" "portweb@hotmail.com"
  #   Então o usuário verá a mensagem de erro "Email Address already exist!"
