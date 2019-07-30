import { connect } from 'react-redux'
import { getReactArray } from '../reducers/selector'
import ReactionSummary from '../components/ReactionSummary'

const mapStateToProps = state => {
  // console.log('state', state)
  return {
    reactions: getReactArray(state)
  }
}

export default connect(mapStateToProps)(ReactionSummary)
