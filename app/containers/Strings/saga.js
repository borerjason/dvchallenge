import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { stringsLoaded } from '../App/actions';
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
    console.log('SAGA CALLED', strings);
    yield put(stringsLoaded(strings));
  } catch (err) {
    // fix this later
    // yield put(loadingError(err));
  }
}

export default function* stringData() {
  // watches for LOAD_STRINGS and calls getStrings();
  yield takeLatest(LOAD_STRINGS, getStrings);
}
