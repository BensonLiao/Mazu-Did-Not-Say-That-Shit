export const FEEDBACK = {
  REACT: 'REACT',
  UNDO_REACT: 'UNDO_REACT',
  COMMENT: 'COMMENT',
  SHARE: 'SHARE'
}

export const REACTIONS = {
  LIKE: 'LIKE',
  HAHA: 'HAHA',
  LOVE: 'LOVE',
  WOW: 'WOW',
  SAD: 'SAD',
  ANGRY: 'ANGRY'
}

export const feedbackLike = (byWho, targetId) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.LIKE,
  name: byWho,
  comment_or_post_id: targetId
})

export const feedbackHaha = (byWho, targetId) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.HAHA,
  name: byWho,
  comment_or_post_id: targetId
})

export const feedbackLove = (byWho, targetId) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.LOVE,
  name: byWho,
  comment_or_post_id: targetId
})

export const feedbackWow = (byWho, targetId) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.WOW,
  name: byWho,
  comment_or_post_id: targetId
})

export const feedbackSad = (byWho, targetId) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.SAD,
  name: byWho,
  comment_or_post_id: targetId
})

export const feedbackAngry = (byWho, targetId) => ({
  type: FEEDBACK.REACT,
  reaction: REACTIONS.ANGRY,
  name: byWho,
  comment_or_post_id: targetId
})

export const feedbackComment = (
  byWho,
  targetId,
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
  name: byWho,
  comment_or_post_id: targetId
})

export const feedbackShare = (byWho, time = Date().now(), postId) => ({
  type: FEEDBACK.SHARE,
  time,
  name: byWho,
  post_id: postId
})

export const undoReact = (byWho, targetId) => ({
  type: FEEDBACK.UNDO_REACT,
  name: byWho,
  comment_or_post_id: targetId
})
