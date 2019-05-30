export const REACTIONS = {
  LIKE: 'LIKE',
  HAHA: 'HAHA',
  LOVE: 'LOVE',
  WOW: 'WOW',
  SAD: 'SAD',
  ANGRY: 'ANGRY'
}

export const likeThisPost = byWho => ({
  type: 'REACT_THIS_POST',
  reaction: REACTIONS.LIKE,
  name: byWho
})

export const hahaThisPost = byWho => ({
  type: 'REACT_THIS_POST',
  reaction: REACTIONS.HAHA,
  name: byWho
})

export const loveThisPost = byWho => ({
  type: 'REACT_THIS_POST',
  reaction: REACTIONS.LOVE,
  name: byWho
})

export const wowThisPost = byWho => ({
  type: 'REACT_THIS_POST',
  reaction: REACTIONS.WOW,
  name: byWho
})

export const sadThisPost = byWho => ({
  type: 'REACT_THIS_POST',
  reaction: REACTIONS.SAD,
  name: byWho
})

export const angryThisPost = byWho => ({
  type: 'REACT_THIS_POST',
  reaction: REACTIONS.ANGRY,
  name: byWho
})

export const commentThisPost = (
  byWho,
  comment = '',
  time = Date().now(),
  attachMedia = '',
  mediaType = ''
) => ({
  type: 'COMMENT_THIS_POST',
  comment,
  time,
  attachMedia,
  mediaType,
  name: byWho
})

export const shareThisPost = (byWho, time = Date().now()) => ({
  type: 'SHARE_THIS_POST',
  time,
  name: byWho
})

export const undoReactionToPost = byWho => ({
  type: 'UNDO_REACTION_TO_POST',
  name: byWho
})
