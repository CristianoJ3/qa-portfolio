const { defineConfig } = require("cypress");

module.exports = defineConfig({

  downloadsFolder: 'cypress/downloads',
  defaultBrowser: 'chrome',

  e2e: {
      specPattern: "01-SauceDemo/cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
