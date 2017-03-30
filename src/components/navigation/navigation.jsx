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
      <nav>
        <div className="bar">
          <div className="left">
            <Link className="element" to="/create">Create a Crawl</Link>
            <Link className="element" to="/find">Find</Link>
          </div>
          <div className="center">
            <Link className="header" to="/">PubCrawler</Link>
          </div>
          <div className="right">
            {this.state.loggedIn ? <Link className="element" to="/logout">Logout</Link> :
            <Link className="element" to="/login">Log in</Link>}
            {!this.state.loggedIn && <Link className="element" to="/signup">Sign up</Link>}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
