# utf-8
# language: pt

Funcionalidade: Lista de produtos

  Cenário: Escolhendo produto por categoria e adicionando ao carrinho
    Dado que acesso o pagina da Automation Exercise
    E acesso a pagina de login
    Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
    E acessar a lista de produtos
    E escolher a categoria 
    E escolher o tipo de produto
    E escolher o produto "Sleeveless Dress"
    Então o produto será adicionado ao carrinho 

  Cenário: Escolhendo produto por marca e adicionando ao carrinho
    Dado que acesso o pagina da Automation Exercise
    E acesso a pagina de login
    Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
    E escolher a marca "H&M"
    E escolher o produto "Summer White Top"
    Então o produto será adicionado ao carrinho

  Cenário: Adicionando avaliação sobre um produto
    Dado que acesso o pagina da Automation Exercise
    E acesso a pagina de login
    Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
    E escolher o produto "Stylish Dress"
    Então irei adicionar uma avaliação sobre o produto 

  Cenário: adicionando um produto em maior quantidade
    Dado que acesso o pagina da Automation Exercise
    E acesso a pagina de login
    Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
    E escolher o produto "Winter Top"
    E adicionar a quantidade "4" do produto
    Então o produto será adicionado ao carrinho

 Cenário: Pesquisa de produto existente e adicionando ao carrinho
    Dado que acesso o pagina da Automation Exercise
    E acesso a pagina de login
    Quando efetuar login na pagina "mariasilva1@teste.com" "12345678"
    E acessar a lista de produtos
    E pesquisar o produto "Winter Top"
   Então o produto será adicionado ao carrinho com sucesso

 Cenário: Adicionar ao carrinho a partir dos itens recomendados
 
   