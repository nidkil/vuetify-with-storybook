const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@tst', path.resolve(__dirname, 'tests'))
  }
}
