
import { resolve } from 'path'

if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}

const packagesDir = resolve(__dirname, 'packages')
const packageDir = resolve(packagesDir, process.env.TARGET)
const pkg = require(resolve(packageDir, 'package.json'))

module.exports = {
  input: 'src/.eslintrc.package.js',
  output: {
    file: pkg.main,
    format: 'cjs',
  },
}
