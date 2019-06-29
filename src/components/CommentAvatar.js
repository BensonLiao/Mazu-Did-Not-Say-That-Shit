import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { imgBaseUrl } from '../styles/post'

const CommentAvatarWrapper = styled.a`
  display: block;
`

const CommentAvatarImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 6px;
  overflow: hidden;
`

const CommentAvatar = ({ profileName, profileLink, profileImg }) => {
  const imgUrl = imgBaseUrl(`./${profileImg}`)
  return (
    <CommentAvatarWrapper href={profileLink}>
      <CommentAvatarImg src={imgUrl} alt={profileName} />
    </CommentAvatarWrapper>
  )
}

CommentAvatar.propTypes = {
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  profileImg: PropTypes.string
}

CommentAvatar.defaultProps = {
  profileName: '金乘五',
  profileLink: 'https://www.facebook.com/takeshikaneshirofanspage/',
  profileImg: 'goldxfive.png'
}

export default CommentAvatar
