import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useMouseHover from '../hooks/useMouseHover'
import appConst from '../utils/constants'
import { yourCommentBorderStyle } from '../styles/post'
import { useContextState } from '../containers/StateProvider'
import CommentAvatar from './CommentAvatar'
import Comment from './Comment'
import MyComment from './MyComment'
import CommentFeedback from './CommentFeedback'

interface StyledContainerProps {
  isYour: boolean
}

const CommentAndFeedbackWrapper = styled.div<StyledContainerProps>`
  position: relative;
  padding: 4px 12px 8px 12px;
  ${({ isYour }) => isYour && yourCommentBorderStyle}
`

const CommentWithFeedback = ({ comment }) => {
  const { inEditMode } = useContextState() as any
  const [isHover, setIsHover] = useMouseHover() as any
  const onEnter = () => {
    setIsHover(true)
  }
  const onLeave = () => {
    setIsHover(false)
  }
  const {
    id,
    reactId,
    user: { profileName, profileLink, profileImg, isVerified },
    isHidden,
    saying,
    attachMedia,
    time
  } = comment
  const {
    you: { profileName: yourProfileName }
  } = appConst
  const isYour = yourProfileName === profileName
  const isFakeUser = profileName.startsWith('假帳號')
  if (isFakeUser) {
    return null
  }
  return inEditMode ? (
    <>
      <MyComment
        inEditMode={inEditMode}
        // toggleEditMode={toggleEditMode}
        commentId={id}
        saying={saying}
      />
      <CommentFeedback inEditMode={inEditMode} />
    </>
  ) : (
    <CommentAndFeedbackWrapper
      key={id}
      isYour={isYour}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <CommentAvatar
        profileName={profileName}
        profileImg={profileImg}
        isHidden={isHidden}
      />
      <Comment
        commentId={id}
        profileName={profileName}
        profileLink={profileLink}
        profileImg={profileImg}
        isVerified={isVerified}
        saying={saying}
        attachMedia={attachMedia}
        isHidden={isHidden}
        isHover={isHover}
        isYour={isYour}
      />
      <CommentFeedback
        time={time}
        targetId={id}
        reactId={reactId}
        isHidden={isHidden}
      />
    </CommentAndFeedbackWrapper>
  )
}

CommentWithFeedback.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    reactId: PropTypes.string,
    user: PropTypes.shape({
      profileName: PropTypes.string,
      profileLink: PropTypes.string,
      profileImg: PropTypes.string,
      isVerified: PropTypes.bool
    }),
    isHidden: PropTypes.bool,
    saying: PropTypes.string,
    attachMedia: PropTypes.string,
    time: PropTypes.string
  })
}

CommentWithFeedback.defaultProps = {
  comment: {
    id: 'fakecommentid',
    reactId: 'POST',
    user: {
      profileName: '台灣工具伯 汪進坪',
      profileLink: 'https://www.facebook.com/jingping.tw/',
      profileImg: 'toolman.png',
      isVerified: true
    },
    isHidden: false,
    saying: '這個我想，要查證比較難啦',
    attachMedia: '',
    time: '1天'
  }
}

export default CommentWithFeedback
