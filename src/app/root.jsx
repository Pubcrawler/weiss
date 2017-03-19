import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { Router, Route, IndexRoute } from 'inferno-router';
import App from './app.jsx';
import StopList from '../components/stop-list/stop-list.jsx';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={ history }>
      <Route component={ App }>
        <IndexRoute component={ StopList }/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
