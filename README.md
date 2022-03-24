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
    'vospel'
  ]
}
```

### Typescript config
Install optional `@typescript-eslint` dependencies.

```shell
npm i -D eslint eslint-config-vospel @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Add following extends to your `.eslintrc`. Extending `vospel` (`vospel/base`) is unnecessary, because the typescript config extends it.
```js
module.exports = {
  extends: [
    'vospel/typescript'
  ]
}
```

