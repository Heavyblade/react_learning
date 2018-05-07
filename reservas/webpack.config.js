const path = require('path');

const config = {
  mode: 'development',
  entry: [
    './index.js',
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

module.exports = config;