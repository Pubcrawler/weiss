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
    const login = () => {
      this.context.store.dispatch({
        type: LOGIN,
      });
    };

    const setUsername = (e) => {
      this.setState({ username: e.target.value });
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
              <i className="lock icon"></i>
              <input type="password" placeholder="Password" onChange={setPassword}/>
            </div>
          </div>
          <div className="ui green basic button" onClick={login}>Login</div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
