import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex, DotSeparator } from '../styles/page'
import FeedbackActionReactToComment from '../containers/FeedbackActionReactToComment'
import CommentFeedbackButton from './CommentFeedbackButton'
import textFormat from '../utils/textFormat'
import appConst from '../utils/constants'

const CommentFeedbackWrapper = styled.div`
  ${displayFlex}
  color: ${cssConst.commentFeedbackTextColor};
  font-size: 13px;
  line-height: 13px;
  margin-top: 5px;
  margin-left: 50px;
`

const CommentFeedback = ({ time, targetId, reactId, reacted }) => {
  const onClick = () => {}
  const formattedTime =
    typeof time === 'string' ? time : textFormat.getTimeSpan(time)
  const { you } = appConst
  return (
    <CommentFeedbackWrapper>
      <FeedbackActionReactToComment
        you={you}
        targetId={targetId}
        reactId={reactId}
        reacted={reacted}
      />
      <DotSeparator />
      <CommentFeedbackButton displayText="回覆" onClick={onClick} />
      <DotSeparator />
      <span>{formattedTime}</span>
    </CommentFeedbackWrapper>
  )
}

CommentFeedback.defaultProps = {
  time: '1天',
  reacted: false
}

CommentFeedback.propTypes = {
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  targetId: PropTypes.string.isRequired,
  reactId: PropTypes.string.isRequired,
  reacted: PropTypes.bool
}

CommentFeedback.displayName = 'CommentFeedback'

export default CommentFeedback
