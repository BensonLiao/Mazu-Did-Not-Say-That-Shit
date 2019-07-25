import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid/v1'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex } from '../styles/page'
import {
  imgBaseUrl,
  commentPlaceholderWrapperStyle,
  verifiedBadgeIconStyle
} from '../styles/post'
import ProfileLink from './ProfileLink'

const CommentPlaceholderWrapper = styled.div`
  color: ${cssConst.commentPlaceholderColorBlack};
  font-size: ${cssConst.baseFontSize};
  ${commentPlaceholderWrapperStyle}
  ${displayFlex}
  white-space: normal;
  word-break: break-word;
  word-wrap: break-word;
`

const CommentContent = styled.span`
  display: block;
  font-size: ${cssConst.baseFontSize};
  margin-left: 4px;
  color: ${props => props.isHashTag
    ? cssConst.commentFeedbackButtonTextColor
    : 'inherit'};
  cursor: ${props => props.isHashTag ? 'pointer' : 'text'};
`

const CommentMediaWrapper = styled.div`
  width: 360px;
  height: 204px;
`

const CommentMediaImage = styled.img`
  display: block;
  width: 360px;
  height: 204px;
  object-fit: contain;
`

const VerifiedBadge = styled.i`
  ${verifiedBadgeIconStyle}
`

const getSeparateContent = saying => {
  const spaceRegex = /\s{2,}/g
  const breaker = '<breaker>'
  const breakedContent = saying.replace(spaceRegex, breaker).split(breaker)
  return breakedContent.map(content => {
    const isHashTag = content.startsWith('#')
    return { id: uuidv1(), content, attachMedia: '', isHashTag }
  })
}

const CommentPlaceholder = ({
  commentId,
  profileName,
  profileLink,
  isVerified,
  saying,
  attachMedia
}) => {
  const separatedContent = getSeparateContent(saying)
  if (attachMedia !== '') {
    separatedContent.push({
      id: uuidv1(),
      content: '',
      attachMedia,
      isHashTag: false
    })
  }
  return separatedContent.map((c, idx) => {
    return (
      <CommentPlaceholderWrapper key={c.id} id={commentId}>
        {idx === 0 && (
          <ProfileLink profileName={profileName} profileLink={profileLink} />
        )}
        {idx === 0 && isVerified && <VerifiedBadge />}
        {c.content !== '' && (
          <CommentContent isHashTag={c.isHashTag}>
            {c.content}
          </CommentContent>
        )}
        {c.attachMedia !== '' && (
          <CommentMediaWrapper>
            <CommentMediaImage
              src={imgBaseUrl(`./${c.attachMedia}`)}
              alt={c.attachMedia}
            />
          </CommentMediaWrapper>
        )}
      </CommentPlaceholderWrapper>
    )
  })
}

CommentPlaceholder.propTypes = {
  commentId: PropTypes.string,
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  isVerified: PropTypes.bool,
  saying: PropTypes.string,
  attachMedia: PropTypes.string
}

CommentPlaceholder.defaultProps = {
  commentId: 'commentId',
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  isVerified: true,
  saying: '這個我想，要查證比較難啦',
  attachMedia: ''
}

export default CommentPlaceholder
