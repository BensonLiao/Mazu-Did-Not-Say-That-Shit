import { combineReducers } from 'redux'
import pickBy from 'lodash/pickBy'
import { ADD_DATA, FEEDBACK } from '../actions'

const feedbackReact = (state, action) => {
  const { payload } = action
  const { id, postOrCommentId, reaction, user } = payload

  // Create our new React object
  const react = {
    id,
    reaction,
    user,
    postOrCommentId
  }

  // Insert the new React object into the updated lookup table
  return {
    ...state,
    [id]: react
  }
}

const removeReact = (state, action) => {
  const { payload } = action
  const { id } = payload

  // Remove the new React object from the updated lookup table
  return pickBy(state, (value, key) => {
    return key !== id
  })
}

const reactsById = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK.REACT:
      return feedbackReact(state, action)
    case FEEDBACK.UNDO_REACT:
      return removeReact(state, action)
    case ADD_DATA:
      return { ...state, ...action.payload.reacts }
    default:
      return state
  }
}

const addReactId = (state, action) => {
  const { payload } = action
  const { id } = payload
  // Just append the new react's ID to the list of all IDs
  return state.concat(id)
}

const removeReactId = (state, action) => {
  const { payload } = action
  const { id } = payload
  // Just remove the react's ID from the list of all IDs
  return state.filter(reactId => reactId !== id)
}

const allReact = (state = [], action) => {
  switch (action.type) {
    case FEEDBACK.REACT:
      return addReactId(state, action)
    case FEEDBACK.UNDO_REACT:
      return removeReactId(state, action)
    case ADD_DATA:
      return [...state, ...Object.keys(action.payload.reacts)]
    default:
      return state
  }
}

const reactReducer = combineReducers({
  byId: reactsById,
  allIds: allReact
})

export default reactReducer
