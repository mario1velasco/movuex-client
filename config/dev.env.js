var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
const DEVELOPMENT = 'development'

module.exports = merge(prodEnv, {
  NODE_ENV: `"${DEVELOPMENT}"`,
  SERVER_URL: '"http://localhost:3000"',
  API_URL: '"http://localhost:3000/api"',
  DEVELOPMENT: `"${DEVELOPMENT}"`
})
