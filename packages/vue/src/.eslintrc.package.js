import { rules as eslint } from './rules/eslint'
import { rules as bestPractices } from './rules/best-practices'
import { rules as errors } from './rules/errors'
import { rules as deprecated } from './rules/deprecated'
import { rules as style } from './rules/style'

module.exports = {
  extends: ['@vospel/typescript'],
  plugins: ['vue'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
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
    ...bestPractices,
    ...deprecated,
    ...errors,
    ...style,
    ...{ 'vue/block-lang': ['error', { script: { lang: 'ts' } }] },
  },
}
