import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Welcome to crawler</h1>
        <ul className="header">
          <li><Link to="/">Beer</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
