import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Comment from './Comment'
import useMouseHover from '../hooks/useMouseHover'
import CommentFeedback from './CommentFeedback'
import appConst from '../utils/constants'
import { yourCommentBorderStyle } from '../styles/post'
import { StateProvider } from '../containers/StateProvider'

const CommentAndFeedbackWrapper = styled.div`
  position: relative;
  padding: 4px 12px 8px 12px;
  ${props => {
    return props.isYourComment ? yourCommentBorderStyle : ''
  }}
  ${props => {
    return props.isCommentHidden ? 'opacity: 0.5;' : ''
  }}
`

const CommentWithFeedback = ({ comment }) => {
  const [isHover, setIsHover] = useMouseHover()
  const onEnter = () => {
    setIsHover(true)
  }
  const onLeave = () => {
    setIsHover(false)
  }
  const [isHidden, setIsHidden] = useState(false)
  const toggleHidden = () => setIsHidden(!isHidden)
  const {
    id,
    reactId,
    user: { profileName, profileLink, profileImg, isVerified },
    saying,
    attachMedia,
    time
  } = comment
  const {
    you: { profileName: yourProfileName }
  } = appConst
  const isYourComment = yourProfileName === profileName
  const isFakeUser = profileName.startsWith('假帳號')
  const isCommentHidden = isHidden
  if (!isFakeUser) {
    console.log('comment', comment)
  }
  return isFakeUser ? (
    <></>
  ) : (
    <StateProvider initialState={{ isHidden, toggleHidden }}>
      <CommentAndFeedbackWrapper
        key={id}
        isYourComment={isYourComment}
        isCommentHidden={isCommentHidden}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Comment
          commentId={id}
          profileName={profileName}
          profileLink={profileLink}
          profileImg={profileImg}
          isVerified={isVerified}
          saying={saying}
          attachMedia={attachMedia}
          isHover={isHover}
        />
        <CommentFeedback time={time} targetId={id} reactId={reactId} />
      </CommentAndFeedbackWrapper>
    </StateProvider>
    // <CommentAndFeedbackWrapper
    //   key={id}
    //   isYourComment={isYourComment}
    //   isCommentHidden={isCommentHidden}
    // >
    //   <Comment
    //     commentId={id}
    //     profileName={profileName}
    //     profileLink={profileLink}
    //     profileImg={profileImg}
    //     isVerified={isVerified}
    //     saying={saying}
    //     attachMedia={attachMedia}
    //   />
    //   <CommentFeedback
    //     time={time}
    //     targetId={id}
    //     reactId={reactId}
    //     isHidden={isHidden}
    //   />
    // </CommentAndFeedbackWrapper>
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
