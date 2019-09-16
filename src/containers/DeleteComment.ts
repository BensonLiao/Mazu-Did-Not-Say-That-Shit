import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { undoComment } from '../actions'
import MenuButton from '../components/MenuButton'

interface DeleteComment {
  commentId: string
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: DeleteComment) => ({
  onClick: () => dispatch(undoComment(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(MenuButton)
