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

const ReactionTopMostIconWrapper = styled.div`
  ${styledTooltipOverrideStyle}
  ${props => getIconSize(props.withComponent)}
  margin-left: -2px;
  margin-right: 2px;
  z-index: 3;
`

const TopMostIcon = styled.i`
  ${reactionIconBaseStyle}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling, props.withComponent)}
`

const tooltipId = 'tip-for-post-first-most-reaction'

const ReactionTopMostIcon = ({ reactFeeling, withComponent, countSummary }) => {
  return (
    <ReactionTopMostIconWrapper
      data-for={tooltipId}
      data-tip={countSummary}
      withComponent={withComponent}
    >
      <TopMostIcon reactFeeling={reactFeeling} withComponent={withComponent} />
      {countSummary.length > 0 && (
        <StyledTooltip
          id={tooltipId}
          effect="solid"
          multiline
          bg={cssConst.tooltipBackgroundBlack}
        />
      )}
    </ReactionTopMostIconWrapper>
  )
}

ReactionTopMostIcon.defaultProps = {
  reactFeeling: REACTIONS.LIKE,
  countSummary: ''
}

ReactionTopMostIcon.propTypes = {
  reactFeeling: PropTypes.string,
  countSummary: PropTypes.string,
  withComponent: PropTypes.string.isRequired
}

ReactionTopMostIcon.displayName = 'ReactionTopMostIcon'

export default ReactionTopMostIcon
