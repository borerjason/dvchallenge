import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { stringPosted, loadingError } from './actions';
import { POST_STRING } from './constants';
import { makeSelectInputString } from './selectors';


export function* getStrings() {

  const string = yield select(makeSelectInputString());
  const requestURL = '/savedstrings';

  const options = {
    method: 'post',
    body: JSON.stringify({ string }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    console.log('strings in saga', strings);
    const strings = yield call(request, requestURL, options);
    console.log('strings in saga', strings);
    yield put(stringPosted(strings));
  } catch (err) {
    yield put(loadingError(err));
  }
}

export default function* stringData() {
  yield takeLatest(POST_STRING, getStrings);
}
