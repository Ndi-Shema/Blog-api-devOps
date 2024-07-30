// eslint.config.js
const { compatConfig } = require('eslint-config-compat');

module.exports = compatConfig({
  extends: 'your-shareable-config',
  rules: {
    // Your rules here
  },
});
