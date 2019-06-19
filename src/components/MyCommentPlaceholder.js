import React from 'react'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import { baseCommemtInputStyle } from '../styles/post'

const MyCommentPlaceholderWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap !important;
  color: ${cssVar.commentPlaceholderColor};
  font-size: ${cssVar.baseFontSize};
  cursor: text;
  line-height: 16px;
`

const MyCommentInput = styled.input`
  ${baseCommemtInputStyle}
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

const MyCommentPlaceholder = () => {
  return (
    <MyCommentPlaceholderWrapper>
      <MyCommentInput type="text" placeholder="留言......" />
    </MyCommentPlaceholderWrapper>
  )
}

export default MyCommentPlaceholder
