import { combineReducers } from 'redux';
import counter from '../counter/reducer';
import beer from '../beer/reducer';

export default combineReducers({
  counter,
  beer,
});
