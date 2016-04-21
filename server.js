var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')
var webpack = require('webpack')
var path = require('path')

var app = new express();

/////////////////////////////////////////////////////////////////////
// Webpack hot middleware
//
/////////////////////////////////////////////////////////////////////
var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))
/////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////

app.use(express.static(path.resolve(
  __dirname, '.')));

var port = process.env.PORT || process.env.NODE_PORT || 3000

app.listen(port, function(error) {

  if (error) {

    console.error(error)
  } else {

    console.info("==> Server listening on port %s", port)
  }
})