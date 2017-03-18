import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    return (
      <div className="bar">
        <Link className="createCrawl" to="/create">Create a Crawl</Link>
        <Link className="header" to="/">PubCrawler</Link>
        <div className="auth">
          {this.state.loggedIn ? <Link className="element" to="/logout">Logout</Link> :
          <Link className="element" to="/login">Log in</Link>}
          {!this.state.loggedIn && <Link className="element" to="/login">Sign up</Link>}
        </div>
      </div>
    );
  }
}

export default Navigation;
