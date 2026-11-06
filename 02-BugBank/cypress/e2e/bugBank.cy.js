describe('Cadastrar novo usuário com email válido', () =>{
  it('deve realizar o cadastro com sucesso', () => {
    cy.visit("https://bugbank.netlify.app/")
    cy.get('.ihdmxA').click()
    cy.get('[name="email"]').last().type('test@example.com')
    cy.get('[name="name"]').type('Maria')
    cy.get('[name="password"]').last().type('Teste@123')
    cy.get('[name="passwordConfirmation"]').type('Teste@123').should('have.value', 'Teste@123')
    cy.contains('button', 'Cadastrar').click()
    cy.contains(/A conta \d+-\d+ foi criada com sucesso/).should('be.visible')
    })
})