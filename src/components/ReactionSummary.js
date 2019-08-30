import React from 'react'
import PropTypes from 'prop-types'
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

const ReactionSummary = ({ isFetching, reactionIds, reactions }) => {
  if (isFetching) return <div>fetching data...</div>
  const reactionArray = reactionIds.map(id => reactions[id])
  const reactionSummary = dataSummary.getReactionSummary(reactionArray)
  return reactionIds.length > 0 && (
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

ReactionSummary.propTypes = {
  isFetching: PropTypes.bool,
  reactionIds: PropTypes.arrayOf(PropTypes.string),
  reactions: PropTypes.shape({
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
}

ReactionSummary.defaultProps = {
  isFetching: false,
  reactionIds: [],
  reactions: {}
}

export default ReactionSummary
