import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { useContextState } from '../containers/StateProvider'
import RelevantCommentToggle from './RelevantCommentToggle'
import MyComment from './MyComment'
import DisplayComment from '../containers/DisplayComment'
import CommentShimmer from './CommentShimmer'

const CommentSectionWrapper = styled.div`
  border-top: ${cssConst.postSectionBorder};
`

const CommentSection = ({ commentIds }) => {
  const { isDataInit } = useContextState()
  return (
    <CommentSectionWrapper>
      <RelevantCommentToggle />
      <MyComment />
      {!isDataInit && <CommentShimmer />}
      {isDataInit &&
        commentIds.map(commentId => (
          <DisplayComment key={commentId} commentId={commentId} />
        ))}
    </CommentSectionWrapper>
  )
}

CommentSection.propTypes = {
  commentIds: PropTypes.arrayOf(PropTypes.string)
}

CommentSection.defaultProps = {
  commentIds: []
}

export default CommentSection
