
module.exports = {
  extends: ['plugin:vue/vue3-essential'],
  env: { 'vue/setup-compiler-macros': true },
  rules: {
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/block-tag-newline': ['warn', { singleline: 'always', multiline: 'always' }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/html-button-has-type': ['warn'],
    'vue/html-comment-content-spacing': ['warn', 'always'],
    'vue/html-comment-indent': ['warn', 2],
    'vue/script-indent': ['warn', 2],
    'vue/html-indent': ['warn', 2],
    'vue/match-component-file-name': ['error'],
    'vue/new-line-between-multi-line-property': ['warn'],
    'vue/next-tick-style': ['warn', 'promise'],
    'vue/no-child-content': ['warn', { additionalDirectives: ['t'] }],
    'vue/no-empty-component-block': ['warn'],
    'vue/no-reserved-component-names': ['error'],
    'vue/no-template-target-blank': ['warn'],
    'vue/no-undef-components': ['error', { ignorePatterns: ['RouterView', 'RouterLink'] }],
    'vue/padding-line-between-blocks': ['warn', 'always'],
    'vue/prefer-import-from-vue': ['warn'],
    'vue/prefer-separate-static-class': ['warn'],
  },
}
