import { connect } from 'react-redux'
// import DataHelper from '../utils/dataHelper'
import { getCommentArray, getShareArray } from '../reducers/selector'
import CommentAndShareSummary from '../components/CommentAndShareSummary'

const mapStateToProps = state => {
  // const dataHelper = new DataHelper(state)
  return {
    comments: getCommentArray(state),
    shares: getShareArray(state)
  }
}

export default connect(mapStateToProps)(CommentAndShareSummary)
