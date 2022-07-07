
import { resolve } from 'path'
import esbuild from 'rollup-plugin-esbuild'

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
    esbuild({ minify: true }),
  ],
  output: {
    file: pkg.main,
    banner,
    format: 'cjs',
  },
}
