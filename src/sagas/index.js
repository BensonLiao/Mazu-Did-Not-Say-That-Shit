import { put, call, fork, all, takeLatest, delay } from 'redux-saga/effects'
import axios from 'axios'
import { REQUEST_LODA_DATA, requestLoadData, loadData } from '../actions'

// request delay for shimmer animation run properly
// when async promise request finishes too quick
const requestDelay = delay(2000)

export function* fetchPostApi(endPoint) {
  const result = yield axios
    .get(`api/${endPoint}.json`)
    .then(response => response.data)
    .then(json => json.data)
    .catch(err => console.log('A fetch err occurs: ', err))
  return result
}

export function* requestFetchPost() {
  const [, result] = yield all([requestDelay, call(fetchPostApi, 'db')])
  yield put(loadData(result))
}

export function* startup() {
  yield put(requestLoadData())
}

export default function* root() {
  yield fork(startup)
  yield takeLatest(REQUEST_LODA_DATA, requestFetchPost)
}
