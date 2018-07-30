describe('Galvanize Dino', function () {
    it('.should() - assert that <title> is correct', function () {
        cy.visit("http://localhost:3000/");
        cy.get('section').eq(0).find('ul li').should('have.length', 4)
        cy.get('form > input').should('be.empty')
        cy.get('form > textarea').should('be.empty')
        cy.get('form > input').eq(0).type('Job Title')
        cy.get('form > input').eq(1).type('Pay')
        cy.get('form > textarea').type('Description')
        cy.get('form').submit()
        cy.get("form > input").should("have.text", "")
        cy.get("form > textarea").should("have.text", "")
        cy.get('#job-listings > li').eq(0).find('h4').should('have.text', 'Job Title')
        cy.get('#job-listings > li').eq(0).find('small').eq(0).should('have.text', 'Pay')
        cy.get('#job-listings > li').eq(0).find('p').should('have.text', 'Description')
        cy.get('#job-listings > li').eq(0).find('small').eq(1).should('have.text', '0 dinos are interested in this job')
    })
})