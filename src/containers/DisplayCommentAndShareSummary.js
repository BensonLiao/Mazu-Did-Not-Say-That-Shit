import { connect } from 'react-redux'
import { getCommentArray, getShareArray } from '../reducers/selector'
import CommentAndShareSummary from '../components/CommentAndShareSummary'

const mapStateToProps = state => {
  return {
    comments: getCommentArray(state),
    shares: getShareArray(state)
  }
}

export default connect(mapStateToProps)(CommentAndShareSummary)
