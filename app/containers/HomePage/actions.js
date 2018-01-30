import { UPDATE_STRING } from './constants';

export function updateString(inputString) {
  return {
    type: UPDATE_STRING,
    inputString,
  };
}
