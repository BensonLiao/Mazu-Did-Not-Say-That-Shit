import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FEEDBACK } from '../actions'
import StyledTooltip from './StyledTooltip'
import {
  feedbackActionButtonWrapperStyle,
  feedbackActionButtonBaseStyle,
  feedbackReactedStyle,
  feedbackReactedButtonStyle,
  feedbackReactionButtonStyle,
  feedbackCommentButtonStyle,
  feedbackShareButtonStyle
} from '../styles/post'

const FeedbackActionButtonWrapper = styled.div`
  ${feedbackActionButtonWrapperStyle}
  ${props => {
    return props.reacted ? feedbackReactedStyle : ''
  }}
`

const FeedbackActionButtonIcon = styled.i`
  ${feedbackActionButtonBaseStyle}
  ${props => {
    switch (props.feedbackType) {
      default:
        return props.reacted
          ? feedbackReactedButtonStyle
          : feedbackReactionButtonStyle
      case FEEDBACK.COMMENT:
        return feedbackCommentButtonStyle
      case FEEDBACK.SHARE:
        return feedbackShareButtonStyle
    }
  }}
`

const FeedbackActionButton = ({
  feedbackType,
  displayText,
  tooltipText,
  reacted,
  onClick
}) => {
  const tooltipId = 'tip-for-post-feedback-action'
  return (
    <FeedbackActionButtonWrapper
      data-for={tooltipId}
      data-tip={tooltipText}
      onClick={onClick}
      reacted={reacted}
    >
      <FeedbackActionButtonIcon reacted={reacted} feedbackType={feedbackType} />
      {displayText}
      <StyledTooltip id={tooltipId} effect="float" />
    </FeedbackActionButtonWrapper>
  )
}

FeedbackActionButton.defaultProps = {
  feedbackType: FEEDBACK.REACT,
  displayText: '讚',
  tooltipText: '心情',
  reacted: false
}

FeedbackActionButton.propTypes = {
  feedbackType: PropTypes.string,
  displayText: PropTypes.string,
  tooltipText: PropTypes.string,
  reacted: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

FeedbackActionButton.displayName = 'FeedbackActionButton'

export default FeedbackActionButton
