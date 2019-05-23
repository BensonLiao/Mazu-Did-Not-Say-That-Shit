import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PostTime from './PostTime'
import PrivacyIcon from './PrivacyIcon'
import { displayFlex, alignCenter } from '../styles'

const propTypes = {
  /**
   * Sets content on body of `PostTime`
   */
  postTime: PropTypes.string
}

const PostInfoContainer = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const defaultProps = {
  postTime: 'Fake Post Time'
}

const PostInfo = ({ postTime }) => {
  return (
    <PostInfoContainer>
      <PostTime postTimeStamp={postTime} />
      <PrivacyIcon />
    </PostInfoContainer>
  )
}

PostInfo.displayName = 'PostInfo'
PostInfo.propTypes = propTypes
PostInfo.defaultProps = defaultProps

export default PostInfo
