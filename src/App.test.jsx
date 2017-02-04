import Inferno from 'inferno';
import App from './App';

describe('The App component', () => {
  it('Should not crash when it loads', () => {
    const div = document.createElement('div');
    Inferno.render(<App />, div);
  });
});
