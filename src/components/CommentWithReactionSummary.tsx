import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid/v1'
import styled from 'styled-components'
import {
  displayBlock,
  displayInlineBlock,
  displayInlineFlex
} from '../styles/page'
import CommentPlaceholder from './CommentPlaceholder'
import DisplayCommentReactSummary from '../containers/DisplayCommentReactSummary'
import CommentMenuToggle from './CommentMenuToggle'

const Container = styled.div`
  ${displayBlock}
  vertical-align: middle;
`

interface StyledContainerProps {
  contentSeparated: boolean
  isHidden: boolean
}

const CommentWithReactionSummaryWrapper = styled.div<StyledContainerProps>`
  ${({ contentSeparated }) =>
    contentSeparated ? displayInlineBlock : displayInlineFlex}
  ${({ isHidden }) => isHidden && 'opacity: 0.5;'}
  line-height: 16px;
  position: relative;
  max-width: 100%;
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

const CommentWithReactionSummary = ({
  commentId,
  profileName,
  profileLink,
  isVerified,
  saying,
  attachMedia,
  isHidden,
  isHover,
  isYour
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
  const contentSeparated = separatedContent.length > 1
  return (
    <Container>
      <CommentWithReactionSummaryWrapper
        isHidden={isHidden}
        contentSeparated={contentSeparated}
      >
        <CommentPlaceholder
          // commentId={commentId}
          profileName={profileName}
          profileLink={profileLink}
          isVerified={isVerified}
          separatedContent={separatedContent}
        />
        <DisplayCommentReactSummary commentId={commentId} />
      </CommentWithReactionSummaryWrapper>
      <CommentMenuToggle
        commentId={commentId}
        isHover={isHover}
        isHidden={isHidden}
        isYour={isYour}
      />
    </Container>
  )
}

CommentWithReactionSummary.propTypes = {
  commentId: PropTypes.string,
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  isVerified: PropTypes.bool,
  saying: PropTypes.string,
  attachMedia: PropTypes.string,
  isHidden: PropTypes.bool,
  isHover: PropTypes.bool,
  isYour: PropTypes.bool
}

CommentWithReactionSummary.defaultProps = {
  commentId: 'commentId',
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  isVerified: true,
  saying: '這個我想，要查證比較難啦',
  attachMedia: '',
  isHidden: false,
  isHover: false,
  isYour: false
}

export default CommentWithReactionSummary
