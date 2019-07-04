import { connect } from 'react-redux'
import DataHelper from '../utils/dataHelper'
import CommentAndShareSummary from '../components/CommentAndShareSummary'

const mapStateToProps = state => {
  const dataHelper = new DataHelper(state)
  return {
    comments: dataHelper.getCommentArray(),
    shares: dataHelper.getShareArray()
  }
}

export default connect(mapStateToProps)(CommentAndShareSummary)
