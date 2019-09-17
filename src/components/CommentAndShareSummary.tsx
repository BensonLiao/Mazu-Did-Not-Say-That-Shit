import React from 'react'
// import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { displayFlex } from '../styles/page'
import { CommentDataState, ShareDataState } from '../reducers/types'
import { CommentData, ShareData } from '../actions/types'
import textFormat, { FEEDBACK_TYPE } from '../utils/textFormat'
import FeedbackCount from './FeedbackCount'

const summaryFeedbacks = (
  feedbacks: Array<CommentData> | Array<ShareData>,
  type: FEEDBACK_TYPE
) => {
  const summary = {
    forText: '',
    forTip: ''
  }
  summary.forText = textFormat.getFeedbacksCount(feedbacks, type)
  summary.forTip = textFormat.getFeedbacksCountTip(feedbacks, 18)
  return summary
}

interface StyledComponentProps {
  isFetching: boolean
}

const CommentAndShareSummaryWrapper = styled.div<StyledComponentProps>`
  ${({ isFetching }) => isFetching && 'display: none;'}
  ${displayFlex}
`

const SharesWrapper = styled.div`
  margin-left: 8px;
`

interface CommentAndShareSummaryProps {
  isFetching: boolean
  commentIds: Array<string>
  comments: CommentDataState
  shareIds: Array<string>
  shares: ShareDataState
}

const CommentAndShareSummary: React.FC<CommentAndShareSummaryProps> = ({
  isFetching,
  commentIds,
  comments,
  shareIds,
  shares
}) => {
  const commentArray = commentIds.map(id => comments[id])
  const shareArray = shareIds.map(id => shares[id])
  const commentsSummary = summaryFeedbacks(commentArray, FEEDBACK_TYPE.COMMENT)
  const sharesSummary = summaryFeedbacks(shareArray, FEEDBACK_TYPE.SHARE)
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

// CommentAndShareSummary.propTypes = {
//   isFetching: PropTypes.bool,
//   commentIds: PropTypes.arrayOf(PropTypes.string),
//   comments: PropTypes.shape({
//     id: PropTypes.string,
//     user: PropTypes.shape({
//       profileName: PropTypes.string,
//       profileLink: PropTypes.string,
//       profileImg: PropTypes.string,
//       isVerified: PropTypes.bool
//     }),
//     isHidden: PropTypes.bool,
//     saying: PropTypes.string,
//     attachMedia: PropTypes.string
//   }),
//   shareIds: PropTypes.arrayOf(PropTypes.string),
//   shares: PropTypes.PropTypes.shape({
//     id: PropTypes.string,
//     user: PropTypes.shape({
//       profileName: PropTypes.string,
//       profileLink: PropTypes.string,
//       profileImg: PropTypes.string,
//       isVerified: PropTypes.bool
//     })
//   })
// }

// CommentAndShareSummary.defaultProps = {
//   isFetching: false,
//   commentIds: [],
//   comments: {},
//   shareIds: [],
//   shares: {}
// }

export default CommentAndShareSummary
