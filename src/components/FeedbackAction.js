import React from 'react'
import styled from 'styled-components'
import { feedbackActionWrapperStyle } from '../styles/post'
import { FEEDBACK } from '../actions'
import FeedbackActionReact from '../containers/FeedbackActionReact'
import FeedbackActionShare from '../containers/FeedbackActionShare'
import FeedbackActionButton from './FeedbackActionButton'
// import { useState } from '../containers/StateProvider'
import appConst from '../utils/constants'

const FeedbackActionWrapper = styled.div`
  ${feedbackActionWrapperStyle}
`

const FeedbackAction = () => {
  // const [state] = useState()
  const { you, reactId, myCommentInputCompId } = appConst
  const focusRef = () => {
    const inputRef = document.getElementById(myCommentInputCompId)
    inputRef.focus()
  }
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
      <FeedbackActionShare you={you} feedbackType={FEEDBACK.SHARE} />
    </FeedbackActionWrapper>
  )
}

FeedbackAction.displayName = 'FeedbackAction'

export default FeedbackAction
