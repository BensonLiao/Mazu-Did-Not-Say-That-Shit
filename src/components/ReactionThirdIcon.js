import React from 'react'
import styled from 'styled-components'
import { REACTIONS } from '../actions'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionIconWrapperStyle,
  reactionIconBaseStyle,
  reactionIconStyle
} from '../styles/post'

const ReactionThirdIconWrapper = styled.div`
  ${reactionIconWrapperStyle}
  margin-left: -2px;
  margin-right: 4px;
  z-index: 1;
`

const ThirdIcon = styled.i`
  ${reactionIconBaseStyle}
  ${props => reactionIconStyle(props.reactFeeling)}
`

const ReactionThirdIcon = ({
  reactFeeling = REACTIONS.LOVE,
  countSummary = ''
}) => {
  const tooltipId = 'tip-for-post-third-most-reaction'
  return (
    <ReactionThirdIconWrapper data-for={tooltipId} data-tip={countSummary}>
      <ThirdIcon reactFeeling={reactFeeling} />
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        multiline
        bg={cssVar.tooltipBackgroundBlack}
      />
    </ReactionThirdIconWrapper>
  )
}

ReactionThirdIcon.displayName = 'ReactionThirdIcon'

export default ReactionThirdIcon
