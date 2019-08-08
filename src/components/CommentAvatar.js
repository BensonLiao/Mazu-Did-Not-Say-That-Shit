import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { imgBaseUrl } from '../styles/post'
import appConst from '../utils/constants'

const Container = styled.div`
  float: left;
`

const CommentAvatarWrapper = styled.div`
  position: relative;
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

const CommentAvatar = ({
  profileName,
  profileLink,
  profileImg,
  withComponent
}) => {
  const imgUrl = imgBaseUrl(`./${profileImg}`)
  const renderTag = withComponent === appConst.component.COMMENT ? 'a' : 'span'
  return (
    <Container>
      <CommentAvatarWrapper href={profileLink} as={renderTag}>
        <CommentAvatarImg src={imgUrl} alt={profileName} />
      </CommentAvatarWrapper>
    </Container>
  )
}

CommentAvatar.propTypes = {
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  profileImg: PropTypes.string,
  withComponent: PropTypes.string
}

CommentAvatar.defaultProps = {
  profileName: '金乘五',
  profileLink: 'https://www.facebook.com/takeshikaneshirofanspage/',
  profileImg: 'goldxfive.png',
  withComponent: appConst.component.COMMENT
}

export default CommentAvatar
