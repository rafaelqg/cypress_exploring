describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

it('Tesing form submission' ,()=>{
   cy.visit('http://127.0.0.1:5500/index.html')
   .get('[name="query"]')
   .type("green")
   .get('#bt_submit')
   .click()
   .wait(1000)
   .location()
   .get('#result')
   .should('be.visible');
})