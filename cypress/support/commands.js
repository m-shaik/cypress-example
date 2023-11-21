
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
// Cypress.Commands.add('login', (email, password) => { ... })


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })


// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })


// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })