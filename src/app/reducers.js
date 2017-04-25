import { combineReducers } from 'redux';
import stopList from '../components/stop-list/reducer';
import crawl from '../components/crawl/reducer';
import authentication from '../components/authentication/reducer';

export default combineReducers({
  stopList,
  crawl,
  authentication,
});
