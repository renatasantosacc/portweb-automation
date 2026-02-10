
const elements = {
    loginPageButton: 'a[href="/login"]',
    loginEmail: 'input[data-qa="login-email"]',
    loginPassword: 'input[data-qa="login-password"]',
    loginButton: 'button[data-qa="login-button"]',
    signupName: 'input[data-qa="signup-name"]',
    signupEmail: 'input[data-qa="signup-email"]',
    signupButton: 'button[data-qa="signup-button"]',
    logoutButton: 'a[href="/logout"]',
    deleteAccountButton: 'a[href="/delete_account"]'
  }
  
  class Metodos {
    acessaPagina() {
      cy.visit('https://automationexercise.com')
      cy.title().should('eq', 'Automation Exercise')
    }
  
    visitLoginPage() {
      cy.get(elements.loginPageButton).click()
      cy.url().should('eq', 'https://automationexercise.com/login')
      cy.title().should('eq', 'Automation Exercise - Signup / Login')
      cy.contains('Login to your account').should('be.visible')
    }
  
    preencherDadosLogin(usuario, senha) {
      cy.get(elements.loginEmail).type(usuario)
      cy.get(elements.loginPassword).type(senha)
      cy.get(elements.loginButton).click()
    }
  
    validarRedirecionamentoPaginaInicial() {
      cy.url().should('eq', 'https://automationexercise.com/')
      cy.clearCookies()
      cy.clearLocalStorage()
    }

    clicarBotaoLogout() {
      cy.get(elements.logoutButton).click()
    }

    validarRedirecionamentoPaginalogin() {
      cy.url().should('eq', 'https://automationexercise.com/login')
    }

    preencherDadosCadastro(nome_cadastro, email_cadastro) { 
      cy.get(elements.signupName).type(nome_cadastro)
      cy.get(elements.signupEmail).type(email_cadastro)
      cy.get(elements.signupButton).click()
    }

    excluirContaCadastrada() {
      cy.get(elements.deleteAccountButton).click()
    }

    validarLoginContaCriada() {
      cy.contains('Logged in as').should('be.visible')
    } 

    

  }
  
  export default new Metodos()


