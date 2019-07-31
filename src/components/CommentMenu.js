import React from 'react'
import styled from 'styled-components'
import menu from '../assets/img/menu.png'
import { menuItemHideComment } from '../styles/menu'

const CommentMenuWrapper = styled.div`
  right: 0px;
  position: absolute;
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
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`

const MenuItem = styled.li`
  list-style-type: none;
  overflow: hidden;
  white-space: nowrap;
  display: list-item;
  text-align: -webkit-match-parent;
  cursor: pointer;
  ${props =>
    (props.isHideComment && !props.isDeleteComment ? menuItemHideComment : '')}
`

const CommentMenu = () => {
  return (
    <CommentMenuWrapper>
      <MenuWrapper>
        <MenuPanel>
          <Menu>
            <MenuItem isHideComment>隱藏留言</MenuItem>
            <MenuItem>尋求支援或檢舉留言</MenuItem>
          </Menu>
        </MenuPanel>
      </MenuWrapper>
      <CommentMenuWrapperTriangle />
    </CommentMenuWrapper>
  )
}

export default CommentMenu
