export const ADD_DATA = 'ADD_DATA'

export const addData = ({ entities }) => ({
  type: ADD_DATA,
  payload: entities
})

export const FEEDBACK = {
  REACT: 'REACT',
  UNDO_REACT: 'UNDO_REACT',
  COMMENT_REACT: 'COMMENT_REACT',
  UNDO_COMMENT_REACT: 'UNDO_COMMENT_REACT',
  COMMENT: 'COMMENT',
  UNDO_COMMENT: 'UNDO_COMMENT',
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

export const feedbackReact = ({ entities }) => ({
  type: FEEDBACK.REACT,
  payload: entities
})

export const undoReact = id => ({
  type: FEEDBACK.UNDO_REACT,
  payload: {
    id
  }
})

export const feedbackReactToComment = ({ entities }) => ({
  type: FEEDBACK.COMMENT_REACT,
  payload: entities
})

export const undoReactToComment = id => ({
  type: FEEDBACK.UNDO_COMMENT_REACT,
  payload: {
    id
  }
})

export const feedbackComment = ({ entities }) => ({
  type: FEEDBACK.COMMENT,
  payload: entities
})

export const toggleCommentVisibility = id => ({
  type: FEEDBACK.COMMENT_VISIBILITY_TOGGLE,
  payload: id
})

export const feedbackShare = ({ entities }) => ({
  type: FEEDBACK.SHARE,
  payload: entities
})
