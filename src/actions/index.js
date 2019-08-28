const REQUEST_LODA_DATA = 'REQUEST_LODA_DATA'
const LOAD_DATA = 'LOAD_DATA'

const requestLoadData = () => ({
  type: REQUEST_LODA_DATA,
  payload: {
    reacts: [],
    commentReacts: [],
    comments: [],
    shares: []
  }
})

const loadData = ({ entities }) => ({
  type: LOAD_DATA,
  payload: entities
})

const FEEDBACK = {
  REACT: 'REACT',
  UNDO_REACT: 'UNDO_REACT',
  COMMENT_REACT: 'COMMENT_REACT',
  UNDO_COMMENT_REACT: 'UNDO_COMMENT_REACT',
  COMMENT: 'COMMENT',
  UNDO_COMMENT: 'UNDO_COMMENT',
  UPDATE_COMMENT: 'UPDATE_COMMENT',
  COMMENT_VISIBILITY_TOGGLE: 'COMMECOMMENT_VISIBILITY_TOGGLENT_HIDE',
  SHARE: 'SHARE',
  TARGET: 'POST'
}

const REACTIONS = {
  LIKE: 'LIKE',
  HAHA: 'HAHA',
  LOVE: 'LOVE',
  WOW: 'WOW',
  SAD: 'SAD',
  ANGRY: 'ANGRY'
}

const feedbackReact = ({ entities }) => ({
  type: FEEDBACK.REACT,
  payload: entities
})

const undoReact = id => ({
  type: FEEDBACK.UNDO_REACT,
  payload: {
    id
  }
})

const feedbackReactToComment = ({ entities }) => ({
  type: FEEDBACK.COMMENT_REACT,
  payload: entities
})

const undoReactToComment = id => ({
  type: FEEDBACK.UNDO_COMMENT_REACT,
  payload: {
    id
  }
})

const feedbackComment = ({ entities }) => ({
  type: FEEDBACK.COMMENT,
  payload: entities
})

const undoComment = id => ({
  type: FEEDBACK.UNDO_COMMENT,
  payload: {
    id
  }
})

const updateComment = ({ id, saying }) => ({
  type: FEEDBACK.UPDATE_COMMENT,
  payload: {
    id,
    saying
  }
})

const toggleCommentVisibility = id => ({
  type: FEEDBACK.COMMENT_VISIBILITY_TOGGLE,
  payload: {
    id
  }
})

const feedbackShare = ({ entities }) => ({
  type: FEEDBACK.SHARE,
  payload: entities
})

module.exports = {
  REQUEST_LODA_DATA,
  LOAD_DATA,
  requestLoadData,
  loadData,
  FEEDBACK,
  REACTIONS,
  feedbackReact,
  undoReact,
  feedbackReactToComment,
  undoReactToComment,
  feedbackComment,
  undoComment,
  updateComment,
  toggleCommentVisibility,
  feedbackShare
}
