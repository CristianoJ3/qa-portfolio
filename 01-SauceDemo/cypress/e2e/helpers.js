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
  addToCartBikeLightButton: '[data-test="add-to-cart-sauce-labs-bike-light"]',
  addToCartTShirtButton: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
  addToCartFleeceJacketButton: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
  addToCartOnesieButton: '[data-test="add-to-cart-sauce-labs-onesie"]',
  addToCartAllTheThingsButton: '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
  removeFromCartBackpackButton: '[data-test="remove-sauce-labs-backpack"]',
  removeFromCartBikeLightButton: '[data-test="remove-sauce-labs-bike-light"]',
  removeFromCartTShirtButton: '[data-test="remove-sauce-labs-bolt-t-shirt"]',
  removeFromCartFleeceJacketButton: '[data-test="remove-sauce-labs-fleece-jacket"]',
  removeFromCartOnesieButton: '[data-test="remove-sauce-labs-onesie"]',
  removeFromCartAllTheThingsButton: '[data-test="remove-test.allthethings()-t-shirt-(red)"]',
  shoppingCartBadge: '[data-test="shopping-cart-badge"]',
  inventoryItemName: '.inventory_item_name',
  checkoutButton: '[data-test="checkout"]',
  continueButton: '[data-test="continue"]',
  finishButton: '[data-test="finish"]',
  completeHeader: '[data-test="complete-header"]',
  backToProductsButton: '[data-test="back-to-products"]',
  title: '[data-test="title"]',
  pdfGenerateButton: '[data-test="generate-pdf-order"]',
  sortContainerButton: '[data-test="product-sort-container"]'
}

export const login = (username, password) => {
  cy.visit(standardDomain)
  cy.get(selectors.username).type(username)
  cy.get(selectors.password).type(password)
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
    cy.contains(orderCompleteMessage).should('be.visible')
}

export const addAllProductsToCart = () => {
      cy.get(selectors.addToCartBackpackButton).click()
    cy.get(selectors.addToCartBikeLightButton).click()
    cy.get(selectors.addToCartFleeceJacketButton).click()
    cy.get(selectors.addToCartTShirtButton).click()
    cy.get(selectors.addToCartOnesieButton).click()
    cy.get(selectors.addToCartAllTheThingsButton).click()
}

export const removeAllProductsFromCart = () => {
    cy.get(selectors.removeFromCartBackpackButton).click()
    cy.get(selectors.removeFromCartBikeLightButton).click()
    cy.get(selectors.removeFromCartFleeceJacketButton).click()
    cy.get(selectors.removeFromCartTShirtButton).click()
    cy.get(selectors.removeFromCartOnesieButton).click()
    cy.get(selectors.removeFromCartAllTheThingsButton).click()
}

export const orderProductsByNameAZ = () => {
      cy.get(selectors.sortContainerButton).select('az')
    
    cy.get(selectors.inventoryItemName).then(($items) => {
      const names = [...$items].map((item) => item.innerText)
      const sortedNames = [...names].sort()

      expect(names).to.deep.equal(sortedNames)
    })
  }

export const orderProductsByNameZA = () => {
      cy.get(selectors.sortContainerButton).select('za')
    
    cy.get(selectors.inventoryItemName).then(($items) => {
      const names = [...$items].map((item) => item.innerText)
      const sortedNames = [...names].sort().reverse()

      expect(names).to.deep.equal(sortedNames)
    })
  }