import { combineReducers } from 'redux'
import produce from 'immer'
import { REQUEST_LODA_DATA, LOAD_DATA, FEEDBACK } from '../actions'

const addShareByNormalizr = (draft, action) => {
  const {
    payload: { shares }
  } = action
  Object.keys(shares).forEach(id => {
    draft[id] = shares[id]
  })
}

const sharesById = produce((draft, action) => {
  switch (action.type) {
    case LOAD_DATA:
    case FEEDBACK.SHARE:
      addShareByNormalizr(draft, action)
      break
    default:
  }
}, {})

const addShareIdByNormalizr = (draft, action) => {
  const {
    type,
    payload: { shares }
  } = action
  switch (type) {
    case REQUEST_LODA_DATA:
      draft.items = shares
      draft.isFetching = true
      break
    case LOAD_DATA:
    case FEEDBACK.SHARE:
      Object.keys(shares).forEach(id => {
        draft.items.push(id)
      })
      draft.isFetching = false
      break
    default:
  }
}

const allShare = produce(
  (draft, action) => {
    switch (action.type) {
      case REQUEST_LODA_DATA:
      case LOAD_DATA:
      case FEEDBACK.SHARE:
        addShareIdByNormalizr(draft, action)
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
