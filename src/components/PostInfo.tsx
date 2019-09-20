import React from 'react'
import styled from 'styled-components'
import { displayFlex, alignCenter, DotSeparator } from '../styles/page'
import PostTime from './PostTime'
import PrivacyIcon from './PrivacyIcon'
import { PostDataProps } from './App'

const PostInfoWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
`

class Props implements Pick<PostDataProps, 'time'> {
  time: string | number | Date = 1412743274
}

const PostInfo = ({ time }: Props) => {
  return (
    <PostInfoWrapper>
      <PostTime time={time} />
      <DotSeparator />
      <PrivacyIcon />
    </PostInfoWrapper>
  )
}

PostInfo.displayName = 'PostInfo'

export default PostInfo
