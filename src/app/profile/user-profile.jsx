import Inferno from 'inferno';
import Component from 'inferno-component';

class UserProfile extends Component {
  render() {
    return (
      <div className="col-xs-12">
        <h1>Profile to { this.props.userId }</h1>
      </div>
    );
  }
}

export default UserProfile;
