import {
  reactionIconBaseStyle,
  reactionIconTipStyle,
  reactionIconTipWrapperStyle,
  reactionIconStyle
} from '../styles/post'

const CommentReactionTipIcon = ({ feeling, total }) => {
  return `<span style='${reactionIconTipWrapperStyle}'>
    <i 
      style='
      ${reactionIconBaseStyle}
      ${reactionIconTipStyle}
      ${reactionIconStyle(feeling)}'
    >
    </i>
    ${total}
    </span>
  `
}

export default CommentReactionTipIcon
