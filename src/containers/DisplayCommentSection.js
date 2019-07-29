import { connect } from 'react-redux'
// import DataHelper from '../utils/dataHelper'
import { getCommentArray } from '../reducers/selector'
import CommentSection from '../components/CommentSection'

const mapStateToProps = state => {
  // const dataHelper = new DataHelper(state)
  return {
    comments: getCommentArray(state)
  }
}

export default connect(mapStateToProps)(CommentSection)
