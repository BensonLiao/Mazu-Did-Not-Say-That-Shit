import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import RelevantCommentToggle from './RelevantCommentToggle'
import MyComment from './MyComment'
import CommentShimmer from './CommentShimmer'
import DisplayComment from '../containers/DisplayComment'

const CommentSectionWrapper = styled.div`
  border-top: ${cssConst.postSectionBorder};
`

const CommentSection = ({ isFetching, commentIds }) => {
  return (
    <CommentSectionWrapper>
      <RelevantCommentToggle />
      <MyComment />
      {isFetching && <CommentShimmer />}
      {!isFetching &&
        commentIds.map(commentId => (
          <DisplayComment key={commentId} commentId={commentId} />
        ))}
    </CommentSectionWrapper>
  )
}

CommentSection.propTypes = {
  isFetching: PropTypes.bool,
  commentIds: PropTypes.arrayOf(PropTypes.string)
}

CommentSection.defaultProps = {
  isFetching: false,
  commentIds: []
}

export default CommentSection
