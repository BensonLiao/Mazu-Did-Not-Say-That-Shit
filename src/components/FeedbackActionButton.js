import React from 'react'
import PropTypes from 'prop-types'
// import uuidv1 from 'uuid/v1'
import styled from 'styled-components'
import { FEEDBACK } from '../actions'
import StyledTooltip from './StyledTooltip'
import {
  feedbackActionButtonWrapperStyle,
  feedbackActionButtonBaseStyle,
  feedbackReactionButtonStyle,
  feedbackCommentButtonStyle,
  feedbackShareButtonStyle
} from '../styles/post'
import { useState } from '../containers/StateProvider'

const FeedbackActionButtonWrapper = styled.div`
  ${feedbackActionButtonWrapperStyle}
`

const FeedbackActionButtonIcon = styled.i`
  ${feedbackActionButtonBaseStyle}
  ${props => {
    switch (props.feedbackType) {
      default:
        return feedbackReactionButtonStyle
      case FEEDBACK.COMMENT:
        return feedbackCommentButtonStyle
      case FEEDBACK.SHARE:
        return feedbackShareButtonStyle
    }
  }}
`

const getTooltipText = feedbackType => {
  switch (feedbackType) {
    default:
      return '心情'
    case FEEDBACK.COMMENT:
      return '留言'
    case FEEDBACK.SHARE:
      return '寄送這個給朋友或張貼在你的動態時報中．'
  }
}

const getDisplayText = feedbackType => {
  switch (feedbackType) {
    default:
      return '讚'
    case FEEDBACK.COMMENT:
      return '回應'
    case FEEDBACK.SHARE:
      return '分享'
  }
}

const FeedbackActionButton = ({
  feedbackType,
  reacted,
  doReact,
  undoReact
}) => {
  const [state] = useState()
  const { shareMenuOpened } = state
  const tooltipId = 'tip-for-post-feedback-action'
  const toggleReactAction = () => {
    if (reacted) {
      undoReact()
    } else {
      doReact()
    }
  }
  const focusCommentComp = compId => {
    document.getElementById(compId).focus()
  }
  const toggleShareMenu = menuId => {
    if (shareMenuOpened) {
      document.getElementById(menuId).hide()
    } else {
      document.getElementById(menuId).show()
    }
  }
  const getOnClick = () => {
    switch (feedbackType) {
      default:
        return toggleReactAction
      case FEEDBACK.COMMENT:
        return focusCommentComp
      case FEEDBACK.SHARE:
        return toggleShareMenu
    }
  }
  return (
    <FeedbackActionButtonWrapper
      data-for={tooltipId}
      data-tip={getTooltipText(feedbackType)}
      onClick={getOnClick()}
    >
      <FeedbackActionButtonIcon feedbackType={feedbackType} />
      {reacted ? 'yes' : 'no'}
      {getDisplayText(feedbackType)}
      <StyledTooltip id={tooltipId} effect="float" />
    </FeedbackActionButtonWrapper>
  )
}

FeedbackActionButton.defaultProps = {
  feedbackType: FEEDBACK.REACT,
  reacted: false,
  doReact: () => {},
  undoReact: () => {}
}

FeedbackActionButton.propTypes = {
  feedbackType: PropTypes.string,
  reacted: PropTypes.bool,
  doReact: PropTypes.func,
  undoReact: PropTypes.func
}

FeedbackActionButton.displayName = 'FeedbackActionButton'

export default FeedbackActionButton
