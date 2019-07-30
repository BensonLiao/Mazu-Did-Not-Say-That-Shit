import { connect } from 'react-redux'
import { getCommentReactArray } from '../reducers/selector'
import CommentReactionSummary from '../components/CommentReactionSummary'

const mapStateToProps = (state, ownProps) => {
  return {
    reactions: getCommentReactArray(state, ownProps.commentId)
  }
}

export default connect(mapStateToProps)(CommentReactionSummary)
