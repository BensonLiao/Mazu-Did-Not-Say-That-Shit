import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex, alignCenter } from '../styles/page'
import CommentAvatar from './CommentAvatar'
import CommentWithReactionSummary from './CommentWithReactionSummary'

const CommentWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const Comment = ({
  profileName,
  profileLink,
  profileImg,
  isVerified,
  comment,
  reactions
}) => {
  return (
    <CommentWrapper>
      <CommentAvatar profileName={profileName} profileImg={profileImg} />
      <CommentWithReactionSummary
        profileName={profileName}
        profileLink={profileLink}
        isVerified={isVerified}
        comment={comment}
        reactions={reactions}
      />
    </CommentWrapper>
  )
}

Comment.propTypes = {
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  profileImg: PropTypes.string,
  isVerified: PropTypes.bool,
  comment: PropTypes.string,
  reactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.string,
        profileName: PropTypes.string,
        profileLink: PropTypes.string,
        profileImg: PropTypes.string
      }),
      feeling: PropTypes.string,
      postOrCommentId: PropTypes.string
    })
  )
}

Comment.defaultProps = {
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  profileImg: 'toolman.png',
  isVerified: true,
  comment: '這個我想，要查證比較難啦',
  reactions: []
}

export default Comment
