import {
  standardDomain,
  standardUser,
  standardPassword,
  loginErrorMessage,
  selectors,
  login,
  completeCheckout
} from './helpers'

describe('CT-001 - Login bem-sucedido', () => {
  it('deve realizar o login com credenciais válidas', () => {
    login(standardUser, standardPassword)
    cy.url().should('include', '/inventory.html')
  })
})

describe('CT-002 - Logout bem-sucedido', () => {
  it('deve realizar o logout com sucesso', () => {
    login(standardUser, standardPassword)
    cy.get(selectors.burgerMenuButton).click()
    cy.get(selectors.logoutButton).click()
    cy.url().should('eq', standardDomain)
  })
})

describe('CT-003 - Pedido bem-sucedido', () => {
  it('deve completar o pedido com sucesso', () => {
    login(standardUser, standardPassword)
    cy.get(selectors.addToCartBackpackButton).click()
    cy.get(selectors.addToCartTShirtButton).click()
    completeCheckout()
    cy.get(selectors.pdfGenerateButton).click()
    cy.get(selectors.backToProductsButton).click()
    cy.get(selectors.title).should('have.text', 'Products')
  })
})

describe('CT-004 - Falha no login - usuário inválido', () =>{
  it('deve exibir mensagem de erro ao tentar login com usuário inválido', () => {
    cy.visit(standardDomain)
    cy.get(selectors.username).type('abobora').should('not.have.value', standardUser)
    cy.get(selectors.password).type(standardPassword)
    cy.get(selectors.loginButton).click()
    cy.contains(loginErrorMessage).should('be.visible')
  })
})

describe('CT-005 - Falha no login - senha inválida', () =>{
  it('deve exibir mensagem de erro ao tentar login com senha inválida', () => {
    cy.visit(standardDomain)
    cy.get(selectors.username).type(standardUser)
    cy.get(selectors.password).type('abobora').should('not.have.value', standardPassword)
    cy.get(selectors.loginButton).click()
    cy.contains(loginErrorMessage).should('be.visible')
  })
})

describe('CT-006 - Adicionar produtos ao carrinho', () => {
  it('deve adicionar produtos ao carrinho com sucesso', () => {
    login(standardUser, standardPassword)
    cy.get(selectors.addToCartBackpackButton).click()
    cy.get(selectors.addToCartBikeLightButton).click()
    cy.get(selectors.addToCartFleeceJacketButton).click()
    cy.get(selectors.addToCartTShirtButton).click()
    cy.get(selectors.addToCartOnesieButton).click()
    cy.get(selectors.addToCartAllTheThingsButton).click()
    cy.get(selectors.shoppingCartBadge).should('have.text', '6')
    cy.get(selectors.shoppingCartBadge).click()
    cy.get(selectors.cartItemName).should('have.length', 6)
  })
})

