var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  REAL_TIME_URL: '"http://localhost:3000"',
  API_URL: '"http://localhost:3000/api"',
})
