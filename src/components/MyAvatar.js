import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const imgBaseUrl = require.context('../assets/img/', true)

const MyAvatarWrapper = styled.div`
  display: block;
`

const MyAvatarImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 6px;
  overflow: hidden;
`

const MyAvatar = ({ profileName, profileImg }) => {
  const imgUrl = imgBaseUrl(`./${profileImg}`)
  return (
    <MyAvatarWrapper>
      <MyAvatarImg src={imgUrl} alt={profileName} />
    </MyAvatarWrapper>
  )
}

MyAvatar.propTypes = {
  profileName: PropTypes.string,
  profileImg: PropTypes.string
}

MyAvatar.defaultProps = {
  profileName: '金乘五',
  profileImg: 'goldxfive.png'
}

export default MyAvatar
