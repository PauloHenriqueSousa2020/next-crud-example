const path = require('path')
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: '@svgr/webpack'
    })
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, './src'), 'node_modules']
    }
    return config
  }
}