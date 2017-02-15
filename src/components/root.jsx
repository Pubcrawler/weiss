import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { Router, Route } from 'inferno-router';
import App from './app.jsx';
import Counter from './counter.jsx';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={Counter} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
