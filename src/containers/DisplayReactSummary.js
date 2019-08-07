import { connect } from 'react-redux'
import { getReactionIds, getReactions } from '../reducers/selector'
import ReactionSummary from '../components/ReactionSummary'

const mapStateToProps = state => {
  return {
    reactionIds: getReactionIds(state),
    reactions: getReactions(state)
  }
}

export default connect(mapStateToProps)(ReactionSummary)
