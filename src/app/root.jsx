import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './app.jsx';
import StopList from '../components/stop-list/stop-list.jsx';
import CrawlList from '../components/crawl/crawl-list.jsx';
import Crawl from '../components/crawl/crawl.jsx';
import Signup from '../components/authentication/signup.jsx';
import Login from '../components/authentication/login.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={ createBrowserHistory() }>
      <Route component={ App }>
        <IndexRoute component={ StopList } />
        <Route path="find" component={ CrawlList } />
        <Route path='/crawl/:id' component={ Crawl } />
        <Route path='/signup' component={ Signup } />
        <Route path='/login' component={ Login } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
