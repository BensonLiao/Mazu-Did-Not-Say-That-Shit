import { connect } from 'react-redux'
import { getComment } from '../reducers/selector'
import CommentWithFeedback from '../components/CommentWithFeedback'

const mapStateToProps = (state, ownProps) => {
  return {
    comment: getComment(state, ownProps.commentId)
  }
}

export default connect(mapStateToProps)(CommentWithFeedback)
