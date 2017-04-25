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
    const validate = () => {
      if (!this.state.username) {
        this.setState({ validationMessage: 'Invalid username' });
      } else if (!this.state.email) {
        this.setState({ validationMessage: 'Invalid email' });
      } else if (!this.state.password) {
        this.setState({ validationMessage: 'Invalid password' });
      }
    };

    const signup = () => {
      validate();
      if (!this.state.validationMessage) {
        this.context.store.dispatch({
          type: SIGN_UP,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        });
      }
    };

    const setUsername = (e) => {
      this.setState({ username: e.target.value, validationMessage: undefined });
    };

    const setEmail = (e) => {
      this.setState({ email: e.target.value, validationMessage: undefined });
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
              <i className="mail icon"></i>
              <input type="email" placeholder="Email" onKeyUp={setEmail}/>
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" placeholder="Password" onKeyUp={setPassword}/>
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
