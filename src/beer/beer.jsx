import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { FETCH_BEER } from './actions';

class Beer extends Component {
  render() {
    const beerList = this.props.beerList ?
      this.props.beerList.map((b, i) => <p>{i + 1} - {b}</p>) :
      null;

    return (
      <div className="beer">
        <button className="ui primary button" onClick={this.props.fetchUser}>
          Fetch beer list
        </button>
        {beerList}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loading: state.beer.loading,
  beerList: state.beer.beerList,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => {
    dispatch({
      type: FETCH_BEER,
    });
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Beer);
