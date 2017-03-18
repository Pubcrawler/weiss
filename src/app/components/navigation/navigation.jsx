import Inferno from 'inferno';
import Component from 'inferno-component';

const CreateCrawl = <a className="item">Create a Crawl</a>;
const Pubcrawler = <div className="header item">Pubcrawler</div>;
const SearchInput = (
  <div className="item">
      <div className="ui icon input">
        <input type="text" placeholder="Search..."></input>
        <i className="search link icon"></i>
      </div>
  </div>
);

const LogIn = <a className="ui item">Log in</a>;
const Logout = <a className="ui item">Logout</a>;
const SignUp = <a className="ui item">Sign up</a>;


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    const clickHandler = () => {
      console.log('hello world');
    };

    return (
      <div className="ui menu">
        <CreateCrawl/>
        <Pubcrawler/>
        <div className="right menu">
          <SearchInput/>
          <LogIn onClick={clickHandler}/>
          <Logout onClick={clickHandler}/>
          <SignUp/>
        </div>
      </div>
    );
  }
}

export default Navigation;
