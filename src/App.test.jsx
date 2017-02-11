import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import App from './App';
import createStore from './store/store';


describe('The App component', () => {
  it('Should not crash when it loads', () => {
    const div = document.createElement('div');
    const store = createStore();
    Inferno.render(
      <Provider store={store}>
        <App />
      </Provider>

      , div);
  });
});
