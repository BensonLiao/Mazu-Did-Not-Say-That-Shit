import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import appConst from '../utils/constants'
import { displayFlex, alignCenter } from '../styles/page'
import CommentAvatar from './CommentAvatar'
import MyCommentInput from './MyCommentInput'

const MyCommentWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
  padding: 4px 12px 8px 12px;
`

const { myCommentInputCompId, component } = appConst

const MyComment = ({ inEditMode, commentId, saying }) => {
  return (
    <MyCommentWrapper>
      <CommentAvatar withComponent={component.DEFAULT} />
      {inEditMode ? (
        <MyCommentInput commentId={commentId} saying={saying} />
      ) : (
        <MyCommentInput myCommentInputCompId={myCommentInputCompId} />
      )}
    </MyCommentWrapper>
  )
}

MyComment.propTypes = {
  inEditMode: PropTypes.bool,
  commentId: PropTypes.string,
  saying: PropTypes.string
}

MyComment.defaultProps = {
  inEditMode: false,
  commentId: '',
  saying: ''
}

export default MyComment
