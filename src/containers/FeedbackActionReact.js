import { connect } from 'react-redux'
import { feedbackLike, undoReact } from '../actions'
import FeedbackActionButton from '../components/FeedbackActionButton'

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
  doReact: reactId => dispatch(feedbackLike(ownProps.user, reactId)),
  undoReact: reactId => dispatch(undoReact(reactId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackActionButton)
