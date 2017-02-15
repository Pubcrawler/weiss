import Inferno from 'inferno';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from '../configureStore';
import Root from './root.jsx';


describe('The Root component', () => {
  it('Should not crash when it loads', () => {
    const div = document.createElement('div');
    const store = configureStore();
    const history = createBrowserHistory();
    Inferno.render(
      <Root store={store} history={history} />,
      div);
  });
});
