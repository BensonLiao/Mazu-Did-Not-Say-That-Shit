import React from 'react'
import { PropTypes } from 'prop-types'
import isEqual from 'lodash/isEqual'
import styled from 'styled-components'
import { displayFlex } from '../styles'
import textFormat from '../utils/textFormat'
import FeedbackCount from './FeedbackCount'

const summaryFeedbacks = (feedbacks, type) => {
  const summary = {
    forText: '',
    forTip: ''
  }
  summary.forText = textFormat.getFeedbacksCount(feedbacks, type)
  summary.forTip = textFormat.getFeedbacksCountTip(feedbacks, 18)
  return summary
}

const CommentAndShareSummaryWrapper = styled.div`
  ${displayFlex}
  font-size: 14px;
`

const SharesWrapper = styled.div`
  margin-left: 8px;
`

class CommentAndShareSummary extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { comments, shares } = this.props
    if (
      !isEqual(comments, nextProps.comments) ||
      !isEqual(shares, nextProps.shares)
    ) {
      // console.log('Component updates!')
      return true
    }
    return false
  }

  render() {
    const { comments, shares } = this.props
    const commentsSummary = summaryFeedbacks(comments, 'comment')
    const sharesSummary = summaryFeedbacks(shares, 'share')
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
}

CommentAndShareSummary.propTypes = {
  comments: PropTypes.array.isRequired,
  shares: PropTypes.array.isRequired
}

export default CommentAndShareSummary
