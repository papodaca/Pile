var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    './app'
  ],
  target: 'web',
  output: {
    path: '../wwwroot/',
    publicPath: '/',
    filename: 'Admin/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, include: path.join(__dirname + '/app'), loader: 'babel'},
      {test: /(\.css)$/, loader: 'style!css?sourceMap=false&limit=10'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=Admin/[hash].[ext]&limit=10000&mimetype=text/html'},
      {test: /\.(woff|woff2)$/, loader: 'url?name=Admin/[hash].[ext]&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=Admin/[hash].[ext]&limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=Admin/[hash].[ext]&limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
