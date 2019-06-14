import reactReducer from './react'
import { FEEDBACK, REACTIONS } from '../actions'

const userInfo = {
  id: 'fakeuserid',
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png'
}

const feedbackReactAction = {
  type: FEEDBACK.REACT,
  payload: {
    id: 'fakereactid',
    reaction: REACTIONS.LIKE,
    user: userInfo,
    postOrCommentId: FEEDBACK.TARGET
  }
}

const undoReactAction = {
  type: FEEDBACK.UNDO_REACT,
  payload: {
    id: 'fakereactid'
  }
}

describe('test reactReducer', () => {
  it('should handle initial state', () => {
    expect(reactReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle add to allIds', () => {
    expect(
      reactReducer({ byId: {}, allIds: [] }, feedbackReactAction).allIds
    ).toEqual([feedbackReactAction.payload.id])
  })

  it('should handle add to byId', () => {
    expect(
      reactReducer({ byId: {}, allIds: [] }, feedbackReactAction).byId
    ).toEqual({
      [feedbackReactAction.payload.id]: feedbackReactAction.payload
    })
  })

  it('should handle remove from allIds', () => {
    expect(
      reactReducer(
        { byId: {}, allIds: [feedbackReactAction.payload.id] },
        undoReactAction
      ).allIds
    ).toEqual([])
  })

  it('should handle remove from byId', () => {
    expect(
      reactReducer(
        {
          byId: {
            [feedbackReactAction.payload.id]: feedbackReactAction.payload
          },
          allIds: []
        },
        undoReactAction
      ).byId
    ).toEqual({})
  })
})
