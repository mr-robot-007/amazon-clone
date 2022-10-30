module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
  },
  parserOptions: {ecmaVersion: 8, requireConfigFile: false},
};
