
   const elements = {
    registerPageButton: 'a[href="/login"]',
    signupName: 'input[data-qa="signup-name"]',
    signupEmail: 'input[data-qa="signup-email"]',
    signupButton: 'button[data-qa="signup-button"]',
    titleGender: 'input[id=id_gender1]',
    signupPassword: 'input[data-qa="password"]',
    signupDays: 'select[data-qa="days"]',
    signupMonths: 'select[data-qa="months"]',
    signupYears: 'select[data-qa="years"]',
    newsletterCheckbox: 'input[id="newsletter"]',
    offersCheckbox: 'input[id="optin"]',
    firstName: 'input[data-qa="first_name"]',
    lastName: 'input[data-qa="last_name"]',
    company: 'input[data-qa="company"]',
    address1: 'input[data-qa="address"]',
    address2: 'input[data-qa="address2"]',
    country: 'select[data-qa="country"]',
    state: 'input[data-qa="state"]',
    city: 'input[data-qa="city"]',
    zipcode: 'input[data-qa="zipcode"]',
    mobileNumber: 'input[data-qa="mobile_number"]',
    createAccountButton: 'button[data-qa="create-account"]',
    continueButton: 'a[data-qa="continue-button"]'

   }

   class Metodos {
    
        preencherFormularioCadastro() {
            cy.get(elements.titleGender).check()
            cy.get(elements.signupPassword).type('senha123')
            cy.get(elements.signupDays).select('10')
            cy.get(elements.signupMonths).select('May')
            cy.get(elements.signupYears).select('1990')
            cy.get(elements.newsletterCheckbox).check()
            cy.get(elements.offersCheckbox).check()
            cy.get(elements.firstName).type('NomeTeste')
            cy.get(elements.lastName).type('SobrenomeTeste')
            cy.get(elements.company).type('Portweb')
            cy.get(elements.address1).type('Rua Jucelino, 123')
            cy.get(elements.address2).type('Apto 45')
            cy.get(elements.country).select('Canada')
            cy.get(elements.state).type('VANLEER')
            cy.get(elements.city).type('Tennessee')
            cy.get(elements.zipcode).type('37181')
            cy.get(elements.mobileNumber).type('8199298299833')
            cy.get(elements.createAccountButton).click()
        }   

        validarContaCriadaComSucesso() {
        cy.url().should('eq', 'https://automationexercise.com/account_created')
        cy.contains('Account Created!').should('be.visible')
        cy.get(elements.continueButton).click()
        }

        validarContaExcluidaComSucesso() {
        cy.url().should('eq', 'https://automationexercise.com/delete_account')
        cy.contains('Account Deleted!').should('be.visible')
        cy.get(elements.continueButton).click()
        }

    }
    export default new Metodos()