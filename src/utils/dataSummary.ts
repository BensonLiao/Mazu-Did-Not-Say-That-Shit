import { REACTIONS, ReactData } from '../actions/types'
import textFormat from './textFormat'

export interface FeelingsTotal {
  feeling: string
  total: number
}

export interface ReactsRank extends Array<FeelingsTotal> {}

export interface ReactionSummary {
  all: {
    forText: string
    forTip: string
  }
  topMost: FeelingsTotal
  secondMost: FeelingsTotal
  thirdMost: FeelingsTotal
  topMostTip: string
  secondMostTip: string
  thirdMostTip: string
}

export interface CommentReactionSummary {
  forText: string
  forTip: string
  topMost: FeelingsTotal
  secondMost: FeelingsTotal
  thirdMost: FeelingsTotal
}

export default {
  getRankingReactions(reactions: Array<ReactData>): ReactsRank {
    if (reactions.length === 0) return []
    const reactionsCount = Object.keys(REACTIONS).map(feeling => {
      const totalFeeling = reactions.filter(
        reactor => reactor.feeling === feeling
      ).length
      return { feeling, total: totalFeeling }
    })
    const sortedReactions = reactionsCount.sort((a, b) => {
      return b.total - a.total
    })
    const rank = [...sortedReactions]
    return rank
  },
  getReactionSummary(reactions: Array<ReactData>): ReactionSummary {
    const rank = this.getRankingReactions(reactions)
    const summary = {
      all: {
        forText: '',
        forTip: ''
      },
      topMost: rank[0],
      secondMost: rank[1],
      thirdMost: rank[2],
      topMostTip: '',
      secondMostTip: '',
      thirdMostTip: ''
    }
    const topMostReactions = reactions.filter(
      reactor => reactor.feeling === rank[0].feeling
    )
    const secondMostReactions = reactions.filter(
      reactor => reactor.feeling === rank[1].feeling
    )
    const thirdMostReactions = reactions.filter(
      reactor => reactor.feeling === rank[2].feeling
    )
    summary.all.forText = textFormat.getReactionsCount(reactions)
    summary.all.forTip = textFormat.getFeedbacksCountTip(reactions, 18)
    summary.topMostTip = textFormat.getFeedbacksCountTip(topMostReactions, 18)
    summary.secondMostTip = textFormat.getFeedbacksCountTip(
      secondMostReactions,
      18
    )
    summary.thirdMostTip = textFormat.getFeedbacksCountTip(
      thirdMostReactions,
      18
    )
    return summary
  },
  getCommentReactionSummary(
    reactions: Array<ReactData>
  ): CommentReactionSummary | string {
    if (reactions.length === 0) return ''
    const rank = this.getRankingReactions(reactions)
    const summary = {
      forText: '',
      forTip: '',
      topMost: rank[0],
      secondMost: rank[1],
      thirdMost: rank[2]
    }
    summary.forText = textFormat.getCommentReactionsCount(reactions)
    summary.forTip = textFormat.getCommentReactionsCountTip(reactions, rank)
    // console.log('summary.forTip', summary.forTip)
    return summary
  }
}
