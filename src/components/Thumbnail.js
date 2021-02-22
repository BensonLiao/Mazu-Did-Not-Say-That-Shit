import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { imgBaseUrl } from '../styles/post'

const ThumbnailWrapper = styled.div`
  display: block;
`

const ThumbnailImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`

const Thumbnail = ({ profileName, profileImg }) => {
  const imgUrl = imgBaseUrl(`./${profileImg}`).default
  return (
    <ThumbnailWrapper>
      <ThumbnailImg src={imgUrl} alt={profileName} />
    </ThumbnailWrapper>
  )
}

Thumbnail.propTypes = {
  profileName: PropTypes.string,
  profileImg: PropTypes.string
}

Thumbnail.defaultProps = {
  profileName: '媽祖',
  profileImg: 'mazu.png'
}

export default Thumbnail
