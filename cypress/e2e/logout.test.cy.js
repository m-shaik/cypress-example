/// <reference types = "cypress" />

describe('log out tests', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.login('test123@test12.com', 'test@1234')
        cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, test test!')
    })

    it.only('logout successfully', () => {
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a')
        .click()

        cy.get('.page-title-wrapper')
        .then(($el) =>{
            expect($el.text()).to.be.contain('You are signed out')
        })
    
    })
})