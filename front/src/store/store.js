


import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/rootSagas.js';
import rootReducer from '../reducers/rootReducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  export default store;
