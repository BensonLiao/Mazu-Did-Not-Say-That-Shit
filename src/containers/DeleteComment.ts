import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { undoComment } from '../actions'
import MenuButton from '../components/MenuButton'

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  onClick: () => dispatch(undoComment(ownProps.commentId))
})

export default connect(
  null,
  mapDispatchToProps
)(MenuButton)
