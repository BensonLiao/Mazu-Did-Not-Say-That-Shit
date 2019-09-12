import { combineReducers } from 'redux'
import produce, { Draft } from 'immer'
import {
  REQUEST_LODA_DATA,
  LOAD_DATA,
  FEEDBACK,
  CommentActionTypes,
  Comment,
  UpdateComment
} from '../actions/types'
import { LoadDataActionTypes } from './types'
import { FetchDataComment, FetchDataAllIds } from './types'

const addCommentByNormalizr = (
  draft: Draft<FetchDataComment>,
  action: LoadDataActionTypes
) => {
  const {
    payload: { comments }
  } = action
  Object.keys(comments).forEach(id => {
    draft[id] = comments[id]
  })
}

const addComment = (
  draft: Draft<FetchDataComment>,
  action: CommentActionTypes
) => {
  const { payload } = action as Comment
  draft[payload.id] = payload
}

const removeComment = (
  draft: Draft<FetchDataComment>,
  action: CommentActionTypes
) => {
  const {
    payload: { id }
  } = action
  delete draft[id]
}

const updateComment = (
  draft: Draft<FetchDataComment>,
  action: CommentActionTypes
) => {
  const {
    payload: { id, saying }
  } = action as UpdateComment
  draft[id].saying = saying
}

const toggleCommentVisibility = (
  draft: Draft<FetchDataComment>,
  action: CommentActionTypes
) => {
  const {
    payload: { id }
  } = action
  const currentVisibility = draft[id].isHidden
  draft[id].isHidden = !currentVisibility
}

const commentsById = produce((draft, action) => {
  switch (action.type) {
    case LOAD_DATA:
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
  }
}, {})

const addCommentIdByNormalizr = (
  draft: Draft<FetchDataAllIds>,
  action: LoadDataActionTypes
) => {
  const {
    type,
    payload: { comments }
  } = action
  // Extract object and append all its comments's ID to the list of allIds.items
  Object.keys(comments).forEach(id => {
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

const addCommentId = (
  draft: Draft<FetchDataAllIds>,
  action: CommentActionTypes
) => {
  const {
    payload: { id }
  } = action as Comment
  // Prepend the new comments's ID to the list of allIds.items
  draft.items.unshift(id)
}

const removeCommentId = (
  draft: Draft<FetchDataAllIds>,
  action: CommentActionTypes
) => {
  const {
    payload: { id }
  } = action
  // Remove the comment's ID from the list of allIds.items
  draft.items.splice(draft.items.findIndex(itemId => itemId === id), 1)
}

const allComment = produce(
  (draft, action) => {
    switch (action.type) {
      case REQUEST_LODA_DATA:
      case LOAD_DATA:
        addCommentIdByNormalizr(draft, action)
        break
      case FEEDBACK.COMMENT:
        addCommentId(draft, action)
        break
      case FEEDBACK.UNDO_COMMENT:
        removeCommentId(draft, action)
        break
      default:
    }
  },
  { items: [], isFetching: false }
)

const commentReducer = combineReducers({
  byId: commentsById,
  allIds: allComment
})

export default commentReducer
