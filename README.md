# Marek Vospěl's eslint configs

[![Github license](https://img.shields.io/github/license/marekvospel/eslint-config)](https://github.com/marekvospel/eslint-config)
[![npm](https://img.shields.io/npm/v/eslint-config-vospel)](https://npmjs.com/package/eslint-config-vospel)

These are settings for Eslint I use in my projects.

## Installing
Install `eslint` and `eslint-config-vospel`
```shell
npm i -D eslint eslint-config-vospel
```

Add extends to your `.eslintrc`
```js
module.exports = {
  extends: [
    'vospel',
  ],
}
```

### Typescript config
Install `@typescript-eslint` dependencies.

```shell
npm i -D eslint eslint-config-vospel @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Add following extends to your `.eslintrc`. Extending `vospel` (`vospel/base`) is unnecessary, because the typescript config extends it.
```js
module.exports = {
  extends: [
    'vospel/typescript',
  ],
}
```

### Vue config
Install optional `vue-eslint` dependencies

```shell
npm i -D eslint eslint-config-vospel eslint-plugin-vue
```

Add `vospel/vue` to your `.eslintrc`. 
```js
module.exports = {
  extends: [
    'vospel/vue',
  ],
}
```

You should also extend `vospel` (`vospel/base`) or `vospel/typescript` (which extends `vospel/base`), as this configuration only has rules, that apply for vue.
The `vue` (`vue3`) configuration is using `vue/block-lang` to enforce usage of `typescript`. If your project doesn't use typescript, overwrite it with your own `vue/block-lang` options, or disable it
```js
module.exports = {
  extends: [
    'vospel',
    'vospel/vue',
  ],
  rules: {
    // Simply disable vue/block-lang, if you don't want to use this rule
    'vue/block-lang': ['off'],
    // Change options of vue/block-lang, so it doesn't require typescript
    'vue/block-lang': ['error', {
      script: {
        allowNoLang: true,
        lang: ['js', 'ts'],
      },
    }],
  }
}
```

If you wish to use `vospel/vue` with `vospel/typescript` you'll have to add `@typescript-eslint/parser` as `parser` option to parserOptions.
```js
module.exports = {
  extends: [
    'vospel/typescript',
    'vospel/vue',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
```
Don't forget to install `@typescript-eslint` dependencies (see [Typescript config](#typescript-config))

