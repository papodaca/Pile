import * as ActionTypes from '../constants/tagActions';
import tagApi from '../api/tag';

export function getAllTagsSuccess(tags) {
  return {
    type: ActionTypes.GET_ALL_TAGS_SUCCESS,
    tags
  };
}

export function getAllTagsError(error) {
  return {
    type: ActionTypes.GET_ALL_TAGS_ERROR,
    error
  };
}

export function getTagSuccess(tag) {
  return {
    type: ActionTypes.GET_TAG_SUCCESS,
    tag
  };
}

export function getTagError(error) {
  return {
    type: ActionTypes.GET_TAG_ERROR,
    error
  };
}

export function createTagSuccess(tag) {
  return {
    type: ActionTypes.CREATE_TAG_SUCCESS,
    tag
  };
}

export function createTagError(error) {
  return {
    type: ActionTypes.CREATE_TAG_ERROR,
    error
  };
}

export function updateTagSuccess(tag) {
  return {
    type: ActionTypes.UPDATE_TAG_SUCCESS,
    tag
  };
}

export function updateTagError(error) {
  return {
    type: ActionTypes.UPDATE_TAG_ERROR,
    error
  };
}

export function deleteTagSuccess(tag) {
  return {
    type: ActionTypes.DELETE_TAG_SUCCESS,
    tag
  };
}

export function deleteTagError(error) {
  return {
    type: ActionTypes.DELETE_TAG_ERROR,
    error
  };
}

export function loadTags() {
  return (dispatch) => {
    return tagApi.all()
      .then(tags => dispatch(getAllTagsSuccess(tags)))
      .catch(error => dispatch(getAllTagsError(error)));
  };
}

export function updateTag(tag) {
  return (dispatch) => {
    return tagApi.update(tag)
      .then(tag => dispatch(updateTagSuccess(tag)))
      .catch(error => dispatch(updateTagError(error)));
  };
}

export function deleteTag(tag) {
  return (dispatch) => {
    return tagApi.destroy(tag)
      .then(_ => dispatch(deleteTagSuccess(tag)))
      .catch(error => dispatch(deleteTagError(error)));
  };
}

export function getTag(tagId) {
  return (dispatch) => {
    return tagApi.get(sTagsd)
      .then(tag => dispatch(getTagSuccess(tag)))
      .catch(error => dispatch(getTagError(error)));
  };
}

export function addTag(tag) {
  return (dispatch) => {
    return tagApi.add(tag)
      .then(tag => dispatch(createTagSuccess(tag)))
      .catch(error => dispatch(createTagError(error)));
  };
}
