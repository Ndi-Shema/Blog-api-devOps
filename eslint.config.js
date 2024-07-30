// eslint.config.js
const { defineConfig } = require('eslint');

module.exports = defineConfig({
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // Add any custom rules here
  },
});
