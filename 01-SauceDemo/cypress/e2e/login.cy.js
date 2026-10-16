const standardDomain = 'https://www.saucedemo.com/'
const standardUser = 'standard_user'
const standardPassword = 'secret_sauce'
const loginErrorMessage = 'Epic sadface: Username and password do not match any user in this service'

const selectors = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  burgerMenuButton: '#react-burger-menu-btn',
  logoutButton: '[data-test="logout-sidebar-link"]',
  loginErrorMessage: '[data-test="error"]'
}

const login = (username, password) => {
  cy.visit(standardDomain)
  cy.get(selectors.username).type(username).should('have.value', username)
  cy.get(selectors.password).type(password).should('have.value', password)
  cy.get(selectors.loginButton).click()
}

describe('Login Successful', () => {
  it('passes', () => {
    login(standardUser, standardPassword)
    cy.url().should('include', '/inventory.html')
  })
})

describe('Logout Successful', () => {
  it('passes', () => {
    login(standardUser, standardPassword)
    cy.get(selectors.burgerMenuButton).click()
    cy.get(selectors.logoutButton).click()
    cy.url().should('eq', standardDomain)
  })
})

describe('Order Completed', () => {
  it('passes', () => {
    login(standardUser, standardPassword)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('[data-test="shopping-cart-badge"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Dunha')
    cy.get('[data-test="lastName"]').type('dos Santos')
    cy.get('[data-test="postalCode"]').type('1234567')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    cy.get('[data-test="generate-pdf-order"]').click()
    cy.get('[data-test="back-to-products"]').click()
    cy.get('[data-test="title"]').should('have.text', 'Products')
  })
})

describe('Login Failure - incorrect user', () =>{
  it('passes', () => {
    cy.visit(standardDomain)
    cy.get(selectors.username).type('abobora').should('not.have.value', standardUser)
    cy.get(selectors.password).type(standardPassword).should('have.value', standardPassword)
    cy.get(selectors.loginButton).click()
    cy.get(selectors.loginErrorMessage).should('be.visible').and('contain', loginErrorMessage)
  })
})

describe('Login Failure - incorrect password', () =>{
  it('passes', () => {
    cy.visit(standardDomain)
    cy.get(selectors.username).type(standardUser).should('have.value', standardUser)
    cy.get(selectors.password).type('abobora').invoke('val').should('not.equal', standardPassword)
    cy.get(selectors.loginButton).click()
    cy.get(selectors.loginErrorMessage).should('be.visible').and('contain', loginErrorMessage)
  })
})

