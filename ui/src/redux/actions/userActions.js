// Типове на действия
export const SET_USER = 'SET_USER';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

// Действие за задаване на начален потребител
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

// Действие за актуализиране на потребителските данни
export const updateUserData = (userData) => {
  return {
    type: UPDATE_USER_DATA,
    payload: userData,
  };
};
