import {
  standardDomain,
  standardUser,
  standardPassword,
  loginErrorMessage,
  selectors,
  login
} from './helpers'

describe('Login bem-sucedido', () => {
  it('deve realizar o login com credenciais válidas', () => {
    login(standardUser, standardPassword)
    cy.url().should('include', '/inventory.html')
  })
})

describe('Logout bem-sucedido', () => {
  it('deve realizar o logout com sucesso', () => {
    login(standardUser, standardPassword)
    cy.get(selectors.burgerMenuButton).click()
    cy.get(selectors.logoutButton).click()
    cy.url().should('eq', standardDomain)
  })
})

describe('Pedido bem-sucedido', () => {
  it('deve completar o pedido com sucesso', () => {
    login(standardUser, standardPassword)
    cy.get(selectors.addToCartBackpackButton).click()
    cy.get(selectors.addToCartTShirtButton).click()
    cy.get(selectors.shoppingCartBadge).click()
    cy.get(selectors.checkoutButton).click()
    cy.get(selectors.checkoutFirstName).type('Dunha')
    cy.get(selectors.checkoutLastName).type('dos Santos')
    cy.get(selectors.checkoutPostalCode).type('1234567')
    cy.get(selectors.continueButton).click()
    cy.get(selectors.finishButton).click()
    cy.get(selectors.completeHeader).should('have.text', 'Thank you for your order!')
    cy.get(selectors.pdfGenerateButton).click()
    cy.get(selectors.backToProductsButton).click()
    cy.get(selectors.title).should('have.text', 'Products')
  })
})

describe('Falha no login - usuário inválido', () =>{
  it('deve exibir mensagem de erro ao tentar login com usuário inválido', () => {
    cy.visit(standardDomain)
    cy.get(selectors.username).type('abobora').should('not.have.value', standardUser)
    cy.get(selectors.password).type(standardPassword).should('have.value', standardPassword)
    cy.get(selectors.loginButton).click()
    cy.get(selectors.loginErrorMessage).should('be.visible').and('contain', loginErrorMessage)
  })
})

describe('Falha no login - senha inválida', () =>{
  it('deve exibir mensagem de erro ao tentar login com senha inválida', () => {
    cy.visit(standardDomain)
    cy.get(selectors.username).type(standardUser).should('have.value', standardUser)
    cy.get(selectors.password).type('abobora').should('not.have.value', standardPassword)
    cy.get(selectors.loginButton).click()
    cy.get(selectors.loginErrorMessage).should('be.visible').and('contain', loginErrorMessage)
  })
})

