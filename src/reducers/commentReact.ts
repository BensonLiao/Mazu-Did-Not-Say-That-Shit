import { combineReducers } from 'redux'
import produce, { Draft } from 'immer'
import {
  REQUEST_LODA_DATA,
  LOAD_DATA,
  FEEDBACK,
  CommentReactActionTypes,
  CommentReact
} from '../actions/types'
import { LoadDataActionTypes } from './types'
import { CommentReactDataState, AllIdsDataState } from './types'

const addReactByNormalizr = (
  draft: Draft<CommentReactDataState>,
  action: LoadDataActionTypes
) => {
  const {
    payload: { commentReacts }
  } = action
  Object.keys(commentReacts).forEach(id => {
    draft[id] = commentReacts[id]
  })
}

const addReact = (
  draft: Draft<CommentReactDataState>,
  action: CommentReactActionTypes
) => {
  const { payload } = action as CommentReact
  draft[payload.id] = payload
}

const removeReact = (
  draft: Draft<CommentReactDataState>,
  action: CommentReactActionTypes
) => {
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
    case FEEDBACK.COMMENT_REACT:
      addReact(draft, action)
      break
    case FEEDBACK.UNDO_COMMENT_REACT:
      removeReact(draft, action)
      break
    default:
  }
}, {})

const addReactIdByNormalizr = (
  draft: Draft<AllIdsDataState>,
  action: LoadDataActionTypes
) => {
  const {
    type,
    payload: { commentReacts }
  } = action
  // Extract object and append all its react's ID to the list of allIds
  Object.keys(commentReacts).forEach(id => {
    draft.items.push(id)
  })
  switch (type) {
    case REQUEST_LODA_DATA:
      draft.isFetching = true
      break
    case LOAD_DATA:
      draft.isFetching = false
      break
    default:
  }
}

const addReactId = (
  draft: Draft<AllIdsDataState>,
  action: CommentReactActionTypes
) => {
  const {
    payload: { id }
  } = action
  // Prepend the new react's ID to the list of allIds
  draft.items.unshift(id)
}

const removeReactId = (
  draft: Draft<AllIdsDataState>,
  action: CommentReactActionTypes
) => {
  const {
    payload: { id }
  } = action
  // Remove the react's ID from the list of allIds
  draft.items.splice(draft.items.findIndex(reactId => reactId === id), 1)
}

const allReact = produce(
  (draft, action) => {
    switch (action.type) {
      case REQUEST_LODA_DATA:
      case LOAD_DATA:
        addReactIdByNormalizr(draft, action)
        break
      case FEEDBACK.COMMENT_REACT:
        addReactId(draft, action)
        break
      case FEEDBACK.UNDO_COMMENT_REACT:
        removeReactId(draft, action)
        break
      default:
    }
  },
  { items: [], isFetching: false }
)

const commentReactReducer = combineReducers({
  byId: reactsById,
  allIds: allReact
})

export default commentReactReducer
