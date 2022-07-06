
export const rules = {
  // semis
  'semi': ['warn', 'never'],
  'semi-style': ['error', 'last'],

  // quotes
  'quotes': ['warn', 'single'],
  'jsx-quotes': ['warn', 'prefer-double'],
  'quote-props': ['warn', 'consistent-as-needed'],

  // indent / no tabs
  'indent': ['warn', 2],
  'no-tabs': ['error'],
  'no-trailing-spaces': ['warn', { ignoreComments: true, skipBlankLines: true }],
  'no-mixed-spaces-and-tabs': ['warn'],

  // spacing
  'keyword-spacing': ['warn', {
    before: true,
    after: true,
    overrides: {
      return: { after: true },
      throw: { after: true },
      case: { after: true },
    },
  }],
  'arrow-spacing': ['warn', { before: true, after: true }],
  'array-bracket-spacing': ['warn', 'never'],
  'block-spacing': ['warn', 'always'],
  'computed-property-spacing': ['warn'],
  'func-call-spacing': ['warn', 'never'],
  'generator-star-spacing': ['warn', { before: true, after: false }],
  'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
  'object-curly-spacing': ['warn', 'always'],
  'rest-spread-spacing': ['warn', 'never'],
  'space-before-blocks': ['warn', 'always'],
  'space-in-parens': ['warn', 'never'],
  'switch-colon-spacing': ['warn', { after: true, before: false }],
  'template-tag-spacing': ['warn', 'always'],
  'space-infix-ops': ['warn', { int32Hint: false }],
  'spaced-comment': ['warn', 'always', { markers: ['/'] }],
  'space-before-function-paren': ['warn', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],
  'space-unary-ops': ['warn', {
    words: true,
    nonwords: false,
  }],
  'no-whitespace-before-property': ['warn'],
  'semi-spacing': ['error', { before: false, after: true }],

  // newlines
  'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
  'array-bracket-newline': ['warn', 'consistent'],
  'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
  'function-call-argument-newline': ['warn', 'consistent'],
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
  'function-paren-newline': ['warn', 'consistent'],
  'implicit-arrow-linebreak': ['error', 'beside'],
  'no-spaced-func': ['warn'],
  'linebreak-style': ['error', 'unix'],
  'object-curly-newline': ['warn', { multiline: true }],
  'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
  'nonblock-statement-body-position': ['warn', 'beside', { overrides: {} }],

  // commas
  'comma-spacing': ['warn', { before: false, after: true }],
  'comma-dangle': ['warn', 'always-multiline'],
  'comma-style': ['warn', 'last', {
    exceptions: {
      ArrayExpression: false,
      ArrayPattern: false,
      ArrowFunctionExpression: false,
      CallExpression: false,
      FunctionDeclaration: false,
      FunctionExpression: false,
      ImportDeclaration: false,
      ObjectExpression: false,
      ObjectPattern: false,
      VariableDeclaration: false,
      NewExpression: false,
    },
  }],

  // other
  'eol-last': ['warn', 'always'],
  'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
}
