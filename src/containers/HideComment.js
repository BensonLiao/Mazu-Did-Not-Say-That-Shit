import { connect } from 'react-redux'
import { toggleCommentVisibility } from '../actions'
import MenuButton from '../components/MenuButton'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleCommentVisibility(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(MenuButton)
