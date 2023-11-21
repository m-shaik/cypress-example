/// <reference types = "cypress" />

describe('reload tests', () => {

    it.only('page reload test',()=>{

        cy.visit('https://magento.softwaretestingboard.com//')
        
        cy.contains("What's New").click()

        cy.title().should('contains', "What's New")

        cy.reload()

        cy.title().should('contains', "What's New")

    })
})