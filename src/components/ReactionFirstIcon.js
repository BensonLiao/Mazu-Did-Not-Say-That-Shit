import React from 'react'
import styled from 'styled-components'
import { REACTIONS } from '../actions'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionIconWrapperStyle,
  reactionIconBaseStyle,
  reactionLikeIconStyle,
  reactionHahaIconStyle,
  reactionLoveIconStyle
} from '../styles/post'

const ReactionFirstIconWrapper = styled.div`
  ${reactionIconWrapperStyle}
  margin-left: -2px;
  margin-right: 2px;
  z-index: 3;
`

const FirstIcon = styled.i`
  ${reactionIconBaseStyle}
  ${props => {
    switch (props.reactionType) {
      default:
        return reactionLikeIconStyle
      case REACTIONS.HAHA:
        return reactionHahaIconStyle
      case REACTIONS.LOVE:
        return reactionLoveIconStyle
    }
  }}
`

const ReactionFirstIcon = ({
  reactionType = REACTIONS.LIKE,
  countSummary = ''
}) => {
  const tooltipId = 'tip-for-post-first-most-reaction'
  return (
    <ReactionFirstIconWrapper data-for={tooltipId} data-tip={countSummary}>
      <FirstIcon reactionType={reactionType} />
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        multiline
        bg={cssVar.tooltipBackgroundBlack}
      />
    </ReactionFirstIconWrapper>
  )
}

ReactionFirstIcon.displayName = 'ReactionFirstIcon'

export default ReactionFirstIcon
