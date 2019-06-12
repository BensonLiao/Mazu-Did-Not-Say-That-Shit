import { connect } from 'react-redux'
import CommentAndShareSummary from '../components/CommentAndShareSummary'

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  console.log('ownProps', ownProps)
  return {
    comments: state.commentReducer.allIds,
    shares: state.shareReducer.allIds
  }
}

export default connect(mapStateToProps)(CommentAndShareSummary)
