import { combineReducers } from 'redux';
import counter from './counter';
import beer from './beer';

export default combineReducers({
  counter,
  beer,
});
