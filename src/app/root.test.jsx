import Inferno from 'inferno';
import configureStore from './configureStore';
import Root from './root.jsx';


describe('The Root component', () => {
  it('Should not crash when it loads', () => {
    const div = document.createElement('div');
    const store = configureStore();
    Inferno.render(
      <Root store={store} />,
      div);
  });
});
