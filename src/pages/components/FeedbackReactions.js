import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { alignCenter } from '../styles'
import textFormat from '../../utils/textFormat'
import FeedbackCount from './FeedbackCount'
import ReactionFirstIcon from './ReactionFirstIcon'
import ReactionSecondIcon from './ReactionSecondIcon'
import ReactionThirdIcon from './ReactionThirdIcon'

const rankingReactions = reactions => {
  const reactionsCounts = []
  const reactionLikes = reactions.filter(reactor => reactor.type === 'like')
  const reactionHahas = reactions.filter(reactor => reactor.type === 'haha')
  const reactionLoves = reactions.filter(reactor => reactor.type === 'love')
  reactionsCounts.push({type: 'Like', total: reactionLikes.length})
  reactionsCounts.push({type: 'Haha', total: reactionHahas.length})
  reactionsCounts.push({type: 'Love', total: reactionLoves.length})
  const sortedReactions = reactionsCounts.sort((a, b) => {
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
    reactor => reactor.type === rank.topMost.type
  )
  const secondMostReactions = reactions.filter(
    reactor => reactor.type === rank.secondMost.type
  )
  const thirdMostReactions = reactions.filter(
    reactor => reactor.type === rank.thirdMost.type
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

const FeedbackReactionsContainer = styled.div`
  display: flex;
  font-size: 14px;
  min-width: 100px;
  ${alignCenter}
`

const FeedbackReactions = props => {
  const reactionsRank = rankingReactions(props.reactions)
  const reactionsSummary = summaryReactions(props.reactions, reactionsRank)
  return (
    <FeedbackReactionsContainer>
      <ReactionFirstIcon
        reactionType={reactionsRank.topMost.type}
        countSummary={reactionsSummary.topMost}
      />
      <ReactionSecondIcon
        reactionType={reactionsRank.secondMost.type}
        countSummary={reactionsSummary.secondMost}
      />
      <ReactionThirdIcon
        reactionType={reactionsRank.thirdMost.type}
        countSummary={reactionsSummary.thirdMost}
      />
      <FeedbackCount
        forText={reactionsSummary.all.forText}
        forTip={reactionsSummary.all.forTip}
      />
    </FeedbackReactionsContainer>
  )
}

export default FeedbackReactions

FeedbackReactions.propTypes = {
  reactions: PropTypes.array.isRequired
}
