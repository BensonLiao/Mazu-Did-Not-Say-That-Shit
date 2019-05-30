import React from 'react'
import styled from 'styled-components'
import { REACTIONS } from '../actions'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionIconWrapperStyle,
  reactionSecondIconStyle,
  reactionLikeIconStyle,
  reactionHahaIconStyle,
  reactionLoveIconStyle
} from '../styles/post'
import reactionIconImg from '../../assets/img/fb-emojis.0d754b03.png'

const ReactionSecondIconWrapper = styled.div`
  ${reactionIconWrapperStyle}
  margin-left: -2px;
  margin-right: 2px;
  z-index: 2;
`

const SecondIcon = styled.i`
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
  ${reactionSecondIconStyle(reactionIconImg)}
`

const ReactionSecondIcon = ({
  reactionType = REACTIONS.HAHA,
  countSummary = ''
}) => {
  const tooltipId = 'tip-for-post-second-most-reaction'
  return (
    <ReactionSecondIconWrapper data-for={tooltipId} data-tip={countSummary}>
      <SecondIcon reactionType={reactionType} />
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        multiline
        bg={cssVar.tooltipBackgroundBlack}
      />
    </ReactionSecondIconWrapper>
  )
}

ReactionSecondIcon.displayName = 'ReactionSecondIcon'

export default ReactionSecondIcon
