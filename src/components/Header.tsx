import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RightInfo } from './RightInfo'
import LeftInfo from './LeftInfo'
import { getFakeUser } from '../utils/dataMock'
import { displayFlex, justifyContentSpaceBetween } from '../styles/page'

const propTypes = {
  profileInfo: PropTypes.shape({
    /**
     * For img src of `LeftInfo`
     */
    profileImg: PropTypes.string,
    /**
     * For content on body of child `LeftInfo`
     */
    profileName: PropTypes.string,
    /**
     * Sets href on attr of child `LeftInfo`
     */
    profileLink: PropTypes.string
  }),
  /**
   * Sets content on body of `RightInfo`.`PostprofileNameInfo`.`PostTime`,
   * using UNIX timestamp, ref: https://en.wikipedia.org/wiki/Unix_time
   */
  postTime: PropTypes.number
}

const HeaderWrapper = styled.div`
  ${displayFlex}
  ${justifyContentSpaceBetween}
  padding: 12px 12px 0;
`

const defaultProps = {
  profileInfo: getFakeUser('fakeuser123', 'FEMALE'),
  postTime: 1412743274
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
