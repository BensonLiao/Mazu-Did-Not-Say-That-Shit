import { connect } from 'react-redux'
import {
  getCommentReactionIds,
  getCommentReactions
} from '../reducers/selector'
import CommentReactionSummary from '../components/CommentReactionSummary'

const mapStateToProps = (state, ownProps) => {
  return {
    commentId: ownProps.commentId,
    reactionIds: getCommentReactionIds(state),
    reactions: getCommentReactions(state)
  }
}

export default connect(mapStateToProps)(CommentReactionSummary)
