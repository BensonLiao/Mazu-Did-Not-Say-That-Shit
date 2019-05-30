import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { displayFlex } from '../styles'
import textFormat from '../../utils/textFormat'
import FeedbackCount from './FeedbackCount'

const summaryFeedbacks = (feedbacks, type) => {
  const summary = {
    forText: '',
    forTip: ''
  }
  summary.forText = textFormat.feedbacksCountFormator(feedbacks, type)
  summary.forTip = textFormat.feedbacksCountTipFormator(feedbacks, 18)
  return summary
}

const FeedbackCommentAndSharesWrapper = styled.div`
  ${displayFlex}
  font-size: 14px;
`

const SharesWrapper = styled.div`
  margin-left: 8px;
`

const FeedbackCommentAndShares = props => {
  const commentsSummary = summaryFeedbacks(props.comments, 'comment')
  const sharesSummary = summaryFeedbacks(props.shares, 'share')
  return (
    <FeedbackCommentAndSharesWrapper>
      <FeedbackCount
        forText={commentsSummary.forText}
        forTip={commentsSummary.forTip}
        type="comment"
      />
      <SharesWrapper>
        <FeedbackCount
          forText={sharesSummary.forText}
          forTip={sharesSummary.forTip}
          type="share"
        />
      </SharesWrapper>
    </FeedbackCommentAndSharesWrapper>
  )
}

export default FeedbackCommentAndShares

FeedbackCommentAndShares.propTypes = {
  comments: PropTypes.array.isRequired,
  shares: PropTypes.array.isRequired
}
