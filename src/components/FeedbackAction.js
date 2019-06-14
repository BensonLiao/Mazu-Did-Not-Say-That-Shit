import React from 'react'
import styled from 'styled-components'
import { feedbackActionWrapperStyle } from '../styles/post'
import { FEEDBACK } from '../actions'
import FeedbackActionButton from './FeedbackActionButton'
import FeedbackActionReact from '../containers/FeedbackActionReact'
import { useState } from '../containers/StateProvider'

const FeedbackActionWrapper = styled.div`
  ${feedbackActionWrapperStyle}
`

const FeedbackAction = () => {
  const [state] = useState()
  const { yourself: user } = state
  return (
    <FeedbackActionWrapper>
      <FeedbackActionReact
        user={user}
        feedbackType={FEEDBACK.REACT}
      />
      <FeedbackActionButton
        user={user}
        feedbackType={FEEDBACK.COMMENT}
      />
      <FeedbackActionButton
        user={user}
        feedbackType={FEEDBACK.SHARE}
      />
    </FeedbackActionWrapper>
  )
}

FeedbackAction.displayName = 'FeedbackAction'

export default FeedbackAction
