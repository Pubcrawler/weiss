import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import rootReducer from './reducers/';
import sagas from './sagas/index';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(
      createLogger(),
      sagaMiddleware,
    ),
  );
  sagaMiddleware.run(sagas);
  return store;
}
