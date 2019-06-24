import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import { displayFlex, alignCenter } from '../styles/page'
import { styledTooltipOverrideStyle } from '../styles/post'
import dataSummary from '../utils/dataSummary'
import StyledTooltip from './StyledTooltip'
import ReactionFirstIcon from './ReactionFirstIcon'
import ReactionSecondIcon from './ReactionSecondIcon'
import ReactionThirdIcon from './ReactionThirdIcon'

const CommentReactionSummaryWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
  ${styledTooltipOverrideStyle}
  background: ${cssVar.postBackgroundWhite};
  color: ${cssVar.commentPlaceholderColor};
  position: absolute;
  bottom: -12px;
  right: 2px;
  z-index: 9999;
  border-radius: 10px;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  font-size: 12px;
  font-weight: 400;
  padding: 2px 1px 2px 4px;
  cursor: pointer;
`

const CommentReactionCount = styled.span`
  color: #777d88;
  padding: 0 3px 0 2px;
  font-size: 12px;
  line-height: 16px;
  font-family: Microsoft JhengHei;
`

const CommentReactionSummary = ({ reactions }) => {
  const reactionsSummary = dataSummary.getCommentReactionSummary(reactions)
  const tooltipId = 'tip-for-comment-reaction'
  return (
    <CommentReactionSummaryWrapper
      data-for={tooltipId}
      data-tip={reactionsSummary.forTip}
    >
      <ReactionFirstIcon reactFeeling={reactionsSummary.topMost.feeling} />
      {reactionsSummary.secondMost.total > 0 && (
        <ReactionSecondIcon
          reactFeeling={reactionsSummary.secondMost.feeling}
        />
      )}
      {reactionsSummary.thirdMost.total > 0 && (
        <ReactionThirdIcon reactFeeling={reactionsSummary.thirdMost.feeling} />
      )}
      <CommentReactionCount>{reactionsSummary.forText}</CommentReactionCount>
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        html
        bg={cssVar.tooltipBackgroundBlack}
      />
    </CommentReactionSummaryWrapper>
  )
}

CommentReactionSummary.propTypes = {
  reactions: PropTypes.array.isRequired
}

export default CommentReactionSummary
