const cypressGlobals = require('eslint-plugin-cypress/globals');

module.exports = [
  {
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...cypressGlobals
      }
    },
    plugins: {
      cypress: require('eslint-plugin-cypress')
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-async-tests': 'error',
      'cypress/no-force': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always']
    }
  }
];
