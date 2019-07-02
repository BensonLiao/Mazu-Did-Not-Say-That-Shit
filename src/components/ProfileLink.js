import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const ProfileLinkWrapper = styled.div`
  display: block;
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

const defaultProps = {
  profileName: 'Fake Name',
  profileLink: 'https://fake.url'
}

const ProfileLink = ({ profileName, profileLink }) => {
  return (
    <ProfileLinkWrapper>
      <Link target="_blank" href={profileLink}>
        {profileName}
      </Link>
    </ProfileLinkWrapper>
  )
}

ProfileLink.displayName = 'ProfileLink'
ProfileLink.propTypes = propTypes
ProfileLink.defaultProps = defaultProps

export default ProfileLink
