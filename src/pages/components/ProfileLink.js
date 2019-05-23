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
  profileUrl: PropTypes.string
}

const PosterContainer = styled.div`
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
  profileUrl: 'https://fake.url'
}

const ProfileLink = ({ profileName, profileUrl }) => {
  return (
    <PosterContainer>
      <Link target="_blank" href={profileUrl}>
        {profileName}
      </Link>
    </PosterContainer>
  )
}

ProfileLink.displayName = 'ProfileLink'
ProfileLink.propTypes = propTypes
ProfileLink.defaultProps = defaultProps

export default ProfileLink
