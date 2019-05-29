import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionIconContainerStyle,
  reactionThirdIconStyle,
  reactionLikeIconStyle,
  reactionHahaIconStyle,
  reactionLoveIconStyle
} from '../styles/post'
import reactionIconImg from '../../assets/img/fb-emojis.0d754b03.png'

const ReactionThirdIconContainer = styled.div`
  ${reactionIconContainerStyle}
`

const ThirdIcon = styled.i`
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
  ${reactionThirdIconStyle(reactionIconImg)}
`

const ReactionThirdIcon = ({ reactionType = 'Love', countSummary = '' }) => {
  const tooltipId = 'tip-for-post-third-most-reaction'
  return (
    <ReactionThirdIconContainer data-for={tooltipId} data-tip={countSummary}>
      <ThirdIcon reactionType={reactionType} />
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        multiline
        bg={cssVar.tooltipBackgroundBlack}
      />
    </ReactionThirdIconContainer>
  )
}

ReactionThirdIcon.displayName = 'ReactionThirdIcon'

export default ReactionThirdIcon
