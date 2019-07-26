import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import CommentPlaceholder from './CommentPlaceholder'
import DisplayCommentReactSummary from '../containers/DisplayCommentReactSummary'

const CommentWithReactionSummaryWrapper = styled.div`
  display: block;
  background-color: ${cssConst.commentTextBackground};
  color: ${cssConst.commentPlaceholderColorBlack};
  border-radius: 18px;
  line-height: 16px;
  padding: 8px 12px;
  position: relative;
`

const CommentWithReactionSummary = ({
  commentId,
  profileName,
  profileLink,
  isVerified,
  saying,
  attachMedia
}) => {
  return (
    <CommentWithReactionSummaryWrapper>
      <CommentPlaceholder
        commentId={commentId}
        profileName={profileName}
        profileLink={profileLink}
        isVerified={isVerified}
        saying={saying}
        attachMedia={attachMedia}
      />
      <DisplayCommentReactSummary commentId={commentId} />
      {/* {reactions.length > 0 && (
        <CommentReactionSummary reactions={reactions} commentId={commentId} />
      )} */}
    </CommentWithReactionSummaryWrapper>
  )
}

CommentWithReactionSummary.propTypes = {
  commentId: PropTypes.string,
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
  isVerified: PropTypes.bool,
  saying: PropTypes.string,
  attachMedia: PropTypes.string
}

CommentWithReactionSummary.defaultProps = {
  commentId: 'commentId',
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  isVerified: true,
  saying: '這個我想，要查證比較難啦',
  attachMedia: ''
}

export default CommentWithReactionSummary
