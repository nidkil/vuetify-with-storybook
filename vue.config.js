const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@tst', path.resolve(__dirname, 'tests'))
    if (process.env.STORYBOOK && process.env.STORYBOOK.trim() === 'true') {
      console.info('info => Updating webpack using chain-webpack')
      config.module
        .rule('addon-storysource')
        .enforce()
        .pre()
        .test(/\.stories\.jsx?$/)
        .use('@storybook/addon-storysource/loader')
        .loader('@storybook/addon-storysource/loader')
        .options({
          semi: false,
          printWidth: 120,
          singleQuote: true
        })
        .end()
    }
  }
}
