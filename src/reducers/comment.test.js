import appConst from '../utils/constants'
import { getNormalizedData, CommentSchema } from '../utils/dataSchema'
import commentReducer from './comment'
import { FEEDBACK, feedbackComment } from '../actions'

const actionData = {
  id: appConst.fakeCommentId,
  saying: 'fakecomment',
  user: appConst.fakeUserId,
  targetId: FEEDBACK.TARGET
}

const normalizedActionData = getNormalizedData(actionData, CommentSchema)

describe('test commentReducer', () => {
  it('should handle initial state', () => {
    expect(commentReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle allIds', () => {
    expect(
      commentReducer(
        { byId: {}, allIds: [] },
        feedbackComment(normalizedActionData)
      ).allIds
    ).toEqual([actionData.id])
  })

  it('should handle byId', () => {
    expect(
      commentReducer(
        { byId: {}, allIds: [] },
        feedbackComment(normalizedActionData)
      ).byId
    ).toEqual({
      [actionData.id]: actionData
    })
  })
})
