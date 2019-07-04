import { connect } from 'react-redux'
import DataHelper from '../utils/dataHelper'
import ReactionSummary from '../components/ReactionSummary'

const mapStateToProps = state => {
  const dataHelper = new DataHelper(state)
  return {
    reactions: dataHelper.getReactArray()
  }
}

export default connect(mapStateToProps)(ReactionSummary)
