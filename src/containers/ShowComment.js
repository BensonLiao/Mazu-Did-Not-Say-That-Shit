import { connect } from 'react-redux'
import { toggleCommentVisibility } from '../actions'
import CommentFeedbackButton from '../components/CommentFeedbackButton'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleCommentVisibility(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(CommentFeedbackButton)
