import React from 'react'
import styled from 'styled-components'
import { keyframesFullView, shimmerAnimation } from '../styles/page'

const Section = styled.div`
  padding: 12px;
  max-width: 500px;
  height: 260px;
`

const CommentShimmerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 40px;
  width: 0px;
  margin-bottom: 10px;
  animation: ${keyframesFullView} 0.5s forwards
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
`

const CommentAvatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
  ${shimmerAnimation}
`

const CommentArea = styled.div`
  display: block;
  width: 100%;
`

interface StyledContainerProps {
  w80?: boolean
}

const Comment = styled.div<StyledContainerProps>`
  height: 10px;
  background: #777;
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 8px;
  ${({ w80 }) => w80 && 'width: 80%;'}
  ${shimmerAnimation}
`

const CommentShimmer = () => {
  return (
    <Section>
      <CommentShimmerWrapper>
        <CommentAvatar />
        <CommentArea>
          <Comment w80 />
          <Comment />
        </CommentArea>
      </CommentShimmerWrapper>
      <CommentShimmerWrapper>
        <CommentAvatar />
        <CommentArea>
          <Comment w80 />
          <Comment />
        </CommentArea>
      </CommentShimmerWrapper>
      <CommentShimmerWrapper>
        <CommentAvatar />
        <CommentArea>
          <Comment w80 />
          <Comment />
        </CommentArea>
      </CommentShimmerWrapper>
      <CommentShimmerWrapper>
        <CommentAvatar />
        <CommentArea>
          <Comment w80 />
          <Comment />
        </CommentArea>
      </CommentShimmerWrapper>
      <CommentShimmerWrapper>
        <CommentAvatar />
        <CommentArea>
          <Comment w80 />
          <Comment />
        </CommentArea>
      </CommentShimmerWrapper>
    </Section>
  )
}

export default CommentShimmer
