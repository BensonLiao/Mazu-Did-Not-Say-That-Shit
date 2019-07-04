// import uuidv1 from 'uuid/v1'

export const ADD_DATA = 'ADD_DATA'

export const addData = ({ entities }) => ({
  type: ADD_DATA,
  payload: entities
})

export const FEEDBACK = {
  REACT: 'REACT',
  UNDO_REACT: 'UNDO_REACT',
  COMMENT: 'COMMENT',
  UNDO_COMMENT: 'UNDO_COMMENT',
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

export const feedbackComment = ({ entities }) => ({
  type: FEEDBACK.COMMENT,
  payload: entities
})

export const feedbackShare = (
  userInfo,
  time = Date().now(),
  postId = FEEDBACK.TARGET
) => ({
  type: FEEDBACK.SHARE,
  payload: {
    time,
    user: userInfo,
    postId
  }
})
