import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import { updateComment, undoComment } from '../actions'
import MyCommentPlaceholder from '../components/MyCommentPlaceholder'

export interface UpdateComment {
  commentId: string
  saying: string
}

const mapStateToProps = (_state: PostDataState, ownProps: UpdateComment) => {
  return {
    inputId: ownProps.commentId,
    saying: ownProps.saying
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: UpdateComment) => ({
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
