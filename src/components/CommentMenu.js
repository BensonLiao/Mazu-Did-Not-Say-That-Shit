import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex, alignYAxisCenter } from '../styles/page'
import cssConst from '../styles/constants'
import { menuItemHideComment } from '../styles/menu'
import useCompWidth from '../hooks/useCompWidth'
import menu from '../assets/img/menu-new.png'

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

const MenuItemButtonWrapper = styled.a`
  ${displayFlex}
  ${alignYAxisCenter}
  ${props =>
    (props.isHideComment && !props.isDeleteComment ? menuItemHideComment : '')}
  border: solid ${cssConst.toggleMenuItemBorderColor};
  border-width: 1px 0;
  color: ${cssConst.toggleMenuItemTextColor};
  &:hover {
    background-color: ${cssConst.toggleMenuItemHoverBackground};
    border-color: ${cssConst.toggleMenuItemBorderHoverColor};
    color: ${cssConst.toggleMenuItemTextHoverColor};
  }
  outline: none;
  text-decoration: none;
  padding: 0 12px;
  max-width: 300px;
`

const MenuItemButton = styled.span`
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  line-height: 22px;
`

const CommentMenu = ({ commentId }) => {
  const compWidth = useCompWidth(commentId)
  return (
    <CommentMenuWrapper commmentWidth={compWidth}>
      <MenuWrapper>
        <MenuPanel>
          <Menu>
            <MenuItem>
              <MenuItemButtonWrapper isHideComment href="#">
                <MenuItemButton>隱藏留言</MenuItemButton>
              </MenuItemButtonWrapper>
            </MenuItem>
            <MenuItem>
              <MenuItemButtonWrapper href="#">
                <MenuItemButton>尋求支援或檢舉留言</MenuItemButton>
              </MenuItemButtonWrapper>
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
