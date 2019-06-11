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
    reactor: userInfo,
    postOrCommentId: FEEDBACK.TARGET
  }
}

describe('test reactReducer', () => {
  it('should handle initial state', () => {
    expect(reactReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle allIds', () => {
    expect(
      reactReducer({ byId: {}, allIds: [] }, feedbackReactAction).allIds
    ).toEqual([feedbackReactAction.payload.id])
  })

  it('should handle byId', () => {
    expect(
      reactReducer({ byId: {}, allIds: [] }, feedbackReactAction).byId
    ).toEqual({
      [feedbackReactAction.payload.id]: feedbackReactAction.payload
    })
  })
})
