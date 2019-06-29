import React from 'react'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import {
  commentPlaceholderWrapperStyle,
  baseCommentInputStyle
} from '../styles/post'

const MyCommentPlaceholderWrapper = styled.div`
  color: ${cssVar.commentPlaceholderColor};
  font-size: ${cssVar.baseFontSize};
  ${commentPlaceholderWrapperStyle}
`

const MyCommentInput = styled.input`
  ${baseCommentInputStyle}
  width: 300px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  outline: none;
  padding: 0;
  border: 0 solid transparent;
  background: transparent;
  font-size: ${cssVar.baseFontSize};
`

const MyCommentPlaceholder = props => {
  return (
    <MyCommentPlaceholderWrapper>
      <MyCommentInput id="test" {...props} />
    </MyCommentPlaceholderWrapper>
  )
}

export default MyCommentPlaceholder
