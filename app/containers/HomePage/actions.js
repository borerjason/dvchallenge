import {
  UPDATE_STRING,
  POST_STRING,
  STRING_POSTED_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';

export function updateString(inputString) {
  return {
    type: UPDATE_STRING,
    inputString,
  };
}

// starts the string saga
export function postString(string) {
  return {
    type: POST_STRING,
    string,
  };
}

// dispatched when the strings are loaded by the request saga
export function stringPosted() {
  return {
    type: STRING_POSTED_SUCCESS,
  };
}

// dispatched when loading the string fails
export function loadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
