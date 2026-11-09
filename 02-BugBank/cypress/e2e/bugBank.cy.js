describe('CT-001 - Cadastrar novo usuário com email válido', () =>{
  it('deve realizar o cadastro com sucesso', () => {
    cy.visit("https://bugbank.netlify.app/")
    cy.contains('button', 'Registrar').click()
    cy.get('[name="email"]').last().type('firstTest@example.com')
    cy.get('[name="name"]').type('Maria')
    cy.get('[name="password"]').last().type('Teste@123')
    cy.get('[name="passwordConfirmation"]').type('Teste@123').should('have.value', 'Teste@123')
    cy.get('#toggleAddBalance').click()
    cy.contains('button', 'Cadastrar').click()
    cy.contains(/A conta \d+-\d+ foi criada com sucesso/).should('be.visible')
    })
})

describe('CT-002 - Cadastrar novo usuário com email previamente cadastrado', () =>{
  it('não deve permitir o cadastro com email já existente', () => {
    cy.visit("https://bugbank.netlify.app/")
    cy.contains('button', 'Registrar').click()
    cy.get('[name="email"]').last().type('firstTest@example.com')
    cy.get('[name="name"]').type('Amanda')
    cy.get('[name="password"]').last().type('Abobora@234')
    cy.get('[name="passwordConfirmation"]').type('Abobora@234').should('have.value', 'Abobora@234')
    cy.get('#toggleAddBalance').click()
    cy.contains('button', 'Cadastrar').click()
    cy.contains(/A conta \d+-\d+ foi criada com sucesso/).should('not.exist')
    })
})

describe('CT-003 - Cadastrar novo usuário utilizando senha diferente na confirmação de senha', () =>{
  it('não deve permitir o cadastro com senha diferente na confirmação de senha', () => {
    cy.visit("https://bugbank.netlify.app/")
    cy.contains('button', 'Registrar').click()
    cy.get('[name="email"]').last().type('secondTest@example.com')
    cy.get('[name="name"]').type('Joana')
    cy.get('[name="password"]').last().type('Teste@123')
    cy.get('[name="passwordConfirmation"]').type('Diferente@123')
    cy.get('#toggleAddBalance').click()
    cy.contains('button', 'Cadastrar').click()
    cy.contains('As senhas não são iguais.').should('be.visible')
  })
})

describe('CT-004 - Cadastrar novo usuário utilizando um e-mail em formato inválido', () =>{
  it('não deve permitir o cadastro com email em formato inválido', () => {
    cy.visit("https://bugbank.netlify.app/")
    cy.contains('button', 'Registrar').click()
    cy.get('[name="email"]').last().type('thirdTest@example')
    cy.get('[name="name"]').type('Carlos')
    cy.get('[name="password"]').last().type('Teste@123')
    cy.get('[name="passwordConfirmation"]').type('Teste@123').should('have.value', 'Teste@123')
    cy.get('#toggleAddBalance').click()
    cy.contains('button', 'Cadastrar').click()
    cy.contains('Formato inválido').should('be.visible')
  })
})

describe('CT-005 -Cadastrar novo usuário com campo nome vazio', () =>{
  it('não deve permitir o cadastro com nome vazio', () => {
    cy.visit("https://bugbank.netlify.app/")
    cy.contains('button', 'Registrar').click()
    cy.get('[name="email"]').last().type('fourthTest@example.com')
    cy.get('[name="password"]').last().type('Teste@123')
    cy.get('[name="passwordConfirmation"]').type('Teste@123').should('have.value', 'Teste@123')
    cy.get('#toggleAddBalance').click()
    cy.contains('button', 'Cadastrar').click()
    cy.contains('Nome não pode ser vazio.').should('be.visible')
    })
})
