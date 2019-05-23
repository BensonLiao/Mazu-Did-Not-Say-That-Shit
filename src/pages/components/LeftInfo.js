import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfileInfo from './ProfileInfo'
import PostInfo from './PostInfo'
import Thumbnail from './Thumbnail'
import { displayFlex, alignCenter } from '../styles'

const propTypes = {
  /**
   * Sets content on body of child `ProfileInfo`.`ProfileLink`
   */
  profileName: PropTypes.string,

  /**
   * Sets href on attr of child `ProfileInfo`.`ProfileLink`
   */
  profileUrl: PropTypes.string,

  /**
   * Sets content on body of `PostInfo`.`PostTime`
   */
  postTime: PropTypes.string
}

const LeftInfoContainer = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const InfoBlockContainer = styled.div`
  dislpay: block;
`

const defaultProps = {
  profileName: 'Fake Profile Name',
  profileUrl: 'https://fake.profile.url',
  postTime: 'Fake Post Time'
}

const LeftInfo = ({ profileName, profileUrl, postTime }) => {
  return (
    <LeftInfoContainer>
      <Thumbnail />
      <InfoBlockContainer>
        <ProfileInfo profileName={profileName} profileUrl={profileUrl} />
        <PostInfo postTime={postTime} />
      </InfoBlockContainer>
    </LeftInfoContainer>
  )
}

LeftInfo.displayName = 'LeftInfo'
LeftInfo.propTypes = propTypes
LeftInfo.defaultProps = defaultProps

export default LeftInfo
