import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { Router, Route, IndexRoute } from 'inferno-router';
import App from './app.jsx';
import Beer from './beer.jsx';
import Counter from './counter.jsx';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={ history }>
      <Route component={ App }>
        <IndexRoute component={ Beer }/>
        <Route path="counter" component={ Counter } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
