import vueConfig from '@vospel/eslint-config-vue'
import svelteConfig from '@vospel/eslint-config-svelte'

module.exports = {
  extends: [
    '@vospel/vue',
    '@vospel/svelte',
  ],
  overrides: [
    ...vueConfig.overrides,
    ...svelteConfig.overrides,
  ],
}
