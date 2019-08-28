// Reactions of post
export const getReactionIsFetching = state =>
  state.reactReducer.allIds.isFetching
export const getReactionIds = state => state.reactReducer.allIds.items
export const getReactions = state => state.reactReducer.byId
export const isReacted = (state, id) =>
  state.reactReducer.allIds.items.includes(id)
// Reactions of comment
export const getCommentReactionIsFetching = state =>
  state.commentReactReducer.allIds.isFetching
export const getCommentReactionIds = state =>
  state.commentReactReducer.allIds.items
export const getCommentReactions = state => state.commentReactReducer.byId
export const isReactedToComment = (state, id) => {
  return state.commentReactReducer.allIds.items.includes(id)
}
// Comments of post
export const getCommentIsFetching = state =>
  state.commentReducer.allIds.isFetching
export const getCommentIds = state => state.commentReducer.allIds.items
export const getComments = state => state.commentReducer.byId
export const getComment = (state, id) => state.commentReducer.byId[id]
// Shares of post
export const getShareIsFetching = state => state.shareReducer.allIds.isFetching
export const getShareIds = state => state.shareReducer.allIds.items
export const getShares = state => state.shareReducer.byId
