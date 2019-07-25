import { combineReducers } from 'redux'
import pickBy from 'lodash/pickBy'
// import merge from 'lodash/merge'
import { ADD_DATA, FEEDBACK } from '../actions'

const addReact = (state, action) => {
  const {
    payload: { reacts }
  } = action
  return { ...state, ...reacts }
  // return merge({}, state, reacts)
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
    case ADD_DATA:
    case FEEDBACK.REACT:
      return addReact(state, action)
    case FEEDBACK.UNDO_REACT:
      return removeReact(state, action)
    default:
      return state
  }
}

const addReactIdByNormalizr = (state, action) => {
  const {
    payload: { reacts }
  } = action
  // Just append the new react's ID to the list of all IDs
  return [...Object.keys(reacts), ...state]
}

// const addReactId = (state, action) => {
//   console.log('action', action)
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
    case FEEDBACK.REACT:
      return addReactIdByNormalizr(state, action)
    case FEEDBACK.UNDO_REACT:
      return removeReactId(state, action)
    default:
      return state
  }
}

const reactReducer = combineReducers({
  byId: reactsById,
  allIds: allReact
})

export default reactReducer
