import Inferno from 'inferno';
import createBrowserHistory from 'history/createBrowserHistory';
import Root from './components/root';
import configureStore from './configureStore';

const rootEl = document.getElementById('root');
const store = configureStore();
const history = createBrowserHistory();

Inferno.render(
  <Root store={store} history={history} />
  , rootEl,
);


if (module.hot) {
  module.hot.accept();
}
