import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { SIGN_UP } from './actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      email: undefined,
      password: undefined,
    };
  }

  render() {
    const signup = () => {
      this.context.store.dispatch({
        type: SIGN_UP,
      });
    };

    const setUsername = (e) => {
      this.setState({ username: e.target.value });
    };

    const setEmail = (e) => {
      this.setState({ email: e.target.value });
    };

    const setPassword = (e) => {
      this.setState({ password: e.target.value });
    };

    return (
      <div className="authentication">
        <div className="form">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" placeholder="Username" onChange={setUsername}/>
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="mail icon"></i>
              <input type="email" placeholder="Email" onChange={setEmail}/>
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" placeholder="Password" onChange={setPassword}/>
            </div>
          </div>
          <div className="ui green basic button" onClick={signup}>
               Register
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Signup);
