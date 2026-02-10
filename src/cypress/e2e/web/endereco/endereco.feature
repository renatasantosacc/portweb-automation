# utf-8
# language: pt

Funcionalidade: Validar sessão de endereço

    Cenário: Validar sessão de endereço
        Dado que acesso o pagina da Automation Exercise
        E acesso a pagina de login
        Quando informar os primeiros dados cadastrais "Mery Silva" "mery@teste.com"
        E preencher as demais informações cadastrais
        Então o usuario sera direcionado para a pagina de conta criada com sucesso
        E verifico se estou logada na conta criada
        E escolher o produto "Stylish Dress"
        E o produto será adicionado ao carrinho
        E a aplicação será direcionada para o carrinho de compras
        E será feito a validação dos produtos
        E seguirá para o checkout
        E será validado o endereço de entrega e cobrança
        E excluir a conta cadastrada
        E o usuario sera direcionado para a pagina de conta excluida com sucesso

