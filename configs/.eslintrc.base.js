
module.exports = {
  rules: {
    'semi': ['warn', 'never'],
    'semi-style': ['error', 'last'],
    'quotes': ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-double'],
    'indent': ['warn', 2],
    'eqeqeq': ['warn'],
    'multiline-comment-style': ['warn', 'bare-block'],
    'no-extra-boolean-cast': ['warn'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],
    'quote-props': ['warn', 'consistent-as-needed'],
    'new-parens': ['error', 'always'],

    'no-tabs': ['error'],
    'no-trailing-spaces': ['warn', { ignoreComments: true, skipBlankLines: true }],
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
    'array-bracket-newline': ['warn', 'consistent'],
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
    'space-infix-ops': ['warn', { int32Hint: false }],
    'switch-colon-spacing': ['warn', { after: true, before: false }],
    'template-curly-spacing': ['warn', 'always'],
    'template-tag-spacing': ['warn', 'always'],
    'eol-last': ['warn', 'always'],
    'function-call-argument-newline': ['warn', 'consistent'],
    'func-style': ['warn', 'declaration'],
    'function-paren-newline': ['warn', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'no-mixed-spaces-and-tabs': ['warn'],
    'no-spaced-func': ['warn'],
    'no-whitespace-before-property': ['warn'],
    'nonblock-statement-body-position': ['warn', 'beside', { overrides: {} }],
    'object-curly-newline': ['warn', { multiline: true }],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-unary-ops': ['warn', {
      words: true,
      nonwords: false,
    }],

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

    'spaced-comment': ['warn', 'always'],

    'constructor-super': ['error'],
    'for-direction': ['error'],
    'getter-return': ['error'],
    'no-async-promise-executor': ['error'],
    'no-class-assign': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': ['error'],
    'no-const-assign': ['error'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-class-members': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-duplicate-imports': ['warn'],
    'no-empty-character-class': ['error'],
    'no-empty-pattern': ['error'],
    'no-ex-assign': ['error'],
    'no-fallthrough': ['error'],
    'no-func-assign': ['error'],
    'no-import-assign': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-loss-of-precision': ['error'],
    'no-misleading-character-class': ['error'],
    'no-new-symbol': ['error'],
    'no-obj-calls': ['error'],
    'no-prototype-builtins': ['error'],
    'no-self-assign': ['error'],
    'no-setter-return': ['error'],
    'no-sparse-arrays': ['error'],
    'no-this-before-super': ['error'],
    'no-undef': ['warn'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['warn'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'no-unsafe-optional-chaining': ['error'],
    'no-unused-vars': ['warn'],
    'no-useless-backreference': ['warn'],
    'use-isnan': ['error'],
    'valid-typeof': ['error'],
    'no-multi-assign': ['error'],
    'no-new-object': ['error'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'operator-assignment': ['warn', 'always'],
    'no-array-constructor': ['error'],
    'no-lonely-if': ['warn'],
    'no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    }],
  },
}
