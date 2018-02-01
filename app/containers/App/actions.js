import {
  LOAD_STRINGS,
  STRING_LOAD_SUCCESSFUL,
  STRING_LOAD_ERROR,
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

export function loadingError(error) {
  return {
    type: STRING_LOAD_ERROR,
    error,
  };
}
