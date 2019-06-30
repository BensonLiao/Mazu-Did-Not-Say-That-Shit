import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'

const CommentFeedbackButtonWrapper = styled.div`
  color: ${props => props.color};
  cursor: pointer;
  margin-right: 2px;
`

const CommentFeedbackButton = ({ displayText, reacted, onClick }) => {
  const color = reacted
    ? cssConst.reactedButtonTextColor
    : cssConst.commentFeedbackButtonTextColor
  return (
    <CommentFeedbackButtonWrapper onClick={onClick} color={color}>
      <span>{displayText}</span>
    </CommentFeedbackButtonWrapper>
  )
}

CommentFeedbackButton.defaultProps = {
  displayText: '讚',
  reacted: false
}

CommentFeedbackButton.propTypes = {
  displayText: PropTypes.string,
  reacted: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

CommentFeedbackButton.displayName = 'CommentFeedbackButton'

export default CommentFeedbackButton
