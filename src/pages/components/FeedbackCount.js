import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import { styledTooltipOverrideStyle } from '../styles/post'

const FeedbackCountWrapper = styled.span`
  display: block;
  line-height: 16px;
  max-height: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${styledTooltipOverrideStyle}
`

const FeedbackCount = props => {
  const tooltipId = `tip-for-post-${props.type.toLowerCase()}-count`
  return (
    <FeedbackCountWrapper data-for={tooltipId} data-tip={props.forTip}>
      {props.forText}
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        multiline
        bg={cssVar.tooltipBackgroundBlack}
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
