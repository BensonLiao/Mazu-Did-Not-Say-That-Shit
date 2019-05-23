import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionSecondIconStyle,
  reactionLikeIconStyle,
  reactionHahaIconStyle,
  reactionLoveIconStyle
} from '../styles/post'
import reactionIconImg from '../../assets/img/fb-emojis.0d754b03.png'

const ReactionSecondIconContainer = styled.i`
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

const ReactionSecondIcon = ({ reactionType = 'Haha' }) => {
  const tooltipId = 'tip-for-post-second-most-reaction'
  return (
    <React.Fragment>
      <ReactionSecondIconContainer
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

ReactionSecondIcon.displayName = 'ReactionSecondIcon'

export default ReactionSecondIcon
