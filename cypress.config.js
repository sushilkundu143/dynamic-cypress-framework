const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    retries: {
      runMode: 2,
      openMode: 1
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        listFixtureFiles() {
          const fixturesDir = `./cypress/fixtures/${process.env.NODE_PATH}`;
          const data = fs
            .readdirSync(fixturesDir)
            .filter((file) => file.endsWith('.json'));
          return data;
        },
        readFixtureFile(filename) {
          const data = fs.readFileSync(
            `./cypress/fixtures/${process.env.NODE_PATH}/${filename}`,
            'utf8'
          );
          return data;
        }
      });
    },
    testIsolation: false
  }
});
