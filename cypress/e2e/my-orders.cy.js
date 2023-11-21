/// <reference types = "cypress" />

describe('My orders section', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.login('test123@test12.com', 'test@1234')
        cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, test test!')
    })

    it.only('My orders should have 1 order', () => {
        //click on my account
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a')
        .click()

        //click on my orders link in the myaccount section
        cy.get('.items > :nth-child(2) > a').as('myoders')
        .click()
        cy.get('.nav.item.current').should('have.text', 'My Orders')
        
        // verify that my orders table has only one order
        cy.get('tbody').find('tr').should('have.length', 1)

    })

    it('side nav should have 10 items', () => {
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a')
        .click()

        cy.get('.nav.items li')
        .should('have.length', 10)
      
    })
})