import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

class CrawlParticipants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [
        { username: 'jonski', status: 'A', userId: 1239 },
        { username: 'hanso', status: 'M', userId: 3214 },
        { username: 'hawk', status: 'D', userId: 9237 },
      ],
    };
  }
  render() {
    const participantsList = this.state.participants ?
      this.state.participants.map(participant =>
        <div className="item">
          <Link to="profile" params={{ userId: participant.userId }}>{ participant.username }</Link>
          <p>{ participant.status }</p>
        </div>,
      ) : null;

    return (
      <div className="col-xs" style="background-color: blue;">
        <h1>Crawl Participants:</h1>
        <div className="ui list">
          { participantsList }
        </div>
      </div>
    );
  }
}

export default CrawlParticipants;
