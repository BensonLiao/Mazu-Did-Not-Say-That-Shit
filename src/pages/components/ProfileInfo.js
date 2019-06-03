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
  profileLink: PropTypes.string
}

const ProfileInfoWrapper = styled.div`
  display: block;
`

const defaultProps = {
  profileName: 'Fake Profile Name',
  profileLink: 'https://fake.profile.url'
}

const ProfileInfo = ({ profileName, profileLink }) => {
  return (
    <ProfileInfoWrapper>
      <ProfileLink profileName={profileName} profileLink={profileLink} />
    </ProfileInfoWrapper>
  )
}

ProfileInfo.displayName = 'ProfileInfo'
ProfileInfo.propTypes = propTypes
ProfileInfo.defaultProps = defaultProps

export default ProfileInfo
