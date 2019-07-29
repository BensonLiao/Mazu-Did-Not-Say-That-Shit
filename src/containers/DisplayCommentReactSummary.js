import { connect } from 'react-redux'
// import DataHelper from '../utils/dataHelper'
import { getCommentReactArray } from '../reducers/selector'
import CommentReactionSummary from '../components/CommentReactionSummary'

const mapStateToProps = (state, ownProps) => {
  // const dataHelper = new DataHelper(state)
  return {
    reactions: getCommentReactArray(state, ownProps.commentId)
  }
}

export default connect(mapStateToProps)(CommentReactionSummary)
