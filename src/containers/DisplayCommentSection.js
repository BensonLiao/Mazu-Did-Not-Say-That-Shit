import { connect } from 'react-redux'
import { getRealCommentArray } from '../reducers/selector'
import CommentSection from '../components/CommentSection'

const mapStateToProps = state => {
  return {
    comments: getRealCommentArray(state)
  }
}

export default connect(mapStateToProps)(CommentSection)
