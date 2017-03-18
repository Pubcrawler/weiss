const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, './src'),
  target: 'web',
  entry: [
    'webpack-hot-middleware/client',
    './index.jsx',
  ],
  output: {
    filename: 'pubcrawler.bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        test: /(\.scss)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: [{
          loader: 'babel-loader',
          options: { presets: ['latest'] },
        }],
      }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.ejs'),
    }),
  ],
};
