/// <reference types= "cypress" />

describe('login', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    })

    it('successful login', () => {  
        //using the cy.login custom command    
        cy.login('test123@test12.com', 'test@1234')
        cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, test test!')
    })

    it('unsuccessful login - error message', () => {
        cy.login('test123@test.com', 'test@1234')
        cy.get('.message-error > div')
        .should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
})