import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import {
  getCommentReactionIds,
  getCommentReactions
} from '../reducers/selector'
import CommentReactionSummary from '../components/CommentReactionSummary'

const mapStateToProps = (state: PostDataState, ownProps: any) => {
  return {
    commentId: ownProps.commentId,
    reactionIds: getCommentReactionIds(state),
    reactions: getCommentReactions(state)
  }
}

export default connect(mapStateToProps)(CommentReactionSummary)
