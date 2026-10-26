import {
  standardDomain,
  standardUser,
  standardPassword,
  loginErrorMessage,
  selectors,
  login
} from './helpers'

describe('Login Successful', () => {
  it('deve realizar o login com credenciais válidas', () => {
    login(standardUser, standardPassword)
    cy.url().should('include', '/inventory.html')
  })
})

describe('Logout Successful', () => {
  it('deve realizar o logout com sucesso', () => {
    login(standardUser, standardPassword)
    cy.get(selectors.burgerMenuButton).click()
    cy.get(selectors.logoutButton).click()
    cy.url().should('eq', standardDomain)
  })
})

describe('Order Completed', () => {
  it('deve completar o pedido com sucesso', () => {
    login(standardUser, standardPassword)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('[data-test="shopping-cart-badge"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get(selectors.checkoutFirstName).type('Dunha')
    cy.get(selectors.checkoutLastName).type('dos Santos')
    cy.get(selectors.checkoutPostalCode).type('1234567')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    cy.get('[data-test="generate-pdf-order"]').click()
    cy.get('[data-test="back-to-products"]').click()
    cy.get('[data-test="title"]').should('have.text', 'Products')
  })
})

describe('Login Failure - incorrect user', () =>{
  it('deve exibir mensagem de erro ao tentar login com usuário inválido', () => {
    cy.visit(standardDomain)
    cy.get(selectors.username).type('abobora').should('not.have.value', standardUser)
    cy.get(selectors.password).type(standardPassword).should('have.value', standardPassword)
    cy.get(selectors.loginButton).click()
    cy.get(selectors.loginErrorMessage).should('be.visible').and('contain', loginErrorMessage)
  })
})

describe('Login Failure - incorrect password', () =>{
  it('deve exibir mensagem de erro ao tentar login com senha inválida', () => {
    cy.visit(standardDomain)
    cy.get(selectors.username).type(standardUser).should('have.value', standardUser)
    cy.get(selectors.password).type('abobora').invoke('val').should('not.equal', standardPassword)
    cy.get(selectors.loginButton).click()
    cy.get(selectors.loginErrorMessage).should('be.visible').and('contain', loginErrorMessage)
  })
})

