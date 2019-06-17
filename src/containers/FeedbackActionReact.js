import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import { feedbackFeelLike, undoReact } from '../actions'
import FeedbackActionButton from '../components/FeedbackActionButton'

const FeedbackActionReact = ({ reacted, doReactAction, undoReactAction }) => {
  const toggleReactAction = () => {
    const id = uuidv1()
    if (reacted) {
      undoReactAction(id)
    } else {
      doReactAction(id)
    }
    // reacted ? undoReactAction(id) : doReactAction(id)
  }
  return <FeedbackActionButton onClick={toggleReactAction} />
}

FeedbackActionReact.propTypes = {
  reacted: PropTypes.bool.isRequired,
  doReactAction: PropTypes.func.isRequired,
  undoReactAction: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  console.log('ownProps', ownProps)
  return {
    reacted: false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  doReactAction: reactId => {
    return dispatch(feedbackFeelLike(ownProps.you, reactId))
  },
  undoReactAction: reactId => dispatch(undoReact(reactId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackActionReact)
