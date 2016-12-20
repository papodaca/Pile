import * as ActionTypes from '../constants/postActions';
import postApi from '../api/post';

export function getAllPostsSuccess(posts) {
  return {
    type: ActionTypes.GET_ALL_POSTS_SUCCESS,
    posts
  };
}

export function getAllPostsError(error) {
  return {
    type: ActionTypes.GET_ALL_POSTS_ERROR,
    error
  };
}

export function getPostSuccess(post) {
  return {
    type: ActionTypes.GET_POST_SUCCESS,
    post
  };
}

export function getPostError(error) {
  return {
    type: ActionTypes.GET_POST_ERROR,
    error
  };
}

export function createPostSuccess(post) {
  return {
    type: ActionTypes.CREATE_POST_SUCCESS,
    post
  };
}

export function createPostError(error) {
  return {
    type: ActionTypes.CREATE_POST_ERROR,
    error
  };
}

export function updatePostSuccess(post) {
  return {
    type: ActionTypes.UPDATE_POST_SUCCESS,
    post
  };
}

export function updatePostError(error) {
  return {
    type: ActionTypes.UPDATE_POST_ERROR,
    error
  };
}

export function deletePostSuccess(post) {
  return {
    type: ActionTypes.DELETE_POST_SUCCESS,
    post
  };
}

export function deletePostError(error) {
  return {
    type: ActionTypes.DELETE_POST_ERROR,
    error
  };
}

export function loadPosts() {
  return (dispatch) => {
    return postApi.all()
      .then(posts => dispatch(getAllPostsSuccess(posts)))
      .catch(error => dispatch(getAllPostsError(error)));
  };
}

export function updatePost(post) {
  return (dispatch) => {
    return postApi.update(post)
      .then(post => dispatch(updatePostSuccess(post)))
      .catch(error => dispatch(updatePostError(error)));
  };
}

export function deletePost(post) {
  return (dispatch) => {
    return postApi.destroy(post)
      .then(_ => dispatch(deletePostSuccess(post)))
      .catch(error => dispatch(deletePostError(error)));
  };
}

export function getPost(postId) {
  return (dispatch) => {
    return postApi.get(postId)
      .then(post => dispatch(getPostSuccess(post)))
      .catch(error => dispatch(getPostError(error)));
  };
}

export function addPost(post) {
  return (dispatch) => {
    return postApi.add(post)
      .then(post => dispatch(createPostSuccess(post)))
      .catch(error => dispatch(createPostError(error)));
  };
}
