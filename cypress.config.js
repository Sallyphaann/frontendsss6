const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Replace with your frontend URL
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', // Ensure this matches your test files
    supportFile: false,
  },
});