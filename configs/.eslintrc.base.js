
module.exports = {
  rules: {
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2],
    'curly': ['warn', 'multi'],
    'eqeqeq': ['warn'],
    'multiline-comment-style': ['warn', 'starred-block'],
    'no-extra-boolean-cast': ['warn'],
    'brace-style': ['warn'],

    'no-tabs': ['warn'],
    'no-trailing-spaces': ['warn', { ignoreComments: true }],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'array-bracket-spacing': ['warn', 'never'],
    'block-spacing': ['warn', 'always'],
    'computed-property-spacing': ['warn'],
    'func-call-spacing': ['warn', 'never'],
    'generator-star-spacing': ['warn', { 'before': true, 'after': false }],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'object-curly-spacing': ['warn', 'always'],
    'rest-spread-spacing': ['warn', 'never'],
    'space-before-blocks': ['warn', 'always'],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': ['warn', { 'int32Hint': false }],
    'switch-colon-spacing': ['warn', { 'after': true, 'before': false }],
    'template-curly-spacing': ['warn', 'always'],
    'template-tag-spacing': ['warn', 'always'],


    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-dangle': ['warn', 'always-multiline'],

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
  },
}