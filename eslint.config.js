module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
      },
      globals: {
        // Define your global variables here
      },
    },
    plugins: {
      // Define your plugins here, for example:
      // 'plugin-name': require('eslint-plugin-plugin-name')
    },
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
  }
];
