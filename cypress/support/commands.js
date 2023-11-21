
Cypress.Commands.add('login', (username, pwd) => {
    cy.get("input[name='login[username]']")
    .should('be.visible')
    .type(username)
    .should('have.value', username)

    cy.get("input[name='login[password]']")
    .should('be.visible')
    .type(pwd)
    
    cy.get('.login.primary').click()
})