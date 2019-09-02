import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssConst, displayBlock } from '../styles'
import { styledTooltipOverrideStyle } from '../styles/post'

const FeedbackCountWrapper = styled.span`
  ${styledTooltipOverrideStyle}
  ${displayBlock}
  line-height: 16px;
  max-height: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const FeedbackCount = ({ forTip, forText, type }) => {
  const tooltipId = `tip-for-post-${type.toLowerCase()}-count`
  return (
    <FeedbackCountWrapper data-for={tooltipId} data-tip={forTip}>
      {forText}
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        multiline
        bg={cssConst.tooltipBackgroundBlack}
      />
    </FeedbackCountWrapper>
  )
}

FeedbackCount.displayName = 'FeedbackCount'

FeedbackCount.propTypes = {
  forTip: PropTypes.string.isRequired,
  forText: PropTypes.string.isRequired,
  type: PropTypes.string
}

FeedbackCount.defaultProps = {
  type: 'reaction'
}

export default FeedbackCount
