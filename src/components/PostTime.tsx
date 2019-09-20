import React from 'react'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import textFormat from '../utils/textFormat'
import { PostDataProps } from './App'

const PostTimeWrapper = styled.abbr`
  color: ${cssConst.infoColorGray};
  font-size: 13px;
  font-family: ${cssConst.fontFamily};
  cursor: pointer;
  text-decoration: none;
`

class Props implements Pick<PostDataProps, 'time'> {
  time: string | number | Date = 1412743274
}

const PostTime = ({ time }: Props) => {
  const formattedTime = textFormat.getTimeStamp(time)
  return (
    <PostTimeWrapper title={formattedTime.forTip}>
      {formattedTime.forText}
    </PostTimeWrapper>
  )
}

PostTime.displayName = 'PostTime'

export default PostTime
