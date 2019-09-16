import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import textFormat from '../utils/textFormat'

const propTypes = {
  /**
   * Sets content on body of `PostTimeWrapper`,
   * using UNIX timestamp, ref: https://en.wikipedia.org/wiki/Unix_time
   */
  postTimeStamp: PropTypes.number.isRequired
}

const PostTimeWrapper = styled.abbr`
  color: ${cssConst.infoColorGray};
  font-size: 13px;
  font-family: ${cssConst.fontFamily};
  cursor: pointer;
  text-decoration: none;
`

const PostTime = ({ postTimeStamp }) => {
  const formattedTime = textFormat.getTimeStamp(postTimeStamp)
  return (
    <PostTimeWrapper title={formattedTime.forTip}>
      {formattedTime.forText}
    </PostTimeWrapper>
  )
}

PostTime.displayName = 'PostTime'
PostTime.propTypes = propTypes

export default PostTime
