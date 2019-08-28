import { combineReducers } from 'redux'
import produce from 'immer'
import { REQUEST_LODA_DATA, LOAD_DATA, FEEDBACK } from '../actions'

const addReactByNormalizr = (draft, action) => {
  const {
    payload: { reacts }
  } = action
  Object.keys(reacts).forEach(id => {
    draft[id] = reacts[id]
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
    case LOAD_DATA:
      addReactByNormalizr(draft, action)
      break
    case FEEDBACK.REACT:
      addReact(draft, action)
      break
    case FEEDBACK.UNDO_REACT:
      removeReact(draft, action)
      break
    default:
  }
}, {})

const addReactIdByNormalizr = (draft, action) => {
  const {
    type,
    payload: { reacts }
  } = action
  // Extract object and append all its react's ID to the list of allIds
  switch (type) {
    case REQUEST_LODA_DATA:
      draft.items = reacts
      draft.isFetching = true
      break
    case LOAD_DATA:
      Object.keys(reacts).forEach(id => {
        draft.items.push(id)
      })
      draft.isFetching = false
      break
    default:
  }
}

const addReactId = (draft, action) => {
  const {
    payload: { id }
  } = action
  // Prepend the new react's ID to the list of allIds
  draft.items.unshift(id)
}

const removeReactId = (draft, action) => {
  const {
    payload: { id }
  } = action
  // Remove the react's ID from the list of allIds
  draft.items.splice(draft.items.findIndex(reactId => reactId === id), 1)
}

const allReact = produce((draft, action) => {
  switch (action.type) {
    case REQUEST_LODA_DATA:
    case LOAD_DATA:
      addReactIdByNormalizr(draft, action)
      break
    case FEEDBACK.REACT:
      addReactId(draft, action)
      break
    case FEEDBACK.UNDO_REACT:
      removeReactId(draft, action)
      break
    default:
  }
}, { items: [], isFetching: false })

const reactReducer = combineReducers({
  byId: reactsById,
  allIds: allReact
})

export default reactReducer
