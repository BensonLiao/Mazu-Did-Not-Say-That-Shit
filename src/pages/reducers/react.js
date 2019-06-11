import { combineReducers } from 'redux'
import { ADD_DATA, FEEDBACK } from '../actions'

const feedbackReact = (state, action) => {
  const { payload } = action
  const { id, postOrCommentId, reaction, reactor } = payload

  // Create our new React object
  const react = {
    id,
    reaction,
    reactor,
    postOrCommentId
  }

  // Insert the new React object into the updated lookup table
  return {
    ...state,
    [id]: react
  }
}

const reactsById = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK.REACT:
      return feedbackReact(state, action)
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

const allReact = (state = [], action) => {
  switch (action.type) {
    case FEEDBACK.REACT:
      return addReactId(state, action)
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
