import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { displayFlex, justifyContentSpaceBetween } from '../styles/page'
import FeedbackReactions from './FeedbackReactions'
import FeedbackCommentAndShares from './FeedbackCommentAndShares'

const FeedbackSummaryContainer = styled.div`
  ${displayFlex}
  ${justifyContentSpaceBetween}
  border-bottom: 1px solid #dadde1;
  margin: 10px 12px 0 12px;
  padding: 0 0 10px 0;
`

const FeedbackSummary = props => {
  return (
    <FeedbackSummaryContainer>
      <FeedbackReactions reactions={props.feedback.reactions} />
      <FeedbackCommentAndShares
        comments={props.feedback.comments}
        shares={props.feedback.shares}
      />
    </FeedbackSummaryContainer>
  )
}

FeedbackSummary.displayName = 'FeedbackSummary'

FeedbackSummary.propTypes = {
  feedback: PropTypes.shape({
    reactions: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    shares: PropTypes.array.isRequired
  }).isRequired
}

export default FeedbackSummary
