import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import StyledTooltip from './StyledTooltip'
import textFormat from '../utils/textFormat'

const propTypes = {
  /**
   * Sets content on body of `PostTimeWrapper`,
   * using UNIX timestamp, ref: https://en.wikipedia.org/wiki/Unix_time
   */
  postTimeStamp: PropTypes.number.isRequired
}

const PostTimeWrapper = styled.div`
  color: ${cssConst.infoColorGray};
  font-size: 13px;
  font-family: ${cssConst.fontFamily};
`

const PostTime = ({ postTimeStamp }) => {
  const tooltipId = 'tip-for-post-time'
  const formattedime = textFormat.getTimeStamp(postTimeStamp)
  return (
    <PostTimeWrapper data-for={tooltipId} data-tip={formattedime.forTip}>
      {formattedime.forText}
      <StyledTooltip id={tooltipId} effect="solid" />
    </PostTimeWrapper>
  )
}

PostTime.displayName = 'PostTime'
PostTime.propTypes = propTypes

export default PostTime
