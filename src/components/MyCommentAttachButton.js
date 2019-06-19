import React from 'react'
import styled from 'styled-components'
import cssesc from 'cssesc'
import { cssVar } from '../styles/variables'
import myCommentAttachIconImg from '../assets/img/my-comment.png'

const MyCommentAttachButtonWrapper = styled.div`
  display: block;
`

const attachButtonBaseStyle = `
  display: inline-block;
  height: ${cssVar.commentAttachIconSize};
  width: ${cssVar.commentAttachIconSize};
  margin-left: 10px;
  cursor: pointer;
  background-image: url(${cssesc(myCommentAttachIconImg)});
  background-repeat: no-repeat;
  background-size: 55px 237px;
`

const EmojiAttachButton = styled.span`
  ${attachButtonBaseStyle}
  background-position: -34px -169px;
`

const PhotoAttachButton = styled.span`
  ${attachButtonBaseStyle}
  background-position: -36px -150px;
`

const GifAttachButton = styled.span`
  ${attachButtonBaseStyle}
  background-position: -34px -186px;
`

const StickerAttachButton = styled.span`
  ${attachButtonBaseStyle}
  background-position: -34px -203px;
`

const MyCommentAttachButton = () => {
  return (
    <MyCommentAttachButtonWrapper>
      <EmojiAttachButton />
      <PhotoAttachButton />
      <GifAttachButton />
      <StickerAttachButton />
    </MyCommentAttachButtonWrapper>
  )
}

export default MyCommentAttachButton
