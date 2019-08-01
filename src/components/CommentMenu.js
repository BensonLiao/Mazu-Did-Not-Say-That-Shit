import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { menuItemHideComment } from '../styles/menu'
import useCompWidth from '../hooks/useCompWidth'
import menu from '../assets/img/menu-new.png'
import MenuButton from './MenuButton'

const CommentMenuWrapper = styled.div`
  position: absolute;
  left: ${props => props.commmentWidth - 31}px;
  z-index: 5;
`

const CommentMenuWrapperTriangle = styled.i`
  background-image: url(${menu});
  background-repeat: no-repeat;
  background-size: 500px 296px;
  background-position: -400px -245px;
  height: 8px;
  top: 2px;
  width: 16px;
  left: 100%;
  margin-left: -28px;
  overflow: hidden;
  position: absolute;
`

const MenuWrapper = styled.div`
  padding-top: 10px;
  margin: -1px 0 30px;
  font-size: 13px;
`

const MenuPanel = styled.div`
  border-radius: 3px;
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
`

const Menu = styled.ul`
  padding: 5px 0;
  margin: 0;
  list-style-type: disc;
`

const MenuItem = styled.li`
  list-style-type: none;
  overflow: hidden;
  white-space: nowrap;
  display: list-item;
  text-align: -webkit-match-parent;
`

const CommentMenu = ({ commentId }) => {
  const compWidth = useCompWidth(commentId)
  return (
    <CommentMenuWrapper commmentWidth={compWidth}>
      <MenuWrapper>
        <MenuPanel>
          <Menu>
            <MenuItem>
              <MenuButton btnIcon={menuItemHideComment} btnText="隱藏留言" />
            </MenuItem>
            <MenuItem>
              <MenuButton btnText="尋求支援或檢舉留言" />
            </MenuItem>
          </Menu>
        </MenuPanel>
      </MenuWrapper>
      <CommentMenuWrapperTriangle />
    </CommentMenuWrapper>
  )
}

CommentMenu.propTypes = {
  commentId: PropTypes.string
}

CommentMenu.defaultProps = {
  commentId: 'fakecommentid'
}

export default CommentMenu