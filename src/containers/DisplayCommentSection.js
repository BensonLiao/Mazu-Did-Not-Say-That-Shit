import { connect } from 'react-redux'
import { getCommentArray } from '../reducers/selector'
import CommentSection from '../components/CommentSection'

const mapStateToProps = state => {
  return {
    comments: getCommentArray(state)
  }
}

export default connect(mapStateToProps)(CommentSection)
