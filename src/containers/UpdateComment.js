import { connect } from 'react-redux'
import { updateComment, undoComment } from '../actions'
import MyCommentPlaceholder from '../components/MyCommentPlaceholder'

const mapStateToProps = (state, ownProps) => {
  return {
    inputId: ownProps.commentId,
    saying: ownProps.saying
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  doCommentAction: () => {
    const saying = document.getElementById(ownProps.commentId).value
    const actionData = {
      id: ownProps.commentId,
      saying
    }
    return dispatch(updateComment(actionData))
  },
  doDeleteComment: () => dispatch(undoComment(ownProps.commentId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCommentPlaceholder)
