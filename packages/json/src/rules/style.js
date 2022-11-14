
export const style = {
  'jsonc/no-escape-sequence-in-identifier': ['warn'],
  'jsonc/no-numeric-separators': ['warn'],
  'jsonc/no-parenthesized': ['warn'],
  'jsonc/no-unicode-codepoint-escapes': ['warn'],
  'jsonc/valid-json-number': ['warn'],
  'jsonc/array-bracket-newline': ['warn',
    {
      multiline: true,
      minItems: 5,
    }],
  'jsonc/array-element-newline': ['warn',
    {
      multiline: true,
      minItems: 5,
    }],
  'jsonc/array-bracket-spacing': ['warn', 'never'],
  /* 'jsonc/comma-dangle': ['warn', 'always'],*/
  'jsonc/comma-style': ['warn', 'last'],
  'jsonc/indent': ['warn', 2],
  'jsonc/key-spacing': ['warn',
    {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
  'jsonc/no-irregular-whitespace': ['warn'],
  'jsonc/no-multi-str': ['warn'],
  'jsonc/no-octal-escape': ['warn'],
  'jsonc/no-octal': ['warn'],
  'jsonc/object-curly-newline': ['warn'],
  'jsonc/object-curly-spacing': ['warn', 'always'],
  'jsonc/object-property-newline': ['warn'],
  'jsonc/quote-props': ['warn', 'consistent-as-needed'],
}
