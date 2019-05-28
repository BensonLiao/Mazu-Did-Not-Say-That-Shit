import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionIconContainerStyle,
  reactionFirstIconStyle,
  reactionLikeIconStyle,
  reactionHahaIconStyle,
  reactionLoveIconStyle
} from '../styles/post'
import reactionIconImg from '../../assets/img/fb-emojis.0d754b03.png'

const ReactionFirstIconContainer = styled.div`
  ${reactionIconContainerStyle}
`

const FirstIcon = styled.i`
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
  ${reactionFirstIconStyle(reactionIconImg)}
`

const ReactionFirstIcon = ({ reactionType = 'Like', countSummary = '' }) => {
  const tooltipId = 'tip-for-post-first-most-reaction'
  return (
    <ReactionFirstIconContainer data-for={tooltipId} data-tip={countSummary}>
      <FirstIcon reactionType={reactionType} />
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        multiline
        bg={cssVar.tooltipBackgroundBlack}
      />
    </ReactionFirstIconContainer>
  )
}

ReactionFirstIcon.displayName = 'ReactionFirstIcon'

export default ReactionFirstIcon
