import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { toggleCommentVisibility } from '../actions'
import MenuButton, { MenuButtonProps } from '../components/MenuButton'

interface HideComment extends MenuButtonProps {
  commentId: string
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: HideComment) => ({
  onClick: () => dispatch(toggleCommentVisibility(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(MenuButton)
