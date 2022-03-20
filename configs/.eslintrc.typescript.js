
module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['vospel/base', 'plugin:@typescript-eslint/eslint-recommended'],
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': ['warn'],
    '@typescript-eslint/array-type': ['warn', { 'array': true }],
    // '@typescript-eslint/await-thenable': ['error'], (requires parserOptions.project)
    '@typescript-eslint/ban-ts-comment': ['error'],
    '@typescript-eslint/ban-types': ['warn'],
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'index-signature'],
  },
}