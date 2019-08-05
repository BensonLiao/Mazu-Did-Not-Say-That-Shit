import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex, DotSeparator } from '../styles/page'
import FeedbackActionReactToComment from '../containers/FeedbackActionReactToComment'
import CommentFeedbackButton from './CommentFeedbackButton'
import appConst from '../utils/constants'
import ShowComment from '../containers/ShowComment'

const CommentFeedbackWrapper = styled.div`
  ${displayFlex}
  color: ${cssConst.commentFeedbackTextColor};
  ${({ isHidden }) => isHidden && 'opacity: 0.5;'}
  font-size: 13px;
  line-height: 13px;
  margin-top: 5px;
  margin-left: 50px;
`

const CommentFeedback = ({ time, targetId, reactId, reacted, isHidden }) => {
  const onClick = () => {}
  const { you } = appConst
  return (
    <CommentFeedbackWrapper isHidden={isHidden}>
      {isHidden ? (
        <ShowComment displayText="取消隱藏" commentId={targetId} />
      ) : (
        <FeedbackActionReactToComment
          you={you}
          targetId={targetId}
          reactId={reactId}
          reacted={reacted}
        />
      )}
      <DotSeparator />
      <CommentFeedbackButton displayText="回覆" onClick={onClick} />
      <DotSeparator />
      <span>{time}</span>
    </CommentFeedbackWrapper>
  )
}

CommentFeedback.defaultProps = {
  time: '1天',
  reacted: false,
  isHidden: false
}

CommentFeedback.propTypes = {
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  targetId: PropTypes.string.isRequired,
  reactId: PropTypes.string.isRequired,
  reacted: PropTypes.bool,
  isHidden: PropTypes.bool
}

CommentFeedback.displayName = 'CommentFeedback'

export default CommentFeedback
