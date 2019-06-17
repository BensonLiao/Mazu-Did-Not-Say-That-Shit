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

export const feedbackFeelLike = (userInfo, id, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id,
    user: userInfo,
    feeling: REACTIONS.LIKE,
    postOrCommentId: target
  }
})

export const feedbackFeelHaha = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    feeling: REACTIONS.HAHA,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackFeelLove = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    feeling: REACTIONS.LOVE,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackFeelWow = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    feeling: REACTIONS.WOW,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackFeelSad = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    feeling: REACTIONS.SAD,
    user: userInfo,
    postOrCommentId: target
  }
})

export const feedbackFeelAngry = (userInfo, target = FEEDBACK.TARGET) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    feeling: REACTIONS.ANGRY,
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
