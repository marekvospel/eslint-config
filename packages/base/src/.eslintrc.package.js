import { rules as style } from './rules/style'
import { rules as ops } from './rules/ops'
import { rules as errors } from './rules/errors'

module.exports = {
  rules: {
    ...ops,
    ...errors,
    ...style,
    ...{
      'no-debugger': ['warn'],
      'no-unreachable': ['warn'],
      'no-unused-vars': ['warn'],
      'no-constant-condition': ['error'],
      'no-lonely-if': ['warn'],
      'no-array-constructor': ['error'],
      'no-new-object': ['error'],
    },
  },
}
