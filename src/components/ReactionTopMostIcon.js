import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { REACTIONS } from '../actions'
import StyledTooltip from './StyledTooltip'
import cssConst from '../styles/constants'
import {
  styledTooltipOverrideStyle,
  getIconSize,
  reactionIconBaseStyle,
  reactionIconSummaryStyle,
  reactionIconStyle
} from '../styles/post'

const ReactionTopMostIconWrapper = styled.div`
  ${styledTooltipOverrideStyle}
  ${props => getIconSize(props.withComponent)}
  margin-left: -2px;
  margin-right: 2px;
  z-index: 3;
`

const TopMostIcon = styled.i`
  ${reactionIconBaseStyle}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling, props.withComponent)}
`

const ReactionTopMostIcon = ({
  reactFeeling = REACTIONS.LIKE,
  withComponent,
  countSummary
}) => {
  const tooltipId = 'tip-for-post-first-most-reaction'
  return (
    <ReactionTopMostIconWrapper
      data-for={tooltipId}
      data-tip={countSummary}
      withComponent={withComponent}
    >
      <TopMostIcon reactFeeling={reactFeeling} withComponent={withComponent} />
      {countSummary.length > 0 && (
        <StyledTooltip
          id={tooltipId}
          effect="solid"
          multiline
          bg={cssConst.tooltipBackgroundBlack}
        />
      )}
    </ReactionTopMostIconWrapper>
  )
}

ReactionTopMostIcon.defaultProps = {
  countSummary: ''
}

ReactionTopMostIcon.propTypes = {
  reactFeeling: PropTypes.string.isRequired,
  withComponent: PropTypes.string.isRequired,
  countSummary: PropTypes.string
}

ReactionTopMostIcon.displayName = 'ReactionTopMostIcon'

export default ReactionTopMostIcon
