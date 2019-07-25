import { combineReducers } from 'redux'
import pickBy from 'lodash/pickBy'
import { ADD_DATA, FEEDBACK } from '../actions'

const addComment = (state, action) => {
  const {
    payload: { comments }
  } = action
  return { ...comments, ...state }
  // return merge({}, state, comments)
  // Note. with spread operator will keep denormalized state consistent
  // but with merge() it will miss the none primitive property.
  // Maybe it's not because of merge(), will investigate this issue later.
}

const removeComment = (state, action) => {
  const {
    payload: { id }
  } = action
  // Remove the new Comment object from the updated lookup table
  return pickBy(state, (value, key) => {
    return key !== id
  })
}

const commentsById = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK.UNDO_COMMENT:
      return removeComment(state, action)
    case FEEDBACK.COMMENT:
    case ADD_DATA:
      return addComment(state, action)
    default:
      return state
  }
}

const addCommentIdByNormalizr = (state, action) => {
  const {
    payload: { comments }
  } = action
  // Just append the new react's ID to the list of all IDs
  return [...Object.keys(comments), ...state]
}

// const addCommentId = (state, action) => {
//   const {
//     payload: { id }
//   } = action
//   // Just append the new react's ID to the list of all IDs
//   return [id, ...state]
// }

const removeCommentId = (state, action) => {
  const {
    payload: { id }
  } = action
  // Just remove the comment's ID from the list of all IDs
  return state.filter(reactId => reactId !== id)
}

const allComment = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
    case FEEDBACK.COMMENT:
      return addCommentIdByNormalizr(state, action)
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
