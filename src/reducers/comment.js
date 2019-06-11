import { combineReducers } from 'redux'
import { ADD_DATA, FEEDBACK } from '../actions'

const feedbackComment = (state, action) => {
  const { payload } = action
  const { id, postOrCommentId, comment, commenter } = payload

  // Create our new Comment object
  const react = {
    id,
    comment,
    commenter,
    postOrCommentId
  }

  // Insert the new Comment object into the updated lookup table
  return {
    ...state,
    [id]: react
  }
}

const commentsById = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK.COMMENT:
      return feedbackComment(state, action)
    case ADD_DATA:
      return { ...state, ...action.payload.comments }
    default:
      return state
  }
}

const addCommentId = (state, action) => {
  const { payload } = action
  const { id } = payload
  // Just append the new react's ID to the list of all IDs
  return state.concat(id)
}

const allComment = (state = [], action) => {
  switch (action.type) {
    case FEEDBACK.COMMENT:
      return addCommentId(state, action)
    case ADD_DATA:
      return [...state, ...Object.keys(action.payload.comments)]
    default:
      return state
  }
}

const commentReducer = combineReducers({
  byId: commentsById,
  allIds: allComment
})

export default commentReducer
