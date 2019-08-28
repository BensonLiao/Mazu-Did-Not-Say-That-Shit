import { connect } from 'react-redux'
import {
  getCommentIsFetching,
  getShareIsFetching,
  getCommentIds,
  getComments,
  getShareIds,
  getShares
} from '../reducers/selector'
import CommentAndShareSummary from '../components/CommentAndShareSummary'

const mapStateToProps = state => {
  return {
    isFetching: getCommentIsFetching(state) || getShareIsFetching(state),
    commentIds: getCommentIds(state),
    comments: getComments(state),
    shareIds: getShareIds(state),
    shares: getShares(state)
  }
}

export default connect(mapStateToProps)(CommentAndShareSummary)
