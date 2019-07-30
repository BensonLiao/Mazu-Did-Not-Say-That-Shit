import React from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import styled from 'styled-components'
import { displayFlex, alignCenter } from '../styles'
import { styledTooltipOverrideStyle } from '../styles/post'
import appConst from '../utils/constants'
import dataSummary from '../utils/dataSummary'
import FeedbackCount from './FeedbackCount'
import ReactionTopMostIcon from './ReactionTopMostIcon'
import ReactionSecondMostIcon from './ReactionSecondMostIcon'
import ReactionThirdMostIcon from './ReactionThirdMostIcon'

const ReactionSummaryWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
  ${styledTooltipOverrideStyle}
  font-size: 14px;
  min-width: 100px;
`

const withComponent = appConst.component.DEFAULT

class ReactionSummary extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { reactions } = this.props
    if (!isEqual(reactions, nextProps.reactions)) {
      // console.log('Component updates!')
      return true
    }
    return false
  }

  render() {
    const { reactions } = this.props
    const reactionSummary = dataSummary.getReactionSummary(reactions)
    return reactionSummary === '' ? (
      <></>
    ) : (
      <ReactionSummaryWrapper>
        <ReactionTopMostIcon
          reactFeeling={reactionSummary.topMost.feeling}
          withComponent={withComponent}
          countSummary={reactionSummary.topMostTip}
        />
        {reactionSummary.secondMost.total > 0 && (
          <ReactionSecondMostIcon
            reactFeeling={reactionSummary.secondMost.feeling}
            withComponent={withComponent}
            countSummary={reactionSummary.secondMostTip}
          />
        )}
        {reactionSummary.thirdMost.total > 0 && (
          <ReactionThirdMostIcon
            reactFeeling={reactionSummary.thirdMost.feeling}
            withComponent={withComponent}
            countSummary={reactionSummary.thirdMostTip}
          />
        )}
        <FeedbackCount
          forText={reactionSummary.all.forText}
          forTip={reactionSummary.all.forTip}
        />
      </ReactionSummaryWrapper>
    )
  }
}

ReactionSummary.propTypes = {
  reactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.string,
        profileName: PropTypes.string,
        profileLink: PropTypes.string,
        profileImg: PropTypes.string
      }),
      feeling: PropTypes.string,
      targetId: PropTypes.string
    })
  )
}

ReactionSummary.defaultProps = {
  reactions: []
}

ReactionSummary.whyDidYouRender = true

export default ReactionSummary
