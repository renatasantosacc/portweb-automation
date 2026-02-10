# utf-8
# language: pt

Funcionalidade: Carrinho de compras

    Cenário: Seguir com o carrinho ate o checkout
      Dado que acesso o pagina da Automation Exercise
      E acesso a pagina de login
      Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
      E escolher o produto "Stylish Dress"
      Então o produto será adicionado ao carrinho
      E a aplicação será direcionada para o carrinho de compras
      E será feito a validação dos produtos
      E seguirá para o checkout
    
    
    Cenário: Remover produto do carrinho
      Dado que acesso o pagina da Automation Exercise
      E acesso a pagina de login
      Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
      E escolher o produto "Stylish Dress"
      Então o produto será adicionado ao carrinho
      E a aplicação será direcionada para o carrinho de compras
      E o produto "Stylish Dress" será removido do carrinho
      
