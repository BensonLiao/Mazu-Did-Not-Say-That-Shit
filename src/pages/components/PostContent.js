import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FeedbackReactions from './FeedbackReactions'
import { createReactions } from '../../utils/dataMock'

const propTypes = {
  /**
   * Sets content on body of `PostContentContainer`
   */
  postContent: PropTypes.string
}

const PostContentContainer = styled.div`
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 28px;
  margin: 0 0 7px 0;
  padding: 12px 12px 0;
`

const defaultProps = { postContent: 'Fake Post Content' }

const PostContent = ({ postContent }) => {
  return (
    <PostContentContainer>
      {postContent}
      <FeedbackReactions reactions={createReactions(200)} />
    </PostContentContainer>
  )
}

PostContent.displayName = 'PostContent'
PostContent.propTypes = propTypes
PostContent.defaultProps = defaultProps

export default PostContent
