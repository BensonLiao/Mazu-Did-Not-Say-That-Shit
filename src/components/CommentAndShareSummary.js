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

const CommentAndShareSummaryWrapper = styled.div`
  ${displayFlex}
  font-size: 14px;
`

const SharesWrapper = styled.div`
  margin-left: 8px;
`

const CommentAndShareSummary = props => {
  const commentsSummary = summaryFeedbacks(props.comments, 'comment')
  const sharesSummary = summaryFeedbacks(props.shares, 'share')
  return (
    <CommentAndShareSummaryWrapper>
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
    </CommentAndShareSummaryWrapper>
  )
}

export default CommentAndShareSummary

CommentAndShareSummary.propTypes = {
  comments: PropTypes.array.isRequired,
  shares: PropTypes.array.isRequired
}
