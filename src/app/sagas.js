import { fork } from 'redux-saga/effects';
import beer from '../beer/saga';

export default function* rootSaga() {
  yield [
    fork(beer),
  ];
}
