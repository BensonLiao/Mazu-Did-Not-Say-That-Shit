import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex, alignYAxisCenter } from '../styles/page'
import cssConst from '../styles/constants'

const MenuItemButtonWrapper = styled.div`
  ${displayFlex}
  ${alignYAxisCenter}
  ${props => props.btnIcon}
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
  cursor: pointer;
`

const MenuItemButton = styled.span`
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  line-height: 22px;
`

const MenuButton = ({ btnIcon, btnText, onClick }) => {
  return (
    <MenuItemButtonWrapper btnIcon={btnIcon} onClick={onClick}>
      <MenuItemButton>{btnText}</MenuItemButton>
    </MenuItemButtonWrapper>
  )
}

MenuButton.propTypes = {
  btnIcon: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func
}

MenuButton.defaultProps = {
  btnIcon: '',
  btnText: '選單按鈕',
  onClick: () => {
    console.log('clicked!')
  }
}

export default MenuButton
