import React from 'react'
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

export interface StyledContainerProps {
  withComponent: WITH_COMPONENT
}

const ReactionTopMostIconWrapper = styled.div<StyledContainerProps>`
  ${styledTooltipOverrideStyle}
  ${({ withComponent }) => getIconSize(withComponent)}
  ${({ withComponent }) =>
    withComponent === WITH_COMPONENT.COMMENT && displayInlineBlock}
  ${({ withComponent }) =>
    withComponent === WITH_COMPONENT.COMMENT && 'border-right: 2px solid #fff;'}
  position: relative;
  margin-left: -2px;
  z-index: 3;
  vertical-align: top;
`

export interface StyledIconProps extends StyledContainerProps {
  reactFeeling?: REACTIONS
}

const TopMostIcon = styled.i<StyledIconProps>`
  ${reactionIconBaseStyle}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling, props.withComponent)}
`

const tooltipId = 'tip-for-post-first-most-reaction'

export interface ReactionIconProps extends StyledIconProps {
  countSummary?: string
}

const ReactionTopMostIcon = ({
  reactFeeling = REACTIONS.LIKE,
  withComponent,
  countSummary = ''
}: ReactionIconProps) => {
  return (
    <ReactionTopMostIconWrapper
      data-for={tooltipId}
      data-tip={countSummary}
      withComponent={withComponent}
    >
      <TopMostIcon reactFeeling={reactFeeling} withComponent={withComponent} />
      {countSummary.length > 0 && (
        <StyledTooltip id={tooltipId} effect="solid" multiline />
      )}
    </ReactionTopMostIconWrapper>
  )
}

ReactionTopMostIcon.displayName = 'ReactionTopMostIcon'

export default ReactionTopMostIcon
