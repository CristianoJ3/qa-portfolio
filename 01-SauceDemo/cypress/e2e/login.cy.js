const selectors = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]'
}

describe('Login Successful', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(selectors.username).type('standard_user').should('have.value', 'standard_user')
    cy.get(selectors.password).type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get(selectors.loginButton).click()
    cy.url().should('include', '/inventory.html')
  })
})

describe('Logout Successful', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(selectors.username).type('standard_user').should('have.value', 'standard_user')
    cy.get(selectors.password).type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get(selectors.loginButton).click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})

describe('Order Completed', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(selectors.username).type('standard_user').should('have.value', 'standard_user')
    cy.get(selectors.password).type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get(selectors.loginButton).click()
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
    cy.visit('https://www.saucedemo.com/')
    cy.get(selectors.username).type('abobora').should('not.have.value', 'standard_user')
    cy.get(selectors.password).type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get(selectors.loginButton).click()
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })
})

describe('Login Failure - incorrect password', () =>{
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(selectors.username).type('standard_user').should('have.value', 'standard_user')
    cy.get(selectors.password).type('abobora').invoke('val').should('not.equal', 'secret_sauce')
    cy.get(selectors.loginButton).click()
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })
})

