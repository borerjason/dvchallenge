import { UPDATE_STRING, POST_STRING } from './constants';

export function updateString(inputString) {
  return {
    type: UPDATE_STRING,
    inputString,
  };
}

export function postString(string) {
  console.log('in action');
  return {
    type: POST_STRING,
    string,
  };
}
