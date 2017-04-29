import express from 'express';
import path from 'path';
import process from 'process';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const port = (process.env.PORT || 8008);
const app = express();


if (process.env.NODE_ENV !== 'production') {
  console.log('Running in development mode with webpack hot reloading middleware.');
  const config = require('../webpack.config.js'); // eslint-disable-line
  const compiler = webpack(config);
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
} else {
  console.log('Running in production mode.');
  const assetsPath = path.join(process.cwd(), 'dist', 'assets');
  app.use('/', express.static(assetsPath));
  app.get('/', (_, res) => {
    res.sendFile(path.join(assetsPath, 'index.html'));
  });
}
app.listen(port);
console.log(`Server running on http://localhost:${port}/`);
