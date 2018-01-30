import { UPDATE_STRING } from './constants';

export function updateString(inputString) {
  // console.log('TRiggered');
  return {
    type: UPDATE_STRING,
    inputString,
  };
}
