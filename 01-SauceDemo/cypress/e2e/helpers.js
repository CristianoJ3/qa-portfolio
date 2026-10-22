export const standardDomain = 'https://www.saucedemo.com/'
export const standardUser = 'standard_user'
export const standardPassword = 'secret_sauce'
export const loginErrorMessage = 'Epic sadface: Username and password do not match any user in this service'

export const selectors = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  burgerMenuButton: '#react-burger-menu-btn',
  logoutButton: '[data-test="logout-sidebar-link"]',
  loginErrorMessage: '[data-test="error"]',
  checkoutFirstName: '[data-test="firstName"]',
  checkoutLastName: '[data-test="lastName"]',
  checkoutPostalCode: '[data-test="postalCode"]'
}

export const login = (username, password) => {
  cy.visit(standardDomain)
  cy.get(selectors.username).type(username).should('have.value', username)
  cy.get(selectors.password).type(password).should('have.value', password)
  cy.get(selectors.loginButton).click()
}

