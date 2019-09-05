import { REQUEST_LODA_DATA, LOAD_DATA, PostData } from './types'

export const requestLoadData = () => ({
  type: REQUEST_LODA_DATA,
  payload: {
    reacts: [],
    commentReacts: [],
    comments: [],
    shares: []
  }
})

export const loadData = ({ entities }: PostData) => ({
  type: LOAD_DATA,
  payload: entities
})

export const FEEDBACK = {
  REACT: 'REACT',
  UNDO_REACT: 'UNDO_REACT',
  COMMENT_REACT: 'COMMENT_REACT',
  UNDO_COMMENT_REACT: 'UNDO_COMMENT_REACT',
  COMMENT: 'COMMENT',
  UNDO_COMMENT: 'UNDO_COMMENT',
  UPDATE_COMMENT: 'UPDATE_COMMENT',
  COMMENT_VISIBILITY_TOGGLE: 'COMMECOMMENT_VISIBILITY_TOGGLENT_HIDE',
  SHARE: 'SHARE',
  TARGET: 'POST'
}

export const REACTIONS = {
  LIKE: 'LIKE',
  HAHA: 'HAHA',
  LOVE: 'LOVE',
  WOW: 'WOW',
  SAD: 'SAD',
  ANGRY: 'ANGRY'
}

export const feedbackReact = ({ entities }: PostData) => ({
  type: FEEDBACK.REACT,
  payload: entities
})

export const undoReact = (id: string) => ({
  type: FEEDBACK.UNDO_REACT,
  payload: {
    id
  }
})

export const feedbackReactToComment = ({ entities }: PostData) => ({
  type: FEEDBACK.COMMENT_REACT,
  payload: entities
})

export const undoReactToComment = (id: string) => ({
  type: FEEDBACK.UNDO_COMMENT_REACT,
  payload: {
    id
  }
})

export const feedbackComment = ({ entities }: PostData) => ({
  type: FEEDBACK.COMMENT,
  payload: entities
})

export const undoComment = (id: string) => ({
  type: FEEDBACK.UNDO_COMMENT,
  payload: {
    id
  }
})

interface UpdateCommentAction {
  id: string
  saying: string
}

export const updateComment = ({ id, saying }: UpdateCommentAction) => ({
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

export const feedbackShare = ({ entities }: PostData) => ({
  type: FEEDBACK.SHARE,
  payload: entities
})
