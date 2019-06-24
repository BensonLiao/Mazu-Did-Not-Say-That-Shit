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

const ReactionSecondIconWrapper = styled.div`
  ${reactionIconWrapperStyle}
  margin-left: -2px;
  margin-right: 2px;
  z-index: 2;
`

const SecondIcon = styled.i`
  ${props => reactionIconBaseStyle(props.iconSize)}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling)}
`

const ReactionSecondIcon = ({
  reactFeeling = REACTIONS.HAHA,
  countSummary
}) => {
  const tooltipId = 'tip-for-post-second-most-reaction'
  const iconSize =
    countSummary.length > 0
      ? cssVar.reactionIconSize
      : cssVar.commentReactionIconSize
  return (
    <ReactionSecondIconWrapper data-for={tooltipId} data-tip={countSummary}>
      <SecondIcon reactFeeling={reactFeeling} iconSize={iconSize} />
      {countSummary.length > 0 && (
        <StyledTooltip
          id={tooltipId}
          effect="solid"
          multiline
          bg={cssVar.tooltipBackgroundBlack}
        />
      )}
    </ReactionSecondIconWrapper>
  )
}

ReactionSecondIcon.defaultProps = {
  countSummary: ''
}

ReactionSecondIcon.propTypes = {
  reactFeeling: PropTypes.string.isRequired,
  countSummary: PropTypes.string
}

ReactionSecondIcon.displayName = 'ReactionSecondIcon'

export default ReactionSecondIcon
