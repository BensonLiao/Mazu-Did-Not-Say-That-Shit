export const myReact = (state, id) => state.reactReducer.byId[id]
export const isReacted = (state, id) => state.reactReducer.allIds.includes(id)
export const isReactedToComment = (state, id) =>
  state.commentReactReducer.allIds.includes(id)
