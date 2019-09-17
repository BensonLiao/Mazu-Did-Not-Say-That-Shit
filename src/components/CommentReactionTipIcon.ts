import {
  reactionIconBaseStyle,
  reactionIconTipStyle,
  reactionIconTipWrapperStyle,
  reactionIconStyle
} from '../styles/post'
import { WITH_COMPONENT } from '../utils/constants'

const withComponent = WITH_COMPONENT.COMMENT

const CommentReactionTipIcon = ({ feeling, total }) => {
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
