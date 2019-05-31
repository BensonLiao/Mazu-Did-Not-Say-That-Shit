import React from 'react'
import styled from 'styled-components'
import thumbnailImg from '../../assets/img/mazu.png'

const ThumbnailWrapper = styled.div`
  display: block;
`

const ThumbnailImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`

const Thumbnail = () => {
  return (
    <ThumbnailWrapper>
      <ThumbnailImg src={thumbnailImg} alt="媽祖" />
    </ThumbnailWrapper>
  )
}

export default Thumbnail
