import React from 'react'
import styled from 'styled-components'
import { feedbackActionWrapperStyle } from '../styles/post'
import { FEEDBACK } from '../actions'
import FeedbackActionReact from '../containers/FeedbackActionReact'
import FeedbackActionComment from '../containers/FeedbackActionComment'
import FeedbackActionShare from '../containers/FeedbackActionShare'
import { useState } from '../containers/StateProvider'

const FeedbackActionWrapper = styled.div`
  ${feedbackActionWrapperStyle}
`

const FeedbackAction = () => {
  const [state] = useState()
  const { you, reactId } = state
  return (
    <FeedbackActionWrapper>
      <FeedbackActionReact
        you={you}
        reactId={reactId}
        feedbackType={FEEDBACK.REACT}
      />
      <FeedbackActionComment you={you} feedbackType={FEEDBACK.COMMENT} />
      <FeedbackActionShare you={you} feedbackType={FEEDBACK.SHARE} />
    </FeedbackActionWrapper>
  )
}

FeedbackAction.displayName = 'FeedbackAction'

export default FeedbackAction
