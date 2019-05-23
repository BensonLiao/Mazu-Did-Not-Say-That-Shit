import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionThirdIconStyle,
  reactionLikeIconStyle,
  reactionHahaIconStyle,
  reactionLoveIconStyle
} from '../styles/post'
import reactionIconImg from '../../assets/img/fb-emojis.0d754b03.png'

const ReactionThirdIconContainer = styled.i`
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

const ReactionThirdIcon = ({ reactionType = 'Love' }) => {
  const tooltipId = 'tip-for-post-third-most-reaction'
  return (
    <React.Fragment>
      <ReactionThirdIconContainer
        reactionType={reactionType}
        data-for={tooltipId}
        data-tip={reactionType}
      />
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        bg={cssVar.tooltipBackgroundBlack}
      />
    </React.Fragment>
  )
}

ReactionThirdIcon.displayName = 'ReactionThirdIcon'

export default ReactionThirdIcon
