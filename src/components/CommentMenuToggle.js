import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import menuToggle from '../assets/img/fb-emojis-new.png'
import useCompVisible from '../hooks/useCompVisible'
import CommentMenu from './CommentMenu'

const MenuToggleWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 22px;
  line-height: 16px;
  padding: 8px 12px;
`

const MenuToggle = styled.div`
  vertical-align: middle;
  background-image: url(${menuToggle});
  background-repeat: no-repeat;
  background-size: 97px 1200px;
  background-position: -83px -1120px;
  width: 12px;
  height: 12px;
  cursor: pointer;
  &:hover {
    background-position: -83px -1094px;
  }
  &:active {
    background-position: -83px -1107px;
  }
`

const CommentMenuToggle = ({ commentId, isHover }) => {
  const { ref, isCompVisible } = useCompVisible(false)
  const toggleOrHover = isHover || isCompVisible
  return toggleOrHover ? (
    <MenuToggleWrapper>
      <MenuToggle ref={ref} />
      {isCompVisible && <CommentMenu commentId={commentId} />}
    </MenuToggleWrapper>
  ) : (
    <></>
  )
}

CommentMenuToggle.propTypes = {
  commentId: PropTypes.string,
  isHover: PropTypes.bool
}

CommentMenuToggle.defaultProps = {
  commentId: 'fakecommentid',
  isHover: true
}

export default CommentMenuToggle
