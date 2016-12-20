import * as ActionTypes from '../constants/styleActions';
import styleApi from '../api/style';

export function getAllStylesSuccess(styles) {
  return {
    type: ActionTypes.GET_ALL_STYLES_SUCCESS,
    styles
  };
}

export function getAllStylesError(error) {
  return {
    type: ActionTypes.GET_ALL_STYLES_ERROR,
    error
  };
}

export function getStyleSuccess(style) {
  return {
    type: ActionTypes.GET_STYLE_SUCCESS,
    style
  };
}

export function getStyleError(error) {
  return {
    type: ActionTypes.GET_STYLE_ERROR,
    error
  };
}

export function createStyleSuccess(style) {
  return {
    type: ActionTypes.CREATE_STYLE_SUCCESS,
    style
  };
}

export function createStyleError(error) {
  return {
    type: ActionTypes.CREATE_STYLE_ERROR,
    error
  };
}

export function updateStyleSuccess(style) {
  return {
    type: ActionTypes.UPDATE_STYLE_SUCCESS,
    style
  };
}

export function updateStyleError(error) {
  return {
    type: ActionTypes.UPDATE_STYLE_ERROR,
    error
  };
}

export function deleteStyleSuccess(style) {
  return {
    type: ActionTypes.DELETE_STYLE_SUCCESS,
    style
  };
}

export function deleteStyleError(error) {
  return {
    type: ActionTypes.DELETE_STYLE_ERROR,
    error
  };
}

export function loadStyles() {
  return (dispatch) => {
    return styleApi.all()
      .then(styles => dispatch(getAllStylesSuccess(styles)))
      .catch(error => dispatch(getAllStylesError(error)));
  };
}

export function updateStyle(style) {
  return (dispatch) => {
    return styleApi.update(style)
      .then(style => dispatch(updateStyleSuccess(style)))
      .catch(error => dispatch(updateStyleError(error)));
  };
}

export function deleteStyle(style) {
  return (dispatch) => {
    return styleApi.destroy(style)
      .then(_ => dispatch(deleteStyleSuccess(style)))
      .catch(error => dispatch(deleteStyleError(error)));
  };
}

export function getStyle(styleId) {
  return (dispatch) => {
    return styleApi.get(sstylesd)
      .then(style => dispatch(getStyleSuccess(style)))
      .catch(error => dispatch(getStyleError(error)));
  };
}

export function addStyle(style) {
  return (dispatch) => {
    return styleApi.add(style)
      .then(style => dispatch(createStyleSuccess(style)))
      .catch(error => dispatch(createStyleError(error)));
  };
}
