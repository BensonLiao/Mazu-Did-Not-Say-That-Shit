import React from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import RelevantCommentToggle from './RelevantCommentToggle'
import MyComment from './MyComment'
import DisplayComment from '../containers/DisplayComment'

const CommentSectionWrapper = styled.div`
  border-top: ${cssConst.postSectionBorder};
`

class CommentSection extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { commentIds } = this.props
    if (!isEqual(commentIds, nextProps.commentIds)) {
      // console.log('Component updates!')
      return true
    }
    return false
  }

  render() {
    const { commentIds } = this.props
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
}

CommentSection.propTypes = {
  commentIds: PropTypes.arrayOf(PropTypes.string)
}

CommentSection.defaultProps = {
  commentIds: []
}

export default CommentSection
