
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    '@vospel',
  ],
  rules: {
    '@typescript-eslint/no-require-imports': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
  },
}
