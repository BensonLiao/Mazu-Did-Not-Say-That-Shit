import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import appConst from '../utils/constants'
import {
  displayFlex,
  alignCenter,
  justifyContentSpaceBetween
} from '../styles/page'
import FeedbackActionComment from '../containers/FeedbackActionComment'
import UpdateComment from '../containers/UpdateComment'
import MyCommentAttachButton from './MyCommentAttachButton'

const MyCommentInputWrapper = styled.div`
  background-color: ${cssConst.commentTextBackground};
  border: 1px solid #ccd0d5;
  border-radius: 16px;
  ${displayFlex}
  ${alignCenter}
  ${justifyContentSpaceBetween}
  cursor: text;
  flex: 1 1 auto;
  line-height: 16px;
  overflow: hidden;
  padding: 7px 12px;
`

const { you } = appConst

const MyCommentInput = ({ commentId, saying, myCommentInputCompId }) => {
  return (
    <MyCommentInputWrapper>
      {commentId === '' && myCommentInputCompId !== '' && (
        <FeedbackActionComment
          type="text"
          placeholder="留言......"
          you={you}
          myCommentInputCompId={myCommentInputCompId}
        />
      )}
      {commentId !== '' && myCommentInputCompId === '' && (
        <UpdateComment type="text" commentId={commentId} saying={saying} />
      )}
      <MyCommentAttachButton />
    </MyCommentInputWrapper>
  )
}

MyCommentInput.propTypes = {
  commentId: PropTypes.string,
  saying: PropTypes.string,
  myCommentInputCompId: PropTypes.string
}

MyCommentInput.defaultProps = {
  commentId: '',
  saying: '',
  myCommentInputCompId: ''
}

export default MyCommentInput
