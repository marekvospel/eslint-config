# Marek Vospěl's eslint configs

[![GitHub version](https://img.shields.io/github/package-json/v/marekvospel/eslint-config)](https://github.com/marekvospel/eslint-config)
[![npm](https://img.shields.io/npm/v/@vospel/eslint-config)](https://npmjs.com/package/@vospel/eslint-config)
[![Github license](https://img.shields.io/github/license/marekvospel/eslint-config)](https://github.com/marekvospel/eslint-config)

These are settings for Eslint I use in my projects.

## Installing
Install `eslint` and `@vospel/eslint-config`
```shell
npm i -D eslint @vospel/eslint-config
# or
pnpm i -D eslint @vospel/eslint-config
# or
yarn add -D eslint @vospel/eslint-config
```

Add extends to your `.eslintrc`
```js
module.exports = {
  extends: [
    '@vospel',
  ],
}
```
