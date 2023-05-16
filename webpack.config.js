// webpack.config.js
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()]
}
