const rewireMobX = require('react-app-rewire-mobx')
const rewireStyledComponents = require('react-app-rewire-styled-components')
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint
} = require('react-app-rewire-typescript-babel-preset')

module.exports = {
  webpack: function (config, env) {
    const PROD_URL = 'https://d1ic4altzx8ueg.cloudfront.net/parent-theme/reviews'

    if (process.env.PUBLIC_URL === PROD_URL) {
      config = rewireStyledComponents(config, env, { displayName: false })
    } else {
      config = rewireStyledComponents(config, env)
    }

    config = rewireMobX(config, env)
    config = rewireTypescript(config)
    config = rewireTSLint(config)
    return config
  },
  jest: function (config) {
    return rewireTypescriptJest(config)
  }
}

