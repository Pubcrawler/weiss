import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_BEER, FETCH_BEER_SUCCESS, FETCH_BEER_FAILED } from '../constants/beer';
import api from '../services';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchBeer() {
  try {
    const res = yield call(api.fetchBeer);
    const beer = JSON.parse(res.text);
    yield put({ type: FETCH_BEER_SUCCESS, beer });
  } catch (e) {
    yield put({ type: FETCH_BEER_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(FETCH_BEER, fetchBeer);
}

export default mySaga;
