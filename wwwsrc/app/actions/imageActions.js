import * as ActionTypes from '../constants/imageActions';
import imageApi from '../api/image';

export function getAllImagesSuccess(images) {
  return {
    type: ActionTypes.GET_ALL_IMAGES_SUCCESS,
    images
  };
}

export function getAllImagesError(error) {
  return {
    type: ActionTypes.GET_ALL_IMAGES_ERROR,
    error
  };
}

export function getImageSuccess(image) {
  return {
    type: ActionTypes.GET_IMAGE_SUCCESS,
    image
  };
}

export function getImageError(error) {
  return {
    type: ActionTypes.GET_IMAGE_ERROR,
    error
  };
}

export function createImageSuccess(image) {
  return {
    type: ActionTypes.CREATE_IMAGE_SUCCESS,
    image
  };
}

export function createImageError(error) {
  return {
    type: ActionTypes.CREATE_IMAGE_ERROR,
    error
  };
}

export function updateImageSuccess(image) {
  return {
    type: ActionTypes.UPDATE_IMAGE_SUCCESS,
    image
  };
}

export function updateImageError(error) {
  return {
    type: ActionTypes.UPDATE_IMAGE_ERROR,
    error
  };
}

export function deleteImageSuccess(image) {
  return {
    type: ActionTypes.DELETE_IMAGE_SUCCESS,
    image
  };
}

export function deleteImageError(error) {
  return {
    type: ActionTypes.DELETE_IMAGE_ERROR,
    error
  };
}

export function loadImages() {
  return (dispatch) => {
    return imageApi.all()
      .then(images => dispatch(getAllImagesSuccess(images)))
      .catch(error => dispatch(getAllImagesError(error)));
  };
}

export function updateImage(image) {
  return (dispatch) => {
    return imageApi.update(image)
      .then(image => dispatch(updateImageSuccess(image)))
      .catch(error => dispatch(updateImageError(error)));
  };
}

export function deleteImage(image) {
  return (dispatch) => {
    return imageApi.destroy(image)
      .then(_ => dispatch(deleteImageSuccess(image)))
      .catch(error => dispatch(deleteImageError(error)));
  };
}

export function getImage(imageId) {
  return (dispatch) => {
    return imageApi.get(imageId)
      .then(image => dispatch(getImageSuccess(image)))
      .catch(error => dispatch(getImageError(error)));
  };
}

export function addImage(image) {
  return (dispatch) => {
    return imageApi.add(image)
      .then(image => dispatch(createImageSuccess(image)))
      .catch(error => dispatch(createImageError(error)));
  };
}
