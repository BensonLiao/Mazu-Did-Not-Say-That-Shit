import appConst from '../utils/constants'
import { getNormalizedData, ReactSchema } from '../utils/dataSchema'
import reactReducer from './react'
import { feedbackReact, undoReact, FEEDBACK, REACTIONS } from '../actions'

const userId = appConst.fakeUserId

const userId2 = `${appConst.fakeUserId}2`

const actionData = {
  id: appConst.fakeReactId,
  feeling: REACTIONS.LIKE,
  user: userId,
  targetId: FEEDBACK.TARGET
}

const normalizedActionData = getNormalizedData(actionData, ReactSchema)

describe('test reactReducer', () => {
  it('should handle initial state', () => {
    expect(reactReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle add to allIds', () => {
    expect(
      reactReducer(
        { byId: {}, allIds: [] },
        feedbackReact(normalizedActionData)
      ).allIds
    ).toEqual([actionData.id])
  })

  it('should handle add to byId', () => {
    expect(
      reactReducer(
        { byId: {}, allIds: [] },
        feedbackReact(normalizedActionData)
      ).byId
    ).toEqual({
      [actionData.id]: actionData
    })
  })

  it('should handle add more to byId', () => {
    expect(
      reactReducer(
        {
          byId: {
            afakeid: {
              id: `${appConst.fakeReactId}2`,
              feeling: REACTIONS.LIKE,
              user: userId2,
              targetId: FEEDBACK.TARGET
            }
          },
          allIds: []
        },
        feedbackReact(normalizedActionData)
      ).byId
    ).toEqual({
      afakeid: {
        id: `${appConst.fakeReactId}2`,
        feeling: REACTIONS.LIKE,
        user: userId2,
        targetId: FEEDBACK.TARGET
      },
      [actionData.id]: actionData
    })
  })

  it('should handle remove from allIds', () => {
    expect(
      reactReducer(
        { byId: {}, allIds: [actionData.id] },
        undoReact(actionData.id)
      ).allIds
    ).toEqual([])
  })

  it('should handle remove from byId', () => {
    expect(
      reactReducer(
        {
          byId: {
            [actionData.id]: actionData
          },
          allIds: []
        },
        undoReact(actionData.id)
      ).byId
    ).toEqual({})
  })
})
