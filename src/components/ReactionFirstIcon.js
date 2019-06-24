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

const ReactionFirstIconWrapper = styled.div`
  ${reactionIconWrapperStyle}
  margin-left: -2px;
  margin-right: 2px;
  z-index: 3;
`

const FirstIcon = styled.i`
  ${props => reactionIconBaseStyle(props.iconSize)}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling)}
`

const ReactionFirstIcon = ({ reactFeeling = REACTIONS.LIKE, countSummary }) => {
  const tooltipId = 'tip-for-post-first-most-reaction'
  const iconSize =
    countSummary.length > 0
      ? cssVar.reactionIconSize
      : cssVar.commentReactionIconSize
  return (
    <ReactionFirstIconWrapper data-for={tooltipId} data-tip={countSummary}>
      <FirstIcon reactFeeling={reactFeeling} iconSize={iconSize} />
      {countSummary.length > 0 && (
        <StyledTooltip
          id={tooltipId}
          effect="solid"
          multiline
          bg={cssVar.tooltipBackgroundBlack}
        />
      )}
    </ReactionFirstIconWrapper>
  )
}

ReactionFirstIcon.defaultProps = {
  countSummary: ''
}

ReactionFirstIcon.propTypes = {
  reactFeeling: PropTypes.string.isRequired,
  countSummary: PropTypes.string
}

ReactionFirstIcon.displayName = 'ReactionFirstIcon'

export default ReactionFirstIcon
