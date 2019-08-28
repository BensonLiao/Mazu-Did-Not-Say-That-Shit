import { connect } from 'react-redux'
import {
  getReactionIsFetching,
  getReactionIds,
  getReactions
} from '../reducers/selector'
import ReactionSummary from '../components/ReactionSummary'

const mapStateToProps = state => {
  return {
    isFetching: getReactionIsFetching(state),
    reactionIds: getReactionIds(state),
    reactions: getReactions(state)
  }
}

export default connect(mapStateToProps)(ReactionSummary)
