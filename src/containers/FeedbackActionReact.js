import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import { feedbackReactLike, undoReact } from '../actions'
import FeedbackActionButton from '../components/FeedbackActionButton'

const FeedbackActionReact = ({ reacted, doReactAction, undoReactAction }) => {
  const toggleReactAction = (id = uuidv1()) =>
    (reacted ? undoReactAction(id) : doReactAction(id))
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
  // doReact: () => {
  //   console.log('doReact')
  // },
  doReactAction: reactId => dispatch(feedbackReactLike(ownProps.user, reactId)),
  undoReactAction: reactId => dispatch(undoReact(reactId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackActionReact)
