import React from 'react'
import styled from 'styled-components'
// import thumbnailImg from '../../assets/img/mazu.png'

const imgBaseUrl = require.context('../../assets/img/', true)

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

const Thumbnail = ({ profileName, profileImg }) => {
  const imgUrl = imgBaseUrl(`./${profileImg}`)
  return (
    <ThumbnailWrapper>
      <ThumbnailImg src={imgUrl} alt={profileName} />
    </ThumbnailWrapper>
  )
}

export default Thumbnail
