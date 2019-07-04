import reactReducer from './react'
import { FEEDBACK, REACTIONS } from '../actions'

const userInfo = {
  id: 'fakeuserid',
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png'
}

const userInfo2 = {
  id: 'fakeuserid2',
  profileName: '我是假的2!',
  profileLink: 'https://www.facebook.com/test2/',
  profileImg: 'test2.png'
}

const feedbackReactAction = {
  type: FEEDBACK.REACT,
  payload: {
    id: 'fakereactid',
    feeling: REACTIONS.LIKE,
    user: userInfo,
    targetId: FEEDBACK.TARGET
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

  it('should handle add more to byId', () => {
    expect(
      reactReducer(
        {
          byId: {
            afakeid: {
              id: 'fakereactid2',
              feeling: REACTIONS.LIKE,
              user: userInfo2,
              targetId: FEEDBACK.TARGET
            }
          },
          allIds: []
        },
        feedbackReactAction
      ).byId
    ).toEqual({
      afakeid: {
        id: 'fakereactid2',
        feeling: REACTIONS.LIKE,
        user: userInfo2,
        targetId: FEEDBACK.TARGET
      },
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
