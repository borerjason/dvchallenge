import { UPDATE_STRING } from './constants';

export function updateString(string) {
  return {
    type: UPDATE_STRING,
    string,
  };
}
