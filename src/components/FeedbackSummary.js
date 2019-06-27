import React from 'react'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import { displayFlex, justifyContentSpaceBetween } from '../styles/page'
import DisplayReactSummary from '../containers/DisplayReactSummary'
import DisplayCommentAndShareSummary from '../containers/DisplayCommentAndShareSummary'

const FeedbackSummaryWrapper = styled.div`
  ${displayFlex}
  ${justifyContentSpaceBetween}
  color: ${cssVar.infoColorGray}
  border-bottom: ${cssVar.postSectionBorder};
  margin: 10px 12px 0 12px;
  padding: 0 0 10px 0;
`

const FeedbackSummary = () => {
  return (
    <FeedbackSummaryWrapper>
      <DisplayReactSummary />
      <DisplayCommentAndShareSummary />
    </FeedbackSummaryWrapper>
  )
}

FeedbackSummary.displayName = 'FeedbackSummary'

export default FeedbackSummary
