import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfileLink from './ProfileLink'
import PostInfo from './PostInfo'
import Thumbnail from './Thumbnail'
import { getFakeUser } from '../utils/dataMock'
import { displayFlex, alignCenter } from '../styles/page'

const propTypes = {
  profileInfo: PropTypes.shape({
    /**
     * For img src of `Thumbnail`
     */
    profileImg: PropTypes.string,
    /**
     * For content on body of child `ProfileLink`
     */
    profileName: PropTypes.string,
    /**
     * For href on attr of child `ProfileLink`
     */
    profileLink: PropTypes.string
  }),
  /**
   * For content on body of `PostInfo`.`PostTime`,
   * using UNIX timestamp, ref: https://en.wikipedia.org/wiki/Unix_time
   */
  postTime: PropTypes.number
}

const LeftInfoWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const InfoBlockWrapper = styled.div`
  dislpay: block;
`

const defaultProps = {
  profileInfo: getFakeUser('fakeuser123', 'FEMALE'),
  postTime: 1412743274
}

const LeftInfo = ({ profileInfo, postTime }) => {
  return (
    <LeftInfoWrapper>
      <Thumbnail
        profileName={profileInfo.profileName}
        profileImg={profileInfo.profileImg}
      />
      <InfoBlockWrapper>
        <ProfileLink
          profileName={profileInfo.profileName}
          profileLink={profileInfo.profileLink}
        />
        <PostInfo postTime={postTime} />
      </InfoBlockWrapper>
    </LeftInfoWrapper>
  )
}

LeftInfo.displayName = 'LeftInfo'
LeftInfo.propTypes = propTypes
LeftInfo.defaultProps = defaultProps

export default LeftInfo
