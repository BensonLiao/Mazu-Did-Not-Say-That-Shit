import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { toggleCommentVisibility } from '../actions'
import CommentFeedbackButton from '../components/CommentFeedbackButton'

interface ShowComment {
  commentId: string
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ShowComment) => ({
  onClick: () => dispatch(toggleCommentVisibility(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(CommentFeedbackButton)
