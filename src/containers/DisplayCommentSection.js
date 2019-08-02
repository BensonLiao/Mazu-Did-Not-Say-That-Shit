import { connect } from 'react-redux'
import { getCommentIds } from '../reducers/selector'
import CommentSection from '../components/CommentSection'

const mapStateToProps = state => {
  return {
    commentIds: getCommentIds(state)
  }
}

export default connect(mapStateToProps)(CommentSection)
