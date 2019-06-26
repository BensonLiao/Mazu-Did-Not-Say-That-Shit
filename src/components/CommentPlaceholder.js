import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import { displayFlex } from '../styles/page'
import {
  commentPlaceholderWrapperStyle,
  verifiedBadgeIconStyle
} from '../styles/post'
import ProfileLink from './ProfileLink'

const CommentPlaceholderWrapper = styled.div`
  color: ${cssVar.commentPlaceholderColorBlack};
  font-size: ${cssVar.baseFontSize};
  ${commentPlaceholderWrapperStyle}
  ${displayFlex}
`

const CommentContent = styled.span`
  display: block;
  font-size: ${cssVar.baseFontSize};
`

const VerifiedBadge = styled.i`
  ${verifiedBadgeIconStyle}
`

const CommentPlaceholder = ({ profileName, profileLink, comment }) => {
  const isVerified = true
  return (
    <CommentPlaceholderWrapper>
      <ProfileLink profileName={profileName} profileLink={profileLink} />
      {isVerified && <VerifiedBadge />}
      <CommentContent>{comment}</CommentContent>
    </CommentPlaceholderWrapper>
  )
}

CommentPlaceholder.propTypes = {
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  comment: PropTypes.string
}

CommentPlaceholder.defaultProps = {
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  comment: '這個我想，要查證比較難啦'
}

export default CommentPlaceholder
