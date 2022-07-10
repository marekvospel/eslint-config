import { rules as eslint } from './rules/eslint'
import { rules as errors } from './rules/errors'
import { rules as bestPractices } from './rules/best-practices'
import { rules as style } from './rules/style'

module.exports = {
  extends: ['@vospel/typescript'],
  plugins: ['svelte'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser' },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    ...eslint,
    ...errors,
    ...bestPractices,
    ...style,
  },
}
