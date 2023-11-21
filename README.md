# cypress-example

This is an example projects on how to use cypress commands

This project demonstrate

DOM interation commands of cypress like

- cy.get()
- cy.type()
- promise resolve using .then()
- cy.click()

- also custom commnds
//created in support/commands.js
cy.login()

- also demomstrate using the beforeEach hooks to remove duplication of code

# how to run cypress tests

-  clone the project locally
-  run 'npm install' on the root folder to install dependencies
-  run 'npm run cypress:open' command to open cypress test runner
-  run 'npm run cypress:run'command to run all the cypress tests in cli

