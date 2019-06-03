import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RightInfo } from './RightInfo'
import LeftInfo from './LeftInfo'
import { getFakeUser } from '../../utils/dataMock'
import { displayFlex, justifyContentSpaceBetween } from '../styles'

const propTypes = {
  profileInfo: PropTypes.shape({
    /**
     * Sets content on body of child `LeftInfo`.`PostprofileNameInfo`.`PosterprofileName`
     */
    profileName: PropTypes.string,
    /**
     * Sets href on attr of child `LeftInfo`.`PostprofileNameInfo`.`PosterprofileName`
     */
    profileLink: PropTypes.string
  }),
  /**
   * Sets content on body of `RightInfo`.`PostprofileNameInfo`.`PostTime`
   */
  postTime: PropTypes.string
}

const HeaderWrapper = styled.div`
  ${displayFlex}
  ${justifyContentSpaceBetween}
  padding: 12px 12px 0;
`

const defaultProps = {
  profileInfo: getFakeUser('fakeuser123', 'FEMALE'),
  postTime: 'Fake Post Time'
}

const Header = ({ profileInfo, postTime }) => {
  return (
    <HeaderWrapper>
      <LeftInfo profileInfo={profileInfo} postTime={postTime} />
      <RightInfo />
    </HeaderWrapper>
  )
}

Header.displayprofileName = 'Header'
Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
