const { resolve } = require('path');

const root = __dirname;

module.exports = {
  entry: [ 'whatwg-fetch', './client.js' ],
  output: {
    path: resolve(root, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
