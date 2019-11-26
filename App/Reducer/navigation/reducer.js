import Immutable from 'seamless-immutable';

const initialState = Immutable({});

export default function reducer(state = initialState, action = {}) {
  if (action.type.indexOf('Navigation/') >= 0) {
    return {
      ...state,
      ...action,
    };
  } else {
    return state;
  }
}
