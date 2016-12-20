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
    path: '../wwwroot/Admin',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, include: path.join(__dirname), loader: 'babel'},
      {test: /(\.css)$/, loader: 'style!css'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=text/html'},
      {test: /\.(woff|woff2)$/, loader: 'url&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
