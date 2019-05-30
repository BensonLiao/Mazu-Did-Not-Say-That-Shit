import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfileLink from './ProfileLink'

const propTypes = {
  /**
   * Sets content on body of child <a>
   */
  profileName: PropTypes.string,

  /**
   * Sets href on attr of child <a>
   */
  profileUrl: PropTypes.string
}

const ProfileInfoWrapper = styled.div`
  display: block;
`

const defaultProps = {
  profileName: 'Fake Profile Name',
  profileUrl: 'https://fake.profile.url'
}

const ProfileInfo = ({ profileName, profileUrl }) => {
  return (
    <ProfileInfoWrapper>
      <ProfileLink profileName={profileName} profileUrl={profileUrl} />
    </ProfileInfoWrapper>
  )
}

ProfileInfo.displayName = 'ProfileInfo'
ProfileInfo.propTypes = propTypes
ProfileInfo.defaultProps = defaultProps

export default ProfileInfo
