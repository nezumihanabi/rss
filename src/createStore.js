import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { routerMiddleware, connectRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import userReducer from './action/user';
import rootSaga from './saga/root';

const sagaMiddleware = createSagaMiddleware();
export default function createStore(history) {
  const result = reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      userReducer
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history),
      sagaMiddleware
    )
  );
  sagaMiddleware.run(rootSaga);
  return result;
}