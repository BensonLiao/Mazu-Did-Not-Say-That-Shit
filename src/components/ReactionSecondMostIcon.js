import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { REACTIONS } from '../actions'
import StyledTooltip from './StyledTooltip'
import cssConst from '../styles/constants'
import {
  styledTooltipOverrideStyle,
  getIconSize,
  reactionIconBaseStyle,
  reactionIconSummaryStyle,
  reactionIconStyle
} from '../styles/post'

const ReactionSecondMostIconWrapper = styled.div`
  ${styledTooltipOverrideStyle}
  ${props => getIconSize(props.withComponent)}
  margin-left: -2px;
  margin-right: 2px;
  z-index: 2;
`

const SecondMostIcon = styled.i`
  ${reactionIconBaseStyle}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling, props.withComponent)}
`

const tooltipId = 'tip-for-post-second-most-reaction'

const ReactionSecondMostIcon = ({
  reactFeeling,
  withComponent,
  countSummary
}) => {
  return (
    <ReactionSecondMostIconWrapper
      data-for={tooltipId}
      data-tip={countSummary}
      withComponent={withComponent}
    >
      <SecondMostIcon
        reactFeeling={reactFeeling}
        withComponent={withComponent}
      />
      {countSummary.length > 0 && (
        <StyledTooltip
          id={tooltipId}
          effect="solid"
          multiline
          bg={cssConst.tooltipBackgroundBlack}
        />
      )}
    </ReactionSecondMostIconWrapper>
  )
}

ReactionSecondMostIcon.defaultProps = {
  reactFeeling: REACTIONS.HAHA,
  countSummary: ''
}

ReactionSecondMostIcon.propTypes = {
  reactFeeling: PropTypes.oneOf(Object.keys(REACTIONS)),
  withComponent: PropTypes.string.isRequired,
  countSummary: PropTypes.string
}

ReactionSecondMostIcon.displayName = 'ReactionSecondMostIcon'

export default ReactionSecondMostIcon
