import { call, takeEvery } from 'redux-saga/effects';
import {
  SIGN_UP,
  LOGIN,
} from './actions';
import api from '../../services';

function* signup(action) {
  try {
    yield call(api.signup, action.username, action.email, action.password);
  } catch (e) {
    console.log(e);
  }
}

function* login(action) {
  try {
    yield call(api.login, action.username, action.password);
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeEvery(SIGN_UP, signup);
  yield takeEvery(LOGIN, login);
}

export default mySaga;
