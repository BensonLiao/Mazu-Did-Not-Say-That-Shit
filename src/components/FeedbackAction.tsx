import React from 'react'
import styled from 'styled-components'
import { feedbackActionWrapperStyle } from '../styles/post'
import { FEEDBACK } from '../actions/types'
import FeedbackActionReact from '../containers/FeedbackActionReact'
import FeedbackActionButton from './FeedbackActionButton'
import appConst from '../utils/constants'

const FeedbackActionWrapper = styled.div`
  ${feedbackActionWrapperStyle}
`

const FeedbackAction = () => {
  const { you, reactId, myCommentInputCompId } = appConst
  const focusRef = () => {
    const inputRef = document.getElementById(myCommentInputCompId)
    inputRef.focus()
  }
  const toggleShareMenu = () => console.log('toggleShareMenu')
  return (
    <FeedbackActionWrapper>
      <FeedbackActionReact
        you={you}
        targetId={FEEDBACK.TARGET}
        reactId={reactId}
        feedbackType={FEEDBACK.REACT}
      />
      <FeedbackActionButton
        feedbackType={FEEDBACK.COMMENT}
        displayText="留言"
        tooltipText="留言"
        onClick={focusRef}
      />
      <FeedbackActionButton
        onClick={toggleShareMenu}
        feedbackType={FEEDBACK.SHARE}
        displayText="分享"
        tooltipText="寄送這個給朋友或張貼在你的動態時報中．"
      />
    </FeedbackActionWrapper>
  )
}

FeedbackAction.displayName = 'FeedbackAction'

export default FeedbackAction
