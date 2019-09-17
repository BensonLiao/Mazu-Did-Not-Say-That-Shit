import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { undoComment } from '../actions'
import MenuButton, { MenuButtonProps } from '../components/MenuButton'

interface DeleteComment extends MenuButtonProps {
  commentId: string
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: DeleteComment) => ({
  onClick: () => dispatch(undoComment(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(MenuButton)
