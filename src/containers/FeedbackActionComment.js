import React from 'react'
// import { connect } from 'react-redux'
import { FEEDBACK } from '../actions'
import FeedbackActionButton from '../components/FeedbackActionButton'

const FeedbackActionComment = () => {
  const focusOnCommentComp = () => console.log('focusOnCommentComp')
  return (
    <FeedbackActionButton
      onClick={focusOnCommentComp}
      feedbackType={FEEDBACK.COMMENT}
      displayText="回應"
      tooltipText="留言"
    />
  )
}

// const mapStateToProps = (state, ownProps) => {
//   console.log('state', state)
//   console.log('ownProps', ownProps)
//   return {
//     reacted: false
//   }
// }

// export default connect(mapStateToProps)(FeedbackActionComment)
export default FeedbackActionComment
