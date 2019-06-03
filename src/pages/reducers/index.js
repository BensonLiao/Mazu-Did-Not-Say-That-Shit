import { FEEDBACK, REACTIONS, FEEDBACK_TARGET } from '../actions'
import {
  createReactions,
  createComments,
  createShares
} from '../../utils/dataMock'

const feedbackMock = {
  reactions: createReactions(2000),
  comments: createComments(),
  shares: createShares()
}

const reactions = (state = [], action) => {
  const { reaction } = action
  switch (reaction) {
    case REACTIONS.LIKE:
      return [
        ...state,
        {
          reaction,
          user: action.user
        }
      ]
    case REACTIONS.HAHA:
      return [
        ...state,
        {
          reaction,
          user: action.user
        }
      ]
    case REACTIONS.LOVE:
      return [
        ...state,
        {
          reaction,
          user: action.user
        }
      ]
    case FEEDBACK.UNDO_REACT:
      return state.filter(react => react.user.id !== action.user.id)
    default:
      return state
  }
}

const reactionsOnTarget = (state = feedbackMock, action) => {
  switch (action.postOrCommentId) {
    case FEEDBACK_TARGET.POST:
      return {
        ...state,
        reactions: reactions(state.reactions, action)
      }
    default: {
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.postOrCommentId) {
            return {
              ...comment,
              reaction: reactions(comment.reactions, action)
            }
          }
          return comment
        })
      }
    }
  }
}

export default reactionsOnTarget
