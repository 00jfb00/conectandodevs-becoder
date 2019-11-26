import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({userData: {}, isLoggedIn: false});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        type: types.LOGIN,
        userData: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        type: types.LOGOUT,
        userData: {},
      };
    default:
      return state;
  }
}
