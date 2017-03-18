import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

import Navigation from './components/navigation/navigation.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation/>
        <h1>Welcome to crawler</h1>
        <ul className="header">
          <li><Link to="/">Beer</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/stops">Stops</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
