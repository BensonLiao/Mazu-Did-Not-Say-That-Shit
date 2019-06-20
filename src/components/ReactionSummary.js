import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { alignCenter } from '../styles'
import textFormat from '../utils/textFormat'
import { REACTIONS } from '../actions'
import FeedbackCount from './FeedbackCount'
import ReactionFirstIcon from './ReactionFirstIcon'
import ReactionSecondIcon from './ReactionSecondIcon'
import ReactionThirdIcon from './ReactionThirdIcon'

const rankingReactions = reactions => {
  const reactionsCount = Object.keys(REACTIONS).map(feeling => {
    const totalFeeling = reactions.filter(
      reactor => reactor.feeling === feeling
    ).length
    return { feeling, total: totalFeeling }
  })
  const sortedReactions = reactionsCount.sort((a, b) => {
    return b.total - a.total
  })
  const rank = {
    topMost: sortedReactions[0],
    secondMost: sortedReactions[1],
    thirdMost: sortedReactions[2]
  }
  return rank
}

const summaryReactions = (reactions, rank) => {
  const summary = {
    all: {
      forText: '',
      forTip: ''
    },
    topMost: '',
    secondMost: '',
    thirdMost: ''
  }
  const topMostReactions = reactions.filter(
    reactor => reactor.feeling === rank.topMost.feeling
  )
  const secondMostReactions = reactions.filter(
    reactor => reactor.feeling === rank.secondMost.feeling
  )
  const thirdMostReactions = reactions.filter(
    reactor => reactor.feeling === rank.thirdMost.feeling
  )
  summary.all.forText = textFormat.reactionsCountFormator(reactions)
  summary.all.forTip = textFormat.feedbacksCountTipFormator(reactions, 18)
  summary.topMost = textFormat.feedbacksCountTipFormator(topMostReactions, 18)
  summary.secondMost = textFormat.feedbacksCountTipFormator(
    secondMostReactions,
    18
  )
  summary.thirdMost = textFormat.feedbacksCountTipFormator(
    thirdMostReactions,
    18
  )
  return summary
}

const ReactionSummaryWrapper = styled.div`
  display: flex;
  font-size: 14px;
  min-width: 100px;
  ${alignCenter}
`

const ReactionSummary = ({ reactions }) => {
  const reactionsRank = rankingReactions(reactions)
  const reactionsSummary = summaryReactions(reactions, reactionsRank)
  return (
    <ReactionSummaryWrapper>
      <ReactionFirstIcon
        reactFeeling={reactionsRank.topMost.feeling}
        countSummary={reactionsSummary.topMost}
      />
      {reactionsRank.secondMost.total > 0 && (
        <ReactionSecondIcon
          reactFeeling={reactionsRank.secondMost.feeling}
          countSummary={reactionsSummary.secondMost}
        />
      )}
      {reactionsRank.thirdMost.total > 0 && (
        <ReactionThirdIcon
          reactFeeling={reactionsRank.thirdMost.feeling}
          countSummary={reactionsSummary.thirdMost}
        />
      )}
      <FeedbackCount
        forText={reactionsSummary.all.forText}
        forTip={reactionsSummary.all.forTip}
      />
    </ReactionSummaryWrapper>
  )
}

ReactionSummary.propTypes = {
  reactions: PropTypes.array.isRequired
}

export default ReactionSummary
