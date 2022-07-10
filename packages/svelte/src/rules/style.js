
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
}
