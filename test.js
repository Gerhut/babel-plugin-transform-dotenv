/* eslint-env jest */

import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  plugin,
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
