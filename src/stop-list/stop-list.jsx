import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { FETCH_STOPS } from './actions';
import Stop from '../stop/stop.jsx';

class StopList extends Component {
  componentDidMount() {
    this.context.store.dispatch({
      type: FETCH_STOPS,
    });
  }
  render() {
    const stopList = this.props.stops &&
      this.props.stops.map(b => Stop(b));

    return (
      <div className="stop-list">
        {stopList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stops: state.stopList.stops,
});

export default connect(
    mapStateToProps,
)(StopList);
