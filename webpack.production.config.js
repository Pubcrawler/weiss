const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [{
  context: path.resolve(__dirname, './src'),
  target: 'web',
  entry: [
    './index.jsx',
  ],
  output: {
    filename: 'pubcrawler.bundle.js',
    path: path.resolve(__dirname, './dist/assets/'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /(\.scss)$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['latest'] },
        }],
      }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.ejs'),
    }),
  ],
}, {
  context: path.resolve(__dirname, './server'),
  target: 'node',
  entry: './server.js',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['latest'] },
      }],
    }],
  },
}];
