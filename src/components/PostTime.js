import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { cssVar } from '../styles'
import StyledTooltip from './StyledTooltip'
import textFormat from '../utils/textFormat'

const propTypes = {
  /**
   * Sets content on body of `PostTimeWrapper`
   */
  postTimeStamp: PropTypes.string.isRequired
}

const PostTimeWrapper = styled.div`
  color: ${cssVar.infoColorGray};
  font-size: 13px;
  font-family: ${cssVar.fontFamily};
`

const PostTime = ({ postTimeStamp }) => {
  const tooltipId = 'tip-for-post-time'
  return (
    <PostTimeWrapper
      data-for={tooltipId}
      data-tip={textFormat.getTimeStamp(postTimeStamp)}
    >
      {postTimeStamp}
      <StyledTooltip id={tooltipId} effect="solid" />
    </PostTimeWrapper>
  )
}

PostTime.displayName = 'PostTime'
PostTime.propTypes = propTypes

export default PostTime
