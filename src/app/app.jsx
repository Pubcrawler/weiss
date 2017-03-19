import Inferno from 'inferno';
import Component from 'inferno-component';

import Navigation from '../components/navigation/navigation.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
