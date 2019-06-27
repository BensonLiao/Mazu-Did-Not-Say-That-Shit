import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import RelevantCommentToggle from './RelevantCommentToggle'
import MyComment from './MyComment'
import Comment from './Comment'
import CommentFeedback from './CommentFeedback'

const CommentSectionWrapper = styled.div`
  margin: 0 12px;
  border-top: ${cssVar.postSectionBorder};
`

const CommentSection = ({ comments }) => {
  return (
    <CommentSectionWrapper>
      <RelevantCommentToggle />
      <MyComment />
      {comments.map(comment => {
        return (
          <React.Fragment key={comment.id}>
            <Comment comment={comment} />
            <CommentFeedback time={comment.time} />
          </React.Fragment>
        )
      })}
    </CommentSectionWrapper>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      comment: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.string,
        profileName: PropTypes.string,
        profileLink: PropTypes.string,
        profileImg: PropTypes.string,
        isVerified: PropTypes.bool
      }),
      postOrCommentId: PropTypes.string,
      reactions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          user: PropTypes.shape({
            id: PropTypes.string,
            profileName: PropTypes.string,
            profileLink: PropTypes.string,
            profileImg: PropTypes.string,
            isVerified: PropTypes.bool
          }),
          feeling: PropTypes.string,
          postOrCommentId: PropTypes.string
        })
      )
    })
  )
}

CommentSection.defaultProps = {
  comments: [
    {
      id: 'fakecommentid',
      comment: '這個我想，要查證比較難啦',
      user: {
        profileName: '台灣工具伯 汪進坪',
        profileLink: 'https://www.facebook.com/jingping.tw/',
        profileImg: 'toolman.png',
        isVerified: true
      },
      postOrCommentId: 'POST',
      reactions: []
    }
  ]
}

export default CommentSection
