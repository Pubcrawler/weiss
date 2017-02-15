import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { INCREASE, DECREASE } from '../constants/counter';

class Counter extends Component {
  render() {
    const store = this.context.store;

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
        <button className="btn btn-default" onClick={increase}>
          Increase
        </button>
        <button className="btn btn-default" onClick={decrease}>
          Decrease
        </button>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.c,
});

export default connect(
    mapStateToProps,
)(Counter);
