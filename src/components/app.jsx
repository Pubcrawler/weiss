import Inferno from 'inferno';
import Component from 'inferno-component';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Welcome to crawler</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
