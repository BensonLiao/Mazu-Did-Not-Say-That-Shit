import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RightInfo } from './RightInfo'
import LeftInfo from './LeftInfo'
import { displayFlex, justifyContentSpaceBetween } from '../styles'

const propTypes = {
  /**
   * Sets content on body of child `LeftInfo`.`PostprofileNameInfo`.`PosterprofileName`
   */
  profileName: PropTypes.string,

  /**
   * Sets href on attr of child `LeftInfo`.`PostprofileNameInfo`.`PosterprofileName`
   */
  profileUrl: PropTypes.string,

  /**
   * Sets content on body of `RightInfo`.`PostprofileNameInfo`.`PostTime`
   */
  postTime: PropTypes.string
}

const HeaderContainer = styled.div`
  ${displayFlex}
  ${justifyContentSpaceBetween}
  padding: 12px 12px 0;
`

const defaultProps = {
  profileName: 'Fake Profile profileName',
  profileUrl: 'https://fake.profile.profileUrl',
  postTime: 'Fake Post Time'
}

const Header = ({ profileName, profileUrl, postTime }) => {
  return (
    <HeaderContainer>
      <LeftInfo
        profileName={profileName}
        profileUrl={profileUrl}
        postTime={postTime}
      />
      <RightInfo />
    </HeaderContainer>
  )
}

Header.displayprofileName = 'Header'
Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
