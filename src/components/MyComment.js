import React from 'react'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import appConst from '../utils/constants'
import {
  displayFlex,
  alignCenter,
  justifyContentSpaceBetween
} from '../styles/page'
import CommentAvatar from './CommentAvatar'
import FeedbackActionComment from '../containers/FeedbackActionComment'
import MyCommentAttachButton from './MyCommentAttachButton'

const MyCommentWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const MyCommentInputWrapper = styled.div`
  background-color: ${cssConst.commentTextBackground};
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
  const { you, myCommentInputCompId } = appConst
  return (
    <MyCommentWrapper>
      <CommentAvatar />
      <MyCommentInputWrapper>
        <FeedbackActionComment
          type="text"
          placeholder="留言......"
          you={you}
          myCommentInputCompId={myCommentInputCompId}
        />
        <MyCommentAttachButton />
      </MyCommentInputWrapper>
    </MyCommentWrapper>
  )
}

export default MyComment
