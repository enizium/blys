const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app-staging.getblys.com.au',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // testIsolation: false
    
  },
  
  
});
