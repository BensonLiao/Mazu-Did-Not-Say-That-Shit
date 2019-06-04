import { normalize, schema } from 'normalizr'
import { FEEDBACK, REACTIONS } from '../actions'
import { createPostData } from '../../utils/dataMock'

const postData = createPostData(2000)

// Define a users schema
const userSchema = new schema.Entity('users')

// Define your reactions schema
const reactSchema = new schema.Entity('reacts', {
  reactor: userSchema
})

// Define your comments schema
const commentSchema = new schema.Entity('comments', {
  commenter: userSchema
})

// Define your shares schema
const shareSchema = new schema.Entity('shares', {
  sharer: userSchema
})

// Define your feedback schema
const feedbackSchema = new schema.Entity('feedback', {
  reacts: [reactSchema],
  comments: [commentSchema],
  shares: [shareSchema]
})

// Define your post schema
const postSchema = new schema.Entity('post', {
  poster: userSchema,
  feedback: feedbackSchema
})

const normalizedFeedbackData = normalize(postData, postSchema)
console.log('normalizedFeedbackData', normalizedFeedbackData)

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
      return state.filter(r => r.user.id !== action.user.id)
    default:
      return state
  }
}

const reactionsOnTarget = (state = feedbackMock, action) => {
  switch (action.postOrCommentId) {
    case FEEDBACK.TARGET:
      return {
        ...state,
        reactions: reactions(state.reactions, action)
      }
    default: {
      return {
        ...state,
        comments: state.comments.map(c => {
          if (c.id === action.postOrCommentId) {
            return {
              ...c,
              reaction: reactions(c.reactions, action)
            }
          }
          return c
        })
      }
    }
  }
}

export default reactionsOnTarget
