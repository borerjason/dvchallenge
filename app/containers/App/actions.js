import {
  LOAD_STRINGS,
  STRING_LOAD_SUCCESSFUL,
 } from './constants';

export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

export function stringsLoaded(strings) {
  console.log('strings loaded action called');
  return {
    type: STRING_LOAD_SUCCESSFUL,
    strings,
  };
}
