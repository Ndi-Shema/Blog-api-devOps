// eslint.config.js
const { defineConfig } = require('eslint');

module.exports = defineConfig({
  languageOptions: {
    globals: {
      // Define global variables here if needed
    },
    parserOptions: {
      ecmaVersion: 2021,
    },
  },
  plugins: [
    // List your plugins here
  ],
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': ['error', { 'args': 'none' }],
    'no-console': 'warn',
    'linebreak-style': ['error', 'unix'],
    'camelcase': ['error', { properties: 'always' }],
    'strict': ['error', 'global'],
    'no-magic-numbers': ['warn', { 'ignore': [0, 1] }],
    'consistent-return': 'error',
  },
});