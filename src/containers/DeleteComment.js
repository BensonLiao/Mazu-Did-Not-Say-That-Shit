import { connect } from 'react-redux'
import { undoComment } from '../actions'
import MenuButton from '../components/MenuButton'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(undoComment(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(MenuButton)
