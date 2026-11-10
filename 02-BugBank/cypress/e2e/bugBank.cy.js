import { 
  standardDomain,
  standardPassword,
  successfulRegistrationMessage,
  invalidEmailFormatMessage,
  passwordMismatchMessage,
  emptyNameFieldMessage,
  selectors
 } from './helpers.js'

describe('CT-001 - Cadastrar novo usuário com email válido', () =>{
  it('deve realizar o cadastro com sucesso', () => {
    cy.visit(standardDomain)
    cy.contains(selectors.registerButton, 'Registrar').click()
    cy.get(selectors.email).last().type('firstTest@example.com')
    cy.get(selectors.name).type('Maria')
    cy.get(selectors.password).last().type(standardPassword)
    cy.get(selectors.passwordConfirmation).type(standardPassword).should('have.value', standardPassword)
    cy.get(selectors.toggleAddBalance).click()
    cy.contains(selectors.registerButton, 'Cadastrar').click()
    cy.contains(successfulRegistrationMessage).should('be.visible')
    })
})

describe('CT-002 - Cadastrar novo usuário com email previamente cadastrado', () =>{
  it('não deve permitir o cadastro com email já existente', () => {
    cy.visit(standardDomain)
    cy.contains(selectors.registerButton, 'Registrar').click()
    cy.get(selectors.email).last().type('firstTest@example.com')
    cy.get(selectors.name).type('Amanda')
    cy.get(selectors.password).last().type('Abobora@234')
    cy.get(selectors.passwordConfirmation).type('Abobora@234').should('have.value', 'Abobora@234')
    cy.get(selectors.toggleAddBalance).click()
    cy.contains(selectors.registerButton, 'Cadastrar').click()
    cy.contains(successfulRegistrationMessage).should('not.exist')
    })
})

describe('CT-003 - Cadastrar novo usuário utilizando senha diferente na confirmação de senha', () =>{
  it('não deve permitir o cadastro com senha diferente na confirmação de senha', () => {
    cy.visit(standardDomain)
    cy.contains(selectors.registerButton, 'Registrar').click()
    cy.get(selectors.email).last().type('secondTest@example.com')
    cy.get(selectors.name).type('Joana')
    cy.get(selectors.password).last().type(standardPassword)
    cy.get(selectors.passwordConfirmation).type('Diferente@123')
    cy.get(selectors.toggleAddBalance).click()
    cy.contains(selectors.registerButton, 'Cadastrar').click()
    cy.contains(passwordMismatchMessage).should('be.visible')
  })
})

describe('CT-004 - Cadastrar novo usuário utilizando um e-mail em formato inválido', () =>{
  it('não deve permitir o cadastro com email em formato inválido', () => {
    cy.visit(standardDomain)
    cy.contains(selectors.registerButton, 'Registrar').click()
    cy.get(selectors.email).last().type('thirdTest@example')
    cy.get(selectors.name).type('Carlos')
    cy.get(selectors.password).last().type(standardPassword)
    cy.get(selectors.passwordConfirmation).type(standardPassword).should('have.value', standardPassword)
    cy.get(selectors.toggleAddBalance).click()
    cy.contains(selectors.registerButton, 'Cadastrar').click()
    cy.contains(invalidEmailFormatMessage).should('be.visible')
  })
})

describe('CT-005 -Cadastrar novo usuário com campo nome vazio', () =>{
  it('não deve permitir o cadastro com nome vazio', () => {
    cy.visit(standardDomain)
    cy.contains(selectors.registerButton, 'Registrar').click()
    cy.get(selectors.email).last().type('fourthTest@example.com')
    cy.get(selectors.password).last().type(standardPassword)
    cy.get(selectors.passwordConfirmation).type(standardPassword).should('have.value', standardPassword)
    cy.get(selectors.toggleAddBalance).click()
    cy.contains(selectors.registerButton, 'Cadastrar').click()
    cy.contains(emptyNameFieldMessage).should('be.visible')
    })
})
