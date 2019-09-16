import React from 'react'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex, justifyContentSpaceBetween } from '../styles/page'
import DisplayReactSummary from '../containers/DisplayReactSummary'
import DisplayCommentAndShareSummary from '../containers/DisplayCommentAndShareSummary'

const FeedbackSummaryWrapper = styled.div`
  ${displayFlex}
  ${justifyContentSpaceBetween}
  color: ${cssConst.infoColorGray}
  border-bottom: ${cssConst.postSectionBorder};
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
