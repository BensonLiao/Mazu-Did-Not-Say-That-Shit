import { combineReducers } from 'redux'
import produce, { Draft } from 'immer'
import {
  REQUEST_LODA_DATA,
  LOAD_DATA,
  FEEDBACK,
  ShareActionTypes,
  Share
} from '../actions/types'
import { LoadDataActionTypes } from './types'
import { FetchDataShare, FetchDataAllIds } from './types'

const addShareByNormalizr = (
  draft: Draft<FetchDataShare>,
  action: LoadDataActionTypes
) => {
  const {
    payload: { shares }
  } = action
  Object.keys(shares).forEach(id => {
    draft[id] = shares[id]
  })
}

const addShare = (draft: Draft<FetchDataShare>, action: ShareActionTypes) => {
  const { payload } = action as Share
  draft[payload.id] = payload
}

const sharesById = produce((draft, action) => {
  switch (action.type) {
    case LOAD_DATA:
      addShareByNormalizr(draft, action)
    case FEEDBACK.SHARE:
      addShare(draft, action)
      break
    default:
  }
}, {})

const addShareIdByNormalizr = (
  draft: Draft<FetchDataAllIds>,
  action: LoadDataActionTypes
) => {
  const {
    type,
    payload: { shares }
  } = action
  Object.keys(shares).forEach(id => {
    draft.items.push(id)
  })
  switch (type) {
    case REQUEST_LODA_DATA:
      draft.isFetching = true
      break
    case LOAD_DATA:
      draft.isFetching = false
      break
    default:
  }
}

const addShareId = (
  draft: Draft<FetchDataAllIds>,
  action: ShareActionTypes
) => {
  const {
    payload: { id }
  } = action
  // Prepend the new react's ID to the list of allIds
  draft.items.unshift(id)
}

const allShare = produce(
  (draft, action) => {
    switch (action.type) {
      case REQUEST_LODA_DATA:
      case LOAD_DATA:
        addShareIdByNormalizr(draft, action)
        break
      case FEEDBACK.SHARE:
        addShareId(draft, action)
        break
      default:
    }
  },
  { items: [], isFetching: false }
)

const shareReducer = combineReducers({
  byId: sharesById,
  allIds: allShare
})

export default shareReducer
