import { UPDATE_STRING } from './constants';

import { fromJS } from 'immutable';

// const initialState = fromJS({
//   inputString: '',
// });

function updateReducer(state = '', action) {
  console.log('in reducer state', state);
  switch (action.type) {
    case UPDATE_STRING:
    console.log('in reducer', action.inputString);
      return action.inputString;
    default:
      return state;
  }
}

export default updateReducer;
