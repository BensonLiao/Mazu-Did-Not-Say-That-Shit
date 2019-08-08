import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { REACTIONS } from '../actions'
import StyledTooltip from './StyledTooltip'
import appConst from '../utils/constants'
import cssConst from '../styles/constants'
import { displayInlineBlock } from '../styles/page'
import {
  styledTooltipOverrideStyle,
  getIconSize,
  reactionIconBaseStyle,
  reactionIconSummaryStyle,
  reactionIconStyle
} from '../styles/post'

const {
  component: { COMMENT }
} = appConst

const ReactionTopMostIconWrapper = styled.div`
  ${styledTooltipOverrideStyle}
  ${props => getIconSize(props.withComponent)}
  ${props => props.withComponent === COMMENT && displayInlineBlock}
  ${props => props.withComponent === COMMENT && 'border-right: 2px solid #fff;'}
  position: relative;
  margin-left: -2px;
  z-index: 3;
  vertical-align: top;
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
  reactFeeling: PropTypes.oneOf(Object.keys(REACTIONS)),
  countSummary: PropTypes.string,
  withComponent: PropTypes.string.isRequired
}

ReactionTopMostIcon.displayName = 'ReactionTopMostIcon'

export default ReactionTopMostIcon
