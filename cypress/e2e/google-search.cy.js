/// <reference types= "cypress" />

describe('google home page', () => {

    beforeEach(() => {
        // visit goodgle home page
        cy.visit('https://www.google.com/')
        // accept t&Cs
        cy.get('#L2AGLb > .QS5gu').click()
    })

    it('search for wikipedia', () => { 
     cy.get('.gLFyf').type('wikipedia{enter}')
     cy.contains('Wikipedia').click()
    })

    it.only('search for another serch term', () => {
        cy.get('.gLFyf').type('amazon{enter}')
        cy.contains('Amazon').click()
    })
})




