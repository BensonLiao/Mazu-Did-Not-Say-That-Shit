import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex, alignCenter, DotSeparator } from '../styles/page'
import PostTime from './PostTime'
import PrivacyIcon from './PrivacyIcon'

const propTypes = {
  /**
   * Sets content on body of `PostTime`,
   * using UNIX timestamp, ref: https://en.wikipedia.org/wiki/Unix_time
   */
  postTime: PropTypes.number
}

const PostInfoWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const defaultProps = {
  postTime: 1412743274
}

const PostInfo = ({ postTime }) => {
  return (
    <PostInfoWrapper>
      <PostTime postTimeStamp={postTime} />
      <DotSeparator />
      <PrivacyIcon />
    </PostInfoWrapper>
  )
}

PostInfo.displayName = 'PostInfo'
PostInfo.propTypes = propTypes
PostInfo.defaultProps = defaultProps

export default PostInfo
