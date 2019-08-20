import { connect } from 'react-redux'
import { addData } from '../actions'
import App from '../components/App'

const mapDispatchToProps = dispatch => ({
  initFetchData: data => dispatch(addData(data))
})

export default connect(
  null,
  mapDispatchToProps
)(App)
