export const FEEDBACK = {
  REACT: 'REACT',
  UNDO_REACT: 'UNDO_REACT',
  COMMENT: 'COMMENT',
  SHARE: 'SHARE'
}

export const FEEDBACK_TARGET = {
  POST: 'POST'
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
  reaction: REACTIONS.LIKE,
  user: userInfo,
  postOrCommentId: target
})

export const feedbackHaha = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.HAHA,
  user: userInfo,
  postOrCommentId: target
})

export const feedbackLove = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.LOVE,
  user: userInfo,
  postOrCommentId: target
})

export const feedbackWow = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.WOW,
  user: userInfo,
  postOrCommentId: target
})

export const feedbackSad = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.SAD,
  user: userInfo,
  postOrCommentId: target
})

export const feedbackAngry = (userInfo, target) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.ANGRY,
  user: userInfo,
  postOrCommentId: target
})

export const feedbackComment = (
  userInfo,
  target,
  comment = '',
  time = Date().now(),
  attachMedia = '',
  mediaType = ''
) => ({
  type: FEEDBACK.COMMENT,
  comment,
  time,
  attachMedia,
  mediaType,
  user: userInfo,
  postOrCommentId: target
})

export const feedbackShare = (userInfo, time = Date().now(), postId) => ({
  type: FEEDBACK.SHARE,
  time,
  user: userInfo,
  postId
})

export const undoReact = (userInfo, target) => ({
  type: FEEDBACK.UNDO_REACT,
  user: userInfo,
  postOrCommentId: target
})
