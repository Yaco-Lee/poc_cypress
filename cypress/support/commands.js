Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').click().clear().type(username)
    cy.get('input[name="password"]').click().clear().type(password)
    cy.get('input[class="button"]').click()
})