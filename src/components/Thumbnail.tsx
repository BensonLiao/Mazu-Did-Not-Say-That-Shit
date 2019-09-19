import React from 'react'
import styled from 'styled-components'
import { imgBaseUrl } from '../styles/post'
import { UserData } from '../actions/types'

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

class ThumbnailProps implements Pick<UserData, 'profileName' | 'profileImg'> {
  profileName: '媽祖'
  profileImg: 'mazu.png'
}

const Thumbnail = ({ profileName, profileImg }: ThumbnailProps) => {
  const imgUrl = imgBaseUrl(`./${profileImg}`)
  return (
    <ThumbnailWrapper>
      <ThumbnailImg src={imgUrl} alt={profileName} />
    </ThumbnailWrapper>
  )
}

export default Thumbnail
