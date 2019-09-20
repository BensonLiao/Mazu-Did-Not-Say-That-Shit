import React from 'react'
import styled from 'styled-components'
import { RightInfo } from './RightInfo'
import LeftInfo from './LeftInfo'
import { definedUsers } from '../utils/dataMock'
import { displayFlex, justifyContentSpaceBetween } from '../styles/page'
import { PostDataProps } from './App'
import { UserData } from '../actions/types'

const HeaderWrapper = styled.div`
  ${displayFlex}
  ${justifyContentSpaceBetween}
  padding: 12px 12px 0;
`

class Props implements Pick<PostDataProps, 'user' | 'time'> {
  user: UserData = definedUsers.theMazu
  time: string | number | Date = 1412743274
}

const Header = ({ user, time }: Props) => {
  return (
    <HeaderWrapper>
      <LeftInfo user={user} time={time} />
      <RightInfo />
    </HeaderWrapper>
  )
}

Header.displayprofileName = 'Header'

export default Header
