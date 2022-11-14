import vueConfig from '@vospel/eslint-config-vue'
import svelteConfig from '@vospel/eslint-config-svelte'
import jsonConfig from '@vospel/eslint-config-json'

module.exports = {
  extends: [
    '@vospel/vue',
    '@vospel/svelte',
    '@vospel/json',
  ],
  overrides: [
    ...vueConfig.overrides,
    ...svelteConfig.overrides,
    ...jsonConfig.overrides,
  ],
}
