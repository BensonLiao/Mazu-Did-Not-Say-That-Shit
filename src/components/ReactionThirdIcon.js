import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { REACTIONS } from '../actions'
import StyledTooltip from './StyledTooltip'
import { cssVar } from '../styles'
import {
  reactionIconWrapperStyle,
  reactionIconBaseStyle,
  reactionIconSummaryStyle,
  reactionIconStyle
} from '../styles/post'

const ReactionThirdIconWrapper = styled.div`
  ${reactionIconWrapperStyle}
  margin-left: -2px;
  margin-right: 4px;
  z-index: 1;
`

const ThirdIcon = styled.i`
  ${props => reactionIconBaseStyle(props.iconSize)}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling)}
`

const ReactionThirdIcon = ({ reactFeeling = REACTIONS.LOVE, countSummary }) => {
  const tooltipId = 'tip-for-post-third-most-reaction'
  const iconSize =
    countSummary.length > 0
      ? cssVar.reactionIconSize
      : cssVar.commentReactionIconSize
  return (
    <ReactionThirdIconWrapper data-for={tooltipId} data-tip={countSummary}>
      <ThirdIcon reactFeeling={reactFeeling} iconSize={iconSize} />
      {countSummary.length > 0 && (
        <StyledTooltip
          id={tooltipId}
          effect="solid"
          multiline
          bg={cssVar.tooltipBackgroundBlack}
        />
      )}
    </ReactionThirdIconWrapper>
  )
}

ReactionThirdIcon.defaultProps = {
  countSummary: ''
}

ReactionThirdIcon.propTypes = {
  reactFeeling: PropTypes.string.isRequired,
  countSummary: PropTypes.string
}

ReactionThirdIcon.displayName = 'ReactionThirdIcon'

export default ReactionThirdIcon
