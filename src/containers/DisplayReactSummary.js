import { connect } from 'react-redux'
import ReactionSummary from '../components/ReactionSummary'

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  console.log('ownProps', ownProps)
  return {
    reactions: state.reactReducer.allIds
  }
}

export default connect(mapStateToProps)(ReactionSummary)
