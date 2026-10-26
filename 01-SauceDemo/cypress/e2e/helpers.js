export const standardDomain = 'https://www.saucedemo.com/'
export const standardUser = 'standard_user'
export const standardPassword = 'secret_sauce'
export const loginErrorMessage = 'Epic sadface: Username and password do not match any user in this service'
export const orderCompleteMessage = 'Thank you for your order!'

export const selectors = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  burgerMenuButton: '#react-burger-menu-btn',
  logoutButton: '[data-test="logout-sidebar-link"]',
  loginErrorMessage: '[data-test="error"]',
  checkoutFirstName: '[data-test="firstName"]',
  checkoutLastName: '[data-test="lastName"]',
  checkoutPostalCode: '[data-test="postalCode"]',
  addToCartBackpackButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
  addToCartTShirtButton: '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
  shoppingCartBadge: '[data-test="shopping-cart-badge"]',
  checkoutButton: '[data-test="checkout"]',
  continueButton: '[data-test="continue"]',
  finishButton: '[data-test="finish"]',
  completeHeader: '[data-test="complete-header"]',
  backToProductsButton: '[data-test="back-to-products"]',
  title: '[data-test="title"]',
  pdfGenerateButton: '[data-test="generate-pdf-order"]'
}

export const login = (username, password) => {
  cy.visit(standardDomain)
  cy.get(selectors.username).type(username).should('have.value', username)
  cy.get(selectors.password).type(password).should('have.value', password)
  cy.get(selectors.loginButton).click()
}

export const completeCheckout = ()  => {
    cy.get(selectors.shoppingCartBadge).click()
    cy.get(selectors.checkoutButton).click()
    cy.get(selectors.checkoutFirstName).type('Dunha')
    cy.get(selectors.checkoutLastName).type('dos Santos')
    cy.get(selectors.checkoutPostalCode).type('1234567')
    cy.get(selectors.continueButton).click()
    cy.get(selectors.finishButton).click()
    cy.get(selectors.completeHeader).should('contain', orderCompleteMessage)
}

