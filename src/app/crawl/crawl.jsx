import Inferno from 'inferno';
import Component from 'inferno-component';
import CrawlHeader from './crawl-header.jsx';
import CrawlParticipants from './crawl-participants.jsx';

class Crawl extends Component {
  render() {
    return (
      <div className="box">
        <div className="row">
          <CrawlHeader/>
          <CrawlParticipants/>
        </div>
      </div>
    );
  }
}

export default Crawl;
