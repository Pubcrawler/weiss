import { fork } from 'redux-saga/effects';
import beer from '../beer/saga';
import stopList from '../stop-list/saga';

export default function* rootSaga() {
  yield [
    fork(beer),
    fork(stopList),
  ];
}
