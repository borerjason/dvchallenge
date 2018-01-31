import { fromJS } from 'immutable';

// maybe add GET_STRINGS HERE TOO?
import {
  LOAD_STRINGS,
  STRING_LOAD_SUCCESSFUL,
 } from './constants';

const initialState = fromJS({
  strings: [],
});

function appReducer(state = initialState, action) {
  console.log('global reducer called');
  switch (action.type) {
    case STRING_LOAD_SUCCESSFUL:
    console.log('called inside reducer string load successful', action.strings);
      return state
        .set('strings', action.strings);
        
    default:
      return state;
  }
}

export default appReducer;
