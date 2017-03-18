import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_STOPS, FETCH_STOPS_SUCCESS, FETCH_STOPS_FAILED } from './actions';
import api from '../services';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchStops() {
  try {
    const res = yield call(api.fetchStops);
    const stops = JSON.parse(res.text);
    yield put({ type: FETCH_STOPS_SUCCESS, stops });
  } catch (e) {
    yield put({ type: FETCH_STOPS_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(FETCH_STOPS, fetchStops);
}

export default mySaga;
