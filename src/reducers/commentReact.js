import { combineReducers } from 'redux'
import produce from 'immer'
import { ADD_DATA, FEEDBACK } from '../actions'

const addReactByNormalizr = (draft, action) => {
  const {
    payload: { commentReacts }
  } = action
  Object.keys(commentReacts).forEach(id => {
    draft[id] = commentReacts[id]
  })
}

const addReact = (draft, action) => {
  const { payload } = action
  draft[payload.id] = payload
}

const removeReact = (draft, action) => {
  const {
    payload: { id }
  } = action
  delete draft[id]
}

const reactsById = produce((draft, action) => {
  switch (action.type) {
    case ADD_DATA:
      addReactByNormalizr(draft, action)
      break
    case FEEDBACK.COMMENT_REACT:
      addReact(draft, action)
      break
    case FEEDBACK.UNDO_COMMENT_REACT:
      removeReact(draft, action)
      break
    default:
  }
}, {})

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
