import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex, DotSeparator } from '../styles/page'
import FeedbackActionReactToComment from '../containers/FeedbackActionReactToComment'
import CommentFeedbackButton from './CommentFeedbackButton'
import appConst from '../utils/constants'
import ShowComment from '../containers/ShowComment'
import { useContextState } from '../containers/StateProvider'

const CommentFeedbackWrapper = styled.div`
  ${displayFlex}
  color: ${cssConst.commentFeedbackTextColor};
  ${({ isHidden }) => isHidden && 'opacity: 0.5;'}
  font-size: 13px;
  line-height: 13px;
  margin-top: 5px;
  margin-left: 50px;
`

const onClick = () => {}
const { you } = appConst

const getActionButton = (isHidden, targetId, reactId, reacted) => {
  return isHidden ? (
    <ShowComment displayText="取消隱藏" commentId={targetId} />
  ) : (
    <FeedbackActionReactToComment
      you={you}
      targetId={targetId}
      reactId={reactId}
      reacted={reacted}
    />
  )
}

const CommentFeedback = ({
  time,
  targetId,
  reactId,
  reacted,
  isHidden,
  inEditMode
}) => {
  const { toggleEditMode } = useContextState()
  return (
    <CommentFeedbackWrapper isHidden={isHidden}>
      {inEditMode ? (
        <>
          <span>按Esc鍵可</span>
          <CommentFeedbackButton onClick={toggleEditMode} displayText="取消" />
          <span>。</span>
        </>
      ) : (
        <>
          {getActionButton(isHidden, targetId, reactId, reacted)}
          <DotSeparator />
          <CommentFeedbackButton displayText="回覆" onClick={onClick} />
          <DotSeparator />
          <span>{time}</span>
        </>
      )}
    </CommentFeedbackWrapper>
  )
}

CommentFeedback.defaultProps = {
  time: '1天',
  targetId: '',
  reactId: '',
  reacted: false,
  isHidden: false,
  inEditMode: false
}

CommentFeedback.propTypes = {
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  targetId: PropTypes.string,
  reactId: PropTypes.string,
  reacted: PropTypes.bool,
  isHidden: PropTypes.bool,
  inEditMode: PropTypes.bool
}

CommentFeedback.displayName = 'CommentFeedback'

export default CommentFeedback
