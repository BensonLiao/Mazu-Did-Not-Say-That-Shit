import { combineReducers } from 'redux'
import { ADD_DATA, FEEDBACK } from '../actions'

const addShare = (state, action) => {
  const {
    payload: { shares }
  } = action
  return { ...state, ...shares }
}

const sharesById = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK.SHARE:
      return addShare(state, action)
    case ADD_DATA:
      return { ...state, ...action.payload.shares }
    default:
      return state
  }
}

const addShareIdByNormalizr = (state, action) => {
  const {
    payload: { shares }
  } = action
  // Just append the new share's ID to the list of all IDs
  return [...Object.keys(shares), ...state]
}

// const addShareId = (state, action) => {
//   const {
//     payload: { id }
//   } = action
//   // Just append the new share's ID to the list of all IDs
//   return [id, ...state]
// }

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
