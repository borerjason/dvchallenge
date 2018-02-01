import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { stringsLoaded, loadingError } from '../App/actions';
import { LOAD_STRINGS } from '../App/constants';


export function* getStrings() {
  const requestURL = '/savedstrings';
  const options = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const strings = yield call(request, requestURL, options);
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(loadingError(err));
  }
}

export default function* stringData() {
  yield takeLatest(LOAD_STRINGS, getStrings);
}
