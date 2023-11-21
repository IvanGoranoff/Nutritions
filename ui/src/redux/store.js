import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer.js'; // Импортирайте вашите reducers тук
import userReducer from './reducers/userReducer.js'; // Импортирайте вашите reducers

// Създаване на logger middleware
const logger = createLogger({
  // Опции за персонализиране на logger
  collapsed: true, // Сгъва логовете в конзолата
  duration: true,  // Показва времетраенето на действията
  diff: true       // Показва разликата между предишното и следващото състояние
});

// Използване на Redux DevTools, ако са налични
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Създаване на store с rootReducer и middleware
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
);

export default store;
