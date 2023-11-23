import { combineReducers } from 'redux';
import userReducer from './userReducer';
import formReducer from './formReducer'; // Импортиране на новия reducer

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
});

export default rootReducer;
