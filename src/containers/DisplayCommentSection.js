import { connect } from 'react-redux'
import { getCommentIsFetching, getCommentIds } from '../reducers/selector'
import CommentSection from '../components/CommentSection'

const mapStateToProps = state => {
  return {
    isFetching: getCommentIsFetching(state),
    commentIds: getCommentIds(state)
  }
}

export default connect(mapStateToProps)(CommentSection)
