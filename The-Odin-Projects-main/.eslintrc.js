module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: { js: true },
  },
  env: { es2021: true, browser: true, node: true, mocha: true },
  extends: "eslint:recommended",
  rules: {},
};
