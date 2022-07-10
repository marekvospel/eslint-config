
export const rules = {
  'vue/attribute-hyphenation': ['warn'],
  'vue/component-definition-name-casing': ['warn'],
  'vue/first-attribute-linebreak': ['warn', {
    singleline: 'ignore',
    multiline: 'below',
  }],
  'vue/html-closing-bracket-newline': ['warn', {
    singleline: 'ignore',
    multiline: 'always',
  }],
  'vue/html-closing-bracket-spacing': ['warn', {
    startTag: 'never',
    endTag: 'never',
    selfClosingTag: 'always',
  }],
  'vue/html-indent': ['warn', 2],
  'vue/html-quotes': ['warn'],
  'vue/html-self-closing': ['warn'],
  'vue/max-attributes-per-line': ['warn', {
    singleline: { max: 4 },
    multiline: { max: 4 },
  }],
  'vue/multiline-html-element-content-newline': ['warn', { allowEmptyLines: true }],
  'vue/mustache-interpolation-spacing': ['warn'],
  'vue/no-multi-spaces': ['warn'],
  'vue/no-spaces-around-equal-signs-in-attribute': ['warn'],
  'vue/prop-name-casing': ['warn'],
  'vue/require-prop-types': ['warn'],
  'vue/singleline-html-element-content-newline': ['warn'],
  'vue/v-bind-style': ['warn'],
  'vue/v-on-style': ['warn'],
  'vue/v-slot-style': ['warn'],
  'vue/require-explicit-emits': ['warn'],
  'vue/v-on-event-hyphenation': ['warn'],
  'vue/attributes-order': ['warn'],
  'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
  'vue/component-options-name-casing': ['error', 'PascalCase'],
  'vue/block-tag-newline': ['warn', {
    singleline: 'always',
    multiline: 'always',
  }],
  'vue/custom-event-name-casing': ['error', 'camelCase'],
  'vue/html-comment-content-spacing': ['warn', 'always'],
  'vue/html-comment-indent': ['warn', 2],
  'vue/script-indent': ['warn', 2],
  'vue/match-component-file-name': ['error'],
  'vue/new-line-between-multi-line-property': ['warn'],
  'vue/next-tick-style': ['warn', 'promise'],
  'vue/no-empty-component-block': ['warn'],
  'vue/padding-line-between-blocks': ['warn', 'always'],
}
