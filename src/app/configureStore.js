import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers';
import sagas from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(
      logger,
      sagaMiddleware,
    ),
  );
  sagaMiddleware.run(sagas);
  return store;
}
