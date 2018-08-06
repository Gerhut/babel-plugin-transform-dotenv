/* eslint-env jest */

const pluginTester = require('babel-plugin-tester')

pluginTester({
  plugin: require('.'),
  filename: __filename,
  tests: {
    'transform environment variables': {
      fixture: '__fixtures__/env.babel.js',
      outputFixture: '__fixtures__/env.js'
    },
    'transform dotenv variables': {
      fixture: '__fixtures__/dotenv.babel.js',
      outputFixture: '__fixtures__/dotenv.js'
    }
  }
})
