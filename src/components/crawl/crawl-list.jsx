import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { FETCH_CRAWLS } from './actions';
import CrawlTeaser from './crawl-teaser.jsx';

class CrawlList extends Component {
  componentDidMount() {
    this.context.store.dispatch({
      type: FETCH_CRAWLS,
    });
  }
  render() {
    const crawls = this.props.crawls &&
      this.props.crawls.map(b => CrawlTeaser(b));

    return (
      <div className="crawls">
        <div className="crawl-list">
          {crawls}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  crawls: state.crawl.crawls,
});

export default connect(
    mapStateToProps,
)(CrawlList);
