const { defineConfig } = require("cypress");

module.exports = defineConfig({

  downloadsFolder: 'cypress/downloads',
  defaultBrowser: 'chrome',
  reporter: 'junit',
  reporterOptions: {
    mochaFile: '01-SauceDemo/results/resultado-testes-[hash].xml',
    toConsole: true
  },

  e2e: {
      specPattern: "01-SauceDemo/cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
