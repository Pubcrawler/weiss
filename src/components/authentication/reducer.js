import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from './actions';

const token = localStorage.getItem('id_token');
const decodedToken = token ? atob(token.split('.')[1]) : undefined;
const initialState = {
  profile: decodedToken,
  isAuthenticated: decodedToken !== undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        profile: action.profile,
      };
    case LOGIN_FAILED:
      return {
        isAuthenticated: false,
      };
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
      };
    case LOGOUT_FAILED:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
