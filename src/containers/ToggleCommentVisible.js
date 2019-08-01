import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleCommentVisibility } from '../actions'
import MenuButton from '../components/MenuButton'

const MenuItemButtonAction = ({ toggleCommentVisible }) => {
  return <MenuButton onClick={toggleCommentVisible} />
}

MenuItemButtonAction.propTypes = {
  toggleCommentVisible: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCommentVisible: () =>
    dispatch(toggleCommentVisibility(ownProps.commentId))
})

export default connect(mapDispatchToProps)(MenuItemButtonAction)
