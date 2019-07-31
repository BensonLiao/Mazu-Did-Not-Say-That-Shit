import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import menuToggle from '../assets/img/fb-emojis-new.png'
import useCompVisible from '../hooks/useCompVisible'

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

const CommentMenuToggle = ({ menuComp }) => {
  const { ref, isCompVisible } = useCompVisible(false)
  return (
    <MenuToggleWrapper>
      <MenuToggle ref={ref}>{isCompVisible && menuComp}</MenuToggle>
    </MenuToggleWrapper>
  )
}

CommentMenuToggle.propTypes = {
  menuComp: PropTypes.element.isRequired
}

export default CommentMenuToggle
