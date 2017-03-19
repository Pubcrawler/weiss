import { fork } from 'redux-saga/effects';
import stopList from '../components/stop-list/saga';

export default function* rootSaga() {
  yield [
    fork(stopList),
  ];
}
