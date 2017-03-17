import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { Router, Route, IndexRoute } from 'inferno-router';
import App from './app.jsx';
import Beer from '../beer/beer.jsx';
import Counter from '../counter/counter.jsx';
import StopList from '../stop-list/stop-list.jsx';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={ history }>
      <Route component={ App }>
        <IndexRoute component={ Beer }/>
        <Route path="counter" component={ Counter } />
        <Route path="stops" component={ StopList } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
