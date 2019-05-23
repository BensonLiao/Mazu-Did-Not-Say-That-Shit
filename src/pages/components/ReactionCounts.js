import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'

const ReactionCountsContainer = styled.span`
  display: block;
  line-height: 16px;
  max-height: 16px;
  curosr: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const ReactionCounts = props => {
  const tooltipId = 'tip-for-post-reaction-counts'
  return (
    <React.Fragment>
      <ReactionCountsContainer
        reactionCounts={props.reactionCounts}
        data-for={tooltipId}
        data-tip={reactionCounts}
      />
      {props.reactionCountsSummary}
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        bg={cssVar.tooltipBackgroundBlack}
      />
    </React.Fragment>
  )
}

ReactionCounts.displayName = 'ReactionCounts'

ReactionCounts.propTypes = {
  reactionCounts: PropTypes.string.isRequired,
  reactionCountsSummary: PropTypes.string.isRequired
}

export default ReactionCounts
