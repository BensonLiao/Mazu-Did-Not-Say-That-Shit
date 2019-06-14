import uuidv1 from 'uuid/v1'

export const ADD_DATA = 'ADD_DATA'

export const addData = ({ entities }) => ({
  type: ADD_DATA,
  payload: entities
})

export const FEEDBACK = {
  REACT: 'REACT',
  UNDO_REACT: 'UNDO_REACT',
  COMMENT: 'COMMENT',
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

export const feedbackLike = (userInfo, id, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id,
    reaction: REACTIONS.LIKE,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackHaha = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.HAHA,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackLove = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.LOVE,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackWow = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.WOW,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackSad = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.SAD,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackAngry = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.ANGRY,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackComment = (
  userInfo,
  target = FEEDBACK.TARGET,
  comment,
  time = Date().now(),
  attachMedia = '',
  mediaType = ''
) => ({
  type: FEEDBACK.COMMENT,
  payload: {
    id: uuidv1(),
    comment,
    time,
    attachMedia,
    mediaType,
    user: userInfo,
    postOrCommentId: target
  }
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

export const undoReact = id => ({
  type: FEEDBACK.UNDO_REACT,
  payload: {
    id
  }
})
