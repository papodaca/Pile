import genericReducer from './genericReducer';
import { CREATE_USER_SUCCESS, GET_ALL_USERS_SUCCESS, GET_USER_SUCCESS, UPDATE_USER_SUCCESS, DELETE_USER_SUCCESS } from '../constants/userActions';
import userApi from '../api/users';

const handleUsers = (state = {}, action) => {
  return Object.assign({}, state, {
    all: [
      ...action.users
    ]
  });
};

const actionHandlers = {
  CREATE_USER_SUCCESS: handleUsers,
  GET_ALL_USERS_SUCCESS: handleUsers,
  GET_USER_SUCCESS: (state = {}, action) => {
    return Object.assign({}, state, {
      user: action.user
    });
  },
  UPDATE_USER_SUCCESS: handleUsers,
  DELETE_USER_SUCCESS: handleUsers
};

const userReducer = genericReducer(actionHandlers, {});

export default userReducer;
