import { combineReducers } from 'redux'
import merge from 'lodash/merge'
import { ADD_DATA, FEEDBACK } from '../actions'

const addCommentByNormalizr = (state, action) => {
  const {
    payload: { comments }
  } = action
  // Merge the new and current Comment object and return new object
  return merge({}, state, comments)
}

const addComment = (state, action) => {
  const { payload } = action
  const comments = {
    [payload.id]: payload
  }
  // Merge the new and current Comment object and return new object
  return merge({}, state, comments)
}

const removeComment = (state, action) => {
  const {
    payload: { id }
  } = action
  // Remove the new Comment object from the updated lookup table
  delete state[id]
  return state
}

const commentsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA:
      return addCommentByNormalizr(state, action)
    case FEEDBACK.COMMENT:
      return addComment(state, action)
    case FEEDBACK.UNDO_COMMENT:
      return removeComment(state, action)
    default:
      return state
  }
}

const addCommentIdByNormalizr = (state, action) => {
  const {
    payload: { comments }
  } = action
  // Extract object and append all its comments's ID to the list of allIds
  return [...Object.keys(comments), ...state]
}

const addCommentId = (state, action) => {
  const {
    payload: { id }
  } = action
  // Just append the new comments's ID to the list of allIds
  return [id, ...state]
}

const removeCommentId = (state, action) => {
  const {
    payload: { id }
  } = action
  // Just remove the comment's ID from the list of allIds
  return state.filter(reactId => reactId !== id)
}

const allComment = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
      return addCommentIdByNormalizr(state, action)
    case FEEDBACK.COMMENT:
      return addCommentId(state, action)
    case FEEDBACK.UNDO_COMMENT:
      return removeCommentId(state, action)
    default:
      return state
  }
}

const commentReducer = combineReducers({
  byId: commentsById,
  allIds: allComment
})

export default commentReducer
