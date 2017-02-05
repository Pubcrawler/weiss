import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('The App component', () => {
  it('Should not crash when it loads', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
