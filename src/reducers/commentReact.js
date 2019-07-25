import { combineReducers } from 'redux'
import pickBy from 'lodash/pickBy'
// import merge from 'lodash/merge'
import { ADD_DATA, FEEDBACK } from '../actions'

const addReact = (state, action) => {
  const {
    payload: { commentReacts }
  } = action
  return { ...state, ...commentReacts }
  // return merge({}, state, commentReacts)
  // Note. with spread operator will keep denormalized state consistent
  // but with merge() it will miss the none primitive property.
  // Maybe it's not because of merge(), will investigate this issue later.
}

const removeReact = (state, action) => {
  const {
    payload: { id }
  } = action
  // Remove the new React object from the updated lookup table
  return pickBy(state, (value, key) => {
    return key !== id
  })
}

const reactsById = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK.UNDO_COMMENT_REACT:
      return removeReact(state, action)
    case FEEDBACK.COMMENT_REACT:
    case ADD_DATA:
      return addReact(state, action)
    default:
      return state
  }
}

const addReactIdByNormalizr = (state, action) => {
  const {
    payload: { commentReacts }
  } = action
  // Just append the new react's ID to the list of all IDs
  return [...Object.keys(commentReacts), ...state]
}

// const addReactId = (state, action) => {
//   const {
//     payload: { id }
//   } = action
//   // Just append the new react's ID to the list of all IDs
//   return [id, ...state]
// }

const removeReactId = (state, action) => {
  const {
    payload: { id }
  } = action
  // Just remove the react's ID from the list of all IDs
  return state.filter(reactId => reactId !== id)
}

const allReact = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
    case FEEDBACK.COMMENT_REACT:
      return addReactIdByNormalizr(state, action)
    case FEEDBACK.UNDO_COMMENT_REACT:
      return removeReactId(state, action)
    default:
      return state
  }
}

const commentReactReducer = combineReducers({
  byId: reactsById,
  allIds: allReact
})

export default commentReactReducer
