import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionIconContainerStyle,
  reactionSecondIconStyle,
  reactionLikeIconStyle,
  reactionHahaIconStyle,
  reactionLoveIconStyle
} from '../styles/post'
import reactionIconImg from '../../assets/img/fb-emojis.0d754b03.png'

const ReactionSecondIconContainer = styled.div`
  ${reactionIconContainerStyle}
`

const SecondIcon = styled.i`
  ${props => {
    switch (props.reactionType) {
      default:
        return reactionLikeIconStyle
      case 'Haha':
        return reactionHahaIconStyle
      case 'Love':
        return reactionLoveIconStyle
    }
  }}
  ${reactionSecondIconStyle(reactionIconImg)}
`

const ReactionSecondIcon = ({ reactionType = 'Haha', countSummary = '' }) => {
  const tooltipId = 'tip-for-post-second-most-reaction'
  return (
    <ReactionSecondIconContainer data-for={tooltipId} data-tip={countSummary}>
      <SecondIcon reactionType={reactionType} />
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        multiline
        bg={cssVar.tooltipBackgroundBlack}
      />
    </ReactionSecondIconContainer>
  )
}

ReactionSecondIcon.displayName = 'ReactionSecondIcon'

export default ReactionSecondIcon
