import { connect } from 'react-redux'
// import DataHelper from '../utils/dataHelper'
import { getReactArray } from '../reducers/selector'
import ReactionSummary from '../components/ReactionSummary'

const mapStateToProps = state => {
  // console.log('state', state)
  // const dataHelper = new DataHelper(state)
  return {
    reactions: getReactArray(state)
  }
}

export default connect(mapStateToProps)(ReactionSummary)
