import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// Custom step logger middleware
let stepCounter = 0;

const stepLoggerMiddleware = store => next => action => {
  stepCounter++;
  console.log(`Step ${stepCounter}:`, action);

  const result = next(action);

  console.log(`New State after Step ${stepCounter}:`, store.getState());
  return result;
};

const errorHandlingMiddleware = store => next => action => {
  try {
    return next(action);
  } catch (e) {
    console.error('Caught an exception!', e);
    throw e; // re-throw the error
  }
};

// const logger = createLogger({
// });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, stepLoggerMiddleware, errorHandlingMiddleware,)
  )
);

export default store;
