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

export const feedbackLike = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.LIKE,
    reactor: userInfo,
    postOrCommentId: target
  }
})

export const feedbackHaha = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.HAHA,
    reactor: userInfo,
    postOrCommentId: target
  }
})

export const feedbackLove = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.LOVE,
    reactor: userInfo,
    postOrCommentId: target
  }
})

export const feedbackWow = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.WOW,
    reactor: userInfo,
    postOrCommentId: target
  }
})

export const feedbackSad = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.SAD,
    reactor: userInfo,
    postOrCommentId: target
  }
})

export const feedbackAngry = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  payload: {
    id: uuidv1(),
    reaction: REACTIONS.ANGRY,
    reactor: userInfo,
    postOrCommentId: target
  }
})

export const feedbackComment = (
  userInfo,
  target,
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

export const feedbackShare = (userInfo, time = Date().now(), postId) => ({
  type: FEEDBACK.SHARE,
  payload: {
    time,
    user: userInfo,
    postId
  }
})

export const undoReact = (userInfo, target) => ({
  type: FEEDBACK.UNDO_REACT,
  payload: {
    user: userInfo,
    postOrCommentId: target
  }
})
