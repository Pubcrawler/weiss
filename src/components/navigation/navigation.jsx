import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';
import { connect } from 'inferno-redux';
import { LOGOUT } from '../authentication/actions';

class Navigation extends Component {
  render() {
    const logout = () => {
      this.context.store.dispatch({
        type: LOGOUT,
      });
    };

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
            {this.props.isAuthenticated ? <Link className="element" onClick={logout} to="/logout">Logout</Link> :
            <Link className="element" to="/login">Log in</Link>}
            {!this.props.isAuthenticated && <Link className="element" to="/signup">Sign up</Link>}
          </div>
        </div>
      </nav>
    );
  }
}


const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(
    mapStateToProps,
)(Navigation);
