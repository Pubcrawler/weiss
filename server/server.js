import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.js'; // eslint-disable-line

const port = (process.env.PORT || 8080);
const app = express();
const indexPath = path.join(__dirname, '../public/index.html');
const publicPath = express.static(path.join(__dirname, '../dist/assets'));

app.use('/assets', publicPath);
app.get('/', (_, res) => { res.sendFile(indexPath); });

// setup debugging
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
}
app.listen(port);
console.log(`Server running on http://localhost:${port}/`);
