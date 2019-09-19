import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import appConst from '../utils/constants'
import cssConst from '../styles/constants'
import { displayInlineBlock, displayBlock } from '../styles/page'
import {
  styledTooltipOverrideStyle,
  commentReactionSummaryStyle,
  wideCommentReactionSummaryStyle
} from '../styles/post'
import dataSummary from '../utils/dataSummary'
import StyledTooltip from './StyledTooltip'
import ReactionTopMostIcon from './ReactionTopMostIcon'
import ReactionSecondMostIcon from './ReactionSecondMostIcon'
import ReactionThirdMostIcon from './ReactionThirdMostIcon'
import useCompNarrow from '../hooks/useCompNarrow'

const Container = styled.div`
  ${displayInlineBlock}
  ${styledTooltipOverrideStyle}
  background: ${cssConst.postBackgroundWhite};
  color: ${cssConst.commentPlaceholderColor};
  ${({ isNarrowComp }) => !isNarrowComp && wideCommentReactionSummaryStyle}
  ${({ isNarrowComp }) => isNarrowComp && commentReactionSummaryStyle}
  z-index: 4;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  font-size: 12px;
  font-weight: 400;
  padding: 2px 1px 2px 4px;
  cursor: pointer;
`

const CommentReactionSummaryWrapper = styled.span`
  ${displayBlock}
  position: relative;
  z-index: 0;
`

const CommentReactionCount = styled.span`
  ${displayInlineBlock}
  color: #777d88;
  padding: 0 3px 0 2px;
  white-space: nowrap;
  font-family: Microsoft JhengHei;
`

const CommentReactionSummary = ({ commentId, reactionIds, reactions }) => {
  const isNarrowComp = useCompNarrow(commentId)
  const reactionArray = reactionIds
    .map(id => reactions[id])
    .filter(react => react.targetId === commentId)
  const reactionSummary = dataSummary.getCommentReactionSummary(reactionArray)
  const tooltipId = 'tip-for-comment-reaction'
  const withComponent = appConst.component.COMMENT
  return reactionSummary === '' ? null : (
    <Container
      data-for={tooltipId}
      data-tip={reactionSummary.forTip}
      isNarrowComp={isNarrowComp}
    >
      <CommentReactionSummaryWrapper>
        <ReactionTopMostIcon
          reactFeeling={reactionSummary.topMost.feeling}
          withComponent={withComponent}
        />
        {reactionSummary.secondMost.total > 0 && (
          <ReactionSecondMostIcon
            reactFeeling={reactionSummary.secondMost.feeling}
            withComponent={withComponent}
          />
        )}
        {reactionSummary.thirdMost.total > 0 && (
          <ReactionThirdMostIcon
            reactFeeling={reactionSummary.thirdMost.feeling}
            withComponent={withComponent}
          />
        )}
        <CommentReactionCount>{reactionSummary.forText}</CommentReactionCount>
      </CommentReactionSummaryWrapper>
      <StyledTooltip id={tooltipId} effect="solid" html />
    </Container>
  )
}

CommentReactionSummary.propTypes = {
  commentId: PropTypes.string,
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

CommentReactionSummary.defaultProps = {
  commentId: 'commentId',
  reactionIds: [],
  reactions: {}
}

export default CommentReactionSummary
