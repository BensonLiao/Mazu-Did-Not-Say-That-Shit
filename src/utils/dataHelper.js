export default class dataHelper {
  constructor(state) {
    this.state = state
  }

  getReactArray() {
    const { reactReducer, userReducer } = this.state
    // console.log('reactReducer.byId', reactReducer.byId)
    // console.log('userReducer.byId', userReducer.byId)
    const reacts = reactReducer.allIds.map(reactId => {
      const reactObj = reactReducer.byId[reactId]
      if (typeof reactObj.user === 'string') {
        reactObj.user = userReducer.byId[reactObj.user]
      }
      return reactObj
    })
    // console.log('getReactArray', reacts)
    return reacts
  }

  getCommentArray() {
    const { commentReducer, userReducer } = this.state
    const comments = commentReducer.allIds.map(commentId => {
      const commentObj = commentReducer.byId[commentId]
      if (typeof commentObj.user === 'string') {
        commentObj.user = userReducer.byId[commentObj.user]
      }
      return commentObj
    })
    return comments
  }

  getShareArray() {
    const { shareReducer, userReducer } = this.state
    const shares = shareReducer.allIds.map(shareId => {
      const shareObj = shareReducer.byId[shareId]
      if (typeof shareObj.user === 'string') {
        shareObj.user = userReducer.byId[shareObj.user]
      }
      return shareObj
    })
    return shares
  }
}
