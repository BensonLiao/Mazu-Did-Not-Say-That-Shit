import uuidv1 from 'uuid/v1'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import { getCommentIsFetching } from '../reducers/selector'
import { FEEDBACK, UserData } from '../actions/types'
import { feedbackComment } from '../actions'
import MyCommentPlaceholder from '../components/MyCommentPlaceholder'

export interface FeedbackActionComment {
  // reactId: string
  myCommentInputCompId: string
  you: UserData
}

const mapStateToProps = (
  state: PostDataState,
  ownProps: FeedbackActionComment
) => {
  return {
    // reactId: ownProps.reactId,
    inputId: ownProps.myCommentInputCompId,
    isFetching: getCommentIsFetching(state)
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: FeedbackActionComment
) => ({
  doCommentAction: () => {
    const saying = (document.getElementById(
      ownProps.myCommentInputCompId
    ) as HTMLInputElement).value
    const actionData = {
      entities: {
        id: uuidv1(),
        saying,
        time: '1分鐘',
        attachMedia: '',
        mediaType: '',
        user: ownProps.you,
        targetId: FEEDBACK.TARGET,
        reactId: uuidv1(),
        isHidden: false
      }
    }
    return dispatch(feedbackComment(actionData))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCommentPlaceholder)
