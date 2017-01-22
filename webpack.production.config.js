const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  target: 'web',
  entry: './index.jsx',
  output: {
    filename: 'assets/pubcrawler.bundle.js',
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: '/node_modules/',
      use: [{
        loader: 'babel-loader',
        options: { presets: ['latest', 'react'] },
      }],
    }],
  },
};
