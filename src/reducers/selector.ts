import { PostDataState } from './types'
// Reactions of post
export const getReactionIsFetching = (state: PostDataState) =>
  state.reacts.allIds.isFetching
export const getReactionIds = (state: PostDataState) =>
  state.reacts.allIds.items
export const getReactions = (state: PostDataState) => state.reacts.byId
export const isReacted = (state: PostDataState, id: string) =>
  state.reacts.allIds.items.includes(id)
// Reactions of comment
export const getCommentReactionIsFetching = (state: PostDataState) =>
  state.commentReacts.allIds.isFetching
export const getCommentReactionIds = (state: PostDataState) =>
  state.commentReacts.allIds.items
export const getCommentReactions = (state: PostDataState) =>
  state.commentReacts.byId
export const isReactedToComment = (state: PostDataState, id: string) => {
  return state.commentReacts.allIds.items.includes(id)
}
// Comments of post
export const getCommentIsFetching = (state: PostDataState) =>
  state.comments.allIds.isFetching
export const getCommentIds = (state: PostDataState) =>
  state.comments.allIds.items
export const getComments = (state: PostDataState) => state.comments.byId
export const getComment = (state: PostDataState, id: string) =>
  state.comments.byId[id]
// Shares of post
export const getShareIsFetching = (state: PostDataState) =>
  state.shares.allIds.isFetching
export const getShareIds = (state: PostDataState) => state.shares.allIds.items
export const getShares = (state: PostDataState) => state.shares.byId
