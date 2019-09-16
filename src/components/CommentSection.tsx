import React from 'react'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import RelevantCommentToggle from './RelevantCommentToggle'
import MyComment from './MyComment'
import CommentShimmer from './CommentShimmer'
import DisplayComment from '../containers/DisplayComment'

const CommentSectionWrapper = styled.div`
  border-top: ${cssConst.postSectionBorder};
`

interface CommentSectionProps {
  isFetching: boolean
  commentIds: Array<string>
}

const CommentSection = ({ isFetching, commentIds }: CommentSectionProps) => {
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

export default CommentSection
