const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.jsx',
  },
  output: {
    filename: 'realtime.bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['latest', 'react'] },
      }],
    }],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  },
};
