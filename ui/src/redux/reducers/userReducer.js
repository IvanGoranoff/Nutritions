// reducers/userReducer.js
import { SET_USER, UPDATE_USER_DATA } from '../actions/userActions';

const initialState = {
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default userReducer;
