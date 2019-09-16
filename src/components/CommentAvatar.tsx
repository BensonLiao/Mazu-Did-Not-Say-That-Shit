import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { imgBaseUrl } from '../styles/post'
import { WITH_COMPONENT } from '../utils/constants'

interface StyledContainerProps {
  isHidden: boolean
}

const Container = styled.div<StyledContainerProps>`
  float: left;
  ${({ isHidden }) => isHidden && 'opacity: 0.5;'}
`

interface StyledWrapperProps {
  as?: 'a' | 'div' | 'span'
  href: string
}

const CommentAvatarWrapper = styled.div<StyledWrapperProps>`
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
interface CommentAvatarProps {
  profileName?: string
  profileLink?: string
  profileImg?: string
  withComponent?: WITH_COMPONENT
  isHidden?: boolean
}

const CommentAvatar: React.FC<CommentAvatarProps> = ({
  profileName = '金乘五',
  profileLink = 'https://www.facebook.com/takeshikaneshirofanspage/',
  profileImg = 'goldxfive.png',
  withComponent = WITH_COMPONENT.COMMENT,
  isHidden = false
}) => {
  const imgUrl = imgBaseUrl(`./${profileImg}`)
  const renderTag = withComponent === WITH_COMPONENT.COMMENT ? 'a' : 'span'
  return (
    <Container isHidden={isHidden}>
      <CommentAvatarWrapper href={profileLink} as={renderTag}>
        <CommentAvatarImg src={imgUrl} alt={profileName} />
      </CommentAvatarWrapper>
    </Container>
  )
}

// CommentAvatar.propTypes = {
//   profileName: PropTypes.string,
//   profileLink: PropTypes.string,
//   profileImg: PropTypes.string,
//   withComponent: PropTypes.string,
//   isHidden: PropTypes.bool
// }

// CommentAvatar.defaultProps = {
//   profileName: '金乘五',
//   profileLink: 'https://www.facebook.com/takeshikaneshirofanspage/',
//   profileImg: 'goldxfive.png',
//   withComponent: appConst.component.COMMENT,
//   isHidden: false
// }

export default CommentAvatar
