import { isUndefined } from 'lodash';
import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';

import { sagaMiddleware } from '../middleware/saga';
import reducers from '../reducers';

export default function configure(initialState = {}) {
  const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
  const createStoreWithMiddlewareAndRedux = createStoreWithMiddleware as any;

  if (!isUndefined((window as any).__REDUX_DEVTOOLS_EXTENSION__) || process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    const createStoreWithMiddlewareWithLogger = applyMiddleware(sagaMiddleware, logger)(createStore);
    const createStoreWithMiddlewareAndReduxLogger = createStoreWithMiddlewareWithLogger as any;

    return createStoreWithMiddlewareAndReduxLogger(reducers, initialState, (window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStoreWithMiddlewareAndRedux(reducers, initialState);
}
