import { combineReducers } from 'redux';
import counter from '../counter/reducer';
import beer from '../beer/reducer';
import stopList from '../stop-list/reducer';

export default combineReducers({
  counter,
  beer,
  stopList,
});
