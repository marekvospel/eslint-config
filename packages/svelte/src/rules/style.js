
export const rules = {
  'svelte/first-attribute-linebreak': ['warn', {
    singleline: 'beside',
    multiline: 'below',
  }],
  'svelte/html-quotes': ['warn', { prefer: 'double' }],
  'svelte/indent': ['warn', { indent: 2 }],
  'svelte/max-attributes-per-line': ['warn', {
    singleline: 4,
    multiline: 4,
  }],
  'svelte/mustache-spacing': ['warn', { textExpressions: 'always' }],
  'svelte/prefer-class-directive': ['warn'],
  'svelte/prefer-style-directive': ['warn'],
  'svelte/shorthand-attribute': ['warn'],
  'svelte/shorthand-directive': ['warn'],
  'svelte/spaced-html-comment': ['warn'],
  'svelte/no-spaces-around-equal-signs-in-attribute': ['warn'],
  'svelte/html-closing-bracket-spacing': ['warn'],
  'svelte/no-extra-reactive-curlies': ['warn'],
  'svelte/html-self-closing': ['warn', 'all'],
  'svelte/no-reactive-functions': ['warn'],
  'svelte/no-trailing-spaces': ['warn'],
  /*
   * TODO: use the same sort order as vue eslint plugin
   * 'svelte/sort-attributes': ['warn'],
   */
}
