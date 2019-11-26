import * as types from './actionTypes';
import {setLoggedUser, unsetLoggedUser} from '../../Services/user';

export function loginInformation(data) {
  if (data === {}) {
    return {type: types.LOGIN, payload: data};
  }
  return dispatch => {
    setLoggedUser(data)
      .then(() => {
        dispatch({type: types.LOGIN, payload: data});
      })
      .catch(() => dispatch({type: types.LOGIN, payload: {}}));
  };
}

export function logoutInformation() {
  return dispatch => {
    unsetLoggedUser()
      .then(() => {
        dispatch({type: types.LOGOUT});
      })
      .catch(() => dispatch({type: types.LOGOUT}));
  };
}
