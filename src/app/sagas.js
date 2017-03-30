import { fork } from 'redux-saga/effects';
import stopList from '../components/stop-list/saga';
import crawl from '../components/crawl/saga';
import authentication from '../components/authentication/saga';

export default function* rootSaga() {
  yield [
    fork(stopList),
    fork(crawl),
    fork(authentication),
  ];
}
