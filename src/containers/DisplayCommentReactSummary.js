import { connect } from 'react-redux'
import DataHelper from '../utils/dataHelper'
import CommentReactionSummary from '../components/CommentReactionSummary'

const mapStateToProps = (state, ownProps) => {
  const dataHelper = new DataHelper(state)
  return {
    reactions: dataHelper.getCommentReactArray(ownProps.commentId)
  }
}

export default connect(mapStateToProps)(CommentReactionSummary)
