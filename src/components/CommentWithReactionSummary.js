import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import CommentPlaceholder from './CommentPlaceholder'
import CommentReactionSummary from './CommentReactionSummary'

const CommentWithReactionSummaryWrapper = styled.div`
  background-color: ${cssVar.commentTextBackground};
  color: ${cssVar.commentPlaceholderColorBlack};
  border-radius: 18px;
  line-height: 16px;
  padding: 8px 12px;
  position: relative;
`

const CommentWithReactionSummary = ({
  profileName,
  profileLink,
  isVerified,
  comment,
  reactions
}) => {
  return (
    <CommentWithReactionSummaryWrapper>
      <CommentPlaceholder
        profileName={profileName}
        profileLink={profileLink}
        isVerified={isVerified}
        comment={comment}
      />
      <CommentReactionSummary reactions={reactions} />
    </CommentWithReactionSummaryWrapper>
  )
}

CommentWithReactionSummary.propTypes = {
  profileName: PropTypes.string,
  profileLink: PropTypes.string,
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

CommentWithReactionSummary.defaultProps = {
  profileName: '台灣工具伯 汪進坪',
  profileLink: 'https://www.facebook.com/jingping.tw/',
  isVerified: true,
  comment: '這個我想，要查證比較難啦',
  reactions: []
}

export default CommentWithReactionSummary
