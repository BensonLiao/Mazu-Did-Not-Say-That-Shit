import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid/v1'
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
  white-space: normal;
  word-break: break-word;
  word-wrap: break-word;
`

const CommentContent = styled.span`
  display: block;
  font-size: ${cssVar.baseFontSize};
  margin-left: 4px;
`

const VerifiedBadge = styled.i`
  ${verifiedBadgeIconStyle}
`

const getSeparateContent = saying => {
  const spaceRegex = /\s{2,}/g
  const breaker = '<breaker>'
  const breakedContent = saying.replace(spaceRegex, breaker).split(breaker)
  return breakedContent.map(content => {
    return { id: uuidv1(), content }
  })
}

const CommentPlaceholder = ({
  profileName,
  profileLink,
  isVerified,
  saying
}) => {
  const separatedContent = getSeparateContent(saying)
  return separatedContent.map((c, idx) => {
    return (
      <CommentPlaceholderWrapper>
        {idx === 0 && isVerified && <VerifiedBadge />}
        {idx === 0 && (
          <ProfileLink profileName={profileName} profileLink={profileLink} />
        )}
        <CommentContent key={c.id}>{c.content}</CommentContent>
        <br />
      </CommentPlaceholderWrapper>
    )
  })
}

CommentPlaceholder.propTypes = {
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  isVerified: PropTypes.bool,
  saying: PropTypes.string
}

CommentPlaceholder.defaultProps = {
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  isVerified: true,
  saying: '這個我想，要查證比較難啦'
}

export default CommentPlaceholder
