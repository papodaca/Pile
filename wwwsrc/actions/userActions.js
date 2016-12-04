import * as ActionTypes from '../constants/userActions';
import userApi from '../api/users';

export function getAllUsersSuccess(users) {
  return {
    type: ActionTypes.GET_ALL_USERS_SUCCESS,
    users
  };
}

export function getAllUsersError(error) {
  return {
    type: ActionTypes.GET_ALL_USERS_ERROR,
    error
  };
}

export function getUserSuccess(user) {
  return {
    type: ActionTypes.GET_USER_SUCCESS,
    user
  };
}

export function getUserError(error) {
  return {
    type: ActionTypes.GET_USER_ERROR,
    error
  };
}

export function createUserSuccess(user) {
  return {
    type: ActionTypes.CREATE_USER_SUCCESS,
    user
  };
}

export function createUserError(error) {
  return {
    type: ActionTypes.CREATE_USER_ERROR,
    error
  };
}

export function updateUserSuccess(users) {
  return {
    type: ActionTypes.UPDATE_USER_SUCCESS,
    users
  };
}

export function updateUserError(error) {
  return {
    type: ActionTypes.UPDATE_USER_ERROR,
    error
  };
}


export function deleteUserSuccess(users) {
  return {
    type: ActionTypes.DELETE_USER_SUCCESS,
    users
  };
}

export function deleteUserError(error) {
  return {
    type: ActionTypes.DELETE_USER_ERROR,
    error
  };
}

export function loadUsers() {
  return (dispatch) => {
    return userApi.getAllUsers()
      .then(users => dispatch(getAllUsersSuccess(users)))
      .catch(error => dispatch(getAllUsersError(error)));
  };
}

export function updateUser(user) {
  return (dispatch) => {
    return userApi.update(user)
      .then(users => dispatch(getAllUsersSuccess(users)))
      .catch(error => dispatch(getAllUsersError(error)));
  };
}

export function deleteUser(user) {
  return (dispatch) => {
    return userApi.delete(user)
      .then(users => dispatch(deleteUserSuccess(users)))
      .catch(error => dispatch(deleteUserError(error)));
  };
}

export function getUser(userId) {
  return (dispatch) => {
    return userApi.get(userId)
      .then(user => dispatch(getUserSuccess(user)))
      .catch(error => dispatch(getUserError(error)));
  };
}

export function addUser(user) {
  return (dispatch) => {
    return userApi.addUser(user)
      .then(users => dispatch(createUserSuccess(users)))
      .catch(error => dispatch(createUserError(error)));
  };
}
