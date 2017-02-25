import Inferno from 'inferno';
import createHistory from 'history/createHashHistory';
import Root from './components/root.jsx';
import configureStore from './configureStore';

const rootEl = document.getElementById('root');
const store = configureStore();
const history = createHistory();

Inferno.render(
  <Root store={store} history={history} />
  , rootEl,
);


if (module.hot) {
  module.hot.accept();
}
