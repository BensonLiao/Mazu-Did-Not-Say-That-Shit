/* eslint-disable no-param-reassign */
const rewireTypescript = require('react-app-rewire-typescript')

module.exports = function override(config, env) {
  config = rewireTypescript(config, env)
  // Add rules to use loader on specific files
  config.module.rules.push({
    test: /worker\.ts$/,
    use: { loader: 'worker-loader' }
  })
  // Add the line below to avoid: Uncaught ReferenceError: window is not defined
  config.output.globalObject = 'this'
  return config
}
