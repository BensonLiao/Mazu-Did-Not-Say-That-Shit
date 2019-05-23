import React from 'react'
import styled from 'styled-components'
import thumbnailImg from '../../assets/img/mazu.1b5fa982.jpg'

const ThumbnailContainer = styled.div`
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
    <ThumbnailContainer>
      <ThumbnailImg src={thumbnailImg} alt="Mazu" />
    </ThumbnailContainer>
  )
}

export default Thumbnail
