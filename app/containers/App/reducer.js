import { fromJS } from 'immutable';

import {
  LOAD_STRINGS,
  STRING_LOAD_SUCCESSFUL,
 } from './constants';

const initialState = fromJS({
  strings: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case STRING_LOAD_SUCCESSFUL:
      return state
        .set('strings', action.strings);
        
    default:
      return state;
  }
}

export default appReducer;
