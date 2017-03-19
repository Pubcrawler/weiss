import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { FETCH_CRAWL } from './actions';

class Crawl extends Component {
  componentDidMount() {
    this.context.store.dispatch({
      type: FETCH_CRAWL,
      id: this.props.params.id,
    });
  }

  render() {
    const title = this.props.crawl && this.props.crawl.title;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  crawl: state.crawl.crawl,
});

export default connect(
    mapStateToProps,
)(Crawl);
