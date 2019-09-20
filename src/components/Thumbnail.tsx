import React from 'react'
import styled from 'styled-components'
import { imgBaseUrl } from '../styles/post'
import { UserData } from '../actions/types'
import { definedUsers } from '../utils/dataMock'

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

class Props implements Pick<UserData, 'profileName' | 'profileImg'> {
  profileName: string = definedUsers.theMazu.profileName
  profileImg: string = definedUsers.theMazu.profileImg
}

const Thumbnail = ({ profileName, profileImg }: Props) => {
  const imgUrl = imgBaseUrl(`./${profileImg}`)
  return (
    <ThumbnailWrapper>
      <ThumbnailImg src={imgUrl} alt={profileName} />
    </ThumbnailWrapper>
  )
}

Thumbnail.displayName = 'Thumbnail'

export default Thumbnail
