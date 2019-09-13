import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import {
  getReactionIsFetching,
  getReactionIds,
  getReactions
} from '../reducers/selector'
import ReactionSummary from '../components/ReactionSummary'

const mapStateToProps = (state: PostDataState) => {
  return {
    isFetching: getReactionIsFetching(state),
    reactionIds: getReactionIds(state),
    reactions: getReactions(state)
  }
}

export default connect(mapStateToProps)(ReactionSummary)
