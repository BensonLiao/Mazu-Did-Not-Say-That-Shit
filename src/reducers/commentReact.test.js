import appConst from '../utils/constants'
import { getNormalizedData, CommentReactSchema } from '../utils/dataSchema'
import commentReactReducer from './commentReact'
import {
  feedbackReactToComment,
  undoReactToComment,
  REACTIONS
} from '../actions'

const userId = appConst.fakeUserId

const userId2 = `${appConst.fakeUserId}2`

const commenId = appConst.fakeCommentId

const actionData = {
  id: appConst.fakeReactId,
  feeling: REACTIONS.LIKE,
  user: userId,
  targetId: commenId
}

const normalizedActionData = getNormalizedData(actionData, CommentReactSchema)

describe('test commentReactReducer', () => {
  it('should handle initial state', () => {
    expect(commentReactReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle add to allIds', () => {
    expect(
      commentReactReducer(
        { byId: {}, allIds: [] },
        feedbackReactToComment(normalizedActionData)
      ).allIds
    ).toEqual([actionData.id])
  })

  it('should handle add to byId', () => {
    expect(
      commentReactReducer(
        { byId: {}, allIds: [] },
        feedbackReactToComment(normalizedActionData)
      ).byId
    ).toEqual({
      [actionData.id]: actionData
    })
  })

  it('should handle add more to byId', () => {
    expect(
      commentReactReducer(
        {
          byId: {
            afakeid: {
              id: `${appConst.fakeReactId}2`,
              feeling: REACTIONS.LIKE,
              user: userId2,
              targetId: commenId
            }
          },
          allIds: []
        },
        feedbackReactToComment(normalizedActionData)
      ).byId
    ).toEqual({
      afakeid: {
        id: `${appConst.fakeReactId}2`,
        feeling: REACTIONS.LIKE,
        user: userId2,
        targetId: commenId
      },
      [actionData.id]: actionData
    })
  })

  it('should handle remove from allIds', () => {
    expect(
      commentReactReducer(
        { byId: {}, allIds: [actionData.id] },
        undoReactToComment(actionData.id)
      ).allIds
    ).toEqual([])
  })

  it('should handle remove from byId', () => {
    expect(
      commentReactReducer(
        {
          byId: {
            [actionData.id]: actionData
          },
          allIds: []
        },
        undoReactToComment(actionData.id)
      ).byId
    ).toEqual({})
  })
})
