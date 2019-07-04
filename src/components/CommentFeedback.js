import React from 'react'
import uuidv1 from 'uuid/v1'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex, DotSeparator } from '../styles/page'
import FeedbackActionReact from '../containers/FeedbackActionReact'
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

const CommentFeedback = ({ time, targetId }) => {
  const onClick = () => {}
  const formattedTime =
    typeof time === 'string' ? time : textFormat.getTimeSpan(time)
  const reactId = uuidv1()
  return (
    <CommentFeedbackWrapper>
      <FeedbackActionReact
        targetId={targetId}
        reactId={reactId}
        onClick={onClick}
      />
      <DotSeparator />
      <CommentFeedbackButton displayText="回覆" onClick={onClick} />
      <DotSeparator />
      <span>{formattedTime}</span>
    </CommentFeedbackWrapper>
  )
}

CommentFeedback.defaultProps = {
  time: '1天'
}

CommentFeedback.propTypes = {
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  targetId: PropTypes.string.isRequired
}

CommentFeedback.displayName = 'CommentFeedback'

export default CommentFeedback
