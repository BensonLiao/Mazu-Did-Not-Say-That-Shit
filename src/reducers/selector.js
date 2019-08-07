export const getReactionIds = state => state.reactReducer.allIds
export const getReactions = state => state.reactReducer.byId
export const isReacted = (state, id) => state.reactReducer.allIds.includes(id)
export const getCommentReactionIds = state => state.commentReactReducer.allIds
export const getCommentReactions = state => state.commentReactReducer.byId
export const isReactedToComment = (state, id) => {
  return state.commentReactReducer.allIds.includes(id)
}
export const getCommentIds = state => state.commentReducer.allIds
export const getComments = state => state.commentReducer.byId
export const getComment = (state, id) => state.commentReducer.byId[id]
export const getShareIds = state => state.shareReducer.allIds
export const getShares = state => state.shareReducer.byId
