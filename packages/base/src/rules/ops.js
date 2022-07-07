
export const rules = {
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
  'operator-assignment': ['warn', 'always'],
  'eqeqeq': ['warn'],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'no-multi-assign': ['error'],
  'no-const-assign': ['error'],
  'no-cond-assign': ['error'],
  'no-class-assign': ['error'],
  'no-ex-assign': ['error'],
  'no-func-assign': ['error'],
  'no-import-assign': ['error'],
  'no-self-assign': ['error'],
}
