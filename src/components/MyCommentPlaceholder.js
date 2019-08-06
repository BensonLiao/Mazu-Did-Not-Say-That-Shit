import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
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

const clearCommentInput = inputId => {
  const inputRef = document.getElementById(inputId)
  inputRef.value = ''
}

const MyCommentPlaceholder = ({
  doCommentAction,
  inputId,
  saying,
  ...props
}) => {
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        console.log('doExpandNewLine')
      } else {
        doCommentAction()
        clearCommentInput(inputId)
      }
    }
  }
  return (
    <MyCommentPlaceholderWrapper>
      <MyCommentInput
        onKeyPress={onKeyPress}
        id={inputId}
        defaultValue={saying}
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
  doCommentAction: PropTypes.func.isRequired,
  /**
   * For doCommentAction to retrieve input value from input id
   */
  inputId: PropTypes.string.isRequired,
  /**
   * For initial input value
   */
  saying: PropTypes.string
}
MyCommentPlaceholder.defaultProps = {
  saying: ''
}

export default MyCommentPlaceholder
