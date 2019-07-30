import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import appConst from '../utils/constants'
import {
  commentPlaceholderWrapperStyle,
  baseCommentInputStyle
} from '../styles/post'

const MyCommentPlaceholderWrapper = styled.div`
  color: ${cssConst.commentPlaceholderColor};
  font-size: ${cssConst.baseFontSize};
  ${commentPlaceholderWrapperStyle}
`

const MyCommentInput = styled.input`
  ${baseCommentInputStyle}
  width: 300px;
  appearance: none;
  border-radius: 0;
  outline: none;
  padding: 0;
  border: 0 solid transparent;
  background: transparent;
  font-size: ${cssConst.baseFontSize};
`

const { myCommentInputCompId } = appConst
const clearCommentInput = () => {
  const inputRef = document.getElementById(myCommentInputCompId)
  inputRef.value = ''
}

const MyCommentPlaceholder = ({ doCommentAction, ...props }) => {
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        console.log('doExpandNewLine')
      } else {
        doCommentAction()
        clearCommentInput()
      }
    }
  }
  return (
    <MyCommentPlaceholderWrapper>
      <MyCommentInput
        onKeyPress={onKeyPress}
        id={myCommentInputCompId}
        {...props}
      />
    </MyCommentPlaceholderWrapper>
  )
}

MyCommentPlaceholder.displayName = 'MyCommentPlaceholder'
MyCommentPlaceholder.propTypes = {
  /**
   * For redux action to add comment
   */
  doCommentAction: PropTypes.func.isRequired
}

export default MyCommentPlaceholder
