import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';

class App extends Component {
  render() {
    const store = this.context.store;
    const state = store.getState();

    const increase = () => {
      store.dispatch({
        type: 'INCREASE',
      });
    };
    const decrease = () => {
      store.dispatch({
        type: 'DECREASE',
      });
    };

    return (
      <div>
        <button onClick={increase}>
          Increase!
        </button>
        <button onClick={decrease}>
          Decrease!
        </button>
        <h1>{state.counter.c}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    k: state.counter.c,
  }
}

export default connect(
    mapStateToProps,
)(App);
