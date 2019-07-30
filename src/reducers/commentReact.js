import { combineReducers } from 'redux'
import merge from 'lodash/merge'
import { ADD_DATA, FEEDBACK } from '../actions'

const addReactByNormalizr = (state, action) => {
  const {
    payload: { commentReacts }
  } = action
  // Merge the new and current React object and return new object
  return merge({}, state, commentReacts)
}

const addReact = (state, action) => {
  const { payload } = action
  const commentReacts = {
    [payload.id]: payload
  }
  // Merge the new and current React object and return new object
  return merge({}, state, commentReacts)
}

const removeReact = (state, action) => {
  const {
    payload: { id }
  } = action
  // Remove the new React object from the updated lookup table
  delete state[id]
  return state
}

const reactsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA:
      return addReactByNormalizr(state, action)
    case FEEDBACK.COMMENT_REACT:
      return addReact(state, action)
    case FEEDBACK.UNDO_COMMENT_REACT:
      return removeReact(state, action)
    default:
      return state
  }
}

const addReactIdByNormalizr = (state, action) => {
  const {
    payload: { commentReacts }
  } = action
  // Extract object and append all its react's ID to the list of allIds
  return [...Object.keys(commentReacts), ...state]
}

const addReactId = (state, action) => {
  const {
    payload: { id }
  } = action
  // Just append the new react's ID to the list of allIds
  return [id, ...state]
}

const removeReactId = (state, action) => {
  const {
    payload: { id }
  } = action
  // Just remove the react's ID from the list of allIds
  return state.filter(reactId => reactId !== id)
}

const allReact = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
      return addReactIdByNormalizr(state, action)
    case FEEDBACK.COMMENT_REACT:
      return addReactId(state, action)
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
