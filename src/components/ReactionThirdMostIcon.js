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

const ReactionThirdMostIconWrapper = styled.div`
  ${styledTooltipOverrideStyle}
  ${props => getIconSize(props.withComponent)}
  margin-left: -2px;
  margin-right: 2px;
  z-index: 1;
`

const ThirdMostIcon = styled.i`
  ${reactionIconBaseStyle}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling, props.withComponent)}
`

const ReactionThirdMostIcon = ({
  reactFeeling = REACTIONS.LOVE,
  withComponent,
  countSummary
}) => {
  const tooltipId = 'tip-for-post-third-most-reaction'
  return (
    <ReactionThirdMostIconWrapper
      data-for={tooltipId}
      data-tip={countSummary}
      withComponent={withComponent}
    >
      <ThirdMostIcon
        reactFeeling={reactFeeling}
        withComponent={withComponent}
      />
      {countSummary.length > 0 && (
        <StyledTooltip
          id={tooltipId}
          effect="solid"
          multiline
          bg={cssConst.tooltipBackgroundBlack}
        />
      )}
    </ReactionThirdMostIconWrapper>
  )
}

ReactionThirdMostIcon.defaultProps = {
  countSummary: ''
}

ReactionThirdMostIcon.propTypes = {
  reactFeeling: PropTypes.string.isRequired,
  withComponent: PropTypes.string.isRequired,
  countSummary: PropTypes.string
}

ReactionThirdMostIcon.displayName = 'ReactionThirdMostIcon'

export default ReactionThirdMostIcon
