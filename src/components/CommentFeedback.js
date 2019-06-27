import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import { displayFlex, DotSeparator } from '../styles/page'
import CommentFeedbackButton from './CommentFeedbackButton'

const CommentFeedbackWrapper = styled.div`
  ${displayFlex}
  color: ${cssVar.commentFeedbackTextColor};
  font-size: 13px;
  line-height: 13px;
  margin-top: 5px;
  margin-left: 50px;
`

const CommentFeedback = ({ reacted, time }) => {
  const onClick = () => {}
  return (
    <CommentFeedbackWrapper>
      <CommentFeedbackButton reacted={reacted} onClick={onClick} />
      <DotSeparator />
      <CommentFeedbackButton
        displayText="回覆"
        reacted={reacted}
        onClick={onClick}
      />
      <DotSeparator />
      <span>{time}</span>
    </CommentFeedbackWrapper>
  )
}

CommentFeedback.defaultProps = {
  reacted: false,
  time: '1天'
}

CommentFeedback.propTypes = {
  reacted: PropTypes.bool,
  time: PropTypes.string
}

CommentFeedback.displayName = 'CommentFeedback'

export default CommentFeedback
