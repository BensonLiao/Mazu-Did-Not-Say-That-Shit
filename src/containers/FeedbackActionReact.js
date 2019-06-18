import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getNormalizedData, ReactSchema } from '../utils/dataSchema'
import { feedbackReact, undoReact, FEEDBACK, REACTIONS } from '../actions'
import { isReacted } from '../reducers/selector'
import FeedbackActionButton from '../components/FeedbackActionButton'

const FeedbackActionReact = ({
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
    // reacted ? undoReactAction(id) : doReactAction(id)
  }
  return <FeedbackActionButton onClick={toggleReactAction} />
}

FeedbackActionReact.propTypes = {
  reactId: PropTypes.string.isRequired,
  reacted: PropTypes.bool.isRequired,
  doReactAction: PropTypes.func.isRequired,
  undoReactAction: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  console.log('ownProps', ownProps)
  return {
    reactId: ownProps.reactId,
    reacted: isReacted(state, ownProps.reactId)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  doReactAction: reactId => {
    const actionData = {
      id: reactId,
      user: ownProps.you,
      feeling: REACTIONS.LIKE,
      postOrCommentId: FEEDBACK.TARGET
    }
    const normalizedActionData = getNormalizedData(actionData, ReactSchema)
    return dispatch(feedbackReact(normalizedActionData))
  },
  undoReactAction: reactId => dispatch(undoReact(reactId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackActionReact)
