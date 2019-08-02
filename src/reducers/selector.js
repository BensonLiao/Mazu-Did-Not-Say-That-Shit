export const myReact = (state, id) => state.reactReducer.byId[id]
export const isReacted = (state, id) => state.reactReducer.allIds.includes(id)
export const isReactedToComment = (state, id) => {
  return state.commentReactReducer.allIds.includes(id)
}
export const isCommentHiddden = (state, id) => {
  return state.commentReducer.byId[id].isHidden
}
export const getReactArray = state => {
  return state.reactReducer.allIds.map(
    reactId => state.reactReducer.byId[reactId]
  )
}
export const getCommentReactArray = (state, commentId) => {
  const reacts = []
  state.commentReactReducer.allIds.forEach(reactId => {
    const reactObj = state.commentReactReducer.byId[reactId]
    if (reactObj.targetId === commentId) {
      reacts.push(reactObj)
    }
  })
  return reacts
}
export const getCommentIds = state => state.commentReducer.allIds
export const getComment = (state, id) => {
  return state.commentReducer.byId[id]
}
export const getCommentArray = state => {
  return state.commentReducer.allIds.map(
    commentId => state.commentReducer.byId[commentId]
  )
}
export const getRealCommentArray = state => {
  return state.commentReducer.allIds
    .map(commentId => state.commentReducer.byId[commentId])
    .filter(comment => !comment.user.profileName.includes('假帳號'))
}
export const getShareArray = state => {
  return state.shareReducer.allIds.map(
    shareId => state.shareReducer.byId[shareId]
  )
}
