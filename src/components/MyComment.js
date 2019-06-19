import React from 'react'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import {
  displayFlex,
  alignCenter,
  justifyContentSpaceBetween
} from '../styles/page'
import CommentAvatar from './CommentAvatar'
import MyCommentPlaceholder from './MyCommentPlaceholder'
import MyCommentAttachButton from './MyCommentAttachButton'

const MyCommentWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const MyCommentInputWrapper = styled.div`
  background-color: ${cssVar.commentTextBackgrounfColor};
  border: 1px solid #ccd0d5;
  border-radius: 16px;
  ${displayFlex}
  ${alignCenter}
  ${justifyContentSpaceBetween}
  cursor: text;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  line-height: 16px;
  overflow: hidden;
  padding: 7px 12px;
`

const MyComment = () => {
  return (
    <MyCommentWrapper>
      <CommentAvatar />
      <MyCommentInputWrapper>
        <MyCommentPlaceholder />
        <MyCommentAttachButton />
      </MyCommentInputWrapper>
    </MyCommentWrapper>
  )
}

export default MyComment
