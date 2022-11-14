
const { resolve } = require('path')
const esbuild = require('rollup-plugin-esbuild').default
const nodeResolve = require('@rollup/plugin-node-resolve').default
const commonjs = require('@rollup/plugin-commonjs').default

if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}

const packagesDir = resolve(__dirname, 'packages')
const packageDir = resolve(packagesDir, process.env.TARGET)
const pkg = require(resolve(packageDir, 'package.json'))

const banner = `/*!
 * ${ pkg.name } v${ pkg.version }
 * (c) ${ new Date().getFullYear() } ${ pkg.author }
 */`

module.exports = {
  input: 'src/.eslintrc.package.js',
  plugins: [
    nodeResolve({ browser: false }),
    commonjs(),
    esbuild({ minify: true }),
  ],
  output: {
    file: pkg.main,
    banner,
    format: 'cjs',
  },
}
