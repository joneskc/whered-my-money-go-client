describe('Whered my Money Go', function () {
    it('.should() - assert that <title> is correct', function () {
        cy.visit("https://whered-my-money-go.firebaseapp.com/?#/");
        cy.get('form > input').type('Keith')
        cy.get('form').click()
        cy.url().should('include', '/bills')
        cy.get('#app > div > .bill').children().should('exist')
    })
})