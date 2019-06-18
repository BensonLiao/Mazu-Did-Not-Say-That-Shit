export const myReact = (state, id) => state.reactReducer.byId[id]
export const isReacted = (state, id) => state.reactReducer.allIds.includes(id)
