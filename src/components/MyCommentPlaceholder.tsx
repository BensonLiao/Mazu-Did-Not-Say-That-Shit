import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import {
  commentPlaceholderWrapperStyle,
  baseCommentInputStyle
} from '../styles/post'
import { useContextState } from '../containers/StateProvider'

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

const prepareCommentAction = (
  inputId: string,
  doCommentAction: Function,
  doDeleteComment: Function
) => {
  const inputRef = document.getElementById(inputId) as HTMLInputElement
  if (inputRef.value === '') {
    doDeleteComment()
  } else {
    doCommentAction()
    inputRef.value = ''
  }
}

// Indicate if user are using IME(Input Method) for non-latin language.
let onIME = false

const MyCommentPlaceholder = ({
  doCommentAction,
  doDeleteComment,
  inputId,
  isFetching,
  saying,
  ...props
}) => {
  // Make stateContext to null if this comp rendered outside of StateProvider
  const stateContext = (useContextState() as any) || null
  const handleKeyDown = event => {
    if (event.type === 'compositionstart') onIME = true
    if (event.type === 'compositionend') onIME = false
    if (event.key === 'Enter' && onIME) {
      // When in chinese IME, press Enter won't trigger compositionend,
      // so we have to handle it manually.
      onIME = false
    } else if (event.key === 'Enter' && !onIME) {
      if (event.shiftKey) {
        console.log('doExpandNewLine')
      } else {
        if (isFetching) return
        prepareCommentAction(inputId, doCommentAction, doDeleteComment)
        if (stateContext) {
          const { toggleEditMode } = stateContext
          toggleEditMode()
        }
      }
    } else if (event.key === 'Escape') {
      if (stateContext) {
        const { toggleEditMode } = stateContext
        toggleEditMode()
      }
    }
  }
  return (
    <MyCommentPlaceholderWrapper>
      <MyCommentInput
        type="text"
        onKeyDown={handleKeyDown}
        onCompositionStart={handleKeyDown}
        onCompositionEnd={handleKeyDown}
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
   * For redux action to add or update comment
   */
  doCommentAction: PropTypes.func.isRequired,
  /**
   * For redux action to delete comment
   */
  doDeleteComment: PropTypes.func,
  /**
   * For doCommentAction to retrieve input value from input id
   */
  inputId: PropTypes.string.isRequired,
  /**
   * Do nothing on user press Enter if initial data is fetching
   */
  isFetching: PropTypes.bool,
  /**
   * For initial input value
   */
  saying: PropTypes.string
}
MyCommentPlaceholder.defaultProps = {
  isFetching: false,
  saying: '',
  doDeleteComment: () => {}
}

export default MyCommentPlaceholder
