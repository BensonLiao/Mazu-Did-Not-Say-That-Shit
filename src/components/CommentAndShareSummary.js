import React from 'react'
import { PropTypes } from 'prop-types'
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
  ${({ isFetching }) => isFetching && 'display: none;'}
  ${displayFlex}
  font-size: 14px;
`

const SharesWrapper = styled.div`
  margin-left: 8px;
`

const CommentAndShareSummary = ({
  isFetching,
  commentIds,
  comments,
  shareIds,
  shares
}) => {
  const commentArray = commentIds.map(id => comments[id])
  const shareArray = shareIds.map(id => shares[id])
  const commentsSummary = summaryFeedbacks(commentArray, 'comment')
  const sharesSummary = summaryFeedbacks(shareArray, 'share')
  return (
    <CommentAndShareSummaryWrapper isFetching={isFetching}>
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

CommentAndShareSummary.propTypes = {
  isFetching: PropTypes.bool,
  commentIds: PropTypes.arrayOf(PropTypes.string),
  comments: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.shape({
      profileName: PropTypes.string,
      profileLink: PropTypes.string,
      profileImg: PropTypes.string,
      isVerified: PropTypes.bool
    }),
    isHidden: PropTypes.bool,
    saying: PropTypes.string,
    attachMedia: PropTypes.string
  }),
  shareIds: PropTypes.arrayOf(PropTypes.string),
  shares: PropTypes.PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.shape({
      profileName: PropTypes.string,
      profileLink: PropTypes.string,
      profileImg: PropTypes.string,
      isVerified: PropTypes.bool
    })
  })
}

CommentAndShareSummary.defaultProps = {
  isFetching: false,
  commentIds: [],
  comments: {},
  shareIds: [],
  shares: {}
}

export default CommentAndShareSummary
