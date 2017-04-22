import Inferno from 'inferno';
import createHistory from 'history/createHashHistory';
import 'inferno-devtools';
import Root from './app/root.jsx';
import configureStore from './app/configureStore';
import './app/styles';

const rootEl = document.getElementById('root');
const store = configureStore();
const history = createHistory();

if (module.hot) {
  require('inferno-devtools'); // eslint-disable-line global-require
}

Inferno.render(
  <Root store={store} history={history} />
  , rootEl,
);


if (module.hot) {
  module.hot.accept();
}
