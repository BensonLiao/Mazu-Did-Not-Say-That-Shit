import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import RelevantCommentToggle from './RelevantCommentToggle'
import MyComment from './MyComment'
import Comment from './Comment'
import CommentFeedback from './CommentFeedback'
import appConst from '../utils/constants'
import { yourCommentBorderStyle } from '../styles/post'

const CommentSectionWrapper = styled.div`
  border-top: ${cssConst.postSectionBorder};
`

const CommentAndFeedbackWrapper = styled.div`
  position: relative;
  padding: 4px 12px 8px 12px;
  ${props => {
    return props.isYourComment ? yourCommentBorderStyle : ''
  }}
`

const CommentSection = ({ comments }) => {
  return (
    <CommentSectionWrapper>
      <RelevantCommentToggle />
      <MyComment />
      {comments.map(comment => {
        const {
          id,
          reactId,
          saying,
          attachMedia,
          reactions,
          time,
          user: { profileName, profileLink, profileImg, isVerified }
        } = comment
        const {
          you: { profileName: yourProfileName }
        } = appConst
        const isYourComment = yourProfileName === profileName
        return (
          <CommentAndFeedbackWrapper key={id} isYourComment={isYourComment}>
            <Comment
              commentId={id}
              profileName={profileName}
              profileLink={profileLink}
              profileImg={profileImg}
              isVerified={isVerified}
              saying={saying}
              attachMedia={attachMedia}
              reactions={reactions}
            />
            <CommentFeedback time={time} targetId={id} reactId={reactId} />
          </CommentAndFeedbackWrapper>
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
      targetId: PropTypes.string,
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
          targetId: PropTypes.string
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
      targetId: 'POST',
      reactions: []
    }
  ]
}

export default CommentSection
