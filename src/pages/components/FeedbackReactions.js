import React from 'react'
import { PropTypes } from 'prop-types'
import ReactionCounts from './ReactionCounts'
import ReactionFirstIcon from './ReactionFirstIcon'
import ReactionSecondIcon from './ReactionSecondIcon'
import ReactionThirdIcon from './ReactionThirdIcon'

const FeedbackReactions = props => {
  return (
    <React.Fragment>
      <ReactionFirstIcon reactionType={props.reactions.topMostType} />
      <ReactionSecondIcon reactionType={props.reactions.topMostType} />
      <ReactionThirdIcon reactionType={props.reactions.topMostType} />
      <ReactionCounts reactions={props.reactions} />
    </React.Fragment>
  )
}

export default FeedbackReactions

FeedbackReactions.propTypes = {
  reactions: PropTypes.shape({
    topMostType: PropTypes.string.isRequired,
    secondMostType: PropTypes.string.isRequired,
    thirdMostType: PropTypes.string.isRequired,
    topMost: PropTypes.array.isRequired,
    secondMost: PropTypes.array.isRequired,
    thirdMost: PropTypes.array.isRequired
  }).isRequired
}
