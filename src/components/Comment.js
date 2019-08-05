import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex } from '../styles/page'
import CommentAvatar from './CommentAvatar'
import CommentWithReactionSummary from './CommentWithReactionSummary'
import CommentMenuToggle from './CommentMenuToggle'

const CommentWithMenuWrapper = styled.div`
  ${displayFlex}
`

const CommentWrapper = styled.span`
  ${displayFlex}
  ${({ isHidden }) => isHidden && 'opacity: 0.5;'}
`

const Comment = ({
  commentId,
  profileName,
  profileLink,
  profileImg,
  isHidden,
  isVerified,
  saying,
  attachMedia,
  isHover,
  isYour
}) => {
  return (
    <CommentWithMenuWrapper>
      <CommentWrapper isHidden={isHidden}>
        <CommentAvatar profileName={profileName} profileImg={profileImg} />
        <CommentWithReactionSummary
          commentId={commentId}
          profileName={profileName}
          profileLink={profileLink}
          isVerified={isVerified}
          saying={saying}
          attachMedia={attachMedia}
        />
      </CommentWrapper>
      <CommentMenuToggle
        commentId={commentId}
        isHover={isHover}
        isHidden={isHidden}
        isYour={isYour}
      />
    </CommentWithMenuWrapper>
  )
}

Comment.propTypes = {
  commentId: PropTypes.string,
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  profileImg: PropTypes.string,
  isVerified: PropTypes.bool,
  isHidden: PropTypes.bool,
  saying: PropTypes.string,
  attachMedia: PropTypes.string,
  isHover: PropTypes.bool,
  isYour: PropTypes.bool
}

Comment.defaultProps = {
  commentId: 'fakecommentid',
  saying: '這個我想，要查證比較難啦',
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  profileImg: 'toolman.png',
  isVerified: true,
  isHidden: false,
  attachMedia: '',
  isHover: false,
  isYour: false
}

export default Comment
