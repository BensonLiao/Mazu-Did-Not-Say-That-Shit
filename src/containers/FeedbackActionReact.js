import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { feedbackReact, undoReact, REACTIONS } from '../actions'
import { getReactionIsFetching, isReacted } from '../reducers/selector'
import appConst from '../utils/constants'
import FeedbackActionButton from '../components/FeedbackActionButton'

const FeedbackActionReact = ({
  reactId,
  isFetching,
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
  return (
    <FeedbackActionButton
      isFetching={isFetching}
      reacted={reacted}
      onClick={toggleReactAction}
    />
  )
}

FeedbackActionReact.propTypes = {
  reactId: PropTypes.string.isRequired,
  reacted: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  doReactAction: PropTypes.func.isRequired,
  undoReactAction: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  // Pass reacted by props if a fake react id detected,
  // otherwise pass by redux.
  // A fake react id are used for testing or storybook.
  const hasFakeReactId = ownProps.reactId === appConst.fakeReactId
  const passByPropsOrRedux = hasFakeReactId
    ? ownProps.reacted
    : isReacted(state, ownProps.reactId)
  return {
    reactId: ownProps.reactId,
    isFetching: getReactionIsFetching(state),
    reacted: passByPropsOrRedux
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  doReactAction: reactId => {
    const actionData = {
      entities: {
        id: reactId,
        user: ownProps.you,
        feeling: REACTIONS.LIKE,
        targetId: ownProps.targetId
      }
    }
    return dispatch(feedbackReact(actionData))
  },
  undoReactAction: reactId => dispatch(undoReact(reactId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackActionReact)
