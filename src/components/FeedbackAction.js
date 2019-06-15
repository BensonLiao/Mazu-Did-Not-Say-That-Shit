import React from 'react'
import styled from 'styled-components'
import { feedbackActionWrapperStyle } from '../styles/post'
import { FEEDBACK } from '../actions'
// import FeedbackActionButton from './FeedbackActionButton'
import FeedbackActionReact from '../containers/FeedbackActionReact'
import FeedbackActionComment from '../containers/FeedbackActionComment'
import FeedbackActionShare from '../containers/FeedbackActionShare'
import { useState } from '../containers/StateProvider'

const FeedbackActionWrapper = styled.div`
  ${feedbackActionWrapperStyle}
`

const FeedbackAction = () => {
  const [state] = useState()
  const { yourself: user } = state
  return (
    <FeedbackActionWrapper>
      <FeedbackActionReact user={user} feedbackType={FEEDBACK.REACT} />
      <FeedbackActionComment user={user} feedbackType={FEEDBACK.COMMENT} />
      <FeedbackActionShare user={user} feedbackType={FEEDBACK.SHARE} />
    </FeedbackActionWrapper>
  )
}

FeedbackAction.displayName = 'FeedbackAction'

export default FeedbackAction
