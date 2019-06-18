import { connect } from 'react-redux'
import DataHelper from '../utils/dataHelper'
import CommentAndShareSummary from '../components/CommentAndShareSummary'

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  console.log('ownProps', ownProps)
  const dataHelper = new DataHelper(state)
  return {
    comments: dataHelper.getCommentArray,
    shares: dataHelper.getShareArray
  }
}

export default connect(mapStateToProps)(CommentAndShareSummary)
