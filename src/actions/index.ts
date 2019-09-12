import {
  REQUEST_LODA_DATA,
  LOAD_DATA,
  FEEDBACK,
  PostData,
  PostDataReact,
  PostDataCommentReact,
  PostDataComment,
  PostDataShare,
  UpdateCommentPayload
} from './types'

export const requestLoadData = () => ({
  type: REQUEST_LODA_DATA,
  payload: {
    entities: {
      reacts: {},
      commentReacts: {},
      comments: {},
      shares: {}
    }
  }
})

export const loadData = ({ entities }: PostData) => ({
  type: LOAD_DATA,
  payload: entities
})

export const feedbackReact = ({ entities }: PostDataReact) => ({
  type: FEEDBACK.REACT,
  payload: entities
})

export const undoReact = (id: string) => ({
  type: FEEDBACK.UNDO_REACT,
  payload: {
    id
  }
})

export const feedbackReactToComment = ({ entities }: PostDataCommentReact) => ({
  type: FEEDBACK.COMMENT_REACT,
  payload: entities
})

export const undoReactToComment = (id: string) => ({
  type: FEEDBACK.UNDO_COMMENT_REACT,
  payload: {
    id
  }
})

export const feedbackComment = ({ entities }: PostDataComment) => ({
  type: FEEDBACK.COMMENT,
  payload: entities
})

export const undoComment = (id: string) => ({
  type: FEEDBACK.UNDO_COMMENT,
  payload: {
    id
  }
})

export const updateComment = ({ id, saying }: UpdateCommentPayload) => ({
  type: FEEDBACK.UPDATE_COMMENT,
  payload: {
    id,
    saying
  }
})

export const toggleCommentVisibility = (id: string) => ({
  type: FEEDBACK.COMMENT_VISIBILITY_TOGGLE,
  payload: {
    id
  }
})

export const feedbackShare = ({ entities }: PostDataShare) => ({
  type: FEEDBACK.SHARE,
  payload: entities
})
