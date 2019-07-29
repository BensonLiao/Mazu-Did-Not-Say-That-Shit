export default class dataHelper {
  constructor(state) {
    this.state = state
  }

  getReactArray() {
    const { reactReducer } = this.state
    // console.log('reactReducer', reactReducer)
    // console.log('userReducer', userReducer)
    const reacts = reactReducer.allIds.map(reactId => {
      const reactObj = reactReducer.byId[reactId]
      return reactObj
    })
    // console.log('getReactArray', reacts)
    return reacts
  }

  getCommentReactArray(commentId) {
    const { commentReactReducer } = this.state
    // console.log('commentReactReducer', commentReactReducer)
    // console.log('userReducer', userReducer)
    const reacts = []
    commentReactReducer.allIds.forEach(reactId => {
      const reactObj = commentReactReducer.byId[reactId]
      if (reactObj.targetId === commentId) {
        reacts.push(reactObj)
      }
    })
    // console.log('getReactArray', reacts)
    return reacts
  }

  getCommentArray() {
    const { commentReducer } = this.state
    const comments = commentReducer.allIds.map(commentId => {
      const commentObj = commentReducer.byId[commentId]
      return commentObj
    })
    // console.log('getCommentArray', comments)
    return comments
  }

  getShareArray() {
    const { shareReducer } = this.state
    const shares = shareReducer.allIds.map(shareId => {
      const shareObj = shareReducer.byId[shareId]
      return shareObj
    })
    return shares
  }
}
