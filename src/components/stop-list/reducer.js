import { FETCH_STOPS_SUCCESS } from './actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_STOPS_SUCCESS:
      return {
        stops: action.stops,
      };
    default:
      return state;
  }
}
