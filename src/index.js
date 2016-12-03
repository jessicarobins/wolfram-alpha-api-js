'use strict'

if (!global._babelPolyfill) {
  require('babel-polyfill')
}

import wajs from './wajs'

module.exports = wajs
