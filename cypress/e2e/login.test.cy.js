/// <reference types= "cypress" />

describe('login', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    })

    it('successful login', () => {      
        cy.login('test123@test12.com', 'test@1234')
        cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, test test!')
    })
})