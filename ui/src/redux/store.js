import { createStore } from 'redux';
import userReducer from './reducers/userReducer.js'; // Импортирайте вашите reducers

const store = createStore(userReducer);

export default store;
