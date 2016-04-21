var path = require('path')
var webpack = require('webpack')
var combineLoaders = require('webpack-combine-loaders')

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: combineLoaders([
          {
            loader: 'react-hot'
          },
          {
            loader: 'babel',
            query: {
              cacheDirectory: true,
              presets: ['es2015', 'react']
            }
          }
        ])
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      }
    ]
  }
}
