import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex } from '../styles/page'
import CommentAvatar from './CommentAvatar'
import CommentWithReactionSummary from './CommentWithReactionSummary'
import CommentRightMenu from './CommentRightMenu'
import useMouseHover from '../hooks/useMouseHover'

const CommentWrapper = styled.div`
  ${displayFlex}
`

const Comment = ({
  commentId,
  profileName,
  profileLink,
  profileImg,
  isVerified,
  saying,
  attachMedia
}) => {
  const [isHover, setIsHover] = useMouseHover()
  const onEnter = () => {
    setIsHover(true)
  }
  const onLeave = () => {
    setIsHover(false)
  }
  return (
    <CommentWrapper onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <CommentAvatar profileName={profileName} profileImg={profileImg} />
      <CommentWithReactionSummary
        commentId={commentId}
        profileName={profileName}
        profileLink={profileLink}
        isVerified={isVerified}
        saying={saying}
        attachMedia={attachMedia}
      />
      {isHover && <CommentRightMenu menuComp={<div>menu</div>} />}
    </CommentWrapper>
  )
}

Comment.propTypes = {
  commentId: PropTypes.string,
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  profileImg: PropTypes.string,
  isVerified: PropTypes.bool,
  saying: PropTypes.string,
  attachMedia: PropTypes.string
}

Comment.defaultProps = {
  commentId: 'fakecommentid',
  saying: '這個我想，要查證比較難啦',
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  profileImg: 'toolman.png',
  isVerified: true,
  attachMedia: ''
}

export default Comment
