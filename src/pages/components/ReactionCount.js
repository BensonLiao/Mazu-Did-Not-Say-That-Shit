import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'

const ReactionCountContainer = styled.span`
  display: block;
  line-height: 16px;
  max-height: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  div.__react_component_tooltip {
    padding: 8px 12px !important;
  }
`

const ReactionCount = props => {
  const tooltipId = 'tip-for-post-reaction-count'
  return (
    <ReactionCountContainer data-for={tooltipId} data-tip={props.forTip}>
      {props.forText}
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        multiline
        bg={cssVar.tooltipBackgroundBlack}
      />
    </ReactionCountContainer>
  )
}

ReactionCount.displayName = 'ReactionCount'

ReactionCount.propTypes = {
  forTip: PropTypes.string.isRequired,
  forText: PropTypes.string.isRequired
}

export default ReactionCount
