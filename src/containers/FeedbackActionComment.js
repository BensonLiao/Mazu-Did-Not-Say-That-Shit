import uuidv1 from 'uuid/v1'
import { connect } from 'react-redux'
import { FEEDBACK, feedbackComment } from '../actions'
import MyCommentPlaceholder from '../components/MyCommentPlaceholder'

const mapStateToProps = (state, ownProps) => {
  return {
    reactId: ownProps.reactId,
    inputId: ownProps.myCommentInputCompId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  doCommentAction: () => {
    const saying = document.getElementById(ownProps.myCommentInputCompId).value
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
