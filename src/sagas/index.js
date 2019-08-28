import { put, call, fork } from 'redux-saga/effects'
import axios from 'axios'
import { getNormalizedData, PostSchema } from '../utils/dataSchema'
import { requestLoadData, loadData } from '../actions'

export function fetchPostsApi(endPoint) {
  return axios
    .get(`api/${endPoint}.json`)
    .then(response => response.data)
    .then(json => json.data)
    .catch(err => console.log('A fetch err occurs: ', err))
}

export function* fetchPosts() {
  yield put(requestLoadData())
  const initState = yield call(fetchPostsApi, 'db')
  const normalizedData = getNormalizedData(initState, PostSchema)
  yield put(loadData(normalizedData))
}

export function* startup() {
  yield fork(fetchPosts)
}

export default function* root() {
  yield fork(startup)
}
