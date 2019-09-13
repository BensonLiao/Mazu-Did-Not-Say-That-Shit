import React from 'react'
import PropTypes from 'prop-types'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import { REACTIONS } from '../actions/types'
import { feedbackReactToComment, undoReactToComment } from '../actions'
import { isReactedToComment } from '../reducers/selector'
import appConst from '../utils/constants'
import CommentFeedbackButton from '../components/CommentFeedbackButton'

const FeedbackActionReactToComment = ({
  reactId,
  reacted,
  doReactAction,
  undoReactAction
}) => {
  const toggleReactAction = () => {
    if (reacted) {
      undoReactAction(reactId)
    } else {
      doReactAction(reactId)
    }
  }
  return <CommentFeedbackButton reacted={reacted} onClick={toggleReactAction} />
}

FeedbackActionReactToComment.propTypes = {
  reactId: PropTypes.string.isRequired,
  reacted: PropTypes.bool.isRequired,
  doReactAction: PropTypes.func.isRequired,
  undoReactAction: PropTypes.func.isRequired
}

const mapStateToProps = (state: PostDataState, ownProps: any) => {
  // console.log('state', state)
  // console.log('ownProps', ownProps)
  // Pass reacted by props if a fake react id detected,
  // otherwise pass by redux.
  // A fake react id are used for testing or storybook.
  const hasFakeReactId = ownProps.reactId === appConst.fakeReactId
  const passByPropsOrRedux = hasFakeReactId
    ? ownProps.reacted
    : isReactedToComment(state, ownProps.reactId)
  return {
    reactId: ownProps.reactId,
    reacted: passByPropsOrRedux
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  doReactAction: (reactId: string) => {
    const actionData = {
      entities: {
        id: reactId,
        user: ownProps.you,
        feeling: REACTIONS.LIKE,
        targetId: ownProps.targetId
      }
    }
    return dispatch(feedbackReactToComment(actionData))
  },
  undoReactAction: (reactId: string) => dispatch(undoReactToComment(reactId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackActionReactToComment)
