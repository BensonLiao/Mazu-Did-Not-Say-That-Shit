import { combineReducers } from 'redux'
import produce from 'immer'
import { ADD_DATA, FEEDBACK } from '../actions'

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
    case ADD_DATA:
    case FEEDBACK.SHARE:
      addShareByNormalizr(draft, action)
      break
    default:
  }
}, {})

const addShareIdByNormalizr = (state, action) => {
  const {
    payload: { shares }
  } = action
  // Just append the new share's ID to the list of all IDs
  return [...Object.keys(shares), ...state]
}

const allShare = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
    case FEEDBACK.SHARE:
      return addShareIdByNormalizr(state, action)
    default:
      return state
  }
}

const shareReducer = combineReducers({
  byId: sharesById,
  allIds: allShare
})

export default shareReducer
