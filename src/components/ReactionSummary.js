import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { alignCenter } from '../styles'
import dataSummary from '../utils/dataSummary'
import FeedbackCount from './FeedbackCount'
import ReactionFirstIcon from './ReactionFirstIcon'
import ReactionSecondIcon from './ReactionSecondIcon'
import ReactionThirdIcon from './ReactionThirdIcon'

const ReactionSummaryWrapper = styled.div`
  display: flex;
  font-size: 14px;
  min-width: 100px;
  ${alignCenter}
`

const ReactionSummary = ({ reactions }) => {
  const reactionSummary = dataSummary.getReactionSummary(reactions)
  return (
    <ReactionSummaryWrapper>
      <ReactionFirstIcon
        reactFeeling={reactionSummary.topMost.feeling}
        countSummary={reactionSummary.topMostTip}
      />
      {reactionSummary.secondMost.total > 0 && (
        <ReactionSecondIcon
          reactFeeling={reactionSummary.secondMost.feeling}
          countSummary={reactionSummary.secondMostTip}
        />
      )}
      {reactionSummary.thirdMost.total > 0 && (
        <ReactionThirdIcon
          reactFeeling={reactionSummary.thirdMost.feeling}
          countSummary={reactionSummary.thirdMostTip}
        />
      )}
      <FeedbackCount
        forText={reactionSummary.all.forText}
        forTip={reactionSummary.all.forTip}
      />
    </ReactionSummaryWrapper>
  )
}

ReactionSummary.propTypes = {
  reactions: PropTypes.array.isRequired
}

export default ReactionSummary
