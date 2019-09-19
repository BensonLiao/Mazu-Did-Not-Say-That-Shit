import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { REACTIONS } from '../actions'
import StyledTooltip from './StyledTooltip'
import appConst from '../utils/constants'
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

const ReactionSecondMostIconWrapper = styled.div`
  ${styledTooltipOverrideStyle}
  ${props => getIconSize(props.withComponent)}
  ${props => props.withComponent === COMMENT && displayInlineBlock}
  ${props => props.withComponent === COMMENT && 'border-right: 2px solid #fff;'}
  position: relative;
  margin-left: -2px;
  z-index: 2;
  vertical-align: top;
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
        <StyledTooltip id={tooltipId} effect="solid" multiline />
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
