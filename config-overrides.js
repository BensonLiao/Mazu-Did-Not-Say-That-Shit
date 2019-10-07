/* eslint-disable no-param-reassign */
module.exports = function override(config) {
  // Add rules to use loader on specific files
  config.module.rules.push({
    test: /worker\.js$/,
    use: { loader: 'worker-loader' }
  })
  // Add the line below to avoid: Uncaught ReferenceError: window is not defined
  config.output.globalObject = 'this'
  return config
}
