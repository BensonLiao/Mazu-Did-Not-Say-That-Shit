import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import RelevantCommentToggle from './RelevantCommentToggle'
import MyComment from './MyComment'
import DisplayComment from '../containers/DisplayComment'

const CommentSectionWrapper = styled.div`
  border-top: ${cssConst.postSectionBorder};
`

const CommentSection = ({ commentIds }) => {
  return (
    <CommentSectionWrapper>
      <RelevantCommentToggle />
      <MyComment />
      {commentIds.map(commentId => (
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
