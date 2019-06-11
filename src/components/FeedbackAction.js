import React from 'react'
import styled from 'styled-components'
import { feedbackActionWrapperStyle } from '../styles/post'
import { FEEDBACK } from '../actions'
import FeedbackActionButton from './FeedbackActionButton'

const FeedbackActionWrapper = styled.div`
  ${feedbackActionWrapperStyle}
`

const FeedbackAction = () => {
  return (
    <FeedbackActionWrapper>
      <FeedbackActionButton />
      <FeedbackActionButton feedbackType={FEEDBACK.COMMENT} />
      <FeedbackActionButton feedbackType={FEEDBACK.SHARE} />
    </FeedbackActionWrapper>
  )
}

FeedbackAction.displayName = 'FeedbackAction'

export default FeedbackAction
