import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  /**
   * Sets content on body of `PostContentWrapper`
   */
  postContent: PropTypes.string
}

const PostContentWrapper = styled.div`
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 28px;
  margin: 0 0 7px 0;
  padding: 12px 12px 0;
`

const defaultProps = { postContent: 'Fake Post Content' }

const PostContent = ({ postContent }) => {
  return <PostContentWrapper>{postContent}</PostContentWrapper>
}

PostContent.displayName = 'PostContent'
PostContent.propTypes = propTypes
PostContent.defaultProps = defaultProps

export default PostContent
