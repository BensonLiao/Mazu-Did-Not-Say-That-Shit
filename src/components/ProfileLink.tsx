import React from 'react'
import styled from 'styled-components'
import { displayInlineBlock } from '../styles/page'
import { UserData } from '../actions/types'
import { definedUsers } from '../utils/dataMock'

const ProfileLinkWrapper = styled.div`
  ${displayInlineBlock}
  cursor: pointer;
  font-weight: 600;
`

const Link = styled.a`
  text-decoration: none;
  color: #365899;
  &:hover {
    text-decoration: underline;
  }
`

class Props implements Pick<UserData, 'profileName' | 'profileLink'> {
  profileName: string = definedUsers.theMazu.profileName
  profileLink: string = definedUsers.theMazu.profileLink
}

const ProfileLink = ({ profileName, profileLink }: Props) => {
  return (
    <ProfileLinkWrapper>
      <Link target="_blank" href={profileLink}>
        {profileName}
      </Link>
    </ProfileLinkWrapper>
  )
}

ProfileLink.displayName = 'ProfileLink'

export default ProfileLink
