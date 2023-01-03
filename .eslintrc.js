module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  plugins: ['prettier'],
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
