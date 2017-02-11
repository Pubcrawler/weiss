import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import App from './App';
import createStore from './store/store';

const rootEl = document.getElementById('root');

const store = createStore();

Inferno.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>
  , rootEl,
);


if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line global-require
    Inferno.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl,
    );
  });
}
