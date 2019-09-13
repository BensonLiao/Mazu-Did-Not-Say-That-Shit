import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import { updateComment, undoComment } from '../actions'
import MyCommentPlaceholder from '../components/MyCommentPlaceholder'

const mapStateToProps = (state: PostDataState, ownProps: any) => {
  return {
    inputId: ownProps.commentId,
    saying: ownProps.saying
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  doCommentAction: () => {
    const saying = (document.getElementById(
      ownProps.commentId
    ) as HTMLInputElement).value
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
