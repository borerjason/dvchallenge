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
  return {
    type: STRING_LOAD_SUCCESSFUL,
    strings,
  };
}
