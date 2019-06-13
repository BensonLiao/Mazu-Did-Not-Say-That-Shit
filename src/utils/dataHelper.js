export default class dataHelper {
  constructor(state) {
    this.state = state
  }

  getReactArray() {
    const { reactReducer, userReducer } = this.state
    const reacts = reactReducer.allIds.map(reactId => {
      const reactObj = reactReducer.byId[reactId]
      reactObj.user = userReducer.byId[reactObj.user]
      return reactObj
    })
    return reacts
  }

  getCommentArray() {
    const { commentReducer, userReducer } = this.state
    const comments = commentReducer.allIds.map(commentId => {
      const commentObj = commentReducer.byId[commentId]
      commentObj.user = userReducer.byId[commentObj.user]
      return commentObj
    })
    return comments
  }

  getShareArray() {
    const { shareReducer, userReducer } = this.state
    const shares = shareReducer.allIds.map(shareId => {
      const shareObj = shareReducer.byId[shareId]
      shareObj.user = userReducer.byId[shareObj.user]
      return shareObj
    })
    return shares
  }
}
