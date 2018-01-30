import { fromJS } from 'immutable';

import { UPDATE_STRING, POST_STRING } from './constants';

const initialState = fromJS({
  inputString: '',
  strings: [],
});

function updateReducer(state = initialState, action) {
  console.log('in reducer above');
  switch (action.type) {
    case UPDATE_STRING:
      return state
        .set('inputString', action.inputString);
    case POST_STRING:
      console.log('STRING in Reducer', action.string);
      return state;
      // return state
      //   .set('strings', [...action.strings]);
    default:
      return state;
  }
}

export default updateReducer;
