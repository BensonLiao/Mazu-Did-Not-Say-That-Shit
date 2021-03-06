import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import menuToggle from '../assets/img/fb-emojis-new.png'
import { displayInlineBlock } from '../styles/page'
import useCompVisible from '../hooks/useCompVisible'
import CommentMenu from './CommentMenu'
import StyledTooltip from './StyledTooltip'

const MenuToggleWrapper = styled.div`
  ${displayInlineBlock}
  position: absolute;
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

const tooltipId = 'tip-for-comment-menu-toggle'

const CommentMenuToggle = ({ commentId, isHover, isHidden, isYour }) => {
  const { ref, isCompVisible } = useCompVisible(false)
  const toggleOrHover = isHover || isCompVisible
  const tipText = isYour ? '編輯或刪除' : '隱藏或檢舉這篇留言'
  return toggleOrHover ? (
    <MenuToggleWrapper>
      <MenuToggle ref={ref} data-for={tooltipId} data-tip={tipText} />
      <StyledTooltip id={tooltipId} effect="solid" />
      {isCompVisible && (
        <CommentMenu
          commentId={commentId}
          isHidden={isHidden}
          isYour={isYour}
        />
      )}
    </MenuToggleWrapper>
  ) : null
}

CommentMenuToggle.propTypes = {
  commentId: PropTypes.string,
  isHover: PropTypes.bool,
  isHidden: PropTypes.bool,
  isYour: PropTypes.bool
}

CommentMenuToggle.defaultProps = {
  commentId: 'fakecommentid',
  isHover: true,
  isHidden: false,
  isYour: false
}

export default CommentMenuToggle
