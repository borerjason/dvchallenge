import { fromJS } from 'immutable';

import {
  UPDATE_STRING,
  STRING_POSTED_SUCCESS,
 } from './constants';

const initialState = fromJS({
  inputString: '',
  posted: false,
});

function updateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STRING:
      return state
        .set('inputString', action.inputString)
        .set('posted', false);
    case STRING_POSTED_SUCCESS:
      return state
        .set('inputString', '')
        .set('posted', true);
    default:
      return state;
  }
}

export default updateReducer;
