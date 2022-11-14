import { style } from './rules/style'
import { errors } from './rules/errors'

module.exports = {
  plugins: ['eslint-plugin-jsonc'],
  extends: ['@vospel/base'],

  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@typescript-eslint/prefer-optional-chain': ['off'],
        '@typescript-eslint/naming-convention': ['off'],
      },
    },
    {
      files: ['*.json'],
      rules: {
        'jsonc/no-comments': ['error'],
        'jsonc/no-infinity': ['error'],
        'jsonc/no-nan': ['error'],
        /* 'jsonc/comma-dangle': ['error', 'never'],*/
        'jsonc/no-floating-decimal': ['error'],
        'jsonc/quote-props': ['error', 'always'],
      },
    },
    {
      files: ['*.jsonc'],
      rules: {
        'jsonc/no-infinity': ['error'],
        'jsonc/no-nan': ['error'],
        'jsonc/no-floating-decimal': ['error'],
        'jsonc/quote-props': ['error', 'always'],
      },
    },
    {
      files: ['*.json5'],
      rules: { 'jsonc/quotes': ['warn', 'single'] },
    },
  ],
  rules: {
    ...style,
    ...errors,
    '@typescript-eslint/comma-dangle': ['off'],
  },
}
