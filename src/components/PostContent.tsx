import React from 'react'
import styled from 'styled-components'
import { PostDataProps } from './App'

const PostContentWrapper = styled.div`
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 28px;
  margin: 0 0 7px 0;
  padding: 12px 12px 0;
`

class Props implements Pick<PostDataProps, 'content' | 'title'> {
  content: string = 'Fake Post Content'
  title: string = 'Fake Post Title'
}

const PostContent = ({ content, title }: Props) => {
  return <PostContentWrapper title={title}>{content}</PostContentWrapper>
}

PostContent.displayName = 'PostContent'

export default PostContent
