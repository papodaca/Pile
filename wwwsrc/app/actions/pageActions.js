import * as ActionTypes from '../constants/pageActions';
import pageApi from '../api/page';

export function getAllPagesSuccess(pages) {
  return {
    type: ActionTypes.GET_ALL_PAGES_SUCCESS,
    pages
  };
}

export function getAllPagesError(error) {
  return {
    type: ActionTypes.GET_ALL_PAGES_ERROR,
    error
  };
}

export function getPageSuccess(page) {
  return {
    type: ActionTypes.GET_PAEG_SUCCESS,
    page
  };
}

export function getPageError(error) {
  return {
    type: ActionTypes.GET_PAEG_ERROR,
    error
  };
}

export function createPageSuccess(page) {
  return {
    type: ActionTypes.CREATE_PAEG_SUCCESS,
    page
  };
}

export function createPageError(error) {
  return {
    type: ActionTypes.CREATE_PAEG_ERROR,
    error
  };
}

export function updatePageSuccess(page) {
  return {
    type: ActionTypes.UPDATE_PAEG_SUCCESS,
    page
  };
}

export function updatePageError(error) {
  return {
    type: ActionTypes.UPDATE_PAEG_ERROR,
    error
  };
}

export function deletePageSuccess(page) {
  return {
    type: ActionTypes.DELETE_PAEG_SUCCESS,
    page
  };
}

export function deletePageError(error) {
  return {
    type: ActionTypes.DELETE_PAEG_ERROR,
    error
  };
}

export function loadPages() {
  return (dispatch) => {
    return pageApi.all()
      .then(pages => dispatch(getAllPagesSuccess(pages)))
      .catch(error => dispatch(getAllPagesError(error)));
  };
}

export function updatePage(page) {
  return (dispatch) => {
    return pageApi.update(page)
      .then(page => dispatch(updatePageSuccess(page)))
      .catch(error => dispatch(updatePageError(error)));
  };
}

export function deletePage(page) {
  return (dispatch) => {
    return pageApi.destroy(page)
      .then(_ => dispatch(deletePageSuccess(page)))
      .catch(error => dispatch(deletePageError(error)));
  };
}

export function getPage(pageId) {
  return (dispatch) => {
    return pageApi.get(pageId)
      .then(page => dispatch(getPageSuccess(page)))
      .catch(error => dispatch(getPageError(error)));
  };
}

export function addPage(page) {
  return (dispatch) => {
    return pageApi.add(page)
      .then(page => dispatch(createPageSuccess(page)))
      .catch(error => dispatch(createPageError(error)));
  };
}
