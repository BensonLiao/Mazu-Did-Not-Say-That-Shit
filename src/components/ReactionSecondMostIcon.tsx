import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { REACTIONS } from '../actions/types'
import StyledTooltip from './StyledTooltip'
import { WITH_COMPONENT } from '../utils/constants'
import cssConst from '../styles/constants'
import { displayInlineBlock } from '../styles/page'
import {
  styledTooltipOverrideStyle,
  getIconSize,
  reactionIconBaseStyle,
  reactionIconSummaryStyle,
  reactionIconStyle
} from '../styles/post'
import { StyledContainerProps, StyledIconProps } from './ReactionTopMostIcon'

const ReactionSecondMostIconWrapper = styled.div<StyledContainerProps>`
  ${styledTooltipOverrideStyle}
  ${({ withComponent }) => getIconSize(withComponent)}
  ${({ withComponent }) =>
    withComponent === WITH_COMPONENT.COMMENT && displayInlineBlock}
  ${({ withComponent }) =>
    withComponent === WITH_COMPONENT.COMMENT && 'border-right: 2px solid #fff;'}
  position: relative;
  margin-left: -2px;
  z-index: 2;
  vertical-align: top;
`

const SecondMostIcon = styled.i<StyledIconProps>`
  ${reactionIconBaseStyle}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling, props.withComponent)}
`

const tooltipId = 'tip-for-post-second-most-reaction'

const ReactionSecondMostIcon = ({
  reactFeeling,
  withComponent,
  countSummary
}) => {
  return (
    <ReactionSecondMostIconWrapper
      data-for={tooltipId}
      data-tip={countSummary}
      withComponent={withComponent}
    >
      <SecondMostIcon
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
    </ReactionSecondMostIconWrapper>
  )
}

ReactionSecondMostIcon.defaultProps = {
  reactFeeling: REACTIONS.HAHA,
  countSummary: ''
}

ReactionSecondMostIcon.propTypes = {
  reactFeeling: PropTypes.oneOf(Object.keys(REACTIONS)),
  withComponent: PropTypes.string.isRequired,
  countSummary: PropTypes.string
}

ReactionSecondMostIcon.displayName = 'ReactionSecondMostIcon'

export default ReactionSecondMostIcon