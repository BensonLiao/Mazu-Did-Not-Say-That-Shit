import { connect } from 'react-redux'
import DataHelper from '../utils/dataHelper'
import CommentSection from '../components/CommentSection'

const mapStateToProps = state => {
  const dataHelper = new DataHelper(state)
  return {
    comments: dataHelper.getCommentArray()
  }
}

export default connect(mapStateToProps)(CommentSection)
