import { call, takeEvery, put } from 'redux-saga/effects';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';
import {
  SIGN_UP,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from './actions';

import api from '../../services';

function* signup(action) {
  try {
    const request = yield call(api.signup, action.username, action.email, action.password);
    const token = request.body[0].token;
    const decodedToken = jwtDecode(token);
    cookie.save('token', request.body[0].token, { path: '/' });
    yield put({ type: LOGIN_SUCCESS, profile: decodedToken });
  } catch (e) {
    console.log(e);
  }
}

function* login(action) {
  try {
    const request = yield call(api.login, action.username, action.password);
    const token = request.body[0].token;
    const decodedToken = jwtDecode(token);
    cookie.save('token', request.body[0].token, { path: '/' });
    yield put({ type: LOGIN_SUCCESS, profile: decodedToken });
  } catch (e) {
    yield put({ type: LOGIN_FAILED, error: 'Login failed' });
  }
}

function* logout() {
  try {
    yield call(api.logout);
    yield put({ type: LOGOUT_SUCCESS });
    cookie.remove('token');
  } catch (e) {
    yield put({ type: LOGOUT_FAILED, error: 'Logout failed' });
  }
}

function* mySaga() {
  yield takeEvery(SIGN_UP, signup);
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
}

export default mySaga;
