const { defineConfig } = require("cypress");

module.exports = defineConfig({

  downloadsFolder: 'cypress/downloads',
  defaultBrowser: 'chrome',
  reporter: 'junit',
  reporterOptions: {
    toConsole: true
  },

  e2e: {
      specPattern: [
       "01-SauceDemo/cypress/e2e/**/*.cy.js",
       "02-BugBank/cypress/e2e/**/*.cy.js"
      ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
