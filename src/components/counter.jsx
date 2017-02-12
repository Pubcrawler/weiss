import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { INCREASE, DECREASE } from '../constants/counter';

class Counter extends Component {
  render() {
    const store = this.context.store;
    const state = store.getState();

    const increase = () => {
      store.dispatch({
        type: INCREASE,
      });
    };
    const decrease = () => {
      store.dispatch({
        type: DECREASE,
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
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.c,
  }
}

export default connect(
    mapStateToProps,
)(Counter);
