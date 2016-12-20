import * as ActionTypes from '../constants/settingActions';
import settingApi from '../api/setting';

export function getAllSettingsSuccess(settings) {
  return {
    type: ActionTypes.GET_ALL_SETTINGS_SUCCESS,
    settings
  };
}

export function getAllSettingsError(error) {
  return {
    type: ActionTypes.GET_ALL_SETTINGS_ERROR,
    error
  };
}

export function getSettingSuccess(setting) {
  return {
    type: ActionTypes.GET_SETTING_SUCCESS,
    setting
  };
}

export function getSettingError(error) {
  return {
    type: ActionTypes.GET_SETTING_ERROR,
    error
  };
}

export function createSettingSuccess(setting) {
  return {
    type: ActionTypes.CREATE_SETTING_SUCCESS,
    setting
  };
}

export function createSettingError(error) {
  return {
    type: ActionTypes.CREATE_SETTING_ERROR,
    error
  };
}

export function updateSettingSuccess(setting) {
  return {
    type: ActionTypes.UPDATE_SETTING_SUCCESS,
    setting
  };
}

export function updateSettingError(error) {
  return {
    type: ActionTypes.UPDATE_SETTING_ERROR,
    error
  };
}

export function deleteSettingSuccess(setting) {
  return {
    type: ActionTypes.DELETE_SETTING_SUCCESS,
    setting
  };
}

export function deleteSettingError(error) {
  return {
    type: ActionTypes.DELETE_SETTING_ERROR,
    error
  };
}

export function loadSettings() {
  return (dispatch) => {
    return settingApi.all()
      .then(settings => dispatch(getAllSettingsSuccess(settings)))
      .catch(error => dispatch(getAllSettingsError(error)));
  };
}

export function updateSetting(setting) {
  return (dispatch) => {
    return settingApi.update(setting)
      .then(setting => dispatch(updateSettingSuccess(setting)))
      .catch(error => dispatch(updateSettingError(error)));
  };
}

export function deleteSetting(setting) {
  return (dispatch) => {
    return settingApi.destroy(setting)
      .then(_ => dispatch(deleteSettingSuccess(setting)))
      .catch(error => dispatch(deleteSettingError(error)));
  };
}

export function getSetting(settingId) {
  return (dispatch) => {
    return settingApi.get(settingId)
      .then(setting => dispatch(getSettingSuccess(setting)))
      .catch(error => dispatch(getSettingError(error)));
  };
}

export function addSetting(setting) {
  return (dispatch) => {
    return settingApi.add(setting)
      .then(setting => dispatch(createSettingSuccess(setting)))
      .catch(error => dispatch(createSettingError(error)));
  };
}
