import { combineReducers } from 'redux'
import { ADD_DATA, FEEDBACK } from '../actions'

const feedbackShare = (state, action) => {
  const { payload } = action
  const { id, postId, user } = payload

  // Create our new Share object
  const share = {
    id,
    user,
    postId
  }

  // Insert the new Share object into the updated lookup table
  return {
    ...state,
    [id]: share
  }
}

const sharesById = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK.SHARE:
      return feedbackShare(state, action)
    case ADD_DATA:
      return { ...state, ...action.payload.shares }
    default:
      return state
  }
}

const addShareId = (state, action) => {
  const { payload } = action
  const { id } = payload
  // Just append the new share's ID to the list of all IDs
  return state.concat(id)
}

const allShare = (state = [], action) => {
  switch (action.type) {
    case FEEDBACK.SHARE:
      return addShareId(state, action)
    case ADD_DATA:
      return [...state, ...Object.keys(action.payload.shares)]
    default:
      return state
  }
}

const shareReducer = combineReducers({
  byId: sharesById,
  allIds: allShare
})

export default shareReducer
