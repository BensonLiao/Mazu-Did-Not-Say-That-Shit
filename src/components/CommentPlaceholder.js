import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayInlineBlock } from '../styles/page'
import {
  imgBaseUrl,
  commentPlaceholderWrapperStyle,
  verifiedBadgeIconStyle
} from '../styles/post'
import ProfileLink from './ProfileLink'

const Container = styled.div`
  background-color: ${cssConst.commentTextBackground};
  color: ${cssConst.commentPlaceholderColorBlack};
  border-radius: 18px;
  padding: 8px 12px;
`

const CommentPlaceholderWrapper = styled.div`
  ${commentPlaceholderWrapperStyle}
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
  white-space: normal;
  word-break: break-word;
  word-wrap: break-word;
`

const CommentContent = styled.span`
  ${displayInlineBlock}
  margin-left: 4px;
  color: ${props =>
    (props.isHashTag ? cssConst.commentFeedbackButtonTextColor : 'inherit')};
  cursor: ${props => (props.isHashTag ? 'pointer' : 'text')};
`

const CommentMediaWrapper = styled.div`
  ${displayInlineBlock}
  width: 360px;
  height: 204px;
`

const CommentMediaImage = styled.img`
  width: 360px;
  height: 204px;
  object-fit: contain;
`

const VerifiedBadge = styled.i`
  ${verifiedBadgeIconStyle}
`

const getCommentContent = (
  separatedContent,
  profileName,
  profileLink,
  isVerified
) => {
  return separatedContent.map((c, idx) => {
    return (
      <CommentPlaceholderWrapper key={c.id}>
        {idx === 0 && (
          <ProfileLink profileName={profileName} profileLink={profileLink} />
        )}
        {idx === 0 && isVerified && <VerifiedBadge />}
        {c.content !== '' && (
          <CommentContent isHashTag={c.isHashTag}>{c.content}</CommentContent>
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

const CommentPlaceholder = ({
  profileName,
  profileLink,
  isVerified,
  separatedContent
}) => {
  return (
    <Container>
      {getCommentContent(
        separatedContent,
        profileName,
        profileLink,
        isVerified
      )}
    </Container>
  )
}

CommentPlaceholder.propTypes = {
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  isVerified: PropTypes.bool,
  separatedContent: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
      attachMedia: PropTypes.string,
      isHashTag: PropTypes.bool
    })
  )
}

CommentPlaceholder.defaultProps = {
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  isVerified: true,
  separatedContent: {}
}

export default CommentPlaceholder
