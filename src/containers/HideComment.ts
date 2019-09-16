import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { toggleCommentVisibility } from '../actions'
import MenuButton from '../components/MenuButton'

interface HideComment {
  commentId: string
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: HideComment) => ({
  onClick: () => dispatch(toggleCommentVisibility(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(MenuButton)
