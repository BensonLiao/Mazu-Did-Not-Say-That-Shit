import { combineReducers } from 'redux'
import produce from 'immer'
// import merge from 'lodash/merge'
// import mapValues from 'lodash/mapValues'
import { ADD_DATA, FEEDBACK } from '../actions'

// const addCommentByNormalizr = (state, action) => {
//   const {
//     payload: { comments }
//   } = action
//   // Merge the new and current Comment object and return new object
//   return merge({}, state, comments)
// }

// const addComment = (state, action) => {
//   const { payload } = action
//   const comments = {
//     [payload.id]: payload
//   }
//   // Merge the new and current Comment object and return new object
//   return merge({}, state, comments)
// }

// const removeComment = (state, action) => {
//   const {
//     payload: { id }
//   } = action
//   // Remove the new Comment object from the updated lookup table
//   delete state[id]
//   return state
// }

// const toggleCommentVisibility = (state, action) => {
//   const {
//     payload: { id }
//   } = action
//   // Update the selected Comment object props: isHidden
//   // const isCommentHidden = state[id].isHidden
//   // state[id].isHidden = !isCommentHidden
//   state = mapValues(state, oldItem => (
//     oldItem.id === id ? { ...oldItem, isHidden: !oldItem.isHidden } : oldItem
//   ))
//   return state
// }

// const commentsById = (state = {}, action) => {
//   switch (action.type) {
//     case ADD_DATA:
//       return addCommentByNormalizr(state, action)
//     case FEEDBACK.COMMENT:
//       return addComment(state, action)
//     case FEEDBACK.COMMENT_VISIBILITY_TOGGLE:
//       return toggleCommentVisibility(state, action)
//     case FEEDBACK.UNDO_COMMENT:
//       return removeComment(state, action)
//     default:
//       return state
//   }
// }

const addCommentByNormalizr = (draft, action) => {
  const {
    payload: { comments }
  } = action
  Object.keys(comments).forEach(id => {
    draft[id] = comments[id]
  })
}

const addComment = (draft, action) => {
  const { payload } = action
  draft[payload.id] = payload
}

const removeComment = (draft, action) => {
  const {
    payload: { id }
  } = action
  delete draft[id]
}

const updateComment = (draft, action) => {
  const {
    payload: { id, saying }
  } = action
  draft[id].saying = saying
}

const toggleCommentVisibility = (draft, action) => {
  const {
    payload: { id }
  } = action
  const currentVisibility = draft[id].isHidden
  draft[id].isHidden = !currentVisibility
}

const commentsById = produce((draft, action) => {
  switch (action.type) {
    case ADD_DATA:
      addCommentByNormalizr(draft, action)
      break
    case FEEDBACK.COMMENT:
      addComment(draft, action)
      break
    case FEEDBACK.UNDO_COMMENT:
      removeComment(draft, action)
      break
    case FEEDBACK.UPDATE_COMMENT:
      updateComment(draft, action)
      break
    case FEEDBACK.COMMENT_VISIBILITY_TOGGLE:
      toggleCommentVisibility(draft, action)
      break
    default:
      break
  }
}, {})

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
