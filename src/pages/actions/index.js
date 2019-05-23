export const likeToPost = byWho => ({
  type: 'LIKE_TO_POST',
  reaction: 'Like',
  name: byWho
})

export const hahaToPost = byWho => ({
  type: 'HAHA_TO_POST',
  reaction: 'Haha',
  name: byWho
})

export const loveToPost = byWho => ({
  type: 'LOVE_TO_POST',
  reaction: 'Love',
  name: byWho
})

export const undoReactionToPost = byWho => ({
  type: 'UNDO_REACTION_TO_POST',
  name: byWho
})
