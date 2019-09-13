import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import { getCommentIsFetching, getCommentIds } from '../reducers/selector'
import CommentSection from '../components/CommentSection'

const mapStateToProps = (state: PostDataState) => {
  return {
    isFetching: getCommentIsFetching(state),
    commentIds: getCommentIds(state)
  }
}

export default connect(mapStateToProps)(CommentSection)
