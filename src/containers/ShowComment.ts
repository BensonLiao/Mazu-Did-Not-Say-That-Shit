import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { toggleCommentVisibility } from '../actions'
import CommentFeedbackButton from '../components/CommentFeedbackButton'

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  onClick: () => dispatch(toggleCommentVisibility(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(CommentFeedbackButton)