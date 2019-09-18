import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { REACTIONS } from '../actions/types'
import StyledTooltip from './StyledTooltip'
import { WITH_COMPONENT } from '../utils/constants'
import { displayInlineBlock } from '../styles/page'
import {
  styledTooltipOverrideStyle,
  getIconSize,
  reactionIconBaseStyle,
  reactionIconSummaryStyle,
  reactionIconStyle
} from '../styles/post'
import { StyledContainerProps, StyledIconProps } from './ReactionTopMostIcon'

const ReactionThirdMostIconWrapper = styled.div<StyledContainerProps>`
  ${styledTooltipOverrideStyle}
  ${({ withComponent }) => getIconSize(withComponent)}
  ${({ withComponent }) =>
    withComponent === WITH_COMPONENT.COMMENT && displayInlineBlock}
  ${({ withComponent }) =>
    withComponent === WITH_COMPONENT.COMMENT && 'border-right: 2px solid #fff;'}
  position: relative;
  margin-left: -2px;
  margin-right: 2px;
  z-index: 1;
  vertical-align: top;
`

const ThirdMostIcon = styled.i<StyledIconProps>`
  ${reactionIconBaseStyle}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling, props.withComponent)}
`

const tooltipId = 'tip-for-post-third-most-reaction'

const ReactionThirdMostIcon = ({
  reactFeeling,
  withComponent,
  countSummary
}) => {
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
        <StyledTooltip id={tooltipId} effect="solid" multiline />
      )}
    </ReactionThirdMostIconWrapper>
  )
}

ReactionThirdMostIcon.defaultProps = {
  reactFeeling: REACTIONS.LOVE,
  countSummary: ''
}

ReactionThirdMostIcon.propTypes = {
  reactFeeling: PropTypes.oneOf(Object.keys(REACTIONS)),
  withComponent: PropTypes.string.isRequired,
  countSummary: PropTypes.string
}

ReactionThirdMostIcon.displayName = 'ReactionThirdMostIcon'

export default ReactionThirdMostIcon
