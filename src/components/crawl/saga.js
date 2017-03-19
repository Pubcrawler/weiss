import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_CRAWLS,
  FETCH_CRAWLS_SUCCESS,
  FETCH_CRAWLS_FAILED,
  FETCH_CRAWL,
  FETCH_CRAWL_SUCCESS,
  FETCH_CRAWL_FAILED,
} from './actions';
import api from '../../services';

function* fetchCrawls() {
  try {
    const res = yield call(api.fetchCrawls);
    const crawls = JSON.parse(res.text);
    yield put({ type: FETCH_CRAWLS_SUCCESS, crawls });
  } catch (e) {
    yield put({ type: FETCH_CRAWLS_FAILED, message: e.message });
  }
}

function* fetchCrawl(action) {
  try {
    const res = yield call(api.fetchCrawl, action.id);
    const crawl = JSON.parse(res.text);
    yield put({ type: FETCH_CRAWL_SUCCESS, crawl });
  } catch (e) {
    yield put({ type: FETCH_CRAWL_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(FETCH_CRAWLS, fetchCrawls);
  yield takeEvery(FETCH_CRAWL, fetchCrawl);
}

export default mySaga;
