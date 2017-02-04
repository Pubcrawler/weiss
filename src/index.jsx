import Inferno from 'inferno';
import App from './App';

const rootEl = document.getElementById('root');
Inferno.render(
  <App />,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line global-require
    Inferno.render(
      <NextApp />,
      rootEl,
    );
  });
}
