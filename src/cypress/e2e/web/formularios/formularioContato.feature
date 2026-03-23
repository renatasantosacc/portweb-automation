# utf-8
# language: pt

Funcionalidade: Formulário de Contato

  Cenário: Validar formulário de contato
    Dado que acesso o pagina da Automation Exercise
    Quando clico no botão de contato
    E preencho o formulário de contato
    E adiciono o arquivo para upload
    Então valido que a mensagem de sucesso de contato foi exibida