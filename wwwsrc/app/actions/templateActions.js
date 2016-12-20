import * as ActionTypes from '../constants/templateActions';
import templateApi from '../api/template';

export function getAllTemplatesSuccess(templates) {
  return {
    type: ActionTypes.GET_ALL_TEMPLATE_SUCCESS,
    templates
  };
}

export function getAllTemplatesError(error) {
  return {
    type: ActionTypes.GET_ALL_TEMPLATE_ERROR,
    error
  };
}

export function getTemplateSuccess(template) {
  return {
    type: ActionTypes.GET_TEMPLATE_SUCCESS,
    template
  };
}

export function getTemplateError(error) {
  return {
    type: ActionTypes.GET_TEMPLATE_ERROR,
    error
  };
}

export function createTemplateSuccess(template) {
  return {
    type: ActionTypes.CREATE_TEMPLATE_SUCCESS,
    template
  };
}

export function createTemplateError(error) {
  return {
    type: ActionTypes.CREATE_TEMPLATE_ERROR,
    error
  };
}

export function updateTemplateSuccess(template) {
  return {
    type: ActionTypes.UPDATE_TEMPLATE_SUCCESS,
    template
  };
}

export function updateTemplateError(error) {
  return {
    type: ActionTypes.UPDATE_TEMPLATE_ERROR,
    error
  };
}


export function deleteTemplateSuccess(template) {
  return {
    type: ActionTypes.DELETE_TEMPLATE_SUCCESS,
    template
  };
}

export function deleteTemplateError(error) {
  return {
    type: ActionTypes.DELETE_TEMPLATE_ERROR,
    error
  };
}

export function loadTempaltes() {
  return (dispatch) => {
    return templateApi.all()
      .then(templates => dispatch(getAllTempaltesSuccess(templates)))
      .catch(error => dispatch(getAllTempaltesError(error)));
  };
}

export function updateTemplate(template) {
  return (dispatch) => {
    return templateApi.update(template)
      .then(template => dispatch(updateTemplatesSuccess(template)))
      .catch(error => dispatch(updateTemplatesError(error)));
  };
}

export function deleteTemplate(template) {
  return (dispatch) => {
    return templateApi.destroy(template)
      .then(_ => dispatch(deleteTemplateSuccess(template)))
      .catch(error => dispatch(deleteTemplateError(error)));
  };
}

export function getTemplate(tempalteId) {
  return (dispatch) => {
    return templateApi.get(TemplateId)
      .then(template => dispatch(getTemplateSuccess(template)))
      .catch(error => dispatch(getTemplateError(error)));
  };
}

export function addTemplate(tempalte) {
  return (dispatch) => {
    return templateApi.add(template)
      .then(template => dispatch(createTemplateSuccess(template)))
      .catch(error => dispatch(createTemplateError(error)));
  };
}
