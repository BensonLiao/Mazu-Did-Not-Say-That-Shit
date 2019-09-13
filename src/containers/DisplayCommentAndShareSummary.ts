import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import {
  getCommentIsFetching,
  getShareIsFetching,
  getCommentIds,
  getComments,
  getShareIds,
  getShares
} from '../reducers/selector'
import CommentAndShareSummary from '../components/CommentAndShareSummary'

const mapStateToProps = (state: PostDataState) => {
  return {
    isFetching: getCommentIsFetching(state) || getShareIsFetching(state),
    commentIds: getCommentIds(state),
    comments: getComments(state),
    shareIds: getShareIds(state),
    shares: getShares(state)
  }
}

export default connect(mapStateToProps)(CommentAndShareSummary)
