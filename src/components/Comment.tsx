import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayInlineBlock } from '../styles/page'
import CommentWithReactionSummary from './CommentWithReactionSummary'

const Container = styled.div`
  ${displayInlineBlock}
  vertical-align: middle;
  max-width: calc(100% - 22px);
  word-wrap: break-word;
`

const Comment = ({
  commentId,
  profileName,
  profileLink,
  isHidden,
  isVerified,
  saying,
  attachMedia,
  isHover,
  isYour
}) => {
  return (
    <Container id={commentId}>
      <CommentWithReactionSummary
        commentId={commentId}
        profileName={profileName}
        profileLink={profileLink}
        isVerified={isVerified}
        saying={saying}
        attachMedia={attachMedia}
        isHidden={isHidden}
        isHover={isHover}
        isYour={isYour}
      />
    </Container>
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
