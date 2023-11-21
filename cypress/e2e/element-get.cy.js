/// <reference types = "cypress" />

describe('My orders section', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.login('test123@test12.com', 'test@1234')
        cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, test test!')
    })

    it.only('My orders should be empty', () => {
        
    })
})