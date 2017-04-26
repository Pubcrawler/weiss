import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { LOGIN } from './actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined,
    };
  }

  render() {
    const validate = () => {
      if (!this.state.username) {
        this.setState({ validationMessage: 'Invalid username' });
      } else if (!this.state.password) {
        this.setState({ validationMessage: 'Invalid password' });
      }
    };

    const login = () => {
      validate();
      if (!this.state.validationMessage) {
        this.context.store.dispatch({
          type: LOGIN,
          username: this.state.username,
          password: this.state.password,
        });
      }
    };

    const setUsername = (e) => {
      this.setState({ username: e.target.value, validationMessage: undefined });
    };

    const setPassword = (e) => {
      this.setState({ password: e.target.value, validationMessage: undefined });
    };


    return (
      <div className="authentication">
        <div className="form">
          {this.state.validationMessage &&
            <div className="ui negative message">
              {this.state.validationMessage}
            </div>
          }
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" placeholder="Username" onKeyUp={setUsername}/>
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" placeholder="Password" onKeyUp={setPassword}/>
            </div>
          </div>
          <button className="ui green basic button" onClick={login}>Login</button>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
