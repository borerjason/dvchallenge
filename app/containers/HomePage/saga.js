import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { stringPosted, loadingError } from './actions';
import { POST_STRING } from './constants';
import { makeSelectInputString } from './selectors';


export function* getStrings() {
  const string = yield select(makeSelectInputString());
  const requestURL = 'http://localhost:3000/savedstrings';

  try {
    const strings = yield call(request, requestURL);
    yield put(stringPosted(strings));
  } catch (err) {
    yield put(loadingError(err));
  }
}
