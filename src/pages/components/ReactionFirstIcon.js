import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionFirstIconStyle,
  reactionLikeIconStyle,
  reactionHahaIconStyle,
  reactionLoveIconStyle
} from '../styles/post'
import reactionIconImg from '../../assets/img/fb-emojis.0d754b03.png'

const ReactionFirstIconContainer = styled.i`
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
    <React.Fragment>
      <ReactionFirstIconContainer
        reactionType={reactionType}
        data-for={tooltipId}
        data-tip={countSummary}
      />
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        bg={cssVar.tooltipBackgroundBlack}
      />
    </React.Fragment>
  )
}

ReactionFirstIcon.displayName = 'ReactionFirstIcon'

export default ReactionFirstIcon
