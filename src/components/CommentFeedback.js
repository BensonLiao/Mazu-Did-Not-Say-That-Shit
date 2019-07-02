import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex, DotSeparator } from '../styles/page'
import CommentFeedbackButton from './CommentFeedbackButton'
import textFormat from '../utils/textFormat'

const CommentFeedbackWrapper = styled.div`
  ${displayFlex}
  color: ${cssConst.commentFeedbackTextColor};
  font-size: 13px;
  line-height: 13px;
  margin-top: 5px;
  margin-left: 50px;
`

const CommentFeedback = ({ reacted, time }) => {
  const onClick = () => {}
  const formattedTime =
    typeof time === 'string' ? time : textFormat.getTimeSpan(time)
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
      <span>{formattedTime}</span>
    </CommentFeedbackWrapper>
  )
}

CommentFeedback.defaultProps = {
  reacted: false,
  time: '1天'
}

CommentFeedback.propTypes = {
  reacted: PropTypes.bool,
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CommentFeedback.displayName = 'CommentFeedback'

export default CommentFeedback
