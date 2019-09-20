import React from 'react'
import styled from 'styled-components'
import ProfileLink from './ProfileLink'
import PostInfo from './PostInfo'
import Thumbnail from './Thumbnail'
import { definedUsers } from '../utils/dataMock'
import { displayFlex, alignCenter } from '../styles/page'
import { PostDataProps } from './App'
import { UserData } from '../actions/types'

const LeftInfoWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const InfoBlockWrapper = styled.div`
  dislpay: block;
`

class Props implements Pick<PostDataProps, 'user' | 'time'> {
  user: UserData = definedUsers.theMazu
  time: string | number | Date = 1412743274
}

const LeftInfo = ({ user, time }: Props) => {
  return (
    <LeftInfoWrapper>
      <Thumbnail profileName={user.profileName} profileImg={user.profileImg} />
      <InfoBlockWrapper>
        <ProfileLink
          profileName={user.profileName}
          profileLink={user.profileLink}
        />
        <PostInfo time={time} />
      </InfoBlockWrapper>
    </LeftInfoWrapper>
  )
}

LeftInfo.displayName = 'LeftInfo'

export default LeftInfo
