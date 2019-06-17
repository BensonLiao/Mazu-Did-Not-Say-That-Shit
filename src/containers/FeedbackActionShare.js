import React from 'react'
// import { connect } from 'react-redux'
import { FEEDBACK } from '../actions'
import FeedbackActionButton from '../components/FeedbackActionButton'

const FeedbackActionShare = ({ shareMenuOpened }) => {
  const toggleShareMenu = () => console.log('toggleShareMenu')
  return (
    <FeedbackActionButton
      onClick={toggleShareMenu}
      isMenuOpen={shareMenuOpened}
      feedbackType={FEEDBACK.SHARE}
      displayText="分享"
      tooltipText="寄送這個給朋友或張貼在你的動態時報中．"
    />
  )
}

// const mapStateToProps = (state, ownProps) => {
//   console.log('state', state)
//   console.log('ownProps', ownProps)
//   return {
//     shareMenuOpened: false
//   }
// }

// export default connect(mapStateToProps)(FeedbackActionShare)
export default FeedbackActionShare
