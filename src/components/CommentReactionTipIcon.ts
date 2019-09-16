import {
  reactionIconBaseStyle,
  reactionIconTipStyle,
  reactionIconTipWrapperStyle,
  reactionIconStyle
} from '../styles/post'

const CommentReactionTipIcon = ({ feeling, total }) => {
  const withComponent = 'comment'
  return `<span style='${reactionIconTipWrapperStyle}'>
    <i 
      style='
      ${reactionIconBaseStyle}
      ${reactionIconTipStyle}
      ${reactionIconStyle(feeling, withComponent)}'
    >
    </i>
    ${total}
    </span>
  `
}

export default CommentReactionTipIcon
