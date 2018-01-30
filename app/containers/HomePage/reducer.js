import { fromJS } from 'immutable';

import { UPDATE_STRING } from './constants';

const initialState = fromJS({
  inputString: '',
});

function updateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STRING:
      return state
        .set('inputString', action.inputString);
    default:
      return state;
  }
}

export default updateReducer;
